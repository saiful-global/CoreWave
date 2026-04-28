import React from 'react'
import bannerImage from '../assets/Group 45.png'

const Banner = () => {
  return (
    <>
    <section className='bg-[#EEFFF9]'>
        <div className="container">
            <div className='flex pt-6 items-center justify-between'>
                
                {/* left side / text  */}
                <div className='w-131.5'>
                    <div className='pb-12.75'>
                        <h2 className='font-Lato text-[60px] leading-[71.5px] font-light'>Empower Your Team</h2>
                        <h2 className='font-Lato text-[60px] leading-[71.5px] font-bold'>With CoreWave's</h2>
                        <p className='font-Lato font-normal text-[20px] leading-7.5 text-[#717171] pt-9.25'>Boost Productivity and Wellness in Your Organization with
                        CoreWave's Advanced Tools and Techniques</p>
                    </div>

                    {/* Button/anchore  */}
                    <div className='flex gap-5'>
                        <div className='px-6.25 py-[14.5px] bg-[#06C279] text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'>
                            <a href="">Explore More</a>
                        </div>
                        <div className='flex gap-3 px-6.25 pt-3.5 pb-3.75 rounded-[5px] border-2 border-[#06C279] hover:bg-[#06C279] hover:text-white'>
                            <div className='animate-pulse'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="10" fill="#DAF6EB"/>
                                <path d="M7.33334 13.9354V6.4608C7.33334 5.59418 8.25413 5.05254 8.95827 5.48585L15.458 9.22317C16.2163 9.65648 16.2163 10.7939 15.458 11.2272L8.95827 14.9646C8.25413 15.3437 7.33334 14.8021 7.33334 13.9354Z" fill="#06C279"/>
                                </svg>
                            </div>
                            <div className='font-Lato font-semibold text-[16px]'>
                                <a href="https://youtu.be/o9g8sd2qtNw?si=prZn6BTp5Mu_vNu2">Watch Video</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side / Image  */}
                <div className='pr-20.75 pt-2.75'>
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner