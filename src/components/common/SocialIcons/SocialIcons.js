import styled from 'styled-components';
import theme from '../../../config/theme';


const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media(max-width: ${theme.breakpoints.l}){
     justify-content: space-between;
  }
`;


export default SocialIcons;