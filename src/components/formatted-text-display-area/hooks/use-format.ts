import { useDebounce, useLocalStorageState } from "ahooks";
import { formatTextAsDirectoryTree } from "./format-text-as-directory-tree/format-text-as-directory-tree";

const LOCAL_STORAGE_KEY_INPUT = "DIR_MAKER_INPUT";

const LOCAL_STORAGE_KEY_TRAILING_SLASH = "DIR_MAKER_TRAILING_SLASH";

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
	const [text, setText] = useLocalStorageState(LOCAL_STORAGE_KEY_INPUT, {
		defaultValue: DEFAULT_VALUE,
	});
	const [addTrailingSlash, setAddTrailingSlash] = useLocalStorageState(
		LOCAL_STORAGE_KEY_TRAILING_SLASH,
		{ defaultValue: false },
	);
	const debouncedValue = useDebounce(text, { wait: 300 });
	const formattedText = formatTextAsDirectoryTree(debouncedValue ?? "", {
		addTrailingSlash: addTrailingSlash ?? false,
	}).join("\n");
	const resetText = () => setText(DEFAULT_VALUE);

	return {
		text: text ?? "",
		formattedText,
		setText,
		resetText,
		addTrailingSlash: addTrailingSlash ?? false,
		setAddTrailingSlash,
	};
};
