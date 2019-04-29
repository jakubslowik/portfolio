import styled from 'styled-components';
import theme from '../../../config/theme';


const Textarea = styled.textarea`
  border: 1px solid rgba(255,255,255,0.75);
  background: rgba(249,249,252,1);
  font-size: 1.2rem;
  font-family: ${theme.fontStack_2};
  padding: 0.75rem;
  min-height: 12rem;
  resize: vertical;
  min-width: calc(66ch + 4px);
  border-radius: 1px;
  box-shadow: ${theme.shadows.input.default};
  margin: 0 ${theme.rhythm(1)} ${theme.rhythm(1)} 0;
  transition: all 0.2s ease;
  color: #191919;
  :hover {
    box-shadow: ${theme.shadows.input.hover};
  }
  :focus{
    background: rgba(252,252,255,1);
    box-shadow: ${theme.shadows.input.focus};
    outline: none;
  }
  @media(max-width: ${theme.breakpoints.l}){
    min-width: auto;
    width: 600px;
  }
  @media(max-width: ${theme.breakpoints.m}){
    width: 100%;
    min-width: auto;
    margin: 0 0 ${theme.rhythm(2)} 0;
  }
`;

export default Textarea;