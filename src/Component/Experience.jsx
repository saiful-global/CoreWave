import React from 'react'
import Container from './ui/Container'
import BannerImage2 from '../assets/BannerImage2.png'

const Experience = () => {
  return (
    <>
    <section className='py-25'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-Lato font-semibold text-[45px] leading-13.5 text-BlackTextColor pb-7.25 max-w-111.25'>Experience the power of Corewave</h2>
            <p className='font-Lato font-normal text-[16px] leading-6.5 text-BodyText pb-14.75 max-w-137.5'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
            <a className='px-6.25 py-[14.5px] bg-[#DAF6EB] text-Primary01 rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300' href="">Learn More</a>
          </div>
          <div>
            <img src={BannerImage2} alt="" />
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Experience