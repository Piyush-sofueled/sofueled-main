// animations.js
import { keyframes } from '@emotion/react';

export const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1);
    filter: blur(0px);
  }
`;
