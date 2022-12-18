// From https://www.joshwcomeau.com/react/animated-sparkles-in-react/
import React from 'react';

// Utility helper for random number generation
const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

type CancelFunction = () => void;

export const useRandomInterval = (
  callback: () => void,
  minDelay: number | null,
  maxDelay: number | null,
): CancelFunction => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};
