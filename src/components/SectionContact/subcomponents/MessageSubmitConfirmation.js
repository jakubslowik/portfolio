import styled from 'styled-components';
import theme from '../../../config/theme';
import { slideInFromTop } from '../../../utils/animations';


const MessageSubmitConfirmation = styled.p`
  margin-top: ${theme.rhythm(3)};
  text-align: center;
  color: ${theme.colors.colorPrimaryLight};
  ${slideInFromTop('0.5s')};
`;

export default MessageSubmitConfirmation;