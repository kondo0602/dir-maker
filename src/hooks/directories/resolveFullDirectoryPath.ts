import type { Directory } from "../../types/directory";

export const resolveFullDirectoryPath = (
	directories: Directory[],
	index: number,
): string => {
	const clickedItem = directories[index];
	if (!clickedItem) return "";
	const path: string[] = [clickedItem.dirName];
	let currentDepth = clickedItem.depth;
	for (let i = index - 1; i >= 0; i--) {
		const item = directories[i];
		if (item && item.depth < currentDepth) {
			path.unshift(item.dirName);
			currentDepth = item.depth;
			if (currentDepth === 0) break;
		}
	}
	return path.join("/").replace("//", "/");
};
