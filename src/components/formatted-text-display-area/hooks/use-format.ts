import { useDebounce, useLocalStorageState } from "ahooks";
import { formatTextAsDirectoryTree } from "./format-text-as-directory-tree/format-text-as-directory-tree";

const LOCAL_STORAGE_KEY = "DIR_MAKER_INPUT";

const DEFAULT_VALUE = `/
 public
  vite.svg
 src
  assets
   react.svg
  App.css
  App.tsx
  index.css
  main.tsx
 .gitignore
 eslint.config.js
 index.html
 package-lock.json
 package.json
 tsconfig.json
 vite.config.ts
`;

export const useFormat = () => {
	const [text, setText] = useLocalStorageState(
    LOCAL_STORAGE_KEY, {
		defaultValue: DEFAULT_VALUE,
	});
	const debouncedValue = useDebounce(text, { wait: 300 });
	const formattedText = formatTextAsDirectoryTree(debouncedValue ?? "").join("\n");
	const resetText = () => setText(DEFAULT_VALUE);

	return {
    text: text ?? "",
    formattedText,
    setText,
    resetText,
  };
};
