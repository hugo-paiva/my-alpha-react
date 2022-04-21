import './App.css';
import { React, useState } from 'react';
import Calculator from './Calculator'

const myCalc = new Calculator()
let cacheVisor = ''

function App() {

  const [visor, setVisor] = useState('')

  function updateVisor(value) {
    setVisor(value)
  }

  function updateCacheAndVisor(_num) {
    cacheVisor += _num
    updateVisor(cacheVisor)
  }

  function saveOperand1FromVisor() {
    myCalc.setOperand1(Number(cacheVisor))
    cacheVisor = ''
    updateVisor(cacheVisor)
  }

  function sumButton() {
    saveOperand1FromVisor()
    myCalc.setOperation('soma')
  }

  function minusButton() {
    saveOperand1FromVisor()
    myCalc.setOperation('subtracao')
  }

  function timesButton() {
    saveOperand1FromVisor()
    myCalc.setOperation('multiplicacao')
  }

  function divideButton() {
    saveOperand1FromVisor()
    myCalc.setOperation('divisao')
  }

  function equalsButton() {
    myCalc.setOperand2(Number(cacheVisor))
    cacheVisor = String(myCalc.getResult())
    updateVisor(cacheVisor)
  }
  function allClearButton() {
    myCalc.clearCalculator()
    cacheVisor = ''
    updateVisor(cacheVisor)
  }

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1>CALCULADORA MINI</h1>
          <div id="visor">{visor}</div>
          <div className="operations-container">
            <button id="bttn-1" onClick={() => updateCacheAndVisor(1)}>1</button>
            <button id="bttn-2" onClick={() => updateCacheAndVisor(2)}>2</button>
            <button id="bttn-3" onClick={() => updateCacheAndVisor(3)}>3</button>
          </div>
          <div className="operations-container">
            <button id="bttn-4" onClick={() => updateCacheAndVisor(4)}>4</button>
            <button id="bttn-5" onClick={() => updateCacheAndVisor(5)}>5</button>
            <button id="bttn-6" onClick={() => updateCacheAndVisor(6)}>6</button>
          </div>
          <div className="operations-container">
            <button id="bttn-7" onClick={() => updateCacheAndVisor(7)}>7</button>
            <button id="bttn-8" onClick={() => updateCacheAndVisor(8)}>8</button>
            <button id="bttn-9" onClick={() => updateCacheAndVisor(9)}>9</button>
          </div>
          <div className="operations-container">
            <button id="bttn-0" onClick={() => updateCacheAndVisor(0)}>0</button>
          </div>
          <div className="operations-container">
            <button id="sum" onClick={sumButton} >+</button>
            <button id="minus" onClick={minusButton} >-</button>
            <button id="times" onClick={timesButton} >x</button>
            <button id="divide" onClick={divideButton} >÷</button>
          </div>
          <div className="operations-container">
            <button id="all-clear" onClick={allClearButton} >AC</button>
            <button id="equals" onClick={equalsButton} >=</button>
          </div>

        </main>

      </header>
    </div>
  );
}

export default App;
