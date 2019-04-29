import styled, { css } from 'styled-components';
import theme from '../../../config/theme';
import {zoomIn} from '../../../utils/animations';


const ProjectsFilterListItem = styled.li`
  flex: 1;
  color: #222;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.075rem;
  font-size: 0.75rem;
  margin: 0;
  padding: 1.15rem;
  transition: 0.4s;
  cursor: pointer;
  transform: translateY(0);
  ::before {
    content: '';
    width: 100%;
    height: 3px;
    background: white;
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: scale(0) translateX(-50%);
    top: 0;
    transform-origin: 0 50%;
    transition: all 0.2s ease;
    border-bottom-left-radius: 999px;
    border-bottom-right-radius: 999px;
  }
  :hover {
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    ::before {
      background: ${theme.colors.colorPrimary};
      transition-delay: -0.1s;
      opacity: 1;
      transform: scale(1) translateX(-50%);
    }
  }
  :active{
     color: #bbb;
  }
  ${props => props.isActive && css`
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    font-family: ${theme.fontStack_1};
    ::before {
      background: ${theme.colors.colorPrimary};
      transition-delay: -0.1s;
      width: 100%;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  `};
  ${props => css`
    :nth-of-type(${props.index !== 0 && (props.index + 1)}){
      ${zoomIn('0.35s', `${(props.index + 1) * 0.025}s`)};
    }
  `};
  @media(max-width: ${theme.breakpoints.l}){
    padding: 1rem;  
  }  
  @media(max-width: ${theme.breakpoints.m}){
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    padding: 1.15rem; 
    left: 0;
    position: absolute;
    z-index: 100;
    background: #f5f5f5;
    ${props => css`
      :nth-of-type(${props.index + 1}){  
        transform: translateY(-50%);
        top: ${`${props.index !== 0 && (props.index * 55) - 33}px`};
        box-shadow: ${theme.shadows.button.default};
      }
    `};
    :first-of-type{
      transform: translateY(-57%);
    }
    :last-of-type{
      border-bottom-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }  
`;

export default ProjectsFilterListItem;