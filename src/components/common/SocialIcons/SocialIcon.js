import styled from 'styled-components';
import theme from '../../../config/theme';


const SocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-size: 2rem;
  color: #191919;
  cursor: pointer;
  transition: all 0.4s ease!important;
  svg {
    transition: all 0.2s ease!important;
  }
  :hover {
    svg {
      transform: translateY(-1px);
      transition-delay: -0.1s!important;
      color: ${theme.colors.colorPrimary};
    }
    transition-delay: -0.2s!important;
    color: ${theme.colors.colorPrimary};
  }
`;

export default SocialIcon;