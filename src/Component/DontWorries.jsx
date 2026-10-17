import React from 'react'
import Container from './ui/Container'
import DontWorriesImage from '../assets/DontWorriesImage.png'

const DontWorries = () => {
  return (
    <>
    {/*
      Section padding: the top shrinks on small screens (48px -> 64px -> your original 86px).
      The bottom padding is 0 below 1024px on purpose: on mobile the image sits UNDER the text and
      should touch the bottom edge of the green section. From 1024px the image floats on the right
      (see below), so your original bottom padding comes back.
    */}
    <section className='bg-Primary01 pt-12 pb-0 sm:pt-16 lg:pt-21.5 lg:pb-21.25'>
        <Container>
            {/*
              Layout strategy:
              - Below 1024px: a centered column (flex-col): heading, button, then the image.
              - From 1024px (lg): "lg:block" returns to the normal flow with the image absolutely
                positioned on the right, exactly as in your Figma design. "relative" stays, because
                the absolute image is positioned against this div.
            */}
            <div className='relative flex flex-col items-center text-center lg:block lg:text-left'>
                {/*
                  Heading:
                  - Size: 28px (mobile) -> 38px (tablet) -> 45px (desktop 1280px+).
                  - From 1024px the heading must not run under the image. The image takes about 384px
                    (349px width + right-7 + a small gap), so lg:max-w-[calc(100%-24rem)] leaves the
                    rest of the line for the text and the heading wraps to 2 lines on laptops.
                  - From 1350px there is enough room for everything, so the limit is removed
                    (min-[1350px]:max-w-none) and the heading is on one line like original design.
                */}
                <h2 className='pb-6 lg:pb-9.5 font-Lato font-semibold text-[28px] leading-9 sm:text-[38px] sm:leading-12 xl:text-[45px] xl:leading-13.5 text-white capitalize lg:max-w-[calc(100%-24rem)] min-[1350px]:max-w-none'>Don’t worries, start your free trial today!</h2>
                <a className='px-6.25 py-[14.5px] bg-[#2F2F2F] text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300 hover:bg-white hover:text-[#2F2F2F]' href="">Get In Touch Now</a>
                {/*
                  Image:
                  - Mobile/tablet: normal flow under the button (mt-8), 224px wide on phones and 288px on tablets,
                    h-auto keeps the ratio. "block" removes the small gap that inline images leave under them.
                  - Desktop (lg): your original absolute position (-top-33, right-7) and fixed size.
                  - loading="lazy": this section is near the bottom of the page, so the image is only
                    downloaded when the visitor scrolls close to it.
                */}
                <img
                    className='block mt-8 w-56 sm:w-72 h-auto lg:mt-0 lg:absolute lg:-top-33 lg:right-7 lg:w-87.25 lg:h-86.75'
                    src={DontWorriesImage}
                    alt="Smiling woman inviting you to start a free trial"
                    loading='lazy'
                />
            </div>
        </Container>
    </section>
    </>
  )
}

export default DontWorries
