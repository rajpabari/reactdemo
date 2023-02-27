import { useState, useEffect } from "react";
import "./App.css";
import { invokeLambda } from "./utils";
import AWS from 'aws-sdk';

function Counter(props) {

    AWS.config.update({
        accessKeyId: "",
        secretAccessKey: "",
        region: 'us-west-1'
    });

    const [newCounter, setNewCounter] = useState(0);

    useEffect(() => { console.log("newCounter changed") }, [newCounter]);

    function handleClick() {
        setNewCounter(newCounter + 1);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const input = e.target[0].value;
        const output = await invokeLambda("passwordChecker", { password: input });
        console.log(input);
        console.log(output);
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