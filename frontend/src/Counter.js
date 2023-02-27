import { useState, useEffect } from "react";
import "./App.css";

function Counter(props) {

    const [newCounter, setNewCounter] = useState(0)

    useEffect(() => { console.log("newCounter changed") }, [newCounter])

    function handleClick() {
        setNewCounter(newCounter + 1)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Guess the secret code" />
                <button type="submit">Submit</button>
            </form>


            <h1>Welcome to your Dashboard, {props.name} You are {props.age} years old </h1>
            <button onClick={handleClick} >Click me</button>
            <p>Button clicked {newCounter} times</p>
        </>
    )
}

export default Counter;