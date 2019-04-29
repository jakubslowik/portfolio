import React, { useContext, useEffect, useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize, FiXCircle } from 'react-icons/fi';
import { FaInfoCircle } from 'react-icons/fa';
import { X } from '../common';
import {
  ProjectInfoDescription,
  ProjectInfoTechnologies,
  ProjectInfoTechnology,
  ProjectInfoTechnologyIcon,
  ProjectInfoTechnologyText,
} from '../ProjectInfo/subcomponents';

import { ProjectThumbnailsListIndicatorDot } from '../ProjectThumbnails/subcomponents';

import {
  ComputerMockup,
  ExternalLink,
  FullscreenIcon,
  ProjectImage,
  ProjectImageChangeButtonNext,
  ProjectImageChangeButtonPrev,
  ProjectInfoDetailsContainer,
  ProjectInfoTitleDetails,
  ProjectInfoTypeDetails,
  ProjectThumbnailsListIndicatorDetails,
  ToggleInfoIcon,
} from './subcomponents';

import { useWindowWidth } from '../../hooks';
import { ProjectsContext } from '../SectionProjects/SectionProjects';
import theme from '../../config/theme';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(145deg, #ffffff ,#808e9b);
  z-index: 1;
  transition: ${props => props.areProjectDetailsOpened ? '0.4s' : '0.25s'};
  opacity:  ${props => props.areProjectDetailsOpened ? '1' : '0'};
  transform:  ${props => props.areProjectDetailsOpened ? 'scale(1)' : 'scale(0.0001)'};
  transform-origin: top center;
`;

const ProjectDetailsPanel = () => {

  const { activeProjectDetails: project, areProjectDetailsOpened, setProjectDetailsOpened, setProjectTypeFilter } = useContext(ProjectsContext);
  const [isFullscreenActive, setFullscreenActive] = useState(false);
  const [isProjectInfoVisible, setProjectInfoVisible] = useState(false);
  const [activeProjectImageIndex, setActiveProjectImageIndex] = useState(0);

  let windowWidth = useWindowWidth();
  const breakpoint_l = theme.breakpoints.l.replace('px', '');

  const handleFullscreenToggle = () => {
    setProjectInfoVisible(false);
    if (windowWidth > breakpoint_l) {
      isFullscreenActive && setProjectInfoVisible(true);
    }
    setFullscreenActive(state => !state);
  };

  const handleProjectTypeClick = () => {
    setProjectDetailsOpened(false);
    setProjectTypeFilter(project.type);
  };

  // reset scroll position of project image when opening/closing project details panel
  useEffect(() => {
    document.getElementById('projectImage').scrollTop = 0;
    setActiveProjectImageIndex(0);
    if (windowWidth < breakpoint_l) {
      setProjectInfoVisible(false);
    }
  }, [areProjectDetailsOpened]);

  // turn the project info panel on when upscaling the window width (it should always be visible on larger screens)
  useEffect(() => {
    if (windowWidth > breakpoint_l) {
      !isFullscreenActive && setProjectInfoVisible(true);
    }
  }, [windowWidth]);


  return (
    <StyledWrapper
      areProjectDetailsOpened={areProjectDetailsOpened}
    >
      <ProjectInfoDetailsContainer
        isProjectInfoVisible={isProjectInfoVisible}
      >
        <ProjectInfoTitleDetails borderColor={project.color_primary}>
          {project.title.text}
          {windowWidth < breakpoint_l && <FiXCircle onClick={() => setProjectInfoVisible(false)}/>}
        </ProjectInfoTitleDetails>
        <ScrollLink
          to={'projects'}
          spy={false}
          smooth={true}
          delay={250}
          offset={50}
          duration={500}
        >
          <ProjectInfoTypeDetails
            title="Show projects of this type"
            onClick={handleProjectTypeClick}
          >
            {project.type}
          </ProjectInfoTypeDetails>
        </ScrollLink>
        <ProjectInfoDescription>
          {project.description.text}
        </ProjectInfoDescription>
        <h5 style={{ marginTop: '3rem', letterSpacing: '0.06rem', marginBottom: '0.5rem' }}>TECHNOLOGIES & TOOLS</h5>
        <ProjectInfoTechnologies style={{ marginBottom: theme.rhythm(1.5) }}>
          {project.technologies.map((technology, i) => (
            <ProjectInfoTechnology key={technology.name.text + i}>
              <ProjectInfoTechnologyIcon
                isBigger={true}
                url={technology.logo.url}
                colorBrand={technology.color_brand}/>
              <ProjectInfoTechnologyText
                hasRevealInverted={true}
                isLong={technology.name.text.length > 10}>
                {technology.name.text}
              </ProjectInfoTechnologyText>
            </ProjectInfoTechnology>),
          )}
        </ProjectInfoTechnologies>
        {project.github && <ExternalLink
          type="github"
          href={project.github.url}
          iconColor={project.color_primary}
          iconColorHover={project.color_primary_light}
        />}
        {project.behance && <ExternalLink
          type="behance"
          href={project.behance.url}
          iconColor={project.color_primary}
          iconColorHover={project.color_primary_light}
        />}
        {project.live && <ExternalLink
          type="live"
          href={project.live.url}
          iconColor={project.color_primary}
          iconColorHover={project.color_primary_light}
        />}
      </ProjectInfoDetailsContainer>
      <ComputerMockup
        isMockupVisible={true}
        isFullscreenActive={isFullscreenActive}
      >
        <ProjectImage
          id="projectImage"
          windowWidth={windowWidth}
          isScrollable={project.images[0].image.dimensions.height > 1080}
          isFullscreenActive={isFullscreenActive}
          isMockupVisible={true}
          areProjectImagesDotsVisible={project.images.length > 1}
          scrollColor={project.color_primary}
          onClick={handleFullscreenToggle}
        >
          {project.images.map((image, i) => {
            const isImageVisible = activeProjectImageIndex === i;
            return (
              <Img
                key={project.title.text + 'image' + i}
                style={{ display: `${isImageVisible ? 'block' : 'none'}` }}
                fluid={image.image.localFile.childImageSharp.fluid}
                alt={`${project.title.text} image ${ i + 1 }`}
              />);
          })}
        </ProjectImage>
      </ComputerMockup>
      <FullscreenIcon
        isFullscreenActive={isFullscreenActive}
        isDark={!isFullscreenActive}
        onClick={handleFullscreenToggle}
      >
        {isFullscreenActive ? <FiMinimize/> : <FiMaximize/>}
      </FullscreenIcon>
      {!isFullscreenActive &&
      <ToggleInfoIcon
        colorPrimary={project.color_primary}
        isProjectInfoVisible={isProjectInfoVisible}
        isDark={!isProjectInfoVisible}
        onClick={() => setProjectInfoVisible(state => !state)}
      >
        <FaInfoCircle/> <span>{isProjectInfoVisible ? 'Hide' : 'Show'} info</span>
      </ToggleInfoIcon>}
      <X isDark={!isFullscreenActive}
         onClick={() => {
           setProjectDetailsOpened(false);
           setFullscreenActive(false);
           setProjectInfoVisible(true);
         }}
      />
      {areProjectDetailsOpened && project.images.length > 1 && !isFullscreenActive &&
      <ProjectThumbnailsListIndicatorDetails>
        {project.images.map((image, i) =>
          <ProjectThumbnailsListIndicatorDot
            key={'project image indicator dot' + i}
            clickableAreaSize={18}
            dotSize={6}
            onClick={() => setActiveProjectImageIndex(i)}
            isActive={activeProjectImageIndex === i}
            dotColor={project.color_primary}
          />,
        )}
      </ProjectThumbnailsListIndicatorDetails>
      }
      {areProjectDetailsOpened && project.images[activeProjectImageIndex - 1] && !isFullscreenActive &&
      <ProjectImageChangeButtonPrev colorPrimary={project.color_primary}>
        <FiChevronLeft
          onClick={() => setActiveProjectImageIndex(activeProjectImageIndex - 1)}>
        </FiChevronLeft>
      </ProjectImageChangeButtonPrev>}
      {areProjectDetailsOpened && project.images[activeProjectImageIndex + 1] && !isFullscreenActive &&
      <ProjectImageChangeButtonNext colorPrimary={project.color_primary}>
        <FiChevronRight
          onClick={() => setActiveProjectImageIndex(activeProjectImageIndex + 1)}>
        </FiChevronRight>
      </ProjectImageChangeButtonNext>}
    </StyledWrapper>
  );
};

export default ProjectDetailsPanel;
