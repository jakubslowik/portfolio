import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi/index';
import theme from '../../../config/theme';


const HeaderMobileMenuIcon = styled(({ isDark, colorPrimary, colorPrimaryLight, ...rest }) => <FiMenu {...rest} />)`
  width: ${theme.rhythm(2.5)};
  height:  ${theme.rhythm(2.5)};
  padding: 0.5rem;
  display: none;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-right: -0.5rem;
  color: ${props => props.isDark ? '#222' : '#f5f5f5'};
  :active, :focus{
    color: ${props => props.isDark ? theme.colors.colorPrimaryLight : theme.colors.colorPrimary};
  }
  @media(max-width: ${theme.breakpoints.s}){
    display: block;
  }
`;

export default HeaderMobileMenuIcon;