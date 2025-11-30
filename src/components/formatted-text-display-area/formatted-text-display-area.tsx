import { useFormat } from "../../hooks/useFormat";
import { ClickableLine } from "../clickable-line/clickable-line";
import { CodeMirrorEditor } from "../code-mirror-editor/code-mirror-editor";
import { CopyButton } from "../copy-button/copy-button";
import styles from "./formatted-text-display-area.module.css";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedLines } = useFormat();

	return (
		<div className={styles.wrapper}>
			<CodeMirrorEditor value={text} onChangeValue={setText} />
			<CopyButton
				className={styles.button}
				text={formattedLines.map((line) => line.displayText).join("\n")}
			/>
			<div className={styles.formattedTextarea}>
				{formattedLines.map((formattedLine, index) => (
					<ClickableLine
						// biome-ignore lint:行の入れ替えが発生し得ないため、keyにindexを設定している
						key={index}
						formattedLine={formattedLine}
					/>
				))}
			</div>
		</div>
	);
};
