import styled from 'styled-components';
import { fadeIn } from '../../../utils/animations';
import theme from '../../../config/theme';


const NoItemsFoundMessage = styled.span`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  text-align: center;
  ${fadeIn()};
  @media(max-width: ${theme.breakpoints.l}){
    height: 75vh;
    width: 100vw;
  }
`;

export default NoItemsFoundMessage;