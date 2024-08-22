import { useState } from "react"
import type { Directory } from "../../types/directory"
import { parseTextToDirectories } from "./directories/parseTextToDirectories"
import { resolveFullDirectoryPath } from "./directories/resolveFullDirectoryPath"

export const useDirectories = () => {
  const [directories, setDirectories] = useState<Directory[]>([])
  
  const generateDirectories = (text: string) => {
    const newDirectories = parseTextToDirectories(text)
    setDirectories(newDirectories)
  }

  const getFullPath = (index: number): string => {
    return resolveFullDirectoryPath(directories, index)
  }

  return {directories, setDirectories, generateDirectories, getFullPath}
}