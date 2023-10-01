import { useState, type ChangeEvent } from 'react';
import { useDebounce } from 'ahooks';
import { formatTextAsDirectoryTree } from './hooks/formatTextAsDirectoryTree';

const defaultValue = `/
 src
  components
   Textarea.tsx
  pages
   index.astro
 .gitignore
 astro.config.mjs
 package.json
 package.lock.json
 tsconfig.json
`;

export const Textarea = () => {
  const [inputText, setInputText] = useState<string>(defaultValue);
  const debouncedValue = useDebounce(inputText, { wait: 500 });
  const formattedText = formatTextAsDirectoryTree(debouncedValue);

  return (
    <div className="flex justify-center w-full p-8 gap-8">
      <textarea
        className="flex-auto h-96 p-2.5 font-mono text-sm text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto focus:ring-blue-500 focus:border-blue-500 "
        value={inputText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputText(e.target.value)
        }
        spellCheck="false"
      />
      <textarea
        className="flex-auto h-96 p-2.5 font-mono text-sm text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto"
        value={formattedText}
        disabled
        spellCheck="false"
      />
    </div>
  );
};
