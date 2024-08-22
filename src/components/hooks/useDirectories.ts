import { useState } from "react"
import type { Directory } from "../../types/directory"
import { calculateDepth, isLast, separateLines } from "./formatTextAsDirectoryTree/formatTextAsDirectoryTree"

export const useDirectories = () => {
  const [directories, setDirectories] = useState<Directory[]>([])
  const generateDirectories = (text: string) => {
    const newDirectories = separateLines(text)
      .map((line) => ({ dirName: line.trim(), depth: calculateDepth(line) }))
      .map((line, index, array): Directory => ({
        ...line,
        isLast: isLast(line, array[index + 1], array.slice(index + 1)),
      }))
    setDirectories(newDirectories)
  }

	const getFullPath = (index: number): string => {
    const clickedItem = directories[index];
    if(!clickedItem) return ""
		const path: string[] = [clickedItem.dirName];
		let currentDepth = clickedItem.depth;
		// 現在の項目から上位のディレクトリを遡る
		for (let i = index - 1; i >= 0; i--) {
			const item = directories[i];
			if (item && item.depth < currentDepth) {
				path.unshift(item.dirName);
				currentDepth = item.depth;
				// ルートに到達したら終了
				if (currentDepth === 0) break;
			}
		}
		// パスの配列を文字列に結合
		return path.join('/').replace('//', '/'); // 重複するスラッシュを除去
	}

  return {directories, setDirectories, generateDirectories, getFullPath}
}