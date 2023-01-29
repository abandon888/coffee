import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'tailwindcss/tailwind.css'
import { Button, Form, Input } from 'antd'

function App() {
  const [count, setCount] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [thirdNumber, setThirdNumber] = useState(0)
  const [fourthNumber, setFourthNumber] = useState(0)
  const [fifthNumber, setFifthNumber] = useState(0)
  const [sixthNumber, setSixthNumber] = useState(0)
  const [seventhNumber, setSeventhNumber] = useState(0)
  const [eighthNumber, setEighthNumber] = useState(0)
  const [ninthNumber, setNinthNumber] = useState(0)
  const [zeroNumber, setZeroNumber] = useState(0)
  const [plus, setPlus] = useState(0)
  const [minus, setMinus] = useState(0)
  const [multiply, setMultiply] = useState(0)
  const [divide, setDivide] = useState(0)
  const [equal, setEqual] = useState(0)
  const [clear, setClear] = useState(0)
  const [result, setResult] = useState(0)

  setResult = (values) => {
    console.log('Success:', values)
  }
  return (
    <div className="border-4 container mx-auto rounded-2xl border-yellow-600 w-1/4 my-20">
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        className="mx-auto">
           <h1 className="text-2xl text-center ">计算器</h1>
          <Form.Item label="结果" name="result">
            <Input type="text" readOnly className='mx-auto'/>
          </Form.Item>
        <div class="w-40 flex flex-col mx-auto">    
          <div className="flex justify-between ">
            <Form.Item name="firstNumber">
              <Button type="primary" 
              onClick={() => {
                setFirstNumber(1)
                setResult(firstNumber)
              }}
              >1</Button>
            </Form.Item>
            <Form.Item name="secondNumber">
              <Button type="primary"
              onClick={() => {
                setSecondNumber(2)
                setResult(secondNumber)
              }}
              >2</Button>
            </Form.Item>
            <Form.Item name="thirdNumber">
              <Button type="primary"
              onClick={() => {
                setThirdNumber(3)
                setResult(thirdNumber)
              }}
              >3</Button>
            </Form.Item>
            <Form.Item name="fourthNumber">
              <Button type="primary"
              onClick={() => {
                setFourthNumber(4)
                setResult(fourthNumber)
              }}
              >4</Button>
            </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="fifthNumber">
            <Button type="primary"
            onClick={() => {
              setFifthNumber(5)
              setResult(fifthNumber)
            }}
            >5</Button>
          </Form.Item>
          <Form.Item name="sixthNumber">
            <Button type="primary"
            onClick={() => {
              setSixthNumber(6)
              setResult(sixthNumber)
            }}
            >6</Button>
          </Form.Item>
          <Form.Item name="seventhNumber">
            <Button type="primary"
            onClick={() => {
              setSeventhNumber(7)
              setResult(seventhNumber)
            }
            }
            >7</Button>
          </Form.Item>
          <Form.Item name="eighthNumber">
            <Button type="primary"
            onClick={() => {
              setEighthNumber(8)
              setResult(eighthNumber)
            }
            }
            >8</Button>
          </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="ninthNumber">
            <Button type="primary"
            onClick={() => {
              setNinthNumber(9)
              setResult(ninthNumber)
            }
            }
            >9</Button>
          </Form.Item>
          <Form.Item name="zeroNumber">
            <Button type="primary"
            onClick={() => {
              setZeroNumber(0)
              setResult(zeroNumber)
            }
            }
            >0</Button>
          </Form.Item>
          <Form.Item name="plus">
            <Button type="primary"
            onClick={() => {
              setPlus(1)
              setResult(plus)
            }
            }
            >+</Button>
          </Form.Item>
          <Form.Item name="minus">
            <Button type="primary"
            onClick={() => {
              setMinus(1)
              setResult(minus)
            }
            }
            >-</Button>
          </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="multiply">
            <Button type="primary"
            onClick={() => {
              setMultiply(1)
              setResult(multiply)
            }
            }
            >*</Button>
          </Form.Item>
          <Form.Item name="divide">
            <Button type="primary"
            onClick={() => {
              setDivide(1)
              setResult(divide)
            }
            }
            >/</Button>
          </Form.Item>
          <Form.Item name="equal">
            <Button type="primary"
            onClick={() => {
              setEqual(1)
              setResult(equal)
            }
            }
            >=</Button>
          </Form.Item>
          <Form.Item name="clear">
            <Button type="primary"
            onClick={() => {
              setClear(1)
              setResult(clear)
            }
            }
            >C</Button>
          </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default App
