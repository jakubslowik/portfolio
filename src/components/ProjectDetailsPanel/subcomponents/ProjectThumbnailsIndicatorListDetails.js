import styled from 'styled-components';
import { ProjectThumbnailsListIndicator } from '../../ProjectThumbnails/subcomponents';
import { zoomIn } from '../../../utils/animations';
import theme from '../../../config/theme';

const ProjectThumbnailsListIndicatorDetails = styled(ProjectThumbnailsListIndicator)`
  width: auto;
  top: 31.1vw; 
  right: -20vw;
  ${zoomIn('0.5s', '0.5s')};
  @media(max-width: ${theme.breakpoints.l}){
    width: 100%;
    top: 34vw; 
    right: 50%;
    transform: translateX(-50%);
  }
  @media(max-width: ${theme.breakpoints.m}){
    width: 100%;
    top: ${theme.rhythm(3)};
    height: 40px;
  }
`

export default ProjectThumbnailsListIndicatorDetails;