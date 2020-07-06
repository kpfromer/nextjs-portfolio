// Issues with rebass types
// Read more here:
// https://github.com/rebassjs/rebass/issues/755
import { InterpolationWithTheme } from '@emotion/core';

declare module 'rebass' {
  export interface FlexProps {
    as?: React.ElementType;
    css?: any;
  }
  export interface BoxProps {
    as?: React.ElementType;
    css?: any;
  }
  export interface TextProps {
    as?: React.ElementType;
    css?: any;
  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<any>;
    }
  }
}

export {};
