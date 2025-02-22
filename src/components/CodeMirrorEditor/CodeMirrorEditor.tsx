import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import type { FC } from "react";
import styles from "./CodeMirrorEditor.module.css";

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
			className={styles.textarea}
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
