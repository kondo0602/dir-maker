import { useState } from 'react';
import { useDebounce } from 'ahooks';
import { formatTextAsDirectoryTree } from './formatTextAsDirectoryTree';

export const useFormat = (defaultValue: string) => {
  const [inputText, setInputText] = useState<string>(defaultValue);
  const debouncedValue = useDebounce(inputText, { wait: 500 });
  const formattedText = formatTextAsDirectoryTree(debouncedValue);

  return {
    inputText,
    setInputText,
    formattedText,
  };
};
