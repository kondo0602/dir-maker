import { useFormat } from "../../hooks/useFormat";
import { ClickableLine } from "../ClickableLine/ClickableLine";
import { CodeMirrorEditor } from "../CodeMirrorEditor/CodeMirrorEditor";
import { CopyButton } from "../CopyButton/CopyButton";
import styles from "./FormattedTextDisplayArea.module.css";

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
