import { maximumProfit } from "./maximum-profit";

describe('MaximumProfit', () => {
  test('should success', () => {
    console.log = jest.fn();
    const lines: string[] = ['3', '2', '1', '3'];
    maximumProfit(lines);
    expect(console.log).toHaveBeenCalledWith(2);
  })
})
