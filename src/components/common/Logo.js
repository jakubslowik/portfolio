import styled from 'styled-components';
import theme from '../../config/theme';


const Logo = styled.div`
  border-radius: 999px;  
  width: ${props => props.width ? props.width : theme.rhythm(3)};
  height: ${props => props.height ? props.height : theme.rhythm(3)};
  background: url('https://images2.imgbox.com/26/5b/SW9zIIFY_o.png');
  background-size: cover;
  transition: 0.4s;
  :hover{
    transition-delay: -0.2s;
    filter: invert(97%);
  }
  @media(max-width: ${theme.breakpoints.s}){
    width: ${theme.rhythm(2.5)};
    height: ${theme.rhythm(2.5)};
  }
`;

export default Logo;