import React from 'react'
import image from '../assets/images/horticulture-crop.jpg'

const Home = () => {
  return (
    <div className='w-full h-screen relative top-0' id='home'>
              <img src={image} alt="/" className='w-full h-full object-cover absolute mix-blend-overlay'/>
              <div className='text-[30px] h-screen font-extrabold flex justify-center items-center pt-[170px] relative'>
                  {/* <div className='h-[360px] w-[300px]'>
                    <img className='bg-[#00000000] h-full w-full' src={Pennywise2} alt=''/>
                  </div>
                  <div className='text-[30px] font-extrabold pt-[100px] absolute  z-[10000]'>
                      <img className='w-[550px]' src={logo} alt=''/>
                  </div> */}
              </div>
    </div> 
  )
}

export default Home