import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/Home.jsx'
import Counter from './Components/Counter/Counter.jsx'
import Product from './screens/Product.jsx'

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigator/>
      <Router/>
    </>
    
  )
}

export default App
