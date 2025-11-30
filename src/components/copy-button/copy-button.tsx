import { clsx } from "clsx";
import { Check, Copy } from "lucide-react";
import { type ComponentProps, type FC, useCallback, useState } from "react";
import styles from "./copy-button.module.css";

type CopyButtonProps = ComponentProps<"button"> & {
	text: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ className, text }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);

		setTimeout(() => setIsCopied(false), 2000);
	}, [text]);

	return (
		<button
			type="button"
			className={clsx(className, styles.button)}
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
					<span>Copy</span>
				</>
			)}
		</button>
	);
};
