import { Link } from 'rebass';

export default {
  a: ({ href, children }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      sx={{
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' }
      }}
    >
      {children}
    </Link>
  )
};
