import IconButton from '@components/IconButton';
import Container from '@components/Container';
import { FiSun, FiMoon } from 'react-icons/fi';
import NextLink from 'next/link';
import { HTMLAttributes } from 'react';
import { useDarkMode } from '@utils/dark-mode-provider';

const NavLink: React.FC<Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string }> = ({
  href,
  children,
  ...props
}) => (
  <NextLink href={href} passHref>
    <a {...props} className="font-bold text-xl">
      {children}
    </a>
  </NextLink>
);

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { mode, toggleMode } = useDarkMode();

  return (
    <div className="py-4 sticky top-0 z-10 bg-white dark:bg-gray-800">
      <Container className="flex justify-center items-center">
        <div className="flex flex-row space-x-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>

        <div className="flex-grow" />

        <IconButton
          icon={mode === 'dark' ? <FiSun /> : <FiMoon />}
          aria-label="Toggle dark mode."
          onClick={toggleMode}
        />
      </Container>
    </div>
  );
};

export default Header;
