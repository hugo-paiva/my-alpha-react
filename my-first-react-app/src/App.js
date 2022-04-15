import './App.css';

class Calculator {
  
    constructor(operand1, operand2, _typeOfOperation) {
        this.operand1 = operand1
        this.operand2 = operand2
        this.typeOfOperation = _typeOfOperation
        if (this.typeOfOperation) {
            this.setOperation(this.typeOfOperation)
        }
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2
    }

    setOperation(_typeOfOperation) {
        this.typeOfOperation = _typeOfOperation
        if (this.typeOfOperation === 'soma') {
            this.operation = () => this.operand1 + this.operand2
        } else if (this.typeOfOperation === 'subtracao') {
            this.operation = () => this.operand1 - this.operand2
        } else if (this.typeOfOperation === 'divisao') {
            this.operation = () => this.operand1 / this.operand2
        } else if (this.typeOfOperation === 'multiplicacao') {
            this.operation = () => this.operand1 * this.operand2
        } else {
            // throw 'Invalid operator. Try again with a diferent option'
        }
    }

    getResult() {
        return this.operation()
    }

    clearCalculator() {
        this.operand1 = 0
        this.operand2 = 0
        this.operation = ''
    }
}

let myCalc = new Calculator()
// Initializing numeric buttons 
const bttn1 = document.getElementById('bttn-1')
const bttn2 = document.getElementById('bttn-2')
const bttn3 = document.getElementById('bttn-3')
const bttn4 = document.getElementById('bttn-4')
const bttn5 = document.getElementById('bttn-5')
const bttn6 = document.getElementById('bttn-6')
const bttn7 = document.getElementById('bttn-7')
const bttn8 = document.getElementById('bttn-8')
const bttn9 = document.getElementById('bttn-9')
const bttn0 = document.getElementById('bttn-0')

// initializing operation buttons
// const sumButton = document.getElementById('sum')
// const minusButton = document.getElementById('minus')
// const timesButton = document.getElementById('times')
// const divideButton = document.getElementById('divide')
// const equalsButton = document.getElementById('equals')
// const allClearButton = document.getElementById('all-clear')

const visor = document.getElementById('visor')

let cacheVisor = ''

function updateCacheAndVisor(_num) {
    cacheVisor += _num
    visor.innerHTML = cacheVisor
}

function saveOperand1FromVisor() {
    myCalc.setOperand1(Number(cacheVisor))
    cacheVisor = ''
    visor.innerHTML = cacheVisor
}

// bttn1.addEventListener('click', () => updateCacheAndVisor(1))

// bttn2.addEventListener('click', () => updateCacheAndVisor(2))

// bttn3.addEventListener('click', () => updateCacheAndVisor(3))

// bttn4.addEventListener('click', () => updateCacheAndVisor(4))

// bttn5.addEventListener('click', () => updateCacheAndVisor(5))

// bttn6.addEventListener('click', () => updateCacheAndVisor(6))

// bttn7.addEventListener('click', () => updateCacheAndVisor(7))

// bttn8.addEventListener('click', () => updateCacheAndVisor(8))

// bttn9.addEventListener('click', () => updateCacheAndVisor(9))

// bttn0.addEventListener('click', () => updateCacheAndVisor(0))

function sumButton ()  {
    saveOperand1FromVisor()
    myCalc.setOperation('soma')
} 

function minusButton ()  {
    saveOperand1FromVisor()
    myCalc.setOperation('subtracao')
} 

function timesButton ()  {
    saveOperand1FromVisor()
    myCalc.setOperation('multiplicacao')
} 

function divideButton ()  {
    saveOperand1FromVisor()
    myCalc.setOperation('divisao')
} 

function equalsButton () {
    myCalc.setOperand2(Number(cacheVisor))
    cacheVisor = String(myCalc.getResult())
    visor.innerHTML = cacheVisor
}
function allClearButton ()  {
    myCalc.clearCalculator()
    cacheVisor = ''
    visor.innerHTML = ''
} 

function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <main>
          <h1>CALCULADORA MINI</h1>
          <div id="visor"></div>
          <div class="operations-container">
            <button id="bttn-1" onClick={() => updateCacheAndVisor(1)}>1</button>
            <button id="bttn-2" onClick={() => updateCacheAndVisor(2)}>2</button>
            <button id="bttn-3" onClick={() => updateCacheAndVisor(3)}>3</button>
          </div>
          <div class="operations-container">
            <button id="bttn-4" onClick={() => updateCacheAndVisor(4)}>4</button>
            <button id="bttn-5" onClick={() => updateCacheAndVisor(5)}>5</button>
            <button id="bttn-6" onClick={() => updateCacheAndVisor(6)}>6</button>
          </div>
          <div class="operations-container">
            <button id="bttn-7" onClick={() => updateCacheAndVisor(7)}>7</button>
            <button id="bttn-8" onClick={() => updateCacheAndVisor(8)}>8</button>
            <button id="bttn-9" onClick={() => updateCacheAndVisor(9)}>9</button>
          </div>
          <div class="operations-container">
            <button id="bttn-0" onClick={() => updateCacheAndVisor(0)}>0</button>
          </div>
          <div class="operations-container">
            <button id="sum" onClick={sumButton} >+</button>
            <button id="minus" onClick={minusButton} >-</button>
            <button id="times" onClick={timesButton} >x</button>
            <button id="divide" onClick={divideButton} >÷</button>
          </div>
          <div class="operations-container">
            <button id="all-clear" onClick={allClearButton} >AC</button>
            <button id="equals" onClick={equalsButton} >=</button>
          </div>

        </main>

      </header>
    </div>
  );
}

export default App;
