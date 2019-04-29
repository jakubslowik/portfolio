import styled from 'styled-components';
import theme from '../../../config/theme';

const IntroParagraph = styled.p`
  max-width: 45ch;
  margin-bottom: ${theme.rhythm(3)};
  @media(max-width: ${theme.breakpoints.s}){
    margin-bottom: ${theme.rhythm(1)};
  }
`;

export default IntroParagraph;