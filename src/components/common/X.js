import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import theme from '../../config/theme';


const X = styled(({ isDark, colorPrimary, colorPrimaryLight, ...rest }) => <FiX {...rest} />)`
  position: absolute;
  top: ${theme.rhythm(1)};
  right: ${theme.rhythm(1)};
  width: ${theme.rhythm(2.5)};
  height:  ${theme.rhythm(2.5)};
  padding: 2px;
  transition: all 0.2s ease;
  color: ${props => props.isDark ? '#222' : '#f5f5f5'};
  cursor: pointer;
  filter: ${props => props.isDark ? 'none' : 'drop-shadow(0 0 10px black)'};
  :hover{
    color: ${props => props.isDark ? theme.colors.colorPrimaryLight : theme.colors.colorPrimary};
  }
  :active, :focus{
    color: ${props => props.isDark ? theme.colors.colorPrimaryLight : theme.colors.colorPrimary};
  }
  @media(max-width: ${theme.breakpoints.s}){
    top: ${theme.rhythm(0.5)};
    right: ${theme.rhythm(0.5)};
  }
`;

export default X;