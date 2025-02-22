import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウント: {count}</h2>
      {/* ボタンを押すと count が 1 増える */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;


/*

useState は、React のコンポーネントで 状態（State） を管理するためのフックだよ。
例えば、ボタンを押すたびにカウントが増える機能を作るなら、useState を使うと簡単に実装できるよ。

useState(0) → count の初期値を 0 にする
setCount(newValue) → count の値を更新する
<button onClick={() => setCount(count + 1)}> → ボタンを押すと count が増える
これで、ボタンを押すたびにカウントが増減するようになる！

*/