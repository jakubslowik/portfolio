import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common';
import theme from '../../../config/theme';


const SendButton = styled(props => <Button {...props}/>)`
  align-self: flex-end;
  svg{
    color: ${theme.colors.colorPrimaryLight};
    font-size: 125%;
    margin-bottom: -3px;
    margin-right: -10px;
  }
  @media(max-width: ${theme.breakpoints.m}){
    align-self: center;
  }
`;

export default SendButton;