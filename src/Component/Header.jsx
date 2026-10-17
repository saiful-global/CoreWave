import { useState, useRef, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Logo from '../assets/Logo.png'
import Container from './ui/Container'

// Menu items live in one array so desktop and mobile menus always stay in sync.
// "target" is the id of the section the link scrolls to. Each section component needs a matching
// id on its <section>, for example <section id='about'> in Experience.jsx.
// Blog: there is no blog section on this one-page site, so for now it scrolls to the "Take" section.
// To point it somewhere else, just change its target here.
const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Portfolio', target: 'portfolio' },
  { label: 'Services', target: 'services' },
  { label: 'Blog', target: 'take' },
  { label: 'Testimonial', target: 'testimonial' },
]

const Header = () => {
  // Controls whether the mobile/tablet dropdown menu is open or closed.
  const [open, setOpen] = useState(false)

  // Points to the whole header section (logo, hamburger button and dropdown menu).
  // We use it to check whether a click happened inside or outside the header.
  const headerRef = useRef(null)

  // Called when any menu link (or the Register button) is clicked.
  // - preventDefault() stops the browser's instant jump, so we can scroll smoothly instead
  //   (and the "#about" part is not added to the address bar).
  // - "home" has no section of its own: the header is already at the very top of the page,
  //   so we simply scroll to the top.
  // - For every other link we find the section by its id and scroll to it.
  //   The "?." makes nothing happen (instead of an error) if a section has no matching id yet.
  // - The mobile menu is closed after a click.
  const handleNavClick = (event, target) => {
    event.preventDefault()
    setOpen(false)

    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Close the menu when the user clicks/taps anywhere outside the header.
  useEffect(() => {
    // Nothing to listen for while the menu is closed.
    if (!open) return

    const handleOutsideClick = (event) => {
      // If the click target is NOT inside the header, close the menu.
      // Clicks on the hamburger button or menu items are inside the header,
      // so they are handled by their own onClick handlers instead.
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    // "pointerdown" covers both mouse clicks and touch taps with a single listener.
    document.addEventListener('pointerdown', handleOutsideClick)

    // Cleanup: remove the listener when the menu closes or the component unmounts,
    // so listeners never pile up and nothing leaks.
    return () => document.removeEventListener('pointerdown', handleOutsideClick)
  }, [open])

  return (
    <>
    {/*
      "relative" is required here: the mobile dropdown below uses "absolute",
      so it positions itself against this section.
      "z-50" keeps the dropdown above the Banner section that comes after the header.
    */}
    <section ref={headerRef} className='relative z-50 bg-BackgroundColor01'>
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
                                <li key={item.label} className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>
                                    <a href={`#${item.target}`} onClick={(event) => handleNavClick(event, item.target)}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Register button (desktop only). It scrolls to the Contact section in the footer. */}
                <a
                    href='#contact'
                    onClick={(event) => handleNavClick(event, 'contact')}
                    className='hidden lg:block px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'
                >
                    Register
                </a>

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
                                key={item.label}
                                className='border-b border-gray-100 font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'
                            >
                                {/* "block py-3.5" makes the whole row tappable, not just the text. handleNavClick also closes the menu. */}
                                <a
                                    href={`#${item.target}`}
                                    onClick={(event) => handleNavClick(event, item.target)}
                                    className='block py-3.5'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='py-5'>
                        <a
                            href='#contact'
                            onClick={(event) => handleNavClick(event, 'contact')}
                            className='block text-center px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px]'
                        >
                            Register
                        </a>
                    </div>
                </Container>
            </div>
        )}
    </section>
    </>
  )
}

export default Header
