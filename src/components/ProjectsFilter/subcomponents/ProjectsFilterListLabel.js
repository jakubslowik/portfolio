import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectsFilterListLabel = styled.span`
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.075rem;
  font-size: 0.7rem;
  padding-right: 1rem;
  @media(max-width: ${theme.breakpoints.m}){
    padding: 1.15rem;
  }
`;

export default ProjectsFilterListLabel;
