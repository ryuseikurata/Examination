/**
 * @description バブルソートはその名前が表すように、泡が水面に上がっていくように配列の要素が動いていきます。バブルソートは次のようなアルゴリズムで数列を昇順に並べ替えます。
 * @param　入力の最初の行に整列の長さを表す整数Nが与えられます。２行目に、N個の整数が空白区切りで与えられます。
 * @returns 出力はN行からなります。挿入ソートの各計算ステップでの途中結果を1行に出力してください。配列の要素は一つの空白で区切って出力してください。最後の要素の後の空白など、余計な空はyクヤ改行を含めるとPresentationErrorとなりますので注意してください。
 * @limit 1<= N <= 100,
 * -<= Aの要素 <= 1000
 */
export function bubbleSort(lines: string[]) {
  /**
   * 交換回数
   */
  let changeCount = 0;
  /**
   * 整数n
   */
  let length = Number(lines[0] ?? 0);
  let values = lines[1]?.split(' ').map(v => Number(v))
  if (!values) {
    return
  }
  let flag = 1;

  while (flag) {
    flag = 0;
    for (let i = length - 1; i > 0; i--) {
      const j = values[i];
      const j_1 = values[i - 1];
      if (j === undefined || j_1 === undefined) {
        return
      }
      if (j < j_1) {
        values[i] = j_1 as number;
        values[i - 1] = j as number;
        changeCount += 1
        flag = 1
      }
    }
  }
  console.log(values.join(' '))
  console.log(changeCount)
}
