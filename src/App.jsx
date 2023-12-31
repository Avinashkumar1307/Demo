import Navbar from './components/Navbar'
import Heros from './components/Heros'
import Mainsection from './components/Mainsection'
import Profile from './components/Profile'


function App() {
  return (
    <>
    {/* className='bg-[#1E1E1E] ' */}
      <div className='bg-[#1E1E1E] '>
       <Navbar/>
       <Heros/>
       <Mainsection/>
       {/* <Profile/> */}
      </div>
    </>
  )
}

export default App
