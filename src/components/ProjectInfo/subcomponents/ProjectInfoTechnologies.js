import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectInfoTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto 0 -0.5rem -0.5rem;
  @media (min-width: ${theme.breakpoints.m}) and (max-width: 1560px) {
    display: none;
  }
`;

export default ProjectInfoTechnologies;