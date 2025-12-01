import { calculateDepth } from "./calculate-depth/calculate-depth";
import { generatePrefix } from "./generate-prefix/generate-prefix";
import { isLastLine } from "./is-last-line/is-last-line";
import { separateLines } from "./separate-lines/separate-lines";

type FormatOptions = {
	addTrailingSlash: boolean;
};

export const formatTextAsDirectoryTree = (
	text: string,
	options: FormatOptions = { addTrailingSlash: false },
): string[] => {
	const { addTrailingSlash } = options;

	return separateLines(text)
		.map((line) => ({ dirName: line, depth: calculateDepth(line) }))
		.map((line, index, array) => ({
			...line,
			isLast: isLastLine(line, array[index + 1], array.slice(index + 1)),
			hasChildren: array.slice(index + 1).some((l) => l.depth > line.depth),
		}))
		.map((line, _, array) => {
			const formatted = line.dirName.replace(
				/^\s+/,
				generatePrefix(line, array),
			);
			if (addTrailingSlash && line.hasChildren && !formatted.endsWith("/")) {
				return `${formatted}/`;
			}
			return formatted;
		});
};
