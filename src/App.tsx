import './assets/starter/tailwind.css'
import SideBar from './components/AsideBar/SideBar'
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
   <div className='flex flex-col'>
    <Navbar/>
    <SideBar/>
   </div>
  )
}

export default App
