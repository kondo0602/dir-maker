import { CopyButton } from './CopyButton';
import { useFormat, useKeyDown } from './hooks';
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

  const handleKeyDown = useKeyDown(setInputText);

  return (
    <div className="grid gap-x-8 gap-y-4 w-full px-8 md:grid-cols-2 md:gap-y-2">
      <textarea
        className="md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-2 h-96 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto focus:ring-blue-500 focus:border-blue-500 md:h-[32rem]"
        spellCheck="false"
        value={inputText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <CopyButton
        className="justify-self-end hidden md:block md:col-start-2 md:col-span-1 md:row-start-1"
        text={formattedText}
      />
      <textarea
        className="h-96 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
        value={formattedText}
        disabled
        spellCheck="false"
      />
    </div>
  );
};
