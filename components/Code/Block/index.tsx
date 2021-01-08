import { useCopyToClipboard } from '@hooks/use-copy-to-clipboard';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { HTMLAttributes } from 'react';
import okaidiaTheme from '../okaidia-prism-theme';
import classnames from 'classnames';

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

const Pre: React.FC<HTMLAttributes<HTMLPreElement>> = ({ ...props }) => (
  <pre
    {...props}
    style={{ ...props.style, color: '#f8f8f2' }}
    className={classnames(
      props.className,
      'font-mono text-left whitespace-pre leading-6 p-4 rounded-md overflow-auto',
    )}
  />
);

const Line: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className="table-row" />
);

const LineNo: React.FC<HTMLAttributes<HTMLSpanElement>> = (props) => (
  <div {...props} className="table-cell text-right pr-2 select-none opacity-50" />
);

const LineContent: React.FC<HTMLAttributes<HTMLSpanElement>> = (props) => (
  <span {...props} className="table-cell " />
);

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  noLineNumbers?: boolean;
  customClass?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  noLineNumbers = false,
  className = '',
  customClass,
  filename,
  children,
  ...rest
}) => {
  const { isCopied, onCopy } = useCopyToClipboard();

  const codeTheme = okaidiaTheme;

  const language = (className.replace(/language-/, '') === ''
    ? 'markup'
    : className.replace(/language-/, '')) as Language;

  return (
    <div {...rest} className={classnames('flex flex-col', customClass)}>
      <div className="flex flex-row">
        {/* File Name Tag */}
        {filename && (
          <div
            className="ml-4 p-2 text-white rounded-tl rounded-tr text-md"
            style={{ backgroundColor: codeTheme.plain.backgroundColor }}
          >
            {filename}
          </div>
        )}

        {/* Code Language Tag */}
        {(language as string) !== 'none' && (
          <div
            className="ml-auto mr-4 p-2 text-white rounded-tl rounded-tr text-md"
            style={{ backgroundColor: codeTheme.plain.backgroundColor }}
          >
            {language}
          </div>
        )}
      </div>

      {/* Code */}
      <div className="relative">
        <div
          className="btn-gray absolute top-2 right-2 text-md text-white"
          onClick={() => onCopy(children)}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </div>

        {/* Code */}
        <Highlight {...defaultProps} theme={codeTheme} code={children.trim()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {!noLineNumbers && <LineNo>{i + 1}</LineNo>}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
