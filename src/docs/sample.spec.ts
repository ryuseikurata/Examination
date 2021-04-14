import { sample } from './sample';
describe('sample', () => {
  test('should success', () => {
    console.log = jest.fn();
    const lines: string[] = ['5 2'];
    sample(lines)
    expect(console.log).toHaveBeenCalledWith(1);
  })
})
