import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './chicken'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import Clicker from './Clicker'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'



function App() {
  //const [count, setCount] = useState(0)
 const colors=['red','blue','green','white','purple','yellow','orange','pink','cyan','brown','violet'];
  return (
    <>
      <ColorBoxGrid colors={colors}/>
    </>
    
  )
}

export default App
