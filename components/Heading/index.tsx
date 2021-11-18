import { HTMLAttributes } from 'react';

export const Heading: React.FC<
  HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }
> = ({ as: Type = 'h1', ...props }) => <Type {...props} className="text-5xl font-bold my-8" />;
