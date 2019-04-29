import React from 'react';
import styled from 'styled-components';
import { FaBehance, FaGithub } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import {transparentize} from 'polished';

const StyledWrapper = styled.h6`
  display: inline;
  margin-right: 15px;
  svg{
    transition: 0.4s;
    color: ${props => props.iconColor || '#666'};
    font-size: 200%;
    margin-bottom: -7px;
  }
  a{
    text-decoration: none;
    transition: 0.4s;
    color: #666;
    letter-spacing: 0.06rem;
    span{
      transform: translateY(0);
      transition: 0.4s;
      border-bottom: 2px solid ${props => transparentize(0.75, props.iconColor)};
    }
  }
  :hover{
    svg{
      transition-delay: -0.2s;
      color: ${props => transparentize(0.15, props.iconColor) || '#cdcdcd'};
    }
    a{
      transition-delay: -0.2s;
      color: black;
      span{
        transform: scale(0.5);!important;
        transition-delay: -0.2s;
        border-bottom-color: ${props => transparentize(0.25, props.iconColor)};
      }
    }    
  }
`;

const ExternalLink = ({ type, href, iconColor, iconColorHover }) => {
  return (
    <StyledWrapper iconColor={iconColor} iconColorHover={iconColorHover}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {type === 'github' && <><FaGithub/> <span>GITHUB REPOSITORY</span></>}
        {type === 'behance' && <><FaBehance/> <span>SEE ON BEHANCE</span></>}
        {type === 'live' && <><FiMonitor/> <span>SEE LIVE</span></>}
      </a>
    </StyledWrapper>
  );
};

export default ExternalLink;