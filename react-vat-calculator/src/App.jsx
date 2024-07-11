import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const [vat, setVAT] = useState(0)
  const [discount, setDiscount] = useState(0)


  const handlerPrice = (e) => {
    const price = e.target.value
    console.log(price)
    setPrice(price)
    let v = (price - discount) * 0.07
    setVAT(Math.round(v * 100) / 100)
  }

  const handlerDiscount = (e) => {
    const d = e.target.value
    setDiscount(d)
    let v = (price - discount) * 0.07
    setVAT(Math.round(v * 100) / 100)

  }

  return (
    <>
    <label>Price</label>
    <input type="number" value={price} onChange={handlerPrice}/>

    <label>Discount</label>
    <input type="number" value={discount} onChange={handlerDiscount}/>

      <h1>Gross Price = {price - discount}</h1>
      <h1>VAT = {vat}</h1>

    </>
  )
}

export default App
