import { Prompt } from './../../../docs/sample';
/**
 * @description FX取引では、異なる国の通貨を交換することで為替さの利益を得ることができます。例えば、1どる100円の時に1000ドル買い、価格変動により1どる108円になった時にうると、(108円 - 100円) * 1000ドル = 8000円の利益を得ることができます。
 * ある通貨について、時刻tにおける価格Rt(t=0,1,2...n-1)が入力として与えられるので、価格の差Rj-Ri(ただし、j > i)の最大値を求めてください。
 * @param　最初の行に整数nが与えられれます。続くn行に整数Rt(t=0,1,2...n-1)が順番に与えられます。
 * @returns 最大値を1行に出力
 * @limit 2<=n<=200,000
 * 1<=R_t<=10^9
 */
export function maximumProfit(lines: string[]) {
  /// 整数n
  let maxValue = -2000000;
  let minValue = Number(lines[1]);
  const values = lines.slice(1).map(l => Number(l));
  for (const value of values) {
    maxValue = Math.max(maxValue, value - minValue);
    minValue = Math.min(minValue, value)
  }

  console.log(maxValue)
}
