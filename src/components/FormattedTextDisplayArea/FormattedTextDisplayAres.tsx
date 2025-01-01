import { useFormat } from "../../hooks/useFormat";
import { useTooltip } from "../../hooks/useTooltip/useTooltip";
import { ClickableLine } from "../ClickableLine/ClickableLine";
import { CodeMirrorEditor } from "../CodeMirrorEditor/CodeMirrorEditor";
import { CopyButton } from "../CopyButton/CopyButton";
import { CopyTooltip } from "../CopyTooltip/CopyTooltip";
import styles from "./FormattedTextDisplayArea.module.css";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedLines } = useFormat();
	const { tooltipRef, position, isVisible, showTooltip } = useTooltip();

	return (
		<div className={styles.wrapper}>
			<CodeMirrorEditor value={text} onChangeValue={setText} />
			<CopyButton
				className={styles.button}
				text={formattedLines.map((line) => line.displayText).join("\n")}
				showTooltip={showTooltip}
			/>
			<div className={styles.formattedTextarea}>
				{formattedLines.map((formattedLine, index) => (
					<ClickableLine
						// biome-ignore lint:行の入れ替えが発生し得ないため、keyにindexを設定している
						key={index}
						formattedLine={formattedLine}
						showTooltip={showTooltip}
					/>
				))}
			</div>
			<CopyTooltip
				tooltipRef={tooltipRef}
				position={position}
				isVisible={isVisible}
			/>
		</div>
	);
};
