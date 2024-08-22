import { useState } from "react"
import type { Directory } from "../../types/directory"
import { parseTextToDirectories } from "./directories/parseTextToDirectories"

export const useDirectories = () => {
  const [directories, setDirectories] = useState<Directory[]>([])
  const generateDirectories = (text: string) => {
    const newDirectories = parseTextToDirectories(text) 
    setDirectories(newDirectories)
  }
  return {directories, setDirectories, generateDirectories}
}