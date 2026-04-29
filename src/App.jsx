import { useState } from 'react'
import Header from './Component/Header'
import Banner from './Component/Banner'
import Experience from './Component/Experience'
import Services from './Component/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Experience></Experience>
    <Services></Services>
    </>
  )
}

export default App
