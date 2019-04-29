import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectImage = styled.div`
  transform-origin: 50% 0;
  // TODO should rather use composite phase based transitions (translate, scale...) 
  // or FLIP animation method for seamlessly animated width & height.
  // Also: scaling changes native scrolling speed, so that's another thing to keep in mind.
  transform: ${props => props.isFullscreenActive ? 'translateX(0)' : 'translateX(21.5%)'};
  width: ${props => props.isFullscreenActive ? '100%' : '46.5vw'};
  height: ${props => props.isFullscreenActive ? '100%' : '26vw'};
  will-change: width, height; 
  background: ${props => !props.isMockupVisible ? 'transparent' : '#222'};
  overflow-y: ${props => (props.isScrollable || props.isFullscreenActive) ? 'auto' : 'hidden'};
  transition: all 0.6s cubic-bezier(.9,0,.3,1), background 0s;
  .gatsby-image-wrapper{
    height: ${props => (props.isFullscreenActive || props.isMockupVisible) ? 'auto' : '100%'};
    img{
      width: 100%;
      object-fit: ${props => (props.isFullscreenActive || props.isMockupVisible) ? 'cover' : 'contain!important'};
      cursor: ${props => props.isFullscreenActive ? 'zoom-out' : 'zoom-in'};
      margin-bottom: -15px;
    }
  } 
  ::before{
    transition: 0.2s;
    opacity: ${props => (props.isFullscreenActive) ? '1' : '0'};
    position: absolute;
    top: ${props => (props.isFullscreenActive) ? '75vh' : '50vh'};
    width: 100%;
    padding: 0.5rem;
    left: 50%;
    color: #777;
    font-size: 0.8rem;
    transform: translateX(-50%);
    text-align: center;
    content: 'If you can see this, you may try changing device orientation to landscape mode to have a better view.';
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.25);
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar {
    // 0.0088 * props.windowWidth is equivalent of 0.0088vw. Typical scrollbar has 17px. 17/1920 = ~0.0088. 
    // Full size project images have a width of 1920px, so our scrollbar will be proportional to scaling.
    // Math.min ensures that the scrollbar width would not be bigger than 17px on screens larger than 1920px.
    // We must get windowWidth from outside, because "vw" doesn't work here.
    width: ${props => props.isFullscreenActive ? `${Math.min(0.0088 * props.windowWidth, 17)}px` : '6px'}; 
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.scrollColor || '#fff'};
    border-radius: 1px;
  }
  @media(max-width: ${theme.breakpoints.l}){
    width: ${props => props.isFullscreenActive ? '100%' : '51.5vw'};
    height: ${props => props.isFullscreenActive ? '100%' : '29vw'};
    transform: translateX(0);
  }
  @media(max-width: ${theme.breakpoints.m}){
    background: transparent;
    width: 100%;
    height: 100%;
    ::-webkit-scrollbar {
      // fixed vertical/horizontal scrollbar width/height on mobile screens
      width: 6px;
      height: 6px;
    }
  }
  @media(max-width: ${theme.breakpoints.s}){
     margin-top: ${props => props.areProjectImagesDotsVisible && (props.isFullscreenActive ? '0' : '40px')};
  }
`;

export default ProjectImage;