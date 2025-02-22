import { useState, useEffect } from "react";

function FetchData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // API からデータを取得
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json()) // JSON に変換
            .then((data) => setPosts(data.slice(0, 5))) // 最初の5件だけ取得
            .catch((error) => console.error("エラー:", error));
    }, []);

    return (
        <div>
            <h2>API から取得したデータ</h2>
            <ul>
                {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
            </ul>
        </div>
    )

}

export default FetchData;


/*
useEffect は、副作用（データ取得、イベント登録など）を扱うためのフックだよ！
ここでは、JSONPlaceholder というテスト用 API からデータを取得して表示するサンプルを作るよ！

fetch("APIのURL") を使ってデータを取得する
useEffect(() => {...}, []) を使うことで コンポーネントの初回レンダリング時に実行
setPosts(data.slice(0, 5)) で 取得したデータの最初の5件を表示

🐾 **APIごとに入力方法（リクエスト方法）は決まっているの？** 🐱💡  

### **📌 結論 → API ごとに異なるが、基本の使い方は同じ！**
API の仕様（リクエストの方法やレスポンスの形式）は **サービスごとに異なる** けど、`fetch()` や `axios` などを使えば、どの API でも基本の流れは同じだよ！  

✅ **基本の流れ**
1. **API のエンドポイント（URL）にリクエストを送る**
2. **サーバーからレスポンス（データ）を受け取る**
3. **レスポンスのデータを JavaScript で扱いやすい形（JSON など）に変換する**
4. **状態（`useState` など）にセットして画面に表示する**

---

## **🐾 1️⃣ 基本的な API の使い方**
`fetch()` を使うと、API のデータを取得できるよ！  

### **📌 GET リクエスト（データを取得）**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // JSON に変換
  .then((data) => console.log(data))   // データを表示
  .catch((error) => console.error("エラー:", error));
```
✅ **この書き方はどの API でも基本的に同じ！**  
ただし、API によって「どんなデータが返ってくるか」は異なるよ！

---

## **🐾 2️⃣ API ごとの違い**
API ごとに**リクエストの送り方やデータの形式が違う**ことがあるから、API のドキュメントを確認するのが大事！  

### **📌 API ごとの違いの例**
| API サービス | ベース URL | 取得できるデータ | 追加の設定 |
|-------------|-----------|-----------------|------------|
| JSONPlaceholder | `https://jsonplaceholder.typicode.com/posts` | テスト用の投稿データ | 特になし |
| OpenWeather | `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=API_KEY` | 天気情報 | `API_KEY` が必要 |
| GitHub API | `https://api.github.com/users/username/repos` | ユーザーのリポジトリ一覧 | `Authorization` ヘッダーが必要 |

---

## **🐾 3️⃣ API にデータを送る（POST リクエスト）**
データを送信するときは、`fetch()` のオプションを指定するよ！  

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // POST メソッドで送る
  headers: {
    "Content-Type": "application/json" // JSON を送信することを指定
  },
  body: JSON.stringify({
    title: "新しい投稿",
    body: "これはテストの投稿です。",
    userId: 1
  })
})
  .then((response) => response.json())
  .then((data) => console.log("成功:", data))
  .catch((error) => console.error("エラー:", error));
```

✅ **この書き方も API によって「送るデータの形式」や「必要なヘッダー」が違うから注意！**  

---

## **🐾 4️⃣ `fetch()` 以外の方法**
`fetch()` は標準の方法だけど、もっと便利な `axios` というライブラリもあるよ！

### **📌 `axios` を使うと簡単！**
まず、インストールする：
```sh
npm install axios
```
そして、使い方：
```javascript
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("エラー:", error));
```
✅ `fetch()` より **書き方がシンプル** で **エラーハンドリングもしやすい** のが `axios` の特徴！

---

## **🐾 まとめ**
✅ **API ごとにデータの形式やリクエストの方法は違う！**  
✅ **でも、`fetch()` や `axios` を使えば基本的な使い方は同じ！**  
✅ **API ドキュメントを読んで「何を送るか」「何が返ってくるか」を確認しよう！**  

🐾 **`then` の意味を解説するよ！** 🐱✨  

---

## **📌 `then` とは？**
`then` は **Promise（非同期処理）の結果を受け取るためのメソッド** だよ！  
つまり、API からデータを取得したあとに、**「データを使って何かする」** ために使うんだ！  

---

## **🐾 `fetch()` と `then` の流れ**
`fetch()` を使うと、API からデータを取得できるけど、**データがすぐに手に入るわけじゃない**。  
だから、データが取得できたときに「次にやること（処理）」を指定するのが `then` なんだ！  

### **📌 `fetch()` の基本形**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts") // API を呼び出す
  .then((response) => response.json())  // レスポンスを JSON に変換
  .then((data) => console.log(data))    // 変換したデータを表示
  .catch((error) => console.error("エラー:", error)); // エラーが出たら表示
```

---

## **🐾 `then` の動き**
1️⃣ **API にリクエストを送る** → `fetch("https://jsonplaceholder.typicode.com/posts")`  
   → **データが届くのを待つ（非同期処理）**  

2️⃣ **`then(response => response.json())` でデータを JSON に変換**  
   → API のレスポンスは「生のデータ」だから、 `.json()` を使って扱いやすい形にする  

3️⃣ **`then(data => console.log(data))` で JSON データを使う**  
   → データが取得できたら、それを画面に表示したり処理したりできる  

4️⃣ **`catch(error => console.error("エラー:", error))` でエラー処理**  
   → もしネットワークエラーなどが起きたら、ここで対応  

---

## **🐾 `then` を使わない書き方（`async/await`）**
最近は `then` を使わずに、`async/await` で書くことも多いよ！  
こっちのほうがコードが読みやすい場合があるね！

### **📌 `async/await` を使う場合**
```javascript
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchPosts();
```
✅ **`await` を使うと、`then` の代わりに「データを取得するまで待つ」という書き方ができる！**

---

## **🐾 まとめ**
✅ **`then` は「非同期処理（Promise）の結果を受け取って処理を続ける」ためのメソッド！**  
✅ **API のデータを取得したあとに、「次にやること」を指定できる！**  
✅ **`async/await` を使うと `then` なしでも書ける！**

---

🐱 **もし `then` の使い方でさらに疑問があったら、気軽に聞いてね！** 🚀✨
*/