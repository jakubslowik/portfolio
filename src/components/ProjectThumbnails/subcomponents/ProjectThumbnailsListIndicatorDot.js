import styled from 'styled-components';


const ProjectThumbnailsListIndicatorDot = styled.div`
  position: relative;
  width: ${props => `${props.clickableAreaSize}px` || '24px'};
  height: ${props => `${props.clickableAreaSize}px` || '24px'};
  cursor: pointer;
  transform: ${props => props.isActive && 'scale(1.75)'};
  transition: 0.4s;
  transition-delay: ${props => props.isActive ? '-0.2s' : '0s'};
  // using ::after to make clickable area slightly bigger (eg. dot 8x8px, clickable 24x24px)
  ::after{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    content: '';
    width: ${props => `${props.dotSize}px` || '8px'};
    height: ${props => `${props.dotSize}px` || '8px'};
    border-radius: 999px;
    background: ${props => props.isActive ? props.dotColor : '#666'};
  }
  :last-of-type{
    margin-right: 0;
  }
`;

export default ProjectThumbnailsListIndicatorDot;