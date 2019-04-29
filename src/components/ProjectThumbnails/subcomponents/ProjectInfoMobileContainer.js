import styled from 'styled-components';
import { zoomIn } from '../../../utils/animations';


const ProjectInfoMobileContainer = styled.div`
  width: 100vw;
  padding: 1rem;
  height: 45vh;
  ${zoomIn('0.5s')};
`;

export default ProjectInfoMobileContainer;