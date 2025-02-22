import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>経過時間: {seconds} 秒</h2>;
}

export default Timer;


/*
useEffect は、コンポーネントのレンダリング後に実行される処理（副作用）を扱うためのフック。
例えば、データの取得・イベントの登録・タイマー処理 などで使うことが多いよ！

useEffect(() => {...}, []) → コンポーネントの初回レンダリング後に実行
setInterval を使って 1秒ごとに seconds を増やす
return () => clearInterval(interval); で コンポーネントが削除されたときにタイマーを解除
これで、ページを開いている間、1秒ごとにカウントが増える！



依存配列	実行タイミング
useEffect(() => {...}, [])	初回レンダリング時のみ
useEffect(() => {...}, [count])	count が変わるたびに実行
useEffect(() => {...})	レンダリングのたびに実行
*/ 