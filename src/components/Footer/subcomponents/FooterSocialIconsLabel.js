import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterSocialIconsLabel = styled.div`
  color: #afafaf;
  font-size: 0.75rem;
  letter-spacing: 0.02rem;
  margin-right: ${theme.rhythm(1)};
  @media(max-width: ${theme.breakpoints.m}){
    margin-right: 0;
  }
`;

export default FooterSocialIconsLabel;