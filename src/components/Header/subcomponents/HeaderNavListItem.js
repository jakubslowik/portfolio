import styled from 'styled-components';
import theme from '../../../config/theme';


const HeaderNavListItem = styled.li`
  position: relative;
  margin: 0;
  padding: 1rem 0;
  width: 10rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  text-align: center;
  color: #222;
  font-family: ${theme.fontStack_1};
  cursor: pointer;
  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    left: 50%;
    top: -35px;
    transition: all 0.2s ease;
    transform: translateX(-50%) scale(0);
    border-bottom-left-radius: 999px;
    border-bottom-right-radius: 999px;
  }
  :hover {
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    ::before {
      background: ${theme.colors.colorPrimary};
      transition-delay: -0.1s;
      transform: translateX(-50%) scale(1);
    }
  }
  :active {
    color: white;
  }
  @media(max-width: ${theme.breakpoints.l}){
    justify-content: flex-end;
    font-size: 0.9rem;
    :last-of-type{
      margin-right: -1rem;
    }
  }
  @media(max-width: ${theme.breakpoints.m}){
    font-size: 0.85rem;
  }
`;

export default HeaderNavListItem;
