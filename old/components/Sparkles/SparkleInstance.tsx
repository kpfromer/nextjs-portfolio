import React from 'react';

interface Props {
  color: string;
  size: number;
  style: React.CSSProperties;
}

export const SparkleInstance: React.FC<Props> = ({ color, size, style }) => {
  return (
    <span
      style={{ ...style, transform: 'translate(-50%, -50%)' }}
      className="absolute block pointer-events-none motion-safe:animate-grow-and-shrink"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 160 160"
        className="block motion-safe:animate-star-spin"
      >
        <path
          fill={color}
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
        ></path>
      </svg>
    </span>
  );
};
