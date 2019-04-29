import styled from 'styled-components';
import theme from '../../../config/theme';

const SectionIndicatorListItem = styled.li`
  margin: 6px 0;
  padding: 6px 0;
  position: relative;
  text-transform: uppercase;
  color: ${props => props.isActive ? theme.colors.colorPrimary : '#aaa'};
  font-size: 10.5px;
  letter-spacing: 0.04rem;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    ::before {
      transition-delay: -0.2s;
      background: ${theme.colors.colorPrimary};
    }
  }
  ::before {
    position: absolute;
    left: ${props => props.isActive ? 'calc(-1rem - 1px)' : 'calc(-1rem)'};
    top: 10.5px;
    content: '';
    width: ${props => props.isActive ? '6px' : '4px'};
    height: ${props => props.isActive ? '6px' : '4px'};
    border-radius: 999px;
    background: ${props => props.isActive ? theme.colors.colorPrimary : '#9b9b9b'};
    transition: 0.4s;
  }
`;

export default SectionIndicatorListItem;