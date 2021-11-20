import React, { HTMLAttributes, forwardRef } from 'react';

import classnames from 'clsx';
import tw from 'tailwind-styled-components';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  as?: string;
  isFullWidth?: boolean;
}

interface ButtonProps {
  $isFullWidth?: boolean;
}

const Button = tw.button<ButtonProps>`
  ${(p) => (p.$isFullWidth ? 'w-full' : 'w-auto')}
  inline-flex
  appearance-none
  items-center
  justify-center
  transition-all
  select-none
  relative
  whitespace-nowrap
  align-middle
  outline-none
`;

export interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon?: React.ReactElement;
  overrideClassName?: boolean;
}

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  ({ icon, children, overrideClassName = false, ...props }, ref) => {
    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    return (
      <Button
        {...props}
        children={_children}
        ref={ref}
        className={
          overrideClassName
            ? props.className
            : classnames(
                'rounded-lg inline-block p-3 bg-gray-200 text-black hover:bg-gray-300 dark:text-white dark:bg-naturalGray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors ease-in-out',
                props.className,
              )
        }
      />
    );
  },
);

export default IconButton;
