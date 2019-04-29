import styled from 'styled-components';
import theme from '../../../config/theme';


const SocialIconText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 5px;
  font-family: ${theme.fontStack_1};
  @media(max-width: ${theme.breakpoints.s} ){
    font-size: 0.7rem;
  }
`;

export default SocialIconText;