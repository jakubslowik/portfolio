import styled from 'styled-components';
import { zoomIn } from '../../../utils/animations';
import { FiCheckCircle } from 'react-icons/fi/index';


const StyledFiCheckCircle = styled(FiCheckCircle)`
  ${zoomIn('0.25s')};
`;

export default StyledFiCheckCircle;