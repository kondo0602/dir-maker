/**
 * 改行を含む複数行のテキストを1行ごとの配列にして返す
 *
 * @param text - 改行を含む複数行のテキスト
 * @returns 1行ごとの配列
 */
export const separateLines = (text: string): string[] => {
	return text.split("\n").filter((line) => line.trim() !== "");
};
