import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const [image, setImage] = useState("https://picsum.photos/200");
    const handleIncreament = () => {
        setNum(num + 1);
    };
    return (
        <div>
            <img src={image} alt="random image" />
            <button onClick={() => setNum(num - 1)}>-</button>
            {num === 0 ? "Zero" : num}
            <button onClick={handleIncreament}>+</button>
        </div>
    );
};

export default Counter;
