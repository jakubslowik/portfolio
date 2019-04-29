import styled from 'styled-components';
import theme from '../../../config/theme';


const HeroButtonGroup = styled.div`
  text-align: center;
  @media(max-width: ${theme.breakpoints.s}){
    align-self: center;
  }
`;

export default HeroButtonGroup;