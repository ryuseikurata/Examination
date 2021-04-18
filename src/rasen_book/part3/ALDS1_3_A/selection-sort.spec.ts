
describe('SelectionSort', (): void => {
  test('should success', (): void => {
    console.log = jest.fn();
    expect(console.log).toHaveBeenCalledWith('1 2 3 4');
  });
})
