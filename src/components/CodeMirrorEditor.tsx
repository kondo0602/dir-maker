import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import type { FC } from "react";

const customStyle = EditorView.baseTheme({
	"&.cm-focused": {
		outline: "none",
	},
	".cm-line": {
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		fontWeight: "400",
	},
});

type CodeMirrorEditorProps = {
	value: string;
	onChangeValue: (value: string) => void;
};

export const CodeMirrorEditor: FC<CodeMirrorEditorProps> = ({
	value,
	onChangeValue,
}) => {
	return (
		<CodeMirror
			className="p-2.5 md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-2 h-80 text-base text-gray-900 border border-gray-300 rounded-lg overflow-auto md:h-[32rem]"
			height="100%"
			value={value}
			onChange={onChangeValue}
			basicSetup={{
				lineNumbers: false,
				foldGutter: false,
				tabSize: 1,
			}}
			extensions={[customStyle]}
		/>
	);
};
