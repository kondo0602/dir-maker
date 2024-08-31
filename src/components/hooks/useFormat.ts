import { useDebounce } from "ahooks";
import { useState } from "react";
import { formatTextAsDirectoryTree } from "./formatTextAsDirectoryTree/formatTextAsDirectoryTree";

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
	const { formattedText } = formatTextAsDirectoryTree(debouncedValue);

	return { text, setText, formattedText };
};
