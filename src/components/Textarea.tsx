import CodeMirror from "@uiw/react-codemirror";
import { useDebounce } from "ahooks";
import { EditorView } from "codemirror";
import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { formatTextAsDirectoryTree } from "./hooks/formatTextAsDirectoryTree";

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
	const [inputText, setInputText] = useState<string>(defaultValue);
	const debouncedValue = useDebounce(inputText, { wait: 300 });
	const formattedText = formatTextAsDirectoryTree(debouncedValue);

	const fontSize = EditorView.baseTheme({
		"&.cm-focused": {
			outline: "none",
		},
		".cm-line": {
			fontFamily:
				'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
			fontWeight: "400",
		},
	});

	return (
		<div className="grid gap-x-8 gap-y-4 w-full px-8 md:grid-cols-2 md:gap-y-2">
			<CodeMirror
				className="p-2.5 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-2 h-80 text-base text-gray-900 border border-gray-300 rounded-lg overflow-auto md:h-[32rem]"
				height="100%"
				value={inputText}
				onChange={setInputText}
				basicSetup={{
					lineNumbers: false,
					foldGutter: false,
					tabSize: 1,
				}}
				extensions={[fontSize]}
			/>
			<CopyButton
				className="justify-self-end hidden md:block md:col-start-2 md:col-span-1 md:row-start-1"
				text={formattedText}
			/>
			<textarea
				className="h-80 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
				value={formattedText}
				disabled
				spellCheck="false"
			/>
		</div>
	);
};
