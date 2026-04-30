import { useState } from 'react'
import Header from './Component/Header'
import Banner from './Component/Banner'
import Experience from './Component/Experience'
import Services from './Component/Services'
import Project from './Component/Project'
import Take from './Component/Take'
import ClientsSaying from './Component/ClientsSaying'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Experience></Experience>
    <Services></Services>
    <Project></Project>
    <Take></Take>
    <ClientsSaying></ClientsSaying>
    </>
  )
}

export default App
