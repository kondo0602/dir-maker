import type { FC } from "react";
import styles from "./toggle-switch.module.css";

type ToggleSwitchProps = {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
	label,
	checked,
	onChange,
}) => {
	return (
		<label className={styles.container}>
			<span className={styles.label}>{label}</span>
			<input
				type="checkbox"
				className={styles.input}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<span className={styles.switch} />
		</label>
	);
};
