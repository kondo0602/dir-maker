import { useFormat } from "./hooks/use-format";
import { CodeMirrorEditor } from "../code-mirror-editor/code-mirror-editor";
import { CopyButton } from "../copy-button/copy-button";
import styles from "./formatted-text-display-area.module.css";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedText } = useFormat();

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
					<CopyButton className={styles.button} text={formattedText} />
				</div>
				<textarea
					className={styles.formattedTextarea}
					value={formattedText}
					readOnly
				/>
			</div>
		</div>
	);
};
