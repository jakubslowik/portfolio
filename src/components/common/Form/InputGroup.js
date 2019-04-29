import styled from 'styled-components';
import theme from '../../../config/theme';


const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${theme.rhythm(1)};
  @media(max-width: ${theme.breakpoints.m}){
    margin-right: 0;
  }
`;

export default InputGroup;
