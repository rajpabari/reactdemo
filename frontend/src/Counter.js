import { useState, useEffect } from "react";
import "./App.css";

function Counter(props) {

    const [newCounter, setNewCounter] = useState(0)

    useEffect(() => { console.log("newCounter changed") }, [newCounter])

    function handleClick() {
        setNewCounter(newCounter + 1)
    }

    return (
        <>
            <h1>Welcome to your Dashboard, {props.name} You are {props.age} years old </h1>
            <button onClick={handleClick} >Click me</button>
            <p>Button clicked {newCounter} times</p>
        </>
    )
}

export default Counter;