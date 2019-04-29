import styled from 'styled-components';
import theme from '../../../config/theme';


const ProjectThumbnailsList = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  perspective: 25vw; // eg. at 400px it would be 100px, using vw instead of px keeps the perspective 
                     // proportional for the different viewport widths
  @media(max-width: ${theme.breakpoints.m}){
    flex-wrap: nowrap;
    justify-content: flex-start; 
    overflow-x: scroll;
    // Hide scrollbar, but allow scrolling TODO Not sure if it is not better to leave the scrollbar altogether
    //scrollbar-width: none; /* Firefox */
    //scrollbar-height: none; /* Firefox */
    //-ms-overflow-style: none;  /* IE 10+ */
    //::-webkit-scrollbar { /* WebKit */
    //  width: 0;
    //  height: 0;
    //}
    
    scroll-behavior: smooth; 
    scroll-snap-points-y: repeat(100vw);
    scroll-snap-type: mandatory; //old spec
    scroll-snap-type: x mandatory;
    div{
      scroll-snap-align: center;
    }
  }
  &.no-smooth-scroll{
     scroll-behavior: auto!important; 
  }
`;
export default ProjectThumbnailsList;
