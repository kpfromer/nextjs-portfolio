import { HTMLAttributes } from 'react';
import classnames from 'clsx';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div>
      <div
        {...props}
        style={{ ...props.style, maxWidth: 900 }}
        className={classnames('px-2 lg:px-0 mx-auto', props.className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
