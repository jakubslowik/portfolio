import styled from 'styled-components';
import theme from '../../../config/theme';


const HeaderNavList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${theme.rhythm(3)} 0 0;
  list-style: none;
  @media(max-width: ${theme.breakpoints.l}){
    justify-content: flex-end;
    margin: 0;
  }
  @media(max-width: ${theme.breakpoints.s}){
    display: none;  
  } 
`;

export default HeaderNavList;
