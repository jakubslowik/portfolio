import styled from 'styled-components';
import theme from '../../../config/theme';


const ComputerMockup = styled.div`
  position: relative;
  background: url("https://images2.imgbox.com/b8/bb/Y50YpB6D_o.png") top center no-repeat;
  background: ${props => !props.isMockupVisible && 'transparent'};
  background-position-x: 150%;
  background-size: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
  transition: ${props => props.isFullscreenActive && 'all 0.6s cubic-bezier(.9,0,.3,1)'};
  padding-top: ${props => props.isFullscreenActive ? '0' : '5.7vw'};
  @media(max-width: ${theme.breakpoints.l}){
    padding-top: ${props => props.isFullscreenActive ? '0' : '6.25vw'};
    background-position-x: 50%;
    background-size: 100%;
  }
  @media(max-width: ${theme.breakpoints.m}){
    padding-top: ${props => props.isFullscreenActive ? '0' : '110px'};
    margin-left: ${props => props.isFullscreenActive ? '0' : '5vw'};
    margin-right: ${props => props.isFullscreenActive ? '0' : '5vw'};
    background: transparent;
  }
  @media(max-width: ${theme.breakpoints.s}){
    padding-top: ${props => props.isFullscreenActive ? '0' : '80px'};
  }
`;

export default ComputerMockup;