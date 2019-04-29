import styled from 'styled-components';
import { ProjectInfoType } from '../../ProjectInfo/subcomponents';

const ProjectInfoTypeDetails = styled(ProjectInfoType)`
  margin-bottom: 2rem; 
  font-size: 1rem; 
  cursor: pointer;
  transition: 0.2s;
  :hover{
    color: #555;
  }
`;

export default ProjectInfoTypeDetails