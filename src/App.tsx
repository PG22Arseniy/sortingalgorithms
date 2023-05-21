import "./styles/Global.css"
import {Route, Routes} from "react-router-dom"
import { Home } from './pages/Home'
import { Bubble } from './pages/Bubble'
import { Selection } from "./pages/Selection"
import { Insertion } from "./pages/Insertion"


function App() {

  return (
   
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/bubble' element = {<Bubble/>}/> 
        <Route path='/insertion' element = {<Insertion/>}/> 
        <Route path='/selection' element = {<Selection/>}/>  
    </Routes>
    
  )
}

export default App
