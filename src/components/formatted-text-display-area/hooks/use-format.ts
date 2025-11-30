import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "./format-text-as-directory-tree/format-text-as-directory-tree";

const defaultValue = `/
 public
  vite.svg
 src
  assets
   react.svg
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
 .gitignore
 eslint.config.js
 index.html
 package.json
 tsconfig.json
 vite.config.ts
`;

export const useFormat = () => {
	const [text, setText] = useState<string>(defaultValue);
	const debouncedValue = useDebounce(text, { wait: 300 });
	const formattedLines = formatTextAsDirectoryTree(debouncedValue);

	return { text, setText, formattedLines };
};
