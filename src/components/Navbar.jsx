import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white ' style={{ backgroundColor: '#001d3d' }}>
      <div className="mycontainer flex justify-around items-center px-4 h-14 py-5 ">
        <div className="logo font-bold text-2xl">
           KeyNest 
        </div>
     {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
        </li>
      </ul>
      */}
      <button className='text-white my-5 flex justify-between items-center rounded-md '>
         <img className='invert p-1 w-10' src='github.png' alt='github'></img>
         <span className='font-semibold px-2'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
