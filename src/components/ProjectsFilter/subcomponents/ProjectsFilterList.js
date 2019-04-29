import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectsFilterList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  @media(max-width: ${theme.breakpoints.m}){
    width: 100%;
  }
`;

export default ProjectsFilterList;