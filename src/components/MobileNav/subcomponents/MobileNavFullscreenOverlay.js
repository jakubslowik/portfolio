import styled from 'styled-components';
import theme from '../../../config/theme';


const MobileNavFullscreenOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: url(https://images2.imgbox.com/18/c9/ZlgrkwYp_o.jpg) center center; //~83kb
  background-size: cover;
  z-index: 1000;
  will-change: transform;
  transition: all 0.4s ease;
  opacity:  ${props => props.isMobileMenuOpen ? '1' : '0'};
  transform:  ${props => props.isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 1rem;
  }
  @media(max-width: ${theme.breakpoints.s}){
    background: url("http://b.webpurr.com/x28x.webp") center center / cover;
  }
`;

export default MobileNavFullscreenOverlay;