import type { PrismTheme } from 'prism-react-renderer';

export default {
  plain: {
    color: '#f8f8f2',
    backgroundColor: '#272822',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'slategray',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#f8f8f2',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: '.7',
      },
    },
    {
      types: ['property', 'tag', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#f92672',
      },
    },
    {
      types: ['boolean', 'number'],
      style: {
        color: '#ae81ff',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#a6e22e',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'language-css string', 'style string', 'variable'],
      style: {
        color: '#f8f8f2',
      },
    },
    {
      types: ['atrule', 'attr-value', 'function', 'class-name'],
      style: {
        color: '#e6db74',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#66d9ef',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#fd971f',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
  ],
} as PrismTheme;
