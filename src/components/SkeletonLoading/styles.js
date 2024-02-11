import styled, { keyframes } from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction:rtl;
`;

export const SkeletonLoader = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  background-color: var(--card-bg-color);
  
  border-radius: 4px;
  margin-bottom: 10px;
  animation: ${keyframes`
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  `} 1s infinite;
`;
