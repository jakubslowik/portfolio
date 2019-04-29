import styled from 'styled-components';
import theme from '../../../config/theme';


const Button = styled.button`
  position: relative;
  overflow: hidden;
  background: black;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  height: 4rem;
  font-size: 0.85rem;
  font-family: ${theme.fontStack_1};
  border: none;
  padding: 1.25rem 2rem;
  min-width: 150px;
  max-width: 250px;
  border-radius: 1px;
  box-shadow: ${theme.shadows.button.default};
  cursor: pointer;
  margin-bottom: ${theme.rhythm(1)};
  z-index: 2;
  transition: all 0.2s ease;
  span{
    position: relative;
    z-index: 2;
  }
  ::after{
    content: "";
    width: 4px;
    height: 4px;
    opacity: 0;
    position: absolute;
    border-radius: 50%;
    transition: all 0.6s;
    z-index: 1;
    background: ${theme.colors.colorPrimary};
    top: calc(50% - 2px);
    left: calc(50% - 2px);
    box-shadow: 0 0 15px ${theme.colors.colorPrimary};
  }
  :hover{
    box-shadow: ${theme.shadows.button.hover};
    color: white;
    ::after{
      transition-delay: -0.4s;
      opacity: 1;
      z-index: -100;
      transform: scale(100);
    }
  }
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 0.75rem;
    padding: 1rem 1.75rem;
  }
`;

export default Button;
