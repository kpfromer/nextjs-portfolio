import React from 'react';
import { Link as ReactLink } from 'gatsby';
import { Link as RebassLink } from 'rebass';

export const Link = ({ sx: customSx, to, outside = false, children, ...props }) => {
  const sx = {
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      ...(customSx && customSx['&:hover'] ? customSx['&:hover'] : {})
    },
    ...(customSx ? customSx : {})
  };
  if (outside) {
    return (
      <RebassLink sx={sx} {...props} rel="noopener" target="_blank" href={to}>
        {children}
      </RebassLink>
    );
  }
  return (
    <RebassLink sx={sx} {...props} as={ReactLink} to={to}>
      {children}
    </RebassLink>
  );
};
