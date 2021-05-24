import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { HTMLAttributes } from 'react';
import classnames from 'clsx';

export interface CodeBlockProps {
  className?: string;

  /**
   * Show code line numbers?
   */
  noLineNumbers?: boolean;
  /**
   * The filename.
   */
  filename?: string;
  /**
   * The code.
   */
  children: string;
}
export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  noLineNumbers?: boolean;
  customClass?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  noLineNumbers = false,
  className = '',
  filename,
  children,
  ...rest
}) => {
  const language = (
    className.replace(/language-/, '') === '' ? 'markup' : className.replace(/language-/, '')
  ) as Language;

  const showTopbar = !!filename;

  return (
    <div {...rest} className={classnames('transition-colors duration-500', showTopbar && 'my-3')}>
      {showTopbar && (
        <div className="text-gray-800 dark:text-gray-200 py-2 px-5 border-t border-l border-r border-gray-100 dark:border-gray-700 rounded-t bg-gray-200 dark:bg-gray-800 font-bold">
          {filename}
        </div>
      )}

      <Highlight
        {...defaultProps}
        // Disables using default theme so we can style using tailwind css
        theme={undefined}
        code={children.trim()}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={classnames(
              'text-gray-200 overflow-x-auto text-sm leading-relaxed py-3 px-5 border bg-gray-50 border-gray-200 dark:border-gray-700 dark:bg-gray-900',
              showTopbar ? 'mt-0 rounded-b' : 'my-3 rounded',
            )}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                {!noLineNumbers && (
                  <div className="text-black dark:text-white table-cell text-right pr-2 select-none opacity-50">
                    {i + 1}
                  </div>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
