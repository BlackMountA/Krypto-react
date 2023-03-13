import React from 'react'

function Nav() {
  return (
    <nav className=' flex items-center justify-between px-2 py-1 bg-gray-500'>
      <p>Krypto</p>
      <ul className='flex gap-5'>
        <li><a></a>Home</li>
        <li><a></a>Services</li>
        <li><a></a>Products</li>
        <li><a>About</a></li>
      </ul>
      <button className='px-3 py-2 bg-blue-500 rounded-xl '>Get Started</button>
    </nav>
  )
}

export default Nav