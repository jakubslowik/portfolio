import React, { useContext, useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import { useTrail } from 'react-spring';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../common';
import { SectionTitleProjects } from './subcomponents';
import { ProjectDetailsPanel, ProjectsFilter, ProjectThumbnails } from '../../components';
import { GlobalContext } from '../../pages/index';
import theme from '../../config/theme';


const StyledWrapper = styled.section`
  position: relative;
  padding: ${theme.rhythm(4)} 0 1px 0 ;
  overflow: hidden;
  background: #f5f5f5;
  z-index: 1;
  @media(max-width: ${theme.breakpoints.s}){
    padding: ${theme.rhythm(3)} 0 1px 0 ;
  }
`;

export const ProjectsContext = React.createContext(null);

const SectionProjects = ({ id }) => {

  const { areProjectDetailsOpened, setProjectDetailsOpened, setCurrentSection } = useContext(GlobalContext);
  const [projects, setProjects] = useState([]);
  const [activeProjectTypeFilter, setProjectTypeFilter] = useState('All');
  const [activeProjectDetails, setActiveProjectDetails] = useState({});

  const projectDetailsPanelSpring = useTrail(1, {
    transform: areProjectDetailsOpened ? 'scale(1.0)' : 'scale(0.001)',
    opacity: areProjectDetailsOpened ? 1 : 1,
    config: { mass: 5, tension: 3500, friction: 300 },
  });
  const handleIntersection = inView => inView && setCurrentSection('projects');


  useEffect(() => {

  },[areProjectDetailsOpened])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        activeProjectTypeFilter,
        setProjectTypeFilter,
        activeProjectDetails,
        setActiveProjectDetails,
        areProjectDetailsOpened,
        setProjectDetailsOpened,
      }}>
      <StaticQuery
        query={prismicProjectQuery}
        render={(data) => {
          setProjects(data.allPrismicProject.edges);
          return (
            <>
              <InView onChange={handleIntersection} threshold={0.3}>
                <StyledWrapper id={id}>
                  <Container>
                    <SectionTitleProjects style={{ textAlign: 'center' }}>Projects</SectionTitleProjects>
                    <ProjectsFilter/>
                  </Container>
                  <ProjectThumbnails/>
                </StyledWrapper>
              </InView>
              {activeProjectDetails.images &&
              <ProjectDetailsPanel
                projectDetailsPanelSpring={projectDetailsPanelSpring}
                project={activeProjectDetails}
              />}
            </>
          );
        }}>
      </StaticQuery>
    </ProjectsContext.Provider>
  );
};

const prismicProjectQuery = graphql`
  query{
    allPrismicProject {
      edges {
        node {
          data {
            order
            title{
              text
            }
            type
            description{
              text
            }
            description_short{
              text
            }
            technologies_tools{
              name
            }       
            color_primary
            color_primary_light
            thumbnail{
              localFile{
                childImageSharp {
                  fluid(maxWidth: 480, quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
              url
            }
            live{
              url
            }
            github{
              url
            }
            images{
              image{
                localFile{
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 95) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                dimensions{
                  height
                }
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`;

export default SectionProjects;