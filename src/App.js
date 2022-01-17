import React, { useEffect, useRef, useState } from "react"
import "./App.scss"

export default function App() {
    const firstNumber = useRef()
    const secondNumber = useRef()
    const [numberGenerated, setNumberGenerated] = useState(null)

    const randomRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    useEffect(() => {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);

        document.body.style.background = "rgb(" + r + ", " + b + ", " + g + ")";
    }, [numberGenerated])

    const generateANumber = () => {
        const f_number = Number(firstNumber.current.value)
        const s_number = Number(secondNumber.current.value)
        
        if (firstNumber.current.value === "") {
            alert("It is necessary to enter the first number!")
        } else if (secondNumber.current.value === "") {
            alert("It is necessary to enter the second number!")
        } else if (f_number > s_number) {
            alert("The second number cannot be higher than the first!")
        } else {
            const generate = randomRange(f_number, s_number)
            setNumberGenerated(generate)
        }
    }

    return (
        <div className="App">
            <h1>Generate a random number between x and y</h1>
            <div>
                <input type="number" ref={firstNumber} placeholder="Please enter a number..." />   
            </div>
            <div>
                <input type="number" ref={secondNumber} placeholder="Please enter another number..." />
            </div>   
            <div>
                <input type="button" onClick={generateANumber} value="Generate a random number" />
            </div>
            <div>
                <p>
                    {
                        numberGenerated === null ? "" : `The generated number is ${numberGenerated}!`
                    }
                </p>
            </div>
        </div>
    )
}