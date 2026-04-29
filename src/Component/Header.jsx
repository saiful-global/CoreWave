import Logo from '../assets/Logo.png'
import Container from './ui/Container'

const Header = () => {
  return (
    <>
    <section className='bg-BackgroundColor01'>
        <Container>
            <div className='flex justify-between items-center pt-6.5'>
                <div className='flex gap-104'>
                    <div className='max-w-27.5'>
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex gap-11.25'>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>Home</li>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>About</li>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>Portfolio</li>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>Services</li>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>Blog</li>
                            <li className='font-Lato font-medium text-[16px] text-BlackTextColor hover:text-Primary01 duration-200'>Testimonial</li>
                        </ul>
                    </div>
                </div>
                
                {/* Register button  */}
                <div className='px-6.25 py-[14.5px] bg-Primary01 text-white rounded-[5px] font-Lato font-semibold text-[16px] hover:shadow-2xl transition duration-300'>
                    <a href="">Register</a>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Header