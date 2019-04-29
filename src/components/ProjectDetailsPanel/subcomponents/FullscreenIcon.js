import styled from 'styled-components';
import theme from '../../../config/theme';


const FullscreenIcon = styled.div`
  position: absolute;
  top: ${props => props.isFullscreenActive ? theme.rhythm(1) : theme.rhythm(1.5)};
  left: ${props => props.isFullscreenActive ? '1.7rem' : '29vw'};
  transition: ${props => props.isFullscreenActive ? 'all 0.4s cubic-bezier(.9,0,.3,1)' : '0.4s'};
  color: ${props => props.isDark ? '#222' : '#f5f5f5'};
  cursor: pointer;
  filter: ${props => props.isDark ? 'none' : 'drop-shadow(0 0 10px black)'};
  transform: ${props => props.isFullscreenActive ? 'rotate(180deg)' : 'none'};
  width: ${theme.rhythm(2.5)};
  height:  ${theme.rhythm(2.5)};
  svg{
    width: ${theme.rhythm(2.5)};
    height:  ${theme.rhythm(2.5)};  
    padding: 10px;
    margin: 0;
  }
  :hover{
    color: ${props => props.isDark ? theme.colors.colorPrimaryLight : theme.colors.colorPrimary};
  }
  :active, :focus{
    color: ${props => props.isDark ? theme.colors.colorPrimaryLight : theme.colors.colorPrimary};
  }
  @media(max-width: ${theme.breakpoints.l}){
    top: ${theme.rhythm(1)};
    left: ${theme.rhythm(1)};
  }
  @media(max-width: ${theme.breakpoints.s}){
    top: ${theme.rhythm(0.5)};
    left: ${theme.rhythm(0.5)};
  }
`;

export default FullscreenIcon;