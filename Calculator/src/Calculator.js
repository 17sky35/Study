import React,{useState} from 'react';

const Calculator = () => {

    const [input,setInput] = useState(0);
    const [result,setResult] = useState("");

 

    // input
    const inputButton = (value) => {
        setInput(input+value)
    }
    // 결과
    const resultButton = () => {
        try {
            setResult(eval(input));
          } catch (error) {
            setResult('Error');
          }
    }
    
    // C 초기화 버튼
    const deleteButton = () => {
        setInput("");
        setResult("");
    }

    // ←버튼
    const backButton = () => {
        setInput(input.slice(0,-1));
    }


    return
    <div>
        <div>{input}</div>
        <div>{result}</div>
        <div>
            <button onClick={backButton}>←</button>

            <button onClick={inputButton('(')}>(</button>
            <button onClick={inputButton(')')}>)</button>
            <button onClick={inputButton('%')}>%</button>
            <button onClick={inputButton('/')}>/</button>

            <button onClick={inputButton('7')}>7</button>
            <button onClick={inputButton('8')}>8</button>
            <button onClick={inputButton('9')}>9</button>
            <button onClick={inputButton('*')}>*</button>

            <button onClick={inputButton('4')}>4</button>
            <button onClick={inputButton('5')}>5</button>
            <button onClick={inputButton('6')}>6</button>
            <button onClick={inputButton('-')}>-</button>

            <button onClick={inputButton('1')}>1</button>
            <button onClick={inputButton('2')}>2</button>
            <button onClick={inputButton('3')}>3</button>
            <button onClick={inputButton('+')}>+</button>

            <button onClick={deleteButton}>C</button>
            <button onClick={inputButton('0')}>0</button>
            <button onClick={inputButton('.')}>.</button>
            <button onClick={inputButton('=')}>=</button>
        </div>
    </div>
}

export default Calculator;