import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectInfoDetailsContainer = styled.div`
  overflow: auto;
  position: absolute;
  left: ${theme.rhythm(1)};
  top: ${theme.rhythm(1)};
  width: 27.5vw;
  transition: all 0.4s cubic-bezier(.9,0,.3,1);
  z-index: 100;
  padding: 1rem;
  opacity: ${props => props.isProjectInfoVisible ? '1' : '0'};
  transform: ${props => props.isProjectInfoVisible ? 'translateX(0)': 'translateX(-150%)'};
  @media(max-width: ${theme.breakpoints.l}){
    background: linear-gradient(0deg, rgba(255,255,255,0.8), #ffffff);
    height: 55vh;
    left: 0;
    width: 100%;
    top: auto;
    bottom: 0;
  }
`;

export default ProjectInfoDetailsContainer;