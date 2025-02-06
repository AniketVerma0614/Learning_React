import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount((count+1)); // Ensures correct state updates
        console.log(count);  // Might still show the previous value due to React's async state updates
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
