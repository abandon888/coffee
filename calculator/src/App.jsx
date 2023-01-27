import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'tailwindcss/tailwind.css'
import { Button, Form, Input } from 'antd'

function App() {
  const [count, setCount] = useState(0)
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  return (
    <div className="border-4 container mx-auto rounded-2xl border-yellow-600 w-1/2 my-20">
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
        <div class="w-1/2 flex flex-col mx-auto">
          <h1 className="text-2xl text-center ">calculator</h1>
          <Form.Item label="result" name="result">
            <Input type="text" readOnly />
          </Form.Item>
          <div className="flex justify-between ">
            <Form.Item name="firstNumber">
              <Button type="primary">1</Button>
            </Form.Item>
            <Form.Item name="secondNumber">
              <Button type="primary">2</Button>
            </Form.Item>
            <Form.Item name="thirdNumber">
              <Button type="primary">3</Button>
            </Form.Item>
            <Form.Item name="fourthNumber">
              <Button type="primary">4</Button>
            </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="fifthNumber">
            <Button type="primary">5</Button>
          </Form.Item>
          <Form.Item name="sixthNumber">
            <Button type="primary">6</Button>
          </Form.Item>
          <Form.Item name="seventhNumber">
            <Button type="primary">7</Button>
          </Form.Item>
          <Form.Item name="eighthNumber">
            <Button type="primary">8</Button>
          </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="ninthNumber">
            <Button type="primary">9</Button>
          </Form.Item>
          <Form.Item name="zeroNumber">
            <Button type="primary">0</Button>
          </Form.Item>
          <Form.Item name="plus">
            <Button type="primary">+</Button>
          </Form.Item>
          <Form.Item name="minus">
            <Button type="primary">-</Button>
          </Form.Item>
          </div>
          <div className="flex justify-between ">
          <Form.Item name="multiply">
            <Button type="primary">*</Button>
          </Form.Item>
          <Form.Item name="divide">
            <Button type="primary">/</Button>
          </Form.Item>
          <Form.Item name="equal">
            <Button type="primary">=</Button>
          </Form.Item>
          <Form.Item name="clear">
            <Button type="primary">C</Button>
          </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default App
