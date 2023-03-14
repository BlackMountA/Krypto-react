import img from '../images/hero-section.png'

function Hero() {
  return (
      <div className='flex flex-col justify-center items-center  mx-auto px-6 sm:w-85 xxs:w-full md:w-70 pt-20 pb-4'>
          <p className=' text-white xsm:text-3xl sm:text-4xl xs:text-2xl xxs:text-xl  font-semibold '>
              Join the Crypto Revolution
          </p>
          <p className='text-center xxs:text-sm  xs:text-base my-1 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque sequi quasi quisquam, blanditiis dignissimos aperiam nisi laudantium quae maiores!  
          </p>
          <div className='flex gap-2'>
              <button className='p-2 bg-dark-purple mt-2 text-sm rounded-xl text-white transition ease-in hover:shadow-4xl duration-1000 hover:text-dark-purple'>Get Started</button><button className='p-2 border-solid border-2 border-dark-purple bg-transparent mt-2 rounded-xl text-dark-purple transition ease-in hover:shadow-3xl duration-1000 hover:text-white'>Log In</button>
          </div>
          <img src= {img} className='lg:w-96 lg:h-96 md:w-80 md:h-80 xsm:w-72 xsm:h-72 xxs:h-60 xxs:w-60 mt-8' />   
      </div>
  )
}

export default Hero