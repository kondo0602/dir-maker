import { CopyButton } from './CopyButton';
import { useFormat } from './hooks/useFormat';
import type { ChangeEvent } from 'react';

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
  const { inputText, setInputText, formattedText } = useFormat(defaultValue);

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full px-8">
      <textarea
        className="col-start-1 col-span-1 row-start-2 row-span-2 h-96 p-2.5 font-mono text-sm text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto focus:ring-blue-500 focus:border-blue-500"
        value={inputText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputText(e.target.value)
        }
        spellCheck="false"
      />
      <CopyButton
        className="col-start-2 col-span-1 row-start-1 justify-self-end"
        text={formattedText}
      />
      <textarea
        className="col-start-2 col-span-1 row-start-2 h-96 p-2.5 font-mono text-sm text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto"
        value={formattedText}
        disabled
        spellCheck="false"
      />
    </div>
  );
};
