import theme from '../../../config/theme';
import styled, {css} from 'styled-components';
// referencing another styled component for hover animation
import { StyledWrapper as ProjectInfoStyledWrapper } from '../../ProjectInfo/ProjectInfo';
import {zoomIn} from '../../../utils/animations';


const ProjectThumbnailsListItem = styled.li`
  width: 25vw;
  height: auto;
  position: relative;
  transition: 0.4s;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  opacity: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2);
  .gatsby-image-wrapper{
    border-radius: 5px;
    img{
      border-radius: 5px;
      transition: all 0.4s ease, filter 0.2s ease -0.1s;
    }
  }
  :hover {
    box-shadow: 0 2px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15);
    transform: translateY(-3px);
    transition-delay: -0.2s;
    color: ${theme.colors.colorPrimary};
    .gatsby-image-wrapper{
      img{
        filter: grayscale(100%) brightness(100%) contrast(300%);
      }
    }    
    ${ProjectInfoStyledWrapper}{
      transition-delay: -0.2s;
      opacity: 1;
    }
  } 
  ${props => css`
    :nth-of-type(${(props.index + 1)}){
      ${zoomIn('0.4s',`${(props.index + 1) * 0.025}s`)};
    }
  `};
  @media(max-width: 1560px){
    width: calc(0.8 * 480px);
    height: calc(0.8 * 270px);
  }
  @media(max-width: ${theme.breakpoints.m}){
    transform: scale(0.75) rotateX(5deg);
    height: auto;
    width: calc(100vw - 1rem);
    ${props => props.isInViewAndShouldAnimate && css`
      transform: scale(1);
    `}
    :hover {
      .gatsby-image-wrapper{
        img{
          filter: none;
        }
      }    
      ${ProjectInfoStyledWrapper}{
        transition-delay: -0.2s;
        opacity: 1;
      }
    }
  }
`;

export default ProjectThumbnailsListItem;

