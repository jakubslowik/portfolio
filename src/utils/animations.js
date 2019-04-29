import {css, keyframes} from 'styled-components'

const slideInFromLeftKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRightKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromTopKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromBottomKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

const zoomInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(5px);
  }
  
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const rotatingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;


const slideInFromLeft = (duration = "1s", delay = "0s") => css`
  opacity: 0;
  animation: ${slideInFromLeftKeyframes} ${duration} cubic-bezier(0.785, 0.135, 0.15, 0.86) ${delay} forwards;
`

const slideInFromRight = (duration = "1s", delay = "0s") => css`
  opacity: 0;
  animation: ${slideInFromRightKeyframes} ${duration} cubic-bezier(0.785, 0.135, 0.15, 0.86) ${delay} forwards;
`

const slideInFromTop = (duration = "1s", delay = "0s") => css`
  opacity: 0;
  animation: ${slideInFromTopKeyframes} ${duration} ease ${delay} forwards;
`

const slideInFromBottom = (duration = "1s", delay = "0s") => css`
  opacity: 0;
  animation: ${slideInFromBottomKeyframes} ${duration} cubic-bezier(0.785, 0.135, 0.15, 0.86) ${delay} forwards;
`

const fadeIn = (duration = "0.5s", delay = "0s") => css`
  opacity: 0;
  animation: ${fadeInKeyframes} ${duration} ease ${delay} forwards;
`

const zoomIn = (duration = "1s", delay = "0s") => css`
  opacity: 0;
  animation: ${zoomInKeyframes} ${duration} ease ${delay} forwards;
`

const rotating = (duration = "1s", delay = "0s") => css`
  animation: ${rotatingKeyframes} ${duration} linear ${delay} infinite;
`

export {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
  fadeIn,
  zoomIn,
  rotating
}