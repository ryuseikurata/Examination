**`Math.max()`** 関数は、入力引数として与えられた0個以上の数値のうち最大の数を返します。

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

## [構文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#syntax "Permalink to 構文")

Math.max(\[value1\[, value2\[, ...\]\]\])

### [引数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#parameters "Permalink to 引数")

`value1, value2, ...`

数値です。

### [返値](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#return_value "Permalink to 返値")

与えられた数のうちの最大の値です。何れかの引数が `NaN` であったり、数値に変換することができなかった場合は [`NaN`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) を返します。

## [解説](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#description "Permalink to 解説")

`Math` はコンストラクターではないので、 `max()` は `Math` の静的メソッドです (常に `Math` インスタンスのメソッドとしてではなく、 `Math.min()` として使用してください)。

\-[`Infinity`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) は他のすべての数値よりも小さいため初期の比較対象となっており、そのため引数が与えられなかった場合は -[`Infinity`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) が返されます。

何れかの引数が `NaN` であったり、数値に変換することができなかった場合、結果は [`NaN`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) になります。

## [例](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#examples "Permalink to 例")

### [Math.max() の使用](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#using_math.max "Permalink to Math.max() の使用")

```
Math.max(10, 20);
Math.max(-10, -20);
Math.max(-10, 20);
```

### [配列の最大値の取得](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array "Permalink to 配列の最大値の取得")

[`Array.reduce()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) を使用して、数値の配列の中にある最大値の要素を、それぞれの値を比較して探し出すことができます。

```
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
```

次の関数では [`Function.prototype.apply()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) を使用して配列の最大値を取得します。 `getMaxOfArray([1, 2, 3])` は `Math.max(1, 2, 3)` と同等ですが、 `getMaxOfArray()` はプログラム的に構築された配列に使用することができます。これは比較的要素が少ない配列に対して使用してください。

```
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

新しい[スプレッド演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)で、 `apply` によって配列の最大値を得る方法をより短く書くことができます。

```
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

しかし、スプレッド構文の (`...`) と `apply` のどちらも、配列に膨大な要素があった場合は、配列の要素を関数の引数として渡そうとするため、失敗したり、誤った結果を返したりすることがあります。詳しくは [apply をビルトイン関数と共に利用する](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions)を参照してください。 `reduce` の方法はこの問題が発生しません。

## [仕様書](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#specifications "Permalink to 仕様書")

## [ブラウザーの互換性](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#browser_compatibility "Permalink to ブラウザーの互換性")

[Report problems with this compatibility data on GitHub](https://github.com/mdn/browser-compat-data/issues/new?body=%3C%21--+Tips%3A+where+applicable%2C+specify+browser+name%2C+browser+version%2C+and+mobile+operating+system+version+--%3E%0A%0A%23%23%23%23+What+information+was+incorrect%2C+unhelpful%2C+or+incomplete%3F%0A%0A%23%23%23%23+What+did+you+expect+to+see%3F%0A%0A%23%23%23%23+Did+you+test+this%3F+If+so%2C+how%3F%0A%0A%0A%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EMDN+page+report+details%3C%2Fsummary%3E%0A%0A*+Query%3A+%60javascript.builtins.Math.max%60%0A*+MDN+URL%3A+https%3A%2F%2Fdeveloper.mozilla.org%2Fja%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FMath%2Fmax%0A*+Report+started%3A+2021-04-12T13%3A24%3A13.938Z%0A%0A%3C%2Fdetails%3E&title=javascript.builtins.Math.max+-+%3CPUT+TITLE+HERE%3E "Report an issue with this compatibility data")

desktop

mobile

server

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on iOS

Samsung Internet

Node.js

`max`

ChromeFull support1

EdgeFull support12

FirefoxFull support1

Internet ExplorerFull support3

OperaFull support3

SafariFull support1

WebView AndroidFull support1

Chrome AndroidFull support18

Firefox for AndroidFull support4

Opera AndroidFull support10.1

Safari on iOSFull support1

Samsung InternetFull support1.0

Node.jsFull support0.10.0

### Legend

Full support

Full support

The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and send us a pull request.

## [関連情報](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max#see_also "Permalink to 関連情報")
