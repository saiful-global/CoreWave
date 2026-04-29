import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Banner from './Component/Banner'
import Experience from './Component/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Experience></Experience>
    </>
  )
}

export default App
