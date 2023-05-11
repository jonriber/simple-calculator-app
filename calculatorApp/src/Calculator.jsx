import {
    useState,
    useRef
  } from "react"; 
import "./App.css";
  
  function Calculator() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }
   
    function minus(e) { 
        // Add the code for the minus function 
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value));
    }
   
    function times(e) { 
      // Add the code for the plus function 
      e.preventDefault();
      setResult((result) => result * Number(inputRef.current.value));
    }
   
    function divide(e) { 
      // Add the code for the divide function
      e.preventDefault();
      if (Number(inputRef.current.value) == 0) setResult(result)
      else setResult((result) => result / Number(inputRef.current.value));
      
    }
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      e.preventDefault();
      inputRef.current.value = null;
    } 
   
    function resetResult(e) { 
        // Add the code for the resetResult function 
       e.preventDefault();
      setResult(0);
    }
   
    return ( 
      <div className="calculator"> 
       
        <form> 
            <fieldset style={{borderRadius:"5px",minHeight:"100px"}}>
                <p ref={resultRef}> 
                Resultado: {result} 
                </p> 
                <input
                    pattern="[0-9]" 
                    ref={inputRef} 
                    type="number" 
                    placeholder="Type a number" 
                /> 
            </fieldset>
        </form> 
        <div className="buttons">
            <div className="row">
                <button onClick={minus}>subtract</button> 
                <button onClick={times}>multiply</button> 
            </div>
            <div className="row">
                <button onClick={plus}>add</button>
                <button onClick={divide}>divide</button> 
            </div>
            <div className="row">
                <button onClick={resetInput}>resetInput</button> 
                <button onClick={resetResult}>resetResult</button>
            </div>
        </div>
          
      </div> 
    ); 
  } 
   
  export default Calculator; 
  