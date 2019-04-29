import styled from 'styled-components';
import ProjectImageChangeButton from './ProjectImageChangeButton'
import theme from '../../../config/theme';

const ProjectImageChangeButtonPrev = styled(ProjectImageChangeButton)`
  right: 64vw;
  @media(max-width: ${theme.breakpoints.l}){
    right: auto;
    left: 15vw;
  }
`;

export default ProjectImageChangeButtonPrev