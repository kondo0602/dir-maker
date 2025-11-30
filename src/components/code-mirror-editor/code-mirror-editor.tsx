import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import type { FC } from "react";
import styles from "./code-mirror-editor.module.css";

const customStyle = EditorView.theme({
	"&": {
		backgroundColor: "var(--color-white)",
		color: "var(--text-color-gray-900)",
	},
	"&.cm-focused": {
		outline: "none",
	},
	".cm-content": {
		caretColor: "var(--text-color-gray-900)",
	},
	".cm-cursor": {
		borderLeftColor: "var(--text-color-gray-900)",
	},
	".cm-line": {
		fontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		fontWeight: "400",
	},
	".cm-activeLine": {
		backgroundColor: "transparent",
	},
	"&.cm-focused .cm-activeLine": {
		backgroundColor: "var(--color-accent-light)",
	},
	".cm-activeLineGutter": {
		backgroundColor: "transparent",
	},
	"&.cm-focused .cm-activeLineGutter": {
		backgroundColor: "var(--color-accent-light)",
	},
	".cm-gutters": {
		backgroundColor: "var(--color-white)",
		borderRight: "none",
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
