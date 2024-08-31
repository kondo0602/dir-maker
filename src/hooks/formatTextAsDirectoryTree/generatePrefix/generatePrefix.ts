/**
 * 深さに応じたプレフィックスを生成する
 *
 * @param line - 現在の行
 * @param allLines - 全ての行
 * @returns プレフィックス
 */
export const generatePrefix = (
	line: { dirName: string; depth: number; isLast: boolean },
	allLines: { dirName: string; depth: number; isLast: boolean }[],
): string => {
	let prefix = "";

	for (let i = 1; i < line.depth; i++) {
		const previousLinesSameDepth = allLines
			.slice(0, allLines.indexOf(line))
			.reverse()
			.find((l) => l.depth === i);

		if (previousLinesSameDepth && !previousLinesSameDepth.isLast) {
			prefix += "│  ";
		} else {
			prefix += "   ";
		}
	}

	prefix += line.isLast ? "└─ " : "├─ ";

	return prefix;
};
