import React from 'react'
import Container from './ui/Container'
import DontWorriesImage from '../assets/DontWorriesImage.png'

const DontWorries = () => {
  return (
    <>
    <section className='bg-Primary01 pt-21.5 pb-21.25'>
        <Container>
            <div className='relative'>
                <h2 className='pb-9.5 font-Lato font-semibold text-[45px] leading-13.5 text-white capitalize'>Don’t worries, start your free trial today!</h2>
                <a className='px-6.25 py-[14.5px] bg-[#2F2F2F] text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300 hover:bg-white hover:text-[#2F2F2F]' href="">Get In Touch Now</a>
                <img className='absolute -top-33 right-7 w-87.25 h-86.75' src={DontWorriesImage} alt="" />
            </div>
        </Container>
    </section>
    </>
  )
}

export default DontWorries