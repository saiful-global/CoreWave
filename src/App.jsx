import { useState } from 'react'
import Header from './Component/Header'
import Banner from './Component/Banner'
import Experience from './Component/Experience'
import Services from './Component/Services'
import Project from './Component/Project'
import Take from './Component/Take'
import ClientsSaying from './Component/ClientsSaying'
import DontWorries from './Component/DontWorries'
import Footer from './Component/Footer'

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
    <DontWorries></DontWorries>
    <Footer></Footer>
    </>
  )
}

export default App
