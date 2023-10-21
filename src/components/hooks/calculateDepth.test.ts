import { describe, it, expect } from 'vitest';
import { calculateDepth } from './formatTextAsDirectoryTree';

describe('calculateDepth', () => {
  it('行の先頭に空白がない場合、深さが0であること', () => {
    const result = calculateDepth('Line without leading spaces');
    expect(result).toBe(0);
  });

  it('行の先頭にスペースが含まれている場合、そのスペース数を返すこと', () => {
    const result = calculateDepth('    Indented line with spaces');
    expect(result).toBe(4);
  });

  it('行の先頭にタブが含まれている場合、そのタブ数を返すこと', () => {
    const result = calculateDepth('\t\tIndented line with tabs');
    expect(result).toBe(2);
  });
});
