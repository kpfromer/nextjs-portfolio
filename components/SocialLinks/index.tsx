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
      <a target="_blank" rel="noopener noreferrer" href={info.github}>
        <Icon as={FiGithub} className="w-10 h-10" aria-label="Github" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href={info.linkedin}>
        <Icon as={FiLinkedin} className="w-10 h-10" aria-label="LinkedIn" />
      </a>

      <a rel="noopener noreferrer" href={info.stackoverflow}>
        <Icon as={FaStackOverflow} className="w-10 h-10" aria-label="Stack Overflow" />
      </a>
    </div>
  );
};

export default SocialLinks;
