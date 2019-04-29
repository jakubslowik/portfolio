import styled from 'styled-components';
import { fadeIn } from '../../../utils/animations';

const ChevronIcon = styled.span`
  position: absolute;
  right: 1rem;
  font-size:150%;
  ${fadeIn()};
`;

export default ChevronIcon;