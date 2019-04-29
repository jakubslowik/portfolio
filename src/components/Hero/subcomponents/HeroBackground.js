import React from 'react';
import styled from 'styled-components';
import theme from '../../../config/theme'

import {zoomIn} from '../../../utils/animations';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right:0;
  width: 100%;
  height: 100%;
  z-index: -2;  
  transition: 0.5s;
  opacity: 1;
  perspective: 1px;
  ${zoomIn()}
  ::before{
    position: absolute;
    content:'';
    top: 0;
    right:0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: url("https://images2.imgbox.com/2d/35/6763YpAT_o.jpg") center center / cover;
    transform: scaleX(-1);
    filter: blur(2px);
  }
  ::after{
    position: absolute;
    content:'';
    top: 0;
    right:0;
    width: 100%;
    height: 100%;
    opacity: 1;
    //background: url(https://images2.imgbox.com/71/2d/C1mm5zDj_o.jpg); //58.5kb
    //background: url(https://images2.imgbox.com/18/c9/ZlgrkwYp_o.jpg) center center / cover; //~83kb
    background: linear-gradient(135deg, rgba(255,255,255,0.5), transparent), url(https://images2.imgbox.com/18/c9/ZlgrkwYp_o.jpg) center center / cover;
    transform: scaleX(-1);
  }
  @media(max-width: ${theme.breakpoints.s}){
    ::after{
      background: url("https://b.webpurr.com/x28x.webp") center center / cover;
    }
  }
`;


const HeroBackground = ({ id }) => <StyledWrapper id={id}/>;


export default HeroBackground;