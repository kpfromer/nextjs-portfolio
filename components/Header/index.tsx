import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { HTMLAttributes, useState } from 'react';

import Container from '@components/Container';
import IconButton from '@components/IconButton';
import NextLink from 'next/link';
import classnames from 'clsx';
import tw from 'tailwind-styled-components';
import { useDarkMode } from '@utils/dark-mode-provider';

const NavLink: React.FC<
  Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string; mobile?: boolean }
> = ({ href, children, mobile = false, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props} className={classnames('font-bold', mobile ? 'text-2xl py-2' : 'text-xl')}>
      {children}
    </a>
  </NextLink>
);

const HeaderContainer = tw.div`
  py-4
  sticky
  top-0
  left-0
  right-0
  z-10
  bg-gray-50
  dark:bg-gray-800
  transition-colors
  duration-500
`;

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { mode, toggleMode } = useDarkMode();
  const [visible, setVisible] = useState(false);

  return (
    <HeaderContainer>
      <Container className="flex justify-center items-center">
        <IconButton
          className="sm:hidden"
          icon={<FiMenu />}
          aria-label="Toggle Menu"
          onClick={() => setVisible((prev) => !prev)}
        />

        <div className="hidden sm:flex sm:flex-row sm:space-x-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <div className="flex-grow" />

        <IconButton
          icon={mode === 'dark' ? <FiSun /> : <FiMoon />}
          aria-label="Toggle dark mode."
          onClick={toggleMode}
        />
      </Container>
      <Container className={visible ? 'visible' : 'hidden'}>
        <div className={classnames('py-2 flex flex-col space-y-2', visible ? 'visible' : 'hidden')}>
          <NavLink href="/" mobile onClick={() => setVisible(false)}>
            Home
          </NavLink>
          <NavLink href="/blog" mobile onClick={() => setVisible(false)}>
            Blog
          </NavLink>
          <NavLink href="/resume" mobile onClick={() => setVisible(false)}>
            Experience
          </NavLink>
          <NavLink href="/projects" mobile onClick={() => setVisible(false)}>
            Projects
          </NavLink>
          <NavLink href="/contact" mobile onClick={() => setVisible(false)}>
            Contact
          </NavLink>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
