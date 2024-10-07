import React,{useState} from "react";

const Calculator = () => {

    const [input,setInput] = useState("");
    const [result,setResult] = useState("");

    // input
    const inputButton = (value) => {
        setInput((input) =>input+value)
    }
    // 결과
    const resultButton = () => {
        try {
            setResult(eval(input));
          } catch (error) {
            setResult("Error");
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

    return(
        <div style={{padding:"20px",border:"1px solid black", height: "auto",width:"350px",display:"flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{fontSize:"60px"}}>{input}</div>
            <div style={{fontSize:"40px"}}>{result}</div>
            <button style={{width:"260px", padding: "20px", margin:"5px"}} onClick={backButton}>←</button>
            <div style={{width:"100%",fontSize:"30px",display : "grid",gridAutoColumns:"repeat(4, 1fr)"}}>
                <div>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("(")}>(</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton(")")}>)</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("%")}>%</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("/")}>/</button>
                </div>
                <div>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("7")}>7</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("8")}>8</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("9")}>9</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("*")}>*</button>
                </div>
                <div>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("4")}>4</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("5")}>5</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("6")}>6</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("-")}>-</button>
                </div>
                <div>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("1")}>1</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("2")}>2</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("3")}>3</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("+")}>+</button>
                </div>
                <div>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={deleteButton}>C</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton("0")}>0</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={() => inputButton(".")}>.</button>
                    <button style={{ padding: "20px", margin:"10px"}} onClick={resultButton}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;