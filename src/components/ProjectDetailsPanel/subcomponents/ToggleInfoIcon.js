import styled from 'styled-components';
import theme from '../../../config/theme';

import {fadeIn} from '../../../utils/animations';

const ToggleInfoIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fadeIn()};
  transition: 0.2s;
  color: ${props => props.isProjectInfoVisible ? props.colorPrimary : '#222'};
  cursor: pointer;
  width: 50vw;
  height:  ${theme.rhythm(2.5)};
  svg{
    color: ${props => props.isProjectInfoVisible ? props.colorPrimary : '#222'};
    width: ${theme.rhythm(2.5)};
    height:  ${theme.rhythm(2.5)};  
    padding: 10px;
    margin: 0;
    margin-top: -3px;
  }
  span{
    color: #222;
    line-height: 1;
    text-transform: uppercase;
    font-family: ${theme.fontStack_1};
    width: 80px;
    font-size: 0.8rem;
    letter-spacing: 0.06rem;
  }
  :active, :focus{
    color: ${props => props.isProjectInfoVisible ? props.colorPrimary : '#222'};
  }
  @media(max-width: ${theme.breakpoints.l}){
    justify-content: flex-start;
    width: 18vw;
    top: ${theme.rhythm(4)};
    left: ${theme.rhythm(1)};
  }
  @media(max-width: ${theme.breakpoints.m}){
    justify-content: center;
    top: ${theme.rhythm(1)};
    width: 30vw;
    left: 50%;
    transform: translateX(-50%);
  }
  @media(max-width: ${theme.breakpoints.s}){
    top: ${theme.rhythm(0.5)};
  }
`;


export default ToggleInfoIcon;