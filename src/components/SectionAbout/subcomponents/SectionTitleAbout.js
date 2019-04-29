import React from 'react';
import styled from 'styled-components';
import { SectionTitleWithBackground } from '../../common/index';


const SectionTitleAbout = styled(props => <SectionTitleWithBackground {...props}/>)`
  ::before{
    transform: translateY(-100%) translateX(13%);
    content: "ABOUT";
    left: -50%;
  }
`;

export default SectionTitleAbout;
