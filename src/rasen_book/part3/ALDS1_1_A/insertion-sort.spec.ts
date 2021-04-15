import { insertionSort } from "./insertion-sort";


describe('InsertionSort', () => {
  test('should success', () => {
    console.log = jest.fn();
    const lines: string[] = ['4', '3 2 1 4'];
    insertionSort(lines)
    expect(console.log).toHaveBeenCalledWith('1 2 3 4');
  })
})
