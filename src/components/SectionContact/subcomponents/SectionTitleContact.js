import React from 'react';
import styled from 'styled-components';
import { SectionTitleWithBackground } from '../../common';


const SectionTitleContact = styled(props => <SectionTitleWithBackground {...props} />)`
  ::before{
    transform: translateY(-100%) translateX(13%);
    content: "CONTACT";
    left: -50%;
  }
`;

export default SectionTitleContact;