import { HTMLAttributes } from 'react';
import classnames from 'clsx';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div>
      <div
        {...props}
        style={{ ...props.style, maxWidth: 900 }}
        className={classnames('lg:px-0 mx-auto px-3 sm:px-4 md:px-0', props.className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
