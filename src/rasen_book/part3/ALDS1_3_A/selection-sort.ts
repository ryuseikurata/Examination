import '@extensions'
/**
 * @description バブルソートはその名前が表すように、泡が水面に上がっていくように配列の要素が動いていきます。バブルソートは次のようなアルゴリズムで数列を昇順に並べ替えます。
 */
export function selectionSort(lines: string[]) {
  /**
   * 交換回数
   */
  let changeCount = 0;
  /**
   * 整数n
   */
  let length = Number(lines[0] ?? 0);
  let values = lines[1]?.split(' ').map(v => Number(v))
}
