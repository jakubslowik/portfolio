import styled from 'styled-components';
import theme from '../../../config/theme';


const MobileNavListItem = styled.li`
  font-size: 2.5rem;
  text-align: center;
  font-family: ${theme.fontStack_2};
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  padding: ${theme.rhythm(1)} 0;
  margin: 0;
  transition: 0.2s;
  cursor: pointer;
  color: #222;
  :active, :focus{
    color: ${theme.colors.colorPrimary};
  }
  @media(max-width: ${theme.breakpoints.s}){
    font-size: 2.25rem;
  }
  @media(max-width: ${theme.breakpoints.xs}){
    font-size: 2rem;
  }
`;

export default MobileNavListItem;