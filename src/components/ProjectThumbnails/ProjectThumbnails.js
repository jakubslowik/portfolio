import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useWindowWidth } from '../../hooks';
import { ProjectInfo } from '../../components';
import {
  NoItemsFoundMessage,
  ProjectInfoMobileContainer,
  ProjectThumbnailsList,
  ProjectThumbnailsListIndicator,
  ProjectThumbnailsListIndicatorDot,
  ProjectThumbnailsListItem,
} from './subcomponents';
import { ProjectsContext } from '../SectionProjects/SectionProjects';
import {
  ProjectInfoDescription,
  ProjectInfoTechnologies,
  ProjectInfoTechnology,
  ProjectInfoTechnologyIcon,
  ProjectInfoTechnologyText,
  ProjectInfoTitle,
  ProjectInfoType,
} from '../ProjectInfo/subcomponents';
import theme from '../../config/theme';


const StyledWrapper = styled.div`
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0 6rem 6rem 6rem;
  overflow-x: auto;
  overflow-y: hidden;
  @media(max-width: ${theme.breakpoints.l}){
    margin: 0 0 6rem 0;
  }
  @media(max-width: ${theme.breakpoints.m}){
    justify-content: flex-start;  
    align-items: flex-end;
    padding: 50px 0 0 0;
    margin: 0;
    min-height: auto;
  }
`;

const ProjectThumbnails = () => {

  const { projects, activeProjectTypeFilter, setActiveProjectDetails, areProjectDetailsOpened, setProjectDetailsOpened } = useContext(ProjectsContext);

  // "allTechnologies" is an array containing technologies icons, brand colors and names gathered from the central
  // source (a Prismic.io repository). That data is then used in project info, being filtered appropriately.
  // We do it that way, because for now, the level of data nesting we need, couldn't be done in Prismic.io yet.
  const [allTechnologies, setAllTechnologies] = useState([]);

  // used in mobile list
  const [projectInViewIndex, setProjectInViewIndex] = useState(0);
  const windowWidth = useWindowWidth();
  const breakpoint_m = theme.breakpoints.m.replace('px', '');

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  let projectThumbnailHoverTimeout;
  // the active project details is selected (but panel is not yet opened) right after hovering over the thumbnail,
  // so that the image that it contains is prefetched by the browser (gatsby-image is in view).
  // That way, it is (in most cases) already loaded (on desktops) after toggling the details panel.
  const handleProjectThumbnailOnMouseOver = debounce(project => {
    // we clear timer, so that we would not have many callbacks queued unnecessary.
    // this condition ensures, that after we open the details panel and yet manage to hover over another thumbnail
    // after it (when the panel animation didn't end yet), we won't change the project that we want to display
    // in the last moment.
    window.clearTimeout(projectThumbnailHoverTimeout);
    if (!areProjectDetailsOpened) {
      projectThumbnailHoverTimeout = window.setTimeout(() => {
        // "technologies_tools" array is project specific list containing names of technologies and tools (only names),
        // that was used in a project. "allTechnologies" array is a list containing technologies data with names, icons
        // and brand color of particular technology (eg. HTML5, CSS3, React etc.).
        // "technologies" array is a filtered "allTechnologies" array, so that it only contains project specific icons
        // and tool brand colors.
        const technologies = allTechnologies
          .filter(technology =>
            project.technologies_tools.map(each => each.name).includes(technology.name.text));
        setActiveProjectDetails({ ...project, technologies });
      }, 400);
    }
  }, 100);

  // it is like handleProjectThumbnailOnMouseOver, but it does not have timeout and toggles the project details panel.
  // It also clears the timeout.
  const handleProjectThumbnailOnClick = (project) => {
    window.clearTimeout(projectThumbnailHoverTimeout);
    const technologies = allTechnologies
      .filter(technology =>
        project.technologies_tools.map(each => each.name).includes(technology.name.text));
    setActiveProjectDetails({ ...project, technologies });
    setProjectDetailsOpened(true);
  };

  // function used when  clicking on the project dot
  const scrollToItemWithIndex = (index, projectsCount = 1) => {
    const projectThumbnailsList = document.getElementById('projectThumbnailsList');
    const projectWidth = document.getElementById('projectThumbnailsList').scrollWidth / projectsCount;
    const distanceBetweenActiveAndClicked = ((index - projectInViewIndex) * projectWidth);

    // check if native smooth scrolling is supported
    const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    if (isSmoothScrollSupported) {
      projectThumbnailsList.scrollLeft = index * projectWidth;
    } else { // workaround
      const interval = 1;
      const step = 10 * Math.abs(index - projectInViewIndex);
      sideScroll(projectThumbnailsList, interval, distanceBetweenActiveAndClicked, step);
    }
  };

  // scroll-behaviour smooth scrolling is not broadly supported, so there is some workaround
  function sideScroll(element, interval, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += distance >= 0 ? step : -step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= Math.abs(distance)) {
        window.clearInterval(slideTimer);
      }
    }, interval);
  }

  const handleProjectThumbnailInViewChange = (inView, i) => inView && setProjectInViewIndex(i);

  // helper function to calculate optimal list indicator dot size/clickable area,
  // to ensure that the dots are not overflowing. It takes the filtered projects list
  // and uses windowWidth to
  // The dot clickable area should not be bigger than 24x24px.
  //
  // eg. for window width 400px and 22 elements function returns 6px for dot size:
  //      400/22 = 18.181818...
  //      18.181818 / 3 = 6.060606...
  //      Math.floor(6.060606) = 6
  //      6px - dot size
  //      18px - clickable area (we get this by multiplying function call by 3)
  const calculateListIndicatorDotSize = filteredProjectsLength => {
    const maxClickableArea = 24;
    return Math.min(Math.floor((windowWidth / filteredProjectsLength) / 3), Math.floor(maxClickableArea / 3));
  };

  // when we change the project type filter, we disable mobile list scrolling,
  // set the preview to first item and enable smooth scrolling again
  useEffect(() => {
    document.getElementById('projectThumbnailsList').classList.add('no-smooth-scroll');
    scrollToItemWithIndex(0);
    document.getElementById('projectThumbnailsList').classList.remove('no-smooth-scroll');
  }, [activeProjectTypeFilter]);

  return (
    <StaticQuery
      query={prismicTechnologyToolQuery}
      render={data => {
        allTechnologies.length === 0 && setAllTechnologies(data.allPrismicTechnologyTool.edges.map(edge => edge.node.data));
        const filteredProjects = projects
          .filter(edge => edge.node.data.type === activeProjectTypeFilter || activeProjectTypeFilter === 'All')
          .sort((edge1, edge2) => edge1.node.data.order - edge2.node.data.order);
        return (
          <StyledWrapper>
            {(windowWidth <= breakpoint_m) &&
            <ProjectThumbnailsListIndicator>
              {filteredProjects.map((project, i) =>
                <ProjectThumbnailsListIndicatorDot
                  key={'indicator dot' + i}
                  clickableAreaSize={3 * calculateListIndicatorDotSize(filteredProjects.length)}
                  dotSize={calculateListIndicatorDotSize(filteredProjects.length)}
                  onClick={() => scrollToItemWithIndex(i, filteredProjects.length)}
                  isActive={projectInViewIndex === i}
                  dotColor={filteredProjects[projectInViewIndex] && filteredProjects[projectInViewIndex].node.data.color_primary}
                />,
              )}
            </ProjectThumbnailsListIndicator>}
            <ProjectThumbnailsList id="projectThumbnailsList">
              {filteredProjects.length > 0
                ?
                filteredProjects.map((edge, i) => {
                  const project = edge.node.data;
                  const { title, type, description_short, color_primary, thumbnail, technologies_tools } = project;
                  return (
                    <InView
                      key={'projectThumbnails InView' + i}
                      threshold={0.55}
                      onChange={inView => handleProjectThumbnailInViewChange(inView, i)}>
                      <ProjectThumbnailsListItem
                        index={i}
                        key={title + i}
                        onClick={() => handleProjectThumbnailOnClick(project)}
                        onMouseOver={() => handleProjectThumbnailOnMouseOver(project)}
                        isInViewAndShouldAnimate={projectInViewIndex === i}
                      >
                        <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={thumbnail.alt}/>
                        {(windowWidth > breakpoint_m) &&
                        <ProjectInfo
                          project={project}
                          allTechnologies={allTechnologies}
                        />}
                      </ProjectThumbnailsListItem>
                      {(windowWidth <= breakpoint_m && projectInViewIndex === i) ?
                        <ProjectInfoMobileContainer>
                          <ProjectInfoTitle
                            borderColor={color_primary} //TODO
                            onClick={() => !areProjectDetailsOpened && handleProjectThumbnailOnClick(project)}
                          >
                            {title.text}
                          </ProjectInfoTitle>
                          <ProjectInfoType>
                            {type}
                          </ProjectInfoType>
                          <ProjectInfoDescription>
                            {description_short.text}
                          </ProjectInfoDescription>
                          <ProjectInfoTechnologies>
                            {allTechnologies
                              .filter(technology => technologies_tools.map(each => each.name).includes(technology.name.text))
                              .map((technology, i) => (
                                <ProjectInfoTechnology key={technology.name.text + i}>
                                  <ProjectInfoTechnologyIcon
                                    url={technology.logo.url}
                                    colorBrand={technology.color_brand}/>
                                  <ProjectInfoTechnologyText isLong={technology.name.text.length > 10}>
                                    {technology.name.text}
                                  </ProjectInfoTechnologyText>
                                </ProjectInfoTechnology>),
                              )}
                          </ProjectInfoTechnologies>
                        </ProjectInfoMobileContainer>
                        :
                        windowWidth <= breakpoint_m && <div style={{ height: '45vh' }}/>
                      }
                    </InView>
                  );
                })
                :
                <NoItemsFoundMessage>
                  There are no projects of this type added yet.
                </NoItemsFoundMessage>
              }
            </ProjectThumbnailsList>
          </StyledWrapper>
        );
      }}
    />
  );
};

const prismicTechnologyToolQuery = graphql`
  query{
    allPrismicTechnologyTool {
      edges {
        node {
          data {
            name{
              text
            }
            color_brand
            logo{
              url
              alt
            }
          }
        }
      }
    }
  }
`;

export default ProjectThumbnails;