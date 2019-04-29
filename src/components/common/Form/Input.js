import styled from 'styled-components';
import theme from '../../../config/theme';


const Input = styled.input`
  border: 1px solid rgba(255,255,255,0.75);
  background: rgba(249,249,252,1);
  font-size: 1.2rem;
  padding: 0.75rem;
  width: 31ch;
  border-radius: 1px;
  box-shadow: ${theme.shadows.input.default};
  margin: 0 ${theme.rhythm(1)} ${theme.rhythm(1)} 0;
  transition: all 0.2s ease;
  color: #222;
  :hover {
    box-shadow: ${theme.shadows.input.hover};
  }
  :focus{
    box-shadow: ${theme.shadows.input.focus};
    outline: none;
  }
  @media(max-width: ${theme.breakpoints.m}){
    width: 100%;
    margin: 0 0 ${theme.rhythm(1)} 0;
  }
`;

export default Input;