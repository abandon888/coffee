import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'tailwindcss/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="border-4 container mx-auto rounded-2xl border-yellow-600 relative m-64">
      <div className="text-4xl text-blue-400 text-center font-semibold p-32">
        calculator
        <input
          type="text"
          className="border-2 border-gray-700 rounded-2xl hover:from-gray-700 "
        />
        <table className="border-2 border-gray-700 rounded-2xl hover:from-gray-700 ">
          <tr className='border-2 border-green-600'>
            <td className='border-2 border-green-600'>1</td>
            <td className='border-2 border-green-600'>2</td>
            <td >3</td>
            <td>+</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>*</td>
          </tr>
          <tr>
            <td>0</td>
            <td>.</td>
            <td>=</td>
            <td>/</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App
