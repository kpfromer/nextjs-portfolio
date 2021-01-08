import React, { forwardRef, HTMLAttributes } from 'react';
import classnames from 'classnames';

const Button = ({ className, isFullWidth = false, ...props }) => (
  <button
    {...props}
    className={classnames(
      'inline-flex appearance-none items-center justify-center transition-all select-none relative whitespace-nowrap align-middle outline-none',
      isFullWidth ? 'w-full' : 'w-auto',
      className,
    )}
  />
);

export interface IconButtonProps extends HTMLAttributes<HTMLElement> {
  as?: string;
  icon?: React.ReactElement;
}

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  ({ as: Component = 'button', icon, children, ...props }, ref) => {
    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    return (
      <Button
        {...props}
        // @ts-ignore
        children={_children}
        // @ts-ignore
        ref={ref}
        className="rounded-lg inline-block p-3 bg-gray-200 text-black hover:bg-gray-300 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors ease-in-out"
        // className="rounded-lg inline-block p-3 bg-primary-500 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75"
      />
    );
  },
);

export default IconButton;
