import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectInfoTechnologyText = styled.div`
  color: #222;
  font-size: 0.8rem;
  font-family: ${theme.fontStack_1};
  position: absolute;
  text-align: center;
  line-height: 1;
  left: 50%;
  top: ${props => props.hasRevealInverted ? 'auto' : (props.isLong ? '-50%' : '-25%')}; 
  bottom: ${props => props.hasRevealInverted ? (props.isLong ? '-50%' : '-25%') : 'auto'}; 
  transform: translateX(-50%) ${props => props.hasRevealInverted ? 'translateY(-50%)' : 'translateY(50%)'};
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

export default ProjectInfoTechnologyText;