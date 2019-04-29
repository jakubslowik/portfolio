import styled from 'styled-components';

import theme from '../../../config/theme';


const HeroSubtitle = styled.h2`
  color: ${theme.colors.colorPrimary};
  font-family: ${theme.fontStack_3};
  letter-spacing: -0.025rem;
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: ${theme.rhythm(3)};
  will-change: transform;
  strong{
    font-weight: 400;
    font-family: ${theme.fontStack_1};
  }
  @media(max-width: ${theme.breakpoints.s}){
    margin-bottom: ${theme.rhythm(2)};
    font-size: 5.5vw;
  }
  @media(max-width: ${theme.breakpoints.s}){
    margin-bottom: ${theme.rhythm(2)};
    font-size: 7.5vw;
  }
`;

export default HeroSubtitle;