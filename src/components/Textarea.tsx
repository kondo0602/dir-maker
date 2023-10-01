import { useState, type ChangeEvent } from 'react';
import { useDebounce } from 'ahooks';
import { formatTextAsDirectoryTree } from './hooks/formatTextAsDirectoryTree';

export const Textarea = () => {
  const [inputText, setInputText] = useState<string>('');
  const debouncedValue = useDebounce(inputText, { wait: 500 });
  const formattedText = formatTextAsDirectoryTree(debouncedValue);

  return (
    <div className="flex justify-center w-full p-8 gap-8">
      <textarea
        className="flex-auto h-96 px-4 py-2 border font-mono"
        value={inputText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputText(e.target.value)
        }
      />
      <textarea
        className="flex-auto h-96 px-4 py-2 border font-mono"
        value={formattedText}
        disabled
      />
    </div>
  );
};
