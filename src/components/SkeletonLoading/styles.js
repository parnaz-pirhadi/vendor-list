import React from 'react';
import styled, { keyframes } from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkeletonLoader = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '20px'};
  background-color: #f2f2f2;
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
