import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "./format-text-as-directory-tree/format-text-as-directory-tree";

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

export const useFormat = () => {
	const [text, setText] = useState<string>(defaultValue);
	const debouncedValue = useDebounce(text, { wait: 300 });
	const formattedLines = formatTextAsDirectoryTree(debouncedValue);

	return { text, setText, formattedLines };
};
