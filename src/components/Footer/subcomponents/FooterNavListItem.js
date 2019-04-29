import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterNavListItem = styled.li`
  position: relative;
  margin:0;
  text-align:center;
  font-size: 0.7rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: #333;
  font-family: ${theme.fontStack_1};
  padding: 0.25rem 0.75rem;
  transition: 0.4s;
  cursor: pointer;
  ::before {
    content: '';
    width: 0;
    height: 1px;
    background: white;
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
    bottom: 0;
    transition: all 0.2s ease;
  }
  :hover {
    transform: translateY(-1px);
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    ::before {
      background: ${theme.colors.colorPrimary};
      transition-delay: -0.1s;
      width: 65%;
      opacity: 1;
      transform: translateX(-50%) translateY(-2px);
    }
  }
  @media(max-width: ${theme.breakpoints.m}){
    font-size: 1rem;
    width: 125px;
    padding: 0.25rem 1rem;
    :hover {
      ::before {
        width: 45%;
      }
    }
  }
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 0.9rem;
    width: 100px;
    padding: 0.2rem 0.3rem;
  }
  @media(max-width: ${theme.breakpoints.xs}){
    font-size: 0.75rem;
    width: 85px;
    padding: 0.2rem 0.3rem;
  }
`;

export default FooterNavListItem;