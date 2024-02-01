import { useDebounce } from "ahooks";
import { useState, type ChangeEvent } from "react";
import { formatTextAsDirectoryTree } from "./formatTextAsDirectoryTree";
import { getLines } from "./getLines";

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

export const useEditor = () => {
  const [inputText, setInputText] = useState<string>(defaultValue);
  const debouncedValue = useDebounce(inputText, { wait: 500 });
  const formattedText = formatTextAsDirectoryTree(debouncedValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { value, selectionStart, selectionEnd } = e.currentTarget;

    if (e.key === "Tab") {
      e.preventDefault();

      if (selectionStart === selectionEnd) {
        const newValue = value.substring(0, selectionStart) + " " + value.substring(selectionEnd);
        e.currentTarget.value = newValue;
        e.currentTarget.selectionStart = selectionStart + 1;
        e.currentTarget.selectionEnd = selectionEnd + 1;
        setInputText(newValue);
      } else {
        const linesBeforeCaret = getLines(value, selectionStart);
        const startLine = linesBeforeCaret.length - 1;
        const endLine = getLines(value, selectionEnd).length - 1;
        const startLineText = linesBeforeCaret[startLine];

        const newValue = value
          .split('\n')
          .map((line, i) => {
            if (i >= startLine && i <= endLine) {
              return " " + line;
            }

            return line;
          })
          .join('\n');

        e.currentTarget.value = newValue;
        e.currentTarget.selectionStart = startLineText && /\S/.test(startLineText)
        ? selectionStart + 1
        : selectionStart;
        e.currentTarget.selectionEnd = selectionEnd + 1 * (endLine - startLine + 1)
        setInputText(newValue);
      }
    }
  };

  const Editor =
    <textarea
      className="md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-2 h-96 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto focus:ring-blue-500 focus:border-blue-500 md:h-[32rem]"
      spellCheck="false"
      value={inputText}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
      onKeyDown={handleKeyDown}
    />

  return {
    Editor,
    formattedText,
  };
};
