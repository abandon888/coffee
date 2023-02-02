import { useState } from 'react'
import './App.css'
import 'tailwindcss/tailwind.css'
import { Button, Form, Input, InputNumber } from 'antd'
import { useRef } from 'react'

function App() {
  const [theInput, setTheInput] = useState('')
  const [theOutput, setTheOutput] = useState('')
  const [preValue, setPreValue] = useState('')
  const [theValue, setTheValue] = useState('')
  // const [equal, setEqual] = useState(false)
  
  const handleNumber = (number) => {
    if(theValue !== ''){
      number=appendNumber(number)
    }
    setTheValue(number)
    setTheInput(`${theInput}+${theValue}`)
  }

  const handleEqual = (operator) => {
    console.log(operator)
    switch (operator) {
      case '+':
        setTheInput(`${preValue} + ${theValue} `)
        setTheOutput(preValue + theValue)
        setPreValue(theOutput)
        break;
      case '-':
        setTheInput(`${preValue} - ${theValue} `)
        setTheOutput(preValue - theValue)
        setPreValue(theOutput)
        break;
      case '*':
        setTheInput(`${preValue} * ${theValue} `)
        setTheOutput(preValue * theValue)
        setPreValue(theOutput)
        break;
      case '/':
        setTheInput(`${preValue} / ${theValue} `)
        setTheOutput(preValue / theValue)
        setPreValue(theOutput)
        break;
      default:
        break;
    }
  }
  //处理运算符
  const handleOperator = (operator) => {
    setPreValue (theValue)
    setTheValue('')
    setTheInput(`${preValue} ${operator}`)
  }
  //清除数据
  const handleClear = () => {
    setTheInput('')
    setTheOutput('')
    setPreValue('')
    setTheValue('')
  }
//追加数据
  const appendNumber = (number) => {
    return (theValue*10 + number)
  }
  return (
    <div className="calculator">
      <div className="calculator__display">
       <InputNumber className="calculator__display__input" value={theInput} readOnly/>
       <InputNumber className="calculator__display__input" value={theOutput} readOnly/>
      </div>
      <div className="calculator__buttons">
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button" onClick={()=>handleClear()}>AC</Button>
          {/* <Button className="calculator__buttons__row__button">+/-</Button>
          <Button className="calculator__buttons__row__button">%</Button>
          <Button className="calculator__buttons__row__button">/</Button> */}
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(7)}>7</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(8)}>8</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(9)}>9</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleOperator('*')}>*</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">4</Button>
          <Button className="calculator__buttons__row__button">5</Button>
          <Button className="calculator__buttons__row__button">6</Button>
          <Button className="calculator__buttons__row__button">-</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">1</Button>
          <Button className="calculator__buttons__row__button">2</Button>
          <Button className="calculator__buttons__row__button">3</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleOperator('+')}>+</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">0</Button>
          <Button className="calculator__buttons__row__button">.</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleEqual}>=</Button>
          <Button className="calculator__buttons__row__button">\</Button>
        </div>
      </div>
    </div>
  )
}

export default App
