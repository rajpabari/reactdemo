import { useState, useEffect } from "react";
import "./App.css";

function Counter() {

    const [newCounter, setNewCounter] = useState(0);

    useEffect(() => { console.log("newCounter changed") }, [newCounter]);

    function handleClick() {
        setNewCounter(newCounter + 1);
    }

    return (
        <>
            <button onClick={handleClick} >Click me</button>
            <p>Button clicked {newCounter} times</p>
        </>
    )
}

export default Counter;