import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  color: string;
  size: number;
  style: React.CSSProperties;
}

export const SparkleInstance: React.FC<Props> = ({ color, size, style }) => {
  return (
    <Wrapper
      style={{
        transform: 'translate(-50%, -50%)',
        ...style,
      }}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 160 160"
      >
        <path
          fill={color}
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
        ></path>
      </Svg>
    </Wrapper>
  );
};

const growAndShrink = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.span`
  position: absolute;
  display: block;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${growAndShrink} 700ms forwards;
  }
`;

const Svg = styled.svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

// export const SparkleInstance = React.memo(SparkleInstanceUnmemo);
