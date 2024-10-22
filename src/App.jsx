import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/manager'
import Footer from './components/footer'

function App() {
  

  return (
    <>
     <Navbar />
     <div className='min-h-[80vh]'>
     <Manager />
     </div>
     <Footer />
     
   
    </>
  )
}

export default App
