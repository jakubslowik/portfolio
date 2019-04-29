import styled from 'styled-components';
import ProjectImageChangeButton from './ProjectImageChangeButton'
import theme from '../../../config/theme';

const ProjectImageChangeButtonNext = styled(ProjectImageChangeButton)`
  right: 9vw;
  @media(max-width: ${theme.breakpoints.l}){
    right: 15vw;
  }
`;

export default ProjectImageChangeButtonNext;