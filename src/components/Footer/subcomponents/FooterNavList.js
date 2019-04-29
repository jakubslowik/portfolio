import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterNavList = styled.ul`
  list-style: none;
  margin: 0 0 0 1rem;
  display: flex;
  @media(max-width: ${theme.breakpoints.m}){
    margin-left: 0;
  }
  @media(max-width: 260px){
    flex-direction: column;
  }   
`;

export default FooterNavList;