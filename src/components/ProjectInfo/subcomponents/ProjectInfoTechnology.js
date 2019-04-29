import styled from 'styled-components';
import ProjectInfoTechnologyText from './ProjectInfoTechnologyText';


const ProjectInfoTechnology = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  ${ProjectInfoTechnologyText}{
    opacity: 0;
  }
  :hover{
    ${ProjectInfoTechnologyText}{
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    } 
  }
`;

export default ProjectInfoTechnology;