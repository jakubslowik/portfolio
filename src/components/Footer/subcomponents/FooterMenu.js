import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterMenu = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  @media(max-width: ${theme.breakpoints.m}){
    flex-direction: column;
    margin-bottom: ${theme.rhythm(1)};
  }
`;

export default FooterMenu;