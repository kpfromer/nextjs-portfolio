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
      ...(customSx && customSx['&:hover'] ? customSx['&:hover'] : {}),
    },
    ...(customSx ? customSx : {}),
  };
  if (outside) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <RebassLink sx={sx} {...props} rel="noopener" target="_blank" href={to}>
        {children}
      </RebassLink>
    );
  }
  return (
    <RebassLink as={ReactLink} sx={sx} {...props} to={to}>
      {children}
    </RebassLink>
  );
};
