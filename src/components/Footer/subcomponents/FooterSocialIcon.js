import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterSocialIcon = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.5rem;
  color: #777;
  padding: 0.4rem;
  transition: 0.4s;
  cursor: pointer;
  :hover{
    transition-delay: -0.2s;
    color: #191919;
  }
  @media(max-width: ${theme.breakpoints.m}){
     font-size: 2rem;
     padding: 0.6rem;
  }
`;

export default FooterSocialIcon;