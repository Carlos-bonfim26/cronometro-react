import { useState } from 'react'
import Cronometro from './components/Cronometro.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Cronometro/>
   </div>
  )
}

export default App
