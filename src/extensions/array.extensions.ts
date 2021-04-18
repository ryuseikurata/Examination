export { };

declare global {
  interface Array<T> {
    /**
     * * 配列のある番号の位置にある値と配列のある番号の位置にある値を交換する
    */
    swap(a: number, b: number): void;

    /**
     * 配列が空の場合
     */
    empty(): boolean;
    /**
     * 配列の初めの要素を取得
     */
    front(): T | undefined;
  }
}



Array.prototype.swap = function (a: number, b: number) {
  if (a < 0 || a >= this.length || b < 0 || b >= this.length) {
    return
  }
  const temp = this[a];
  this[a] = this[b];
  this[b] = temp;
}

Array.prototype.empty = function () {
  return this.length === 0;
};

Array.prototype.front = function () {
  return this.length === 0 ? undefined : this[0];
};
