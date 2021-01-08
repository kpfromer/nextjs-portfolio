import { Box, Heading, HeadingProps, HStack, IconButton, Spacer } from '@chakra-ui/react';
import Container from '@components/Container';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useColorModeToggle } from '@hooks/use-color-mode-toggle';

const NavLink: React.FC<HeadingProps & { href: string }> = ({ href, children, ...props }) => (
  <NextLink href={href} passHref>
    <Heading as="a" fontWeight="bold" fontSize="xl" {...props}>
      {children}
    </Heading>
  </NextLink>
);

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { colorMode, toggleColorMode } = useColorModeToggle();

  return (
    <Box
      py={4}
      position="sticky"
      top={0}
      zIndex="sticky"
      // Pulled from: https://github.com/chakra-ui/chakra-ui/blob/develop/packages/theme/src/styles.ts
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
    >
      <Container display="flex" justifyContent="center" alignItems="center">
        <HStack spacing="10px">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </HStack>

        <Spacer />
        <IconButton
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          aria-label="Toggle dark mode."
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  );
};

export default Header;
