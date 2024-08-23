import { describe, expect, it } from "vitest";
import type { Directory } from "../../../types/directory";
import { generateDirectoryLineData } from "./generateDirectoryLineData";

describe("generateDirectoryLineData", () => {
	const sampleDirectories: Directory[] = [
		{ dirName: "/", depth: 0, isLast: false, path: "/" },
		{ dirName: "folder1", depth: 1, isLast: false, path: "/folder1" },
		{
			dirName: "file1.txt",
			depth: 2,
			isLast: true,
			path: "/folder1/file1.txt",
		},
		{ dirName: "folder2", depth: 1, isLast: true, path: "/folder2" },
		{
			dirName: "file2.txt",
			depth: 2,
			isLast: true,
			path: "/folder2/file2.txt",
		},
	];

	it("ルートディレクトリのデータを正しく生成すること", () => {
		const result = generateDirectoryLineData(sampleDirectories, 0);
		expect(result).toEqual({
			prefixes: [],
			dirData: sampleDirectories[0],
		});
	});

	it("中間のディレクトリのデータを正しく生成すること", () => {
		const result = generateDirectoryLineData(sampleDirectories, 1);
		expect(result).toEqual({
			prefixes: ["├─ "],
			dirData: sampleDirectories[1],
		});
	});

	it("最後のファイルのデータを正しく生成すること", () => {
		const result = generateDirectoryLineData(sampleDirectories, 2);
		expect(result).toEqual({
			prefixes: ["│  ", "└─ "],
			dirData: sampleDirectories[2],
		});
	});

	it("最後のディレクトリのデータを正しく生成すること", () => {
		const result = generateDirectoryLineData(sampleDirectories, 3);
		expect(result).toEqual({
			prefixes: ["└─ "],
			dirData: sampleDirectories[3],
		});
	});

	it("深くネストされたファイルのデータを正しく生成すること", () => {
		const result = generateDirectoryLineData(sampleDirectories, 4);
		expect(result).toEqual({
			prefixes: ["   ", "└─ "],
			dirData: sampleDirectories[4],
		});
	});

	it("無効なインデックスに対してエラーをスローすること", () => {
		expect(() => generateDirectoryLineData(sampleDirectories, 10)).toThrow();
	});

	it("空のディレクトリ配列に対してエラーをスローすること", () => {
		expect(() => generateDirectoryLineData([], 0)).toThrow();
	});
});
