import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "./formatTextAsDirectoryTree";
import Editor from 'react-simple-code-editor';

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

export const useTextarea = () => {
  const [inputText, setInputText] = useState<string>(defaultValue);
  const debouncedValue = useDebounce(inputText, { wait: 300 });
  const formattedText = formatTextAsDirectoryTree(debouncedValue);

  const Textarea =
    <Editor
      value={inputText}
      onValueChange={setInputText}
      highlight={(code: string) => code}
      tabSize={1}
      padding={10}
      className={"md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-2 h-96 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto focus:ring-blue-500 focus:border-blue-500 md:h-[32rem]"}
    />

  return {
    Textarea,
    formattedText,
  };
};
