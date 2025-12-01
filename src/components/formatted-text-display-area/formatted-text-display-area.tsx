import { useFormat } from "./hooks/use-format";
import { CodeMirrorEditor } from "../code-mirror-editor/code-mirror-editor";
import { CopyButton } from "../copy-button/copy-button";
import { ResetButton } from "../reset-button/reset-button";
import { ToggleSwitch } from "../toggle-switch/toggle-switch";
import styles from "./formatted-text-display-area.module.css";

export const FormattedTextDisplayArea = () => {
	const {
		text,
		setText,
		formattedText,
		resetText,
		addTrailingSlash,
		setAddTrailingSlash,
	} = useFormat();

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputSection}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionLabel}>STRUCTURE INPUT</span>
					<ResetButton onReset={resetText} />
				</div>
				<CodeMirrorEditor value={text} onChangeValue={setText} />
			</div>
			<div className={styles.previewSection}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionLabel}>PREVIEW</span>
					<div className={styles.previewActions}>
						<ToggleSwitch
							label="Add trailing slash"
							checked={addTrailingSlash}
							onChange={setAddTrailingSlash}
						/>
						<CopyButton text={formattedText} />
					</div>
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
