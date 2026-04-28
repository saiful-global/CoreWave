import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <>
    <section className='bg-[#EEFFF9]'>
        <div className="container">
            <div className='flex justify-between items-center pt-6.5'>
                <div className='flex gap-104'>
                    <div className='max-w-27.5'>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex gap-11.25'>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>Home</li>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>About</li>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>Portfolio</li>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>Services</li>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>Blog</li>
                            <li className='font-Lato font-medium text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-200'>Testimonial</li>
                        </ul>
                    </div>
                </div>
                <div className='px-6.25 py-[14.5px] bg-[#06C279] text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'>
                    <a href="">Register</a>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Header