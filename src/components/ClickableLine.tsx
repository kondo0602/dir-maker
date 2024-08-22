import type { FC } from "react";
import type { Directory } from "../types/directory";
import { generateDirectoryLineData } from "./hooks/directories/generateDirectoryLineData";

type ClickableLineProps = {
	dirIndex: number;
	directories: Directory[];
	onClick: (dirData: Directory) => void;
};

export const ClickableLine: FC<ClickableLineProps> = ({ dirIndex, directories, onClick }) => {
  const {prefixes, dirData} =  generateDirectoryLineData(directories,dirIndex)
  
  return (
    <div className="flex">
      {prefixes.map((prefix, index) => (
        <div key={`${dirData.dirName}-${index}`}>{prefix}</div>
      ))}
      <div className="cursor-pointer hover:bg-slate-200 rounded" onClick={() => onClick(dirData)}>
        {dirData.dirName}
      </div>
    </div>
  )
}
