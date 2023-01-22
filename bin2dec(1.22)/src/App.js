import React, { useRef, useState } from 'react'
import './App.css'

function App () {
  const inputRef = useRef(null)
  const [decData, setDecData] = useState(0)
  //转换函数
  const convertBin = () => {
    const data = inputRef.current.value
    let regexp = /^[0-1]+$/
    if (data.match(regexp)) {
      //运算思路：将字符串转换为数组，然后将数组中的每一项转换为数字，然后将数组中的每一项乘以2的n次方-1，然后将所有项相加
      const dataArr = data.split('').map((item) => parseInt(item)).reverse()
      //6,我靠，真的要reverse一下，不然就是错的
      console.log(dataArr)

      let decData = dataArr.reduce(
        function (acc, item, index) {
          // if (item !== 0 && item !== 1) {
          //   alert('请输入二进制数')
          //   return undefined
          // }
          console.log(acc, item, index)
          return acc + item * Math.pow(2, index)
        }
      )
      console.log(decData)
      setDecData(decData)
    } else {
      alert('请输入二进制数')
      return undefined
    }
  }
  //清空函数
  const clearHandler = () => {
    console.log('Clear button clicked')
  }
  return (
    <div>
      <h1>Bin2Dec</h1>
      <p>Binary to Decimal Converter</p>
      <div className="container">
        <div className="input" >
          <input type="text" placeholder="请输入二进制数" ref={inputRef} />
        </div>
        <div className="buttons">
          <button onClick={convertBin}>Convert</button>
          <button onClick={clearHandler}>Clear</button>
        </div>
        <div className="output">
          <input type="text" value={decData} readOnly />
        </div>
      </div>
    </div>
  )
}

export default App
