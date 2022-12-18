import { useCallback, useEffect, useState } from 'react';

const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export function useCopyToClipboard(): { isCopied: boolean; onCopy: (data: string) => void } {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = useCallback(
    (data: string) => {
      copyToClipboard(data);
      setIsCopied(true);
    },
    [isCopied],
  );

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 2000);
      return () => {
        clearTimeout(timeout);
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [isCopied]);

  return { isCopied, onCopy: copyCode };
}
