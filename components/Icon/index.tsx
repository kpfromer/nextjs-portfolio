import React, { forwardRef, HTMLAttributes } from 'react';
import classnames from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<Props = any> = React.ElementType<Props>;

export interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  as: As;
}

// https://github.com/chakra-ui/chakra-ui/blob/master/packages/icon/src/icon.tsx
const Icon = forwardRef<HTMLElement, IconProps>(({ as: Element, ...rest }, ref) => {
  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (Element && typeof Element !== 'string') {
    return (
      <Element
        {...rest}
        // @ts-ignore
        ref={ref}
        className={classnames('inline-block flex-shrink-0', rest.className)}
      />
    );
  }

  return (
    <svg
      {...rest}
      // @ts-ignore
      ref={ref}
      className={classnames('inline-block flex-shrink-0', rest.className)}
    />
  );
});

export default Icon;
