import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContext from './components/MainContext'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContext />
      <UserProfile name="Dennis" age="24" bio="Loves trying new things"/>
      <Footer/>
    </>
  )
}

export default App
