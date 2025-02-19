import { useState } from "react";

function TextInput() {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>入力フォーム</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="ここに入力してください。"
            />
            <p>あなたの入力:{text}</p>
        </div>
    )

}

export default TextInput;