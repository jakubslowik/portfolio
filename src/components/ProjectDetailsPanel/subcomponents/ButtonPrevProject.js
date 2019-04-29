import styled from 'styled-components';
import { Button } from '../../common/Button';


const ButtonPrevProject = styled(Button)`
  position: absolute!important;
  left: 1.7rem; 
  bottom: 0; 
  width: 14rem;
  z-index: 101;
  overflow: visible;
  opacity: ${props => props.isFullscreenActive ? '0' : '1'};
  transform: ${props => props.isFullscreenActive ? 'translateX(-150%)' : 'translateX(0)'};
  transition: ${props => props.isFullscreenActive ? 'all 0.4s cubic-bezier(.9,0,.3,1)' : '0.4s'};
  ::after{
    display: none;
  }
  ::before{
    opacity: 0;
    transition: 0.2s;
    content: '';
    position: absolute;
    left: 0;
    top: -123px;
    transform: translateY(50%);
    width: 100%;
    height: 50%;
    background: ${props => props.backgroundOnHoverUrl && `url(${props.backgroundOnHoverUrl})`};
    background-size: cover;
  }
  :hover{
    background: ${props => props.colorPrimary ? props.colorPrimary : 'white'};
    ::before{
      opacity: 1;
      transform: translateY(0);
      height: 192%;
    }
  }
  :focus{
    outline: none;
  }
`;

export default ButtonPrevProject;