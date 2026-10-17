import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Logo from '../assets/Logo.png'
import Container from './ui/Container'

// Menu items live in one array so desktop and mobile menus always stay in sync.
const navItems = ['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Testimonial']

const Header = () => {
  // Controls whether the mobile/tablet dropdown menu is open or closed.
  const [open, setOpen] = useState(false)

  return (
    <>
    {/*
      "relative" is required here: the mobile dropdown below uses "absolute",
      so it positions itself against this section.
      "z-50" keeps the dropdown above the Banner section that comes after the header.
    */}
    <section className='relative z-50 bg-BackgroundColor01'>
        <Container>
            <div className='flex justify-between items-center pt-5 pb-4 lg:pt-6.5 lg:pb-0'>
                {/*
                  The gap between the logo and the menu grows step by step with the screen width.
                  Your original design uses gap-104 (416px), but that is too wide for small laptops
                  and would overflow the screen. So the full gap only applies from 1350px and up,
                  which keeps the Figma desktop layout exactly as it was.
                */}
                <div className='flex lg:gap-12 xl:gap-40 min-[1350px]:gap-104'>
                    <div className='max-w-27.5'>
                        <img src={Logo} alt="CoreWave logo" />
                    </div>

                    {/* Desktop menu: hidden below 1024px (lg), visible from lg and up */}
                    <div className='hidden lg:block'>
                        <ul className='flex gap-6 xl:gap-11.25'>
                            {navItems.map((item) => (
                                <li key={item} className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Register button (desktop only) */}
                <div className='hidden lg:block px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'>
                    <a href="">Register</a>
                </div>

                {/*
                  Hamburger button (mobile + tablet only, hidden from lg and up).
                  - Toggles the "open" state on each click.
                  - The icon switches between the menu icon and the close (X) icon.
                  - aria-label / aria-expanded help screen readers understand the button.
                */}
                <button
                    type='button'
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    className='lg:hidden text-[28px] text-BlackTextColor hover:text-Primary01 duration-200'
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>
        </Container>

        {/*
          Mobile + tablet dropdown menu.
          - "absolute inset-x-0 top-full" places it directly under the header, full width.
          - Because it is absolutely positioned, it floats over the content below
            instead of pushing the Banner section down.
          - It only renders when "open" is true.
        */}
        {open && (
            <div className='lg:hidden absolute inset-x-0 top-full bg-white shadow-lg'>
                <Container>
                    <ul className='flex flex-col py-2'>
                        {navItems.map((item) => (
                            <li
                                key={item}
                                // Close the menu after the user taps an item.
                                onClick={() => setOpen(false)}
                                className='py-3.5 border-b border-gray-100 font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className='py-5'>
                        <a href="" className='block text-center px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px]'>Register</a>
                    </div>
                </Container>
            </div>
        )}
    </section>
    </>
  )
}

export default Header
