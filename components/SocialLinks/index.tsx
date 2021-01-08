import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import { Icon, StackProps } from '@chakra-ui/react';
import info from '@configs/info';
import classnames from 'classnames';

export interface SocialLinksProps extends Omit<StackProps, 'spacing' | 'color'> {
  spacing?: string;
  iconSize?: string;
  color?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  spacing = 'space-x-4',
  iconSize = '35px',
  color,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        props.className,
        spacing,
        color ? color : 'text-gray-700 dark:text-white',
      )}
    >
      <a target="_blank" rel="noopener noreferrer" href={info.github}>
        <Icon as={FiGithub} boxSize={iconSize} aria-label="Github" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href={info.linkedin}>
        <Icon as={FiLinkedin} boxSize={iconSize} aria-label="LinkedIn" />
      </a>

      <a rel="noopener noreferrer" href={info.stackoverflow}>
        <Icon as={FaStackOverflow} boxSize={iconSize} aria-label="Stack Overflow" />
      </a>
    </div>
  );
};

export default SocialLinks;
