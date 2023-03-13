import img from '../images/hero-section.png'

function Hero() {
  return (
      <div className='flex flex-col justify-center items-center w-9/12 mx-auto'>
          <h1>
              Join the crypto revolution
          </h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque sequi quasi quisquam, blanditiis dignissimos aperiam nisi laudantium quae maiores!
          </p>
          <div>
              <button className='bg-dark-purple'>Get Started</button><button bg>Log In</button>
          </div>
          <img src= {img} className='w-96 h-96' />   
      </div>
  )
}

export default Hero