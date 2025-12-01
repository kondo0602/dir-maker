import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "./format-text-as-directory-tree/format-text-as-directory-tree";

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
  vite-env.d.ts
 .gitignore
 eslint.config.js
 index.html
 package.json
 tsconfig.json
 vite.config.ts
`;

export const useFormat = () => {
	const [text, setText] = useState<string>(DEFAULT_VALUE);
	const debouncedValue = useDebounce(text, { wait: 300 });
	const formattedText = formatTextAsDirectoryTree(debouncedValue).join("\n");

	return { text, setText, formattedText };
};
