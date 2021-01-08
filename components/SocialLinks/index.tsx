import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { Box, Icon, HStack, StackProps, useColorModeValue } from '@chakra-ui/react';
import info from '@configs/info';

export interface SocialLinksProps extends Omit<StackProps, 'spacing' | 'color'> {
  spacing?: string;
  iconSize?: string;
  color?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  spacing = '15px',
  iconSize = '35px',
  color,
  ...props
}) => {
  const defaultColor = useColorModeValue('gray.700', 'white');

  return (
    <HStack color={color ? color : defaultColor} spacing={spacing} {...props}>
      <Box as="a" target="_blank" rel="noopener noreferrer" href={info.github}>
        <Icon as={FiGithub} boxSize={iconSize} aria-label="Github" />
      </Box>

      <Box as="a" target="_blank" rel="noopener noreferrer" href={info.linkedin}>
        <Icon as={FiLinkedin} boxSize={iconSize} aria-label="LinkedIn" />
      </Box>

      <Box as="a" rel="noopener noreferrer" href={info.stackoverflow}>
        <Icon as={FaStackOverflow} boxSize={iconSize} aria-label="Stack Overflow" />
      </Box>
    </HStack>
  );
};

export default SocialLinks;
