import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="main sticky top-0 md:flex shadow-md py-2 bg-gradient-to-bl from-lime-600 to-red-400 flex-wrap justify-between items-center md:px-10">
        <div className="left">
          <h1 className='flex justify-center text-xl font-bold cursor-pointer'>Food_App</h1>
        </div>
        <div className="right py-2">
          <ul className='flex space-x-4 justify-center text-xl font-serif '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contect</li>
            <li className='cursor-pointer'>Search</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
