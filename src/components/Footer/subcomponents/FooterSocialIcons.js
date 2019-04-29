import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterSocialIcons = styled.div`
  display: flex;
  flex:1;
  justify-content: flex-end;
  align-items: center;
  @media(max-width: ${theme.breakpoints.m}){
    flex-direction: column;
    margin-bottom: ${theme.rhythm(1)};
  }
`;

export default FooterSocialIcons;