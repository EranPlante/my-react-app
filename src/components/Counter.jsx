import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウント: {count}</h2>
      {/* ボタンを押すと count が 1 増える */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;
