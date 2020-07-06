import React from 'react';
import { Link as ReactLink } from 'gatsby';
import { Link as RebassLink, LinkProps } from 'rebass';

interface Props {
  to: string;
  outside?: boolean;
}

export const Link: React.FC<Props & LinkProps> = ({
  sx: customSx,
  to,
  outside = false,
  children,
  ...props
}) => {
  const sx = {
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      // @ts-ignore
      ...(customSx && customSx['&:hover'] ? customSx['&:hover'] : {})
    },
    ...(customSx ? customSx : {})
  };
  if (outside) {
    return (
      // @ts-ignore
      <RebassLink sx={sx} {...props} rel="noopener" target="_blank" href={to}>
        {children}
      </RebassLink>
    );
  }
  return (
    // @ts-ignore
    <RebassLink as={ReactLink} sx={sx} {...props} to={to}>
      {children}
    </RebassLink>
  );
};
