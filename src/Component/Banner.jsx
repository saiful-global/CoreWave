import React from 'react'
import bannerImage from '../assets/Group 45.png'
import Container from './ui/Container'

const Banner = () => {
  return (
    <>
    <section className='bg-BackgroundColor01'>
        <Container>
            {/*
              Layout strategy:
              - Mobile + tablet (below 1024px): flex-col, so the text sits on top and the image below it.
              - Desktop (1024px and up): flex-row, the original side-by-side layout from the Figma design.
              No bottom padding on purpose: the person's image should touch the bottom edge of the section, like on desktop.
            */}
            <div className='flex flex-col lg:flex-row pt-6 items-center justify-between'>
                
                {/* left side / text  */}
                {/*
                  Width:
                  - w-full on small screens so the text can use the whole line.
                  - lg:w-1/2 on laptops (1024px+) so text and image share the space evenly.
                  - xl:w-131.5 from 1280px: your original fixed Figma width (526px).
                  Text is centered on mobile/tablet and left aligned on desktop.
                */}
                <div className='w-full lg:w-1/2 xl:w-131.5 text-center lg:text-left'>
                    <div className='pb-8 lg:pb-12.75'>
                        {/*
                          Heading size grows in steps: 34px (mobile) -> 48px (tablet) -> 60px (desktop 1280px+).
                          leading (line-height) is kept in proportion to the font size at each step.
                        */}
                        <h2 className='font-Lato text-[34px] leading-[42px] sm:text-[48px] sm:leading-[58px] xl:text-[60px] xl:leading-[71.5px] font-light'>Empower Your Team</h2>
                        <h2 className='font-Lato text-[34px] leading-[42px] sm:text-[48px] sm:leading-[58px] xl:text-[60px] xl:leading-[71.5px] font-bold'>With CoreWave's</h2>
                        {/* max-w-lg + mx-auto keeps the paragraph at a readable width and centered on mobile; lg:mx-0 puts it back to the left on desktop */}
                        <p className='font-Lato font-normal text-[16px] leading-6 sm:text-[18px] sm:leading-7 xl:text-[20px] xl:leading-7.5 text-BodyText pt-5 lg:pt-9.25 max-w-lg mx-auto lg:mx-0'>Boost Productivity and Wellness in Your Organization with
                        CoreWave's Advanced Tools and Techniques</p>
                    </div>

                    {/* Button/anchore  */}
                    {/*
                      flex-wrap lets the two buttons drop onto two lines on very small screens
                      (around 320px) instead of overflowing. They are centered on mobile, left on desktop.
                    */}
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5'>
                        <div className='px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'>
                            <a href="">Explore More</a>
                        </div>
                        <div className='flex gap-3 px-6.25 pt-3.5 pb-3.75 rounded-[5px] border-2 border-Primary01 hover:bg-Primary01 hover:text-white animate-pulse'>
                            <div>
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
                {/*
                  Image wrapper:
                  - min-w-0 lets the flex item shrink below the image's natural width (without it, a large
                    image can force horizontal scrolling on small laptops).
                  - The right padding (pr-20.75) from your design only applies from 1280px up;
                    on laptops it is smaller so the image has more room.
                  - mt-8 adds space between the buttons and the image when they are stacked on mobile.
                */}
                <div className='min-w-0 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:pr-8 xl:pr-20.75 pt-2.75'>
                    {/*
                      max-w-full + h-auto: the image never gets wider than its container and keeps its ratio,
                      so on big screens it stays at its natural (Figma) size.
                      The max-w on small screens stops it from looking too huge on phones/tablets.
                      fetchPriority="high": this image is the first thing visitors see (above the fold),
                      so the browser loads it first. This improves the perceived load speed.
                    */}
                    <img
                        src={bannerImage}
                        alt="Smiling man pointing at CoreWave's headline"
                        fetchPriority='high'
                        className='block w-full max-w-85 sm:max-w-105 lg:max-w-full h-auto'
                    />
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Banner
