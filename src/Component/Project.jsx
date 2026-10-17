import React, { useState } from 'react'
import Container from './ui/Container'
import ProjectImage1 from '../assets/ProjectImage1.png'
import ProjectImage2 from '../assets/ProjectImage2.png'
import ProjectImage3 from '../assets/ProjectImage3.png'

// ---------------------------------------------------------------------------
// PROJECT DATA
// Every category has exactly 3 projects. The tabs and the cards are both built from this object,
// so to add or change a project you only edit it here, and the JSX below never needs to change.
//
// HOW TO ADD A REAL IMAGE LATER (for any demo project):
//   1. Put the image in src/assets, for example MobileApp1.png
//   2. Import it at the top of this file:  import MobileApp1 from '../assets/MobileApp1.png'
//   3. Replace "image: null" with "image: MobileApp1" for that project.
// While "image" is null, a "Image" placeholder box is shown instead.
// ---------------------------------------------------------------------------
const projects = {
    'Mobile App': [
        { title: 'Fitness Tracker App', description: 'Mobile app design that helps users track workouts, goals and daily progress', image: null },
        { title: 'Food Delivery App', description: 'Mobile app design for ordering meals and tracking deliveries in real time', image: null },
        { title: 'Digital Banking App', description: 'Mobile app design for managing accounts, payments and transfers safely', image: null },
    ],
    'Web Development': [
        { title: 'Portfolio Landing Page', description: 'Web development is the art of creating engaging and visually appealing websites', image: ProjectImage1 },
        { title: 'Plant Landing Page', description: 'Web development is the art of creating engaging and visually appealing websites', image: ProjectImage2 },
        { title: 'Real Estate Landing Page', description: 'Web development is the art of creating engaging and visually appealing websites', image: ProjectImage3 },
    ],
    'UI/UX Design': [
        { title: 'E-commerce Dashboard', description: 'UI/UX design for a clean dashboard that makes managing an online store easy', image: null },
        { title: 'Travel Booking Experience', description: 'UI/UX design that guides travelers from searching to booking in a few steps', image: null },
        { title: 'Music Player Interface', description: 'UI/UX design for a simple, modern interface to browse and play music', image: null },
    ],
    'Graphic Design': [
        { title: 'Brand Identity Kit', description: 'Graphic design with logo, colors and typography for a complete brand identity', image: null },
        { title: 'Event Poster Design', description: 'Graphic design for eye-catching posters that bring more people to your event', image: null },
        { title: 'Social Media Pack', description: 'Graphic design with ready-to-post templates for a consistent social media look', image: null },
    ],
    'Motion Graphic': [
        { title: 'Logo Animation', description: 'Motion graphic that brings your logo to life with smooth, memorable movement', image: null },
        { title: 'Explainer Video Intro', description: 'Motion graphic that explains your product clearly in under a minute', image: null },
        { title: 'Product Promo Reel', description: 'Motion graphic promo that shows off your product features with energy', image: null },
    ],
}

// The tab names come from the keys of the object above, in the same order.
const categories = Object.keys(projects)

const Project = () => {

    // The currently selected category. Web Development is the default, as in your original design.
    const [active, setActive] = useState('Web Development');

    // The 3 projects of the selected category. When "active" changes, React re-renders
    // and this line picks the new list, so the cards below update automatically.
    const currentProjects = projects[active]

    // Called when a tab is clicked: it makes the tab active AND scrolls it to the center of the tab bar.
    // This matters on mobile, where the tab bar scrolls sideways and the clicked tab may be half hidden.
    // block: 'nearest' makes sure the page itself never scrolls up or down, only the tab bar moves.
    const handleTabClick = (item, event) => {
        setActive(item)
        event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }

    // Lets keyboard users select a tab with Enter or Space (a plain <li> does not react to the keyboard by default).
    const handleTabKeyDown = (item, event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handleTabClick(item, event)
        }
    }

  return (
    <>
    {/* Section padding: 56px (mobile) -> 64px (tablet) -> your original 91px / 100px (desktop 1024px+) */}
    <section id='portfolio' className='pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-22.75 lg:pb-25'>
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
                  - role="tablist" / role="tab" / aria-selected tell screen readers this is a tab control.
                */}
                <ul role='tablist' className='flex w-max max-w-full mx-auto overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-0 lg:gap-18.25 pb-8 lg:pb-13.25'>
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
                        role='tab'
                        aria-selected={active === item}
                        tabIndex={0}
                        onClick={(event) => handleTabClick(item, event)}
                        onKeyDown={(event) => handleTabKeyDown(item, event)}
                        className={`shrink-0 whitespace-nowrap px-4 sm:px-6 lg:px-0 cursor-pointer font-Lato text-[16px] font-medium relative pb-5.25 duration-300 ${active === item ? 'text-Primary01 after:bg-Primary01' : 'text-BodyText after:bg-[#CECECE]'} after:content-[""] after:h-1 after:absolute after:bottom-0 after:left-0 after:w-full lg:after:-left-1/3 lg:after:w-[200%]`}
                    >{item}</li>
                    ))}
                </ul>
            </div>

            {/*
              Project cards:
              - Mobile (below 640px): 1 column.
              - Tablet (640px - 1023px): 2 columns.
              - Desktop (1024px+): lg:flex with lg:gap-6 (24px) between the cards. Your first images
                (Web Development) have a white border baked INTO the picture, which used to create the
                space between them. New images without that border would touch each other, so the space
                now comes from the layout (the gap) and works for every image. To get more or less space,
                change gap-6 (for example gap-4 = 16px, gap-8 = 32px).
              The "min-w-0" on each card lets it shrink on small laptops; without it the images keep
              their natural width and push the page sideways.
              "lg:flex-1" makes the 3 cards share the full row equally (each takes 1/3 of the space left
              after the gaps). Without it, every card was only as wide as its own content, so the whole
              group stayed on the left side of the row instead of spreading across the center.
              key={active}: when the category changes, React sees a different key and replaces the whole
              card list instead of reusing the old one, so images never "flash" the previous project.
            */}
            <div key={active} className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:gap-6'>
                {currentProjects.map((project, index) => (
                    // Third card, tablet only: with 2 columns it would sit alone on the second row at the left.
                    // sm:col-span-2 lets it use the whole row, then sm:w-[calc(50%-1rem)] gives it exactly the
                    // width of one column (1rem = half of the 2rem gap) and sm:mx-auto centers it.
                    // From lg these are reset, because the desktop layout is flex.
                    <div
                        key={project.title}
                        className={`lg:min-w-0 lg:flex-1 ${index === 2 ? 'sm:col-span-2 sm:w-[calc(50%-1rem)] sm:mx-auto lg:w-auto lg:mx-0' : ''}`}
                    >
                        {project.image ? (
                            // Real image: w-full h-auto fills the card and keeps its ratio.
                            // loading="lazy": downloaded only when the visitor scrolls near it.
                            <img className='w-full h-auto rounded-[15px]' src={project.image} alt={`${project.title} preview`} loading='lazy' />
                        ) : (
                            // Demo placeholder shown while "image" is null.
                            // aspect-[16/15] gives it roughly the same shape as your real project images.
                            // If your final images have a different shape, change this ratio.
                            <div className='w-full aspect-[16/15] rounded-[15px] bg-BackgroundColor01 border-2 border-dashed border-Primary01/40 flex items-center justify-center font-Lato font-semibold text-[20px] text-Primary01'>
                                Image
                            </div>
                        )}
                        <h3 className='pt-5 pb-1.75 font-Lato font-semibold text-[22px] leading-7.5 text-BlackTextColor text-center'>{project.title}</h3>
                        <p className='max-w-86 mx-auto font-Lato font-normal text-[16px] leading-5.5 text-BodyText text-center'>{project.description}</p>
                    </div>
                ))}
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
