import type { Directory } from "../../../types/directory"
import { calculateDepth, isLast, separateLines } from "../formatTextAsDirectoryTree/formatTextAsDirectoryTree"

export const parseTextToDirectories = (text: string): Directory[] => {
  return separateLines(text)
    .map((line) => ({ dirName: line.trim(), depth: calculateDepth(line) }))
    .map((line, index, array): Directory => ({
      ...line,
      isLast: isLast(line, array[index + 1], array.slice(index + 1)),
    }))
}
