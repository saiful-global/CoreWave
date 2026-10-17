import React from 'react'
import Container from './ui/Container'
import BannerImage2 from '../assets/BannerImage2.png'

const Experience = () => {
  return (
    <>
    {/* Vertical padding shrinks on small screens: 48px (mobile) -> 64px (tablet) -> 100px (desktop, your original py-25) */}
    <section className='py-12 sm:py-16 lg:py-25'>
      <Container>
        {/*
          Layout strategy:
          - Below 1024px: flex-col, so the text sits on top and the image below it (gap-10 between them).
          - From 1024px: flex-row, your original side-by-side layout.
        */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between lg:items-center'>

          {/*
            Text block width:
            - Full width on mobile/tablet.
            - lg:w-1/2 on laptops (1024px+), so the text and image share the space.
            - From 1350px the width is "auto" again, which is your original desktop behavior.
          */}
          <div className='lg:w-1/2 min-[1350px]:w-auto'>
            {/*
              Heading size grows in steps: 30px (mobile) -> 38px (tablet/laptop) -> 45px (desktop 1280px+).
              lg:max-w-111.25 (your original 445px) is only applied on desktop so the heading
              can use the full line on mobile and tablet.
            */}
            <h2 className='font-Lato font-semibold text-[30px] leading-9 sm:text-[38px] sm:leading-12 xl:text-[45px] xl:leading-13.5 text-BlackTextColor pb-5 lg:pb-7.25 lg:max-w-111.25'>Experience the power of Corewave</h2>
            <p className='font-Lato font-normal text-[16px] leading-6.5 text-BodyText pb-8 lg:pb-14.75 max-w-137.5'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
            <a className='px-6.25 py-[14.5px] bg-[#DAF6EB] text-Primary01 rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300' href="">Learn More</a>
          </div>

          {/*
            Image block width:
            - Full width on mobile/tablet.
            - lg:w-[46%] on laptops, so the large image can shrink instead of overflowing the screen.
            - From 1350px: "auto" = the image's natural size, same as your Figma design.
            - min-w-0 allows this flex item to shrink below the image's natural width.
          */}
          <div className='min-w-0 lg:w-[46%] min-[1350px]:w-auto'>
            {/*
              w-full + h-auto: the image fills its block and keeps its ratio on small screens.
              max-w-full: on big screens it never grows past its natural size.
              The corner radius is smaller on mobile (30px) and your original 50px from tablet up.
              loading="lazy": this section is below the fold, so the browser only downloads the
              image when the visitor scrolls near it. This makes the first page load faster.
            */}
            <img
              className='w-full max-w-full h-auto rounded-b-[30px] rounded-tl-[30px] sm:rounded-b-[50px] sm:rounded-tl-[50px]'
              src={BannerImage2}
              alt="Team members discussing together in an office"
              loading='lazy'
            />
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Experience
