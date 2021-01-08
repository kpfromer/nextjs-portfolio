import okaidiaPrismTheme from '../okaidia-prism-theme';

export interface InlineProps {}

const Inline: React.FC<InlineProps> = ({ children }) => {
  return (
    <span
      style={okaidiaPrismTheme.plain as unknown}
      className="py-1 px-2 rounded whitespace-nowrap font-mono"
    >
      {children}
    </span>
  );
};

export default Inline;
