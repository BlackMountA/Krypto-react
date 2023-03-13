import React from 'react'

function Footer() {
  return (
      <div className='flex  bg-dark-purple justify-between p-6'>
          <p className='text-white text-xl'>Krypto</p>
          <div className='flex justify-between  text-white gap-5'>
            <div  className='text-white ' >
                <p className=' text-xl' >About</p>
                <ul>
                    <li><a className=' text-base'>lorem</a></li>
                    <li><a className=' text-base'>lorem</a></li>
                    
                    
                </ul> 
            </div>
            <div>
                <p className=' text-xl'>Services</p>
                <ul>
                    <li><a className=' text-base'>Defi</a></li>
                    <li><a className=' text-base'>SaveFi</a></li>
                </ul> 
            </div>
            <div>
                <p className=' text-xl'>Porfolio</p>
                <ul className='list-none'>
                    <li><a className=' text-base'>lorem</a></li>
                    
                </ul> 
            </div>
            <div>
                <p className=' text-xl'>Contact</p>
                <ul>
                    <li><a className=' text-base'>Facebook</a></li>
                    <li><a className=' text-base'>Instagram</a></li>
                    <li><a className=' text-base'>Twitter</a></li>
                </ul> 
            </div>    
          </div>
          <button className=' bg-white w-24 h-9 rounded-xl text-dark-purple text-base font-semibold'>Get Started</button>
      </div>
  )
}

export default Footer