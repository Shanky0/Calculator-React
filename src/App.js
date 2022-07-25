
import { useState } from 'react';
import './App.css';

function App() {

  const [expression, setExpression] = useState('');
  const [result,setResult] = useState(0);
  

  const calculation = (e) => {
    var txt = e.target.value;
    if (expression === '' && txt === '=')
      alert("Please enter values first");
    if (txt === '=') {
      setResult(eval(expression));
    }else if(txt === 'DEL')
    {
      setExpression(expression.substring(0,expression.length-1));
    }else if(txt === 'AC'){
      setExpression('');
      setResult(0);
    }else
      setExpression(expression+txt);
  }

  return (
    <>
      <div class="container">
        <h1><input type="text" placeholder="0" value={expression}/> </h1>
        <h1><input type="text" placeholder="" id="result" value={result} />
        </h1>
        <table id="table" onClick={calculation}>

          <tr>
            <td><button value="9">9</button></td>
            <td><button value="8">8</button></td>
            <td><button value="7">7</button></td>
            <td><button value="/">/</button></td>
          </tr>
          <tr>
            <td><button value="6">6</button></td>
            <td><button value="5">5</button></td>
            <td><button value="4">4</button></td>
            <td><button value="*">*</button></td>
          </tr>
          <tr>
            <td><button value="3">3</button></td>
            <td><button value="2">2</button></td>
            <td><button value="1">1</button></td>
            <td><button value="-">-</button></td>
          </tr>
          <tr>
            <td><button value="0">0</button></td>
            <td><button value="DEL">DEL</button></td>
            <td><button value="=">=</button></td>
            <td><button value="+">+</button></td>
          </tr>
          <button id="clear" value={'AC'} style={{width:"410%"}}>AC</button>
        </table>
        
      </div>
    </>
  );
}

export default App;
