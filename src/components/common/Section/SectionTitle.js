import styled from 'styled-components';
import theme from '../../../config/theme';
import { animated } from 'react-spring';


const SectionTitle = styled(animated.h2)`
  position: relative;
  text-transform: uppercase;
  font-family: ${theme.fontStack_3};
  font-weight: 400;
  letter-spacing: 1rem;
  font-size: 2.75rem;
  margin-bottom: ${theme.rhythm(2)};
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 10.5vw;
  }
  // @media(max-width: ${theme.breakpoints.xs}){
  //   font-size: 7.5vw;
  // }
`;

export default SectionTitle;
