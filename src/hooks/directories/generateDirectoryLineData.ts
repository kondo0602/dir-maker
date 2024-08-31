import type { Directory } from "../../types/directory";

export const generateDirectoryLineData = <T extends Directory[]>(
	directories: T,
	dirIndex: number & keyof T,
) => {
	const dirData = directories[dirIndex] as Directory;
	const resultPrefixes = [];
	for (let i = 1; i < dirData.depth; i++) {
		const previousLinesSameDepth = directories
			.slice(0, dirIndex)
			.reverse()
			.find((l) => l.depth === i);
		if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
			resultPrefixes.push("│  ");
		} else {
			resultPrefixes.push("   ");
		}
	}
	if (dirData.depth !== 0) resultPrefixes.push(dirData.isLast ? "└─ " : "├─ ");

	return { prefixes: resultPrefixes, dirData: dirData };
};
