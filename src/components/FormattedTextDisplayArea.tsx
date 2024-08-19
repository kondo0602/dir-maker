import { CodeMirrorEditor } from "./CodeMirrorEditor";
import { CopyButton } from "./CopyButton";
import { useFormat } from "./hooks/useFormat";

export const FormattedTextDisplayArea = () => {
	const { text, setText, formattedText, formattedDirData } = useFormat();

	return (
		<div className="grid gap-x-8 gap-y-4 w-full px-8 md:grid-cols-2 md:gap-y-2">
			<CodeMirrorEditor value={text} onChangeValue={setText} />
			<CopyButton
				className="justify-self-end hidden md:block md:col-start-2 md:col-span-1 md:row-start-1"
				text={formattedText}
			/>
			<textarea
				className="h-80 p-2.5 font-mono text-base text-gray-900 border border-gray-300 rounded-lg whitespace-pre overflow-auto md:col-start-2 md:col-span-1 md:row-start-2 md:h-[32rem]"
				value={formattedText}
				disabled
				spellCheck="false"
			/>
		</div>
	);
};
