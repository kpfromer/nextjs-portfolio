import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaStackOverflow } from 'react-icons/fa';
import info from '@configs/info';
import classnames from 'classnames';
import Icon from '@components/Icon';
import { HtmlHTMLAttributes } from 'react';

export interface SocialLinksProps extends HtmlHTMLAttributes<HTMLDivElement> {
  spacing?: string;
  color?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ spacing = 'space-x-4', color, ...props }) => {
  return (
    <div
      {...props}
      className={classnames(
        props.className,
        spacing,
        color ? color : 'text-gray-700 dark:text-white',
      )}
    >
      <a target="_blank" rel="noopener noreferrer" href={info.github} aria-label="Github">
        <Icon as={FiGithub} aria-hidden className="w-10 h-10" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href={info.linkedin} aria-label="LinkedIn">
        <Icon as={FiLinkedin} aria-hidden className="w-10 h-10" />
      </a>

      <a rel="noopener noreferrer" href={info.stackoverflow} aria-label="Stack Overflow">
        <Icon as={FaStackOverflow} aria-hidden className="w-10 h-10" />
      </a>
    </div>
  );
};

export default SocialLinks;
