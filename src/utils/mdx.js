import { Link } from '../components/Link';

export default {
  a: ({ href, children }) => (
    <Link outside={true} to={href}>
      {children}
    </Link>
  )
};
