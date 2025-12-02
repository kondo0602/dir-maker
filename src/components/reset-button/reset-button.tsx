import { RotateCcw } from "lucide-react";
import type { FC } from "react";
import styles from "./reset-button.module.css";

type ResetButtonProps = {
	onReset: () => void;
};

export const ResetButton: FC<ResetButtonProps> = ({ onReset }) => {
	return (
		<button type="button" className={styles.button} onClick={onReset}>
			<RotateCcw size={14} />
			<span>Reset</span>
		</button>
	);
};
