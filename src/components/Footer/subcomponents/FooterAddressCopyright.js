import styled from 'styled-components';
import theme from '../../../config/theme';


const FooterAddressCopyright = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  @media(max-width: ${theme.breakpoints.m}){
    order: 1;
  }
`;

export default FooterAddressCopyright;