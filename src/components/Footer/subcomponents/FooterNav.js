import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterNav = styled.nav`
  @media(max-width: ${theme.breakpoints.m}){
    margin-top: ${theme.rhythm(1)};
  }
`;

export default FooterNav;