import { FiLoader } from 'react-icons/fi/index';
import styled from 'styled-components';
import { rotating } from '../../../utils/animations';
import theme from '../../../config/theme';


const StyledFiLoader = styled(FiLoader)`
  color: ${theme.colors.colorPrimaryLight};
  ${rotating('2s')};
`;

export default StyledFiLoader;