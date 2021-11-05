import { add } from './lib';

describe('Test lib/utils.ts', () => {
  it('add function', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
