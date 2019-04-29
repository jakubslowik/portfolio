import styled from 'styled-components';
import theme from '../../../config/theme';


const Br = styled.br`
  display: ${props => props.hideDesktop ? 'none' : 'block'};
  @media(max-width: ${theme.breakpoints.m}){
    display: ${props => props.hideMobile ? 'none' : 'block'};
  }
`;

export default Br;