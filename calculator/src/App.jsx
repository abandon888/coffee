import { useState } from 'react'
import './App.css'
import 'tailwindcss/tailwind.css'
import { Button, Form, Input, InputNumber } from 'antd'

function App() {   
  return (
    <div className="calculator">
      <div className="calculator__display">
        <div className="calculator__display__result">
          <InputNumber>0</InputNumber>
        </div>
        <div className="calculator__display__input">
          <Input value='0' />
        </div>
      </div>
      <div className="calculator__buttons">
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">AC</Button>
          <Button className="calculator__buttons__row__button">+/-</Button>
          <Button className="calculator__buttons__row__button">%</Button>
          <Button className="calculator__buttons__row__button">/</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">7</Button>
          <Button className="calculator__buttons__row__button">8</Button>
          <Button className="calculator__buttons__row__button">9</Button>
          <Button className="calculator__buttons__row__button">*</Button>
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
          <Button className="calculator__buttons__row__button">+</Button>
        </div>
        <div className="calculator__buttons__row">
          <Button className="calculator__buttons__row__button">0</Button>
          <Button className="calculator__buttons__row__button">.</Button>
          <Button className="calculator__buttons__row__button">=</Button>
        </div>
      </div>
    </div>
  )
}

export default App
