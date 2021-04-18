import { bubbleSort } from "./bubble-sort";

describe('BubbleSort', (): void => {
  test('should success', (): void => {
    const consoleSpy = jest.spyOn(console, 'log');
    const lines: string[] = ['5', '5 3 2 4 1'];
    bubbleSort(lines);
    const calls = consoleSpy.mock.calls;
    const firstLog = (calls[0] ?? [])[0];
    const secondLog = (calls[1] ?? [])[0]
    expect(firstLog).toEqual(`1 2 3 4 5`);
    expect(secondLog).toEqual(8)
  });
})
