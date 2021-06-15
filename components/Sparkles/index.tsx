import { usePrefersReducedMotion } from '@hooks/use-prefers-reduced-motion';
import { useRandomInterval } from '@hooks/use-random-interval';
import { range } from '@utils/range';
import { HTMLAttributes, useState } from 'react';
import * as React from 'react';
import { SparkleInstance } from './SparkleInstance';

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
const generateSparkle = (color = DEFAULT_COLOR, above = true) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(15, 25),
    style: {
      // Pick a random spot in the available space
      top: random(-10, 90) + '%',
      left: random(-10, 90) + '%',
      // Float sparkles above sibling content
      zIndex: above ? 2 : -1,
    },
  };
};

export interface SparklesProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Are the sparkles below the children (text)?
   */
  below?: boolean;
  /**
   * The color of the sparkles?
   *
   * Default is a yellow.
   */
  color?: string;
  children: string;
}

const Sparkles: React.FC<SparklesProps> = ({
  color = DEFAULT_COLOR,
  below = false,
  children,
  ...rest
}) => {
  const [wantsAnimation, setWantsAnimation] = useState(true);

  const [sparkles, setSparkles] = React.useState<ReturnType<typeof generateSparkle>[]>(() => {
    return range(3).map(() => generateSparkle(color));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const now = Date.now();
      // Create a new sparkle
      const sparkle = generateSparkle(color, !below);
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      // Make it so!
      setSparkles(nextSparkles);
    },
    !wantsAnimation || prefersReducedMotion ? null : 50,
    !wantsAnimation || prefersReducedMotion ? null : 500,
  );

  const toggleAnimation = React.useCallback(() => {
    setWantsAnimation(!wantsAnimation);
  }, [wantsAnimation]);

  return (
    <span onClick={toggleAnimation} {...rest}>
      <strong
        className="relative font-bold cursor-pointer"
        style={{
          zIndex: 1,
        }}
      >
        {sparkles.map((sparkle) => (
          <SparkleInstance
            key={sparkle.id}
            color={sparkle.color}
            size={sparkle.size}
            style={sparkle.style}
          />
        ))}
        {children}
      </strong>
    </span>
  );
};

export default Sparkles;
