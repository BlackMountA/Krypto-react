import React from 'react'
import { useState } from 'react'

function Nav() {
  const [fix, setFix] = useState(false);
  function fixed() {
    if (window.scrollY > 0) {
      setFix(true)
    } else setFix(false)
  }
  window.addEventListener('scroll', fixed )
  return (
    <nav className={fix ? 'sticky top-0 left-0 flex text-white w-full items-center justify-between px-6 py-2 bg-light-purple' :' relative flex items-center justify-between px-6 py-2 bg-gray-500 text-white'}>
      <p className='text-dark-purple text-xl font-semibold '>Krypto</p>
      <ul className='lg:flex sm:flex gap-5 xxs:hidden'>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Products</a></li>
        <li><a>About</a></li>
      </ul>
      <button className='sm:block sm:p-2 sm:bg-dark-purple  sm:rounded-xl xxs:hidden'>Get Started</button>
      <div className='  sm:hidden   '>
        <div className='line1 w-7 h-1 bg-white m-1'></div>
        <div className='line2 w-7 h-1 bg-white m-1'></div>
        <div className='line3 w-7 h-1 bg-white m-1'></div>
      </div>
    </nav>
  )
}

export default Nav