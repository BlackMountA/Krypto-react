import img1 from '../images/section-img1.png';
import img2 from '../images/section-img2.png'


function Section() {
  return (
      <div className='flex flex-col md:gap-12 xxs:gap-6 px-6 py-4 bg-white'>
          <p className='text-center text-2xl font-semibold text-dark-purple '>Our Usp</p>
          <div className='flex xxs:flex-col md:flex-row gap-4 '>
              <img src={img1} className = "lg:w-96 lg:h-96 md:w-80 md:h-80 xsm:w-72 xsm:h-72 xxs:h-60 xxs:w-60" />
              <div className='md:pt-12 '>
                  <h3 className='font-bold text-xl'>
                      Access to your favorite blockchain features
                  </h3>
                  <p className='xsm:text-base xxs:text-sm'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum quasi ipsa numquam quae officia similique vero repellendus quibusdam? Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis. Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis
                        
                  </p>
                  <button className=' pri-btn p-2 bg-dark-purple mt-2 rounded-xl mt-4 text-white transition ease-in hover:shadow-4xl duration-1000 hover:text-dark-purple'>Learn More</button>
              </div>
          </div>
          <div className='flex xxs:flex-col md:flex-row gap-4'>
              <img src={img2} className = "lg:w-96 lg:h-96 md:w-80 md:h-80 xsm:w-72 xsm:h-72 xxs:h-60 xxs:w-60 xxs:order-1 md:order-2" />
              <div className='md:order-1 xxs:order-2 md:pt-12'>
                  <p className='font-bold xsm:text-xl xxs:text-base '>
                     More Cryptocurrencies with ease
                  </p>
                  <p className='xsm:text-base xxs:text-sm'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum quasi ipsa numquam quae officia similique vero repellendus quibusdam? Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis. Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis
                        
                  </p>
                  <button className='pri-btn p-2 bg-dark-purple mt-2 rounded-xl text-white hover:text-dark-purple transition ease-in hover:shadow-4xl duration-1000'>Learn More</button>
              </div>
          </div>
      </div>
  )
}

export default Section