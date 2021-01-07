import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { Box, Icon, HStack, StackProps } from '@chakra-ui/react';

export interface SocialLinksProps extends Omit<StackProps, 'spacing'> {
  spacing?: string;
  iconSize?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  spacing = '15px',
  iconSize = '35px',
  ...props
}) => {
  return (
    <HStack color="white" spacing={spacing} {...props}>
      <Box as="a" target="_blank" rel="noopener noreferrer" href="https://github.com/kpfromer">
        <Icon as={FiGithub} boxSize={iconSize} aria-label="Github" />
      </Box>

      <Box
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kyle-pfromer/"
      >
        <Icon as={FiLinkedin} boxSize={iconSize} aria-label="LinkedIn" />
      </Box>

      <Box
        as="a"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/3448490/kyle-pfromer"
      >
        <Icon as={FaStackOverflow} boxSize={iconSize} aria-label="Stack Overflow" />
      </Box>
    </HStack>
  );
};

export default SocialLinks;
