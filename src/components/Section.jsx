import img1 from '../images/section-img1.png';
import img2 from '../images/section-img2.png'


function Section() {
  return (
      <div>
          <p className='text-center text-2xl font-semibold text-dark-purple'>Our Usp</p>
          <div className='flex'>
              <img src={img1} className = "w-96 h-96" />
              <div>
                  <p>
                      Access to your favorite blockchain features
                  </p>
                  <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum quasi ipsa numquam quae officia similique vero repellendus quibusdam? Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quam magnam, animi architecto commodi eligendi eius esse beatae explicabo voluptatem tempora est in delectus totam atque unde et hic ea!
                  </p>
                  <button>Learn More</button>
              </div>
          </div>
          <div>
              <img src={img2} className = "w-96 h-96" />
              <div>
                  <p>
                     More Cryptocurrencies with ease
                  </p>
                  <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum quasi ipsa numquam quae officia similique vero repellendus quibusdam? Amet voluptate consequatur dolores omnis molestias sequi quisquam labore id nobis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quam magnam, animi architecto commodi eligendi eius esse beatae explicabo voluptatem tempora est in delectus totam atque unde et hic ea!
                  </p>
                  <button>Learn More</button>
              </div>
          </div>
      </div>
  )
}

export default Section