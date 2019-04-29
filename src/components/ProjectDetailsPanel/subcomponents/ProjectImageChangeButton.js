import styled from 'styled-components';
import { fadeIn } from '../../../utils/animations';
import theme from '../../../config/theme';

const ProjectImageChangeButton = styled.div`
  color: #555;
  position: absolute;
  top: 20vw;
  transform: translateY(-50%);
  transition: 0.4s;
  cursor: pointer;
  padding: 20px;
  svg{
    width: 100px;
    height: 100px;
  }
  ${fadeIn('0.5s')};
  :hover{
    transition-delay: -0.2s;
    color: ${props => props.colorPrimary || '#222'};
  }
  @media(max-width: 1600px){
    padding: 12px;
    svg{
      width: 64px;
      height: 64px;
    }
  }
  @media(max-width: ${theme.breakpoints.l}){
    top: 23vw;
  }
  @media(max-width: ${theme.breakpoints.m}){
    top: ${theme.rhythm(0.5)};
    transform: none;   
  }
  @media(max-width: ${theme.breakpoints.s}){
    top: 0;
  }
`;

export default ProjectImageChangeButton;