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
  const [operator, setOperator] = useState('')
  
  const inputRef = useRef()
  // const [equal, setEqual] = useState(false)
  //当输入数字时调用
  const handleNumber = (number) => {
    // if(theValue !== ''){
    //   number=appendNumber(number)//追加数据
    // }
    console.log(number)
    setTheValue((pre)=> pre + number)
    //setState是异步的，所以这里不能直接使用theInput，需要使用回调函数
    setTheInput((pre)=>pre + number)
  }

  const handleFloat = () => {
    //限制只能输入一个小数点
    if(theValue.includes('.')){
      alert('只能输入一个小数点')
      return
    }
    setTheValue((pre)=>pre + '.')
    setTheInput((pre)=>pre + '.')
    console.log(theValue)
    //解决小数点不能实时显示的问题
  }
  //处理等号
  const handleEqual = () => {
    console.log(operator)
    console.log(preValue)
    console.log(theValue)
    switch (operator) {
      case '+':
        // setTheInput(`${preValue} + ${theValue} `)
        setTheOutput(parseFloat(preValue) + parseFloat(theValue))
        setPreValue(theOutput)
        break;
      case '-':
        // setTheInput(`${preValue} - ${theValue} `)
        setTheOutput(parseFloat(preValue) - parseFloat(theValue))
        setPreValue(theOutput)
        break;
      case '*':
        // setTheInput(`${preValue} * ${theValue} `)
        setTheOutput(preValue * theValue)
        setPreValue(theOutput)
        break;
      case '/':
        // setTheInput(`${preValue} / ${theValue} `)
        setTheOutput(preValue / theValue)
        setPreValue(theOutput)
        break;
      default:
        break;
    }
  }
  //处理运算符
  const handleOperator = (oper) => {
    //限制只能输入一个运算符
    if(operator !== ''){
      alert('只能输入一个运算符')
      return
    }
    setOperator((pre)=>pre + oper)
    //setState是异步的，所以这里不能直接使用theInput，需要使用回调函数,这里的回调函数的参数是上一次的state,这里的preValue是上一次的state,写法为setPreValue((pre)=>pre)
    //这里可以实现一个追加数据的功能
    setPreValue ((pre)=>pre + theValue)
    setTheValue('')
    console.log(operator)
    setTheInput((pre)=>pre + oper)
  }
  //清除数据
  const handleClear = () => {
    setTheInput('')
    setTheOutput('')
    setPreValue('')
    setTheValue('')
    setOperator('')
  }
//追加数据,无用
  // const appendNumber = (number) => {
  //   return (theValue*10 + number)
  // }
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
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(4)}>4</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(5)}>5</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(6)}>6</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleOperator('-')}>-</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(1)}>1</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(2)}>2</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(3)}>3</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleOperator('+')}>+</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button" onClick={()=>handleNumber(0)}>0</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleFloat()}>.</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleEqual()}>=</Button>
          <Button className="calculator__buttons__row__button" onClick={()=>handleOperator('/')}>/</Button>
        </div>
      </div>
    </div>
  )
}

export default App
