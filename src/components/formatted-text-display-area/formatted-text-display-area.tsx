import { useFormat } from "./hooks/use-format";
import { ClickableLine } from "../clickable-line/clickable-line";
import { CodeMirrorEditor } from "../code-mirror-editor/code-mirror-editor";
import { CopyButton } from "../copy-button/copy-button";
import styles from "./formatted-text-display-area.module.css";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedLines } = useFormat();

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputSection}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionLabel}>STRUCTURE INPUT</span>
				</div>
				<CodeMirrorEditor value={text} onChangeValue={setText} />
			</div>
			<div className={styles.previewSection}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionLabel}>PREVIEW</span>
					<CopyButton
						className={styles.button}
						text={formattedLines.map((line) => line.displayText).join("\n")}
					/>
				</div>
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
		</div>
	);
};
