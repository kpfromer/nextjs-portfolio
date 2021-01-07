import styled from '@emotion/styled';
import { useCopyToClipboard } from '@hooks/use-copy-to-clipboard';
import { lighten } from 'polished';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';
import { Box, Button, Flex, FlexProps } from '@chakra-ui/react';
import okaidiaTheme from '../okaidia-prism-theme';

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

const Pre = styled.pre`
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  /* TODO: */
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  tab-size: 4;

  hyphens: none;

  padding: 1em;
  margin: 0;
  overflow: auto;
  border-radius: 0.3em;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

// /**
//  * Converts the code prism theme ui style to the one used by `prism-react-renderer`.
//  * @param codeTheme The theme given by @chakra-ui/react.
//  */
// export function convertTheme(codeTheme: any): PrismTheme {
//   const items = Object.entries(codeTheme);

//   const plain = items
//     .filter(([key]) => !key.includes('.'))
//     .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

//   // TODO: mergeing
//   const styles = items
//     .filter(([key]) => key.includes('.'))
//     .map(([key, value]) => {
//       const classNames = key.split(',').map((value) => value.replace(/\./g, ''));

//       return { types: classNames, style: value };
//     }) as PrismTheme['styles'];

//   return { plain, styles };
// }

export interface CodeBlockProps extends FlexProps {}

const CodeBlock: React.FC<CodeBlockProps> = ({
  noLineNumbers = false,
  className = '',
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
    <Flex flexDirection="column" {...rest}>
      <Flex flexDirection="row">
        {/* File Name Tag */}
        {filename && (
          <Box
            ml={4}
            p={2}
            bg={codeTheme.plain.backgroundColor}
            color="white"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
            fontSize="md"
          >
            {filename}
          </Box>
        )}

        {/* Code Language Tag */}
        {(language as string) !== 'none' && (
          <Box
            ml="auto"
            mr={4}
            p={2}
            bg={codeTheme.plain.backgroundColor}
            color="white"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
            fontSize="md"
          >
            {language}
          </Box>
        )}
      </Flex>

      {/* Code */}
      <Box position="relative">
        <Button
          position="absolute"
          top="10px"
          right="10px"
          fontSize="md"
          onClick={() => onCopy(children)}
          color="white"
          bg={lighten(0.1, codeTheme.plain.backgroundColor)}
          _hover={{ bg: lighten(0.1, codeTheme.plain.backgroundColor) }}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </Button>

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
      </Box>
    </Flex>
  );
};

export default CodeBlock;
