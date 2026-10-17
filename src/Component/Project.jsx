import React, { useState } from 'react'
import Container from './ui/Container'
import ProjectImage1 from '../assets/ProjectImage1.png'
import ProjectImage2 from '../assets/ProjectImage2.png'
import ProjectImage3 from '../assets/ProjectImage3.png'

const Project = () => {

    const [active, setActive] = useState('Web Development');
    const categories = ['Mobile App', 'Web Development', 'UI/UX Design', 'Graphic Design', 'Motion Graphic'];

    // Called when a tab is clicked: it makes the tab active AND scrolls it to the center of the tab bar.
    // This matters on mobile, where the tab bar scrolls sideways and the clicked tab may be half hidden.
    // block: 'nearest' makes sure the page itself never scrolls up or down, only the tab bar moves.
    const handleTabClick = (item, event) => {
        setActive(item)
        event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }

  return (
    <>
    {/* Section padding: 56px (mobile) -> 64px (tablet) -> your original 91px / 100px (desktop 1024px+) */}
    <section className='pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-22.75 lg:pb-25'>
        <Container>
            {/* Heading size: 30px (mobile) -> 38px (tablet) -> 45px (desktop 1280px+) */}
            <h2 className='pb-6 lg:pb-8.25 font-Lato font-semibold text-[30px] leading-9 sm:text-[38px] sm:leading-12 xl:text-[45px] xl:leading-13.5 text-BlackTextColor text-center'>Our Latest Project</h2>
            <div>
                {/*
                  Tab bar. The tricky part is that five tabs do not fit on a phone, so:
                  - Below 1024px: the bar scrolls sideways (overflow-x-auto) with the scrollbar hidden.
                  - "w-max max-w-full mx-auto": the bar is only as wide as its tabs and is centered when
                    they fit. When they do not fit, it stops at the screen width and becomes scrollable.
                  - From 1024px (lg): overflow-visible, because your desktop gray line is drawn by the
                    pseudo-element (after:) of each tab, which is wider than the tab itself (200%).
                    With overflow-x-auto that wider line would create a pointless scrollbar.
                */}
                <ul className='flex w-max max-w-full mx-auto overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-0 lg:gap-18.25 pb-8 lg:pb-13.25'>
                    {/*
                      Underline of each tab (the "after:" classes on the <li> below):
                      - Mobile/tablet: each tab draws its own underline with the same width as the tab (after:w-full),
                        and tabs touch each other (gap-0 + horizontal padding), so the line looks continuous.
                      - Desktop (lg): your original trick. The underline is 200% wide and starts 1/3 before the tab,
                        so it overlaps the neighbors and the gaps between the tabs are filled with the gray line.
                    */}
                    {categories.map((item) => (
                    <li
                        key={item}
                        onClick={(event) => handleTabClick(item, event)}
                        className={`shrink-0 whitespace-nowrap px-4 sm:px-6 lg:px-0 cursor-pointer font-Lato text-[16px] font-medium relative pb-5.25 duration-300 ${active === item ? 'text-Primary01 after:bg-Primary01' : 'text-BodyText after:bg-[#CECECE]'} after:content-[""] after:h-1 after:absolute after:bottom-0 after:left-0 after:w-full lg:after:-left-1/3 lg:after:w-[200%]`}
                    >{item}</li>
                    ))}
                </ul>
            </div>

            {/*
              Project cards:
              - Mobile (below 640px): 1 column.
              - Tablet (640px - 1023px): 2 columns.
              - Desktop (1024px+): lg:flex with no gap, exactly your original layout.
              The "min-w-0" on each card lets it shrink on small laptops; without it the images keep
              their natural width and push the page sideways.
            */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:gap-0'>
                <div className='lg:min-w-0'>
                    {/* w-full h-auto: the image fills its card and keeps its ratio. loading="lazy": downloaded only when the visitor scrolls near it. */}
                    <img className='w-full h-auto rounded-[15px]' src={ProjectImage1} alt="Portfolio landing page design preview" loading='lazy' />
                        <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Portfolio Landing Page</h3>
                        <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                </div>
                <div className='lg:min-w-0'>
                    <img className='w-full h-auto rounded-[15px]' src={ProjectImage2} alt="Plant landing page design preview" loading='lazy' />
                        <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Plant Landing Page</h3>
                        <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                </div>
                {/*
                  Third card, tablet only: with 2 columns it would sit alone on the second row at the left.
                  sm:col-span-2 lets it use the whole row, then sm:w-[calc(50%-1rem)] gives it exactly the
                  width of one column (1rem = half of the 2rem gap) and sm:mx-auto centers it.
                  From lg these are reset, because the desktop layout is flex.
                */}
                <div className='lg:min-w-0 sm:col-span-2 sm:w-[calc(50%-1rem)] sm:mx-auto lg:w-auto lg:mx-0'>
                    <img className='w-full h-auto rounded-[15px]' src={ProjectImage3} alt="Real estate landing page design preview" loading='lazy' />
                        <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>Real Estate Landing Page</h3>
                        <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>Web development is the art of creating engaging and visually appealing websites </p>
                </div>
            </div>
            <div className='pt-10 lg:pt-11.5 text-center'>
                <a className='px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300' href="">View All Projects</a>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Project
