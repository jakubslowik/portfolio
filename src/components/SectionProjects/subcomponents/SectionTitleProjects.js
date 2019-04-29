import React from 'react';
import styled from 'styled-components';
import { SectionTitleWithBackground } from '../../common/index';
import theme from '../../../config/theme';


const SectionTitleProjects = styled(props => <SectionTitleWithBackground {...props}/>)`
  ::before{
    transform: translateY(-100%) translateX(-10%);
    content: "PROJECTS";
    left: -50%;
  }
  @media(max-width: ${theme.breakpoints.m}){
    padding-left: 1rem;
    text-align: left;
  }
`;

export default SectionTitleProjects;