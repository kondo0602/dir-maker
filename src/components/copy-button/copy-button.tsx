import { Check, Copy } from "lucide-react";
import { type ComponentProps, type FC, useCallback, useState } from "react";
import styles from "./copy-button.module.css";

type CopyButtonProps = ComponentProps<"button"> & {
	text: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);

		setTimeout(() => setIsCopied(false), 2000);
	}, [text]);

	return (
		<button
			type="button"
			className={styles.button}
			data-copied={isCopied}
			onClick={handleCopy}
		>
			{isCopied ? (
				<>
					<Check size={14} />
					<span>Copied!</span>
				</>
			) : (
				<>
					<Copy size={14} />
					<span>Copy Output</span>
				</>
			)}
		</button>
	);
};
