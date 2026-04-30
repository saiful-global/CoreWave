import React from 'react'
import Container from './ui/Container'
import ClientSayingImage from '../assets/ClientSayingImage.png'
import ClientSayingImage2 from '../assets/ClientSayingImage2.png'
import ClientSayingImage3 from '../assets/ClientSayingImage3.png'

const ClientsSaying = () => {

  return (
    <>
    <section className='pt-23.5 pb-25'>
        <Container>
            <h2 className='pb-12 font-Lato font-semibold text-[45px] leading-13.5 text-BlackTextColor text-center capitalize'>What our clients saying</h2>

            <div className='flex justify-between'>
                <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
                    {/* Clients Image  */}
                    <div className='pb-3.75 relative'>
                        <img className='w-37 h-37 rounded-full' src={ClientSayingImage} alt="" />
                        <div className='absolute top-6 -left-3.5'>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.5" cy="21.5" r="21.5" fill="#343434"/>
                            <g clip-path="url(#clip0_4478_26)">
                            <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white"/>
                            <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4478_26">
                            <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                    <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>Excellent Team!</h3>
                    {/* Star icon svg  */}
                    <div className='flex gap-1.25 pb-5'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                    </div>
                    <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
                    <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Farhan Rio</h3>
                    <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
                </div>
                <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
                    {/* Clients Image  */}
                    <div className='pb-3.75 relative'>
                        <img className='w-37 h-37 rounded-full' src={ClientSayingImage2} alt="" />
                        <div className='absolute top-6 -left-3.5'>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.5" cy="21.5" r="21.5" fill="#343434"/>
                            <g clip-path="url(#clip0_4478_26)">
                            <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white"/>
                            <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4478_26">
                            <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                    <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>Greate Service</h3>
                    {/* Star icon svg  */}
                    <div className='flex gap-1.25 pb-5'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                    </div>
                    <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
                    <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Alizabeth Nancy</h3>
                    <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
                </div>
                <div className='mb-10 shadow-[0px_4px_20px_1px_rgba(0,0,0,0.05)] bg-white rounded-[15px] pb-11 px-14.25 pt-11.25 duration-200 group flex flex-col justify-center items-center border-2 border-[#F1F1F1] '>
                    {/* Clients Image  */}
                    <div className='pb-3.75 relative'>
                        <img className='w-37 h-37 rounded-full' src={ClientSayingImage3} alt="" />
                        <div className='absolute top-6 -left-3.5'>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.5" cy="21.5" r="21.5" fill="#343434"/>
                            <g clip-path="url(#clip0_4478_26)">
                            <path d="M25.3061 21.7562C27.1012 20.8317 29.7957 21.4903 31.0727 23.1368C32.3141 24.7358 32.3489 26.8825 31.2404 28.699C29.9584 30.7999 27.5372 30.9574 25.9487 30.4739C24.0398 29.892 22.9139 28.4923 22.2621 26.7132C21.3437 24.2056 21.5662 21.7054 22.6639 19.2953C23.8912 16.5992 25.9354 14.6659 28.4713 13.2203C28.7943 13.0361 29.1364 12.8869 29.4585 12.701C29.6354 12.5984 29.7184 12.6509 29.8189 12.8043C30.1095 13.2462 30.4051 13.6847 30.7198 14.109C30.8552 14.2916 30.8269 14.3616 30.6368 14.4683C29.2227 15.2611 27.9681 16.2474 26.9858 17.5562C26.0517 18.8017 25.5095 20.2048 25.3052 21.7571L25.3061 21.7562Z" fill="white"/>
                            <path d="M13.7271 21.751C15.7025 20.7072 19.3485 21.5576 20.2751 24.6921C20.9718 27.0489 19.5511 29.9701 17.1605 30.527C15.1304 31.0005 13.3676 30.4995 11.9693 28.9122C10.4498 27.1881 9.98648 25.1182 10.1484 22.8848C10.3933 19.5051 12.0781 16.9024 14.599 14.7757C15.5929 13.937 16.6922 13.2609 17.8622 12.6982C18.0199 12.6223 18.1013 12.6207 18.2051 12.7824C18.4974 13.2351 18.8004 13.6819 19.1234 14.1129C19.2654 14.303 19.2164 14.3664 19.0346 14.4689C17.6006 15.2717 16.3352 16.2763 15.3471 17.6076C14.4711 18.789 13.9546 20.1187 13.728 21.5676C13.7188 21.6259 13.7271 21.6859 13.7271 21.751Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4478_26">
                            <rect width="21.9216" height="18.0531" fill="white" transform="translate(10.1176 12.647)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div>
                    <h3 className='pb-1 font-Lato font-semibold text-[24px] leading-7.5 text-BlackTextColor'>The Best Agency!</h3>
                    {/* Star icon svg  */}
                    <div className='flex gap-1.25 pb-5'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3637 0L16.1843 7.74139L24.7275 8.98278L18.5456 15.0086L20.0049 23.5172L12.3637 19.5L4.72253 23.5172L6.18187 15.0086L4.76837e-06 8.98278L8.54313 7.74139L12.3637 0Z" fill="#FAB93C"/>
                        </svg>
                    </div>
                    <p className='font-Lato font-normal text-base leading-6 text-BodyText max-w-77.5 text-center pb-3.75'>The customer service team at this company was very responsive and helpful when I had questions about their products.</p>
                    <h3 className='font-Lato font-semibold text-[18px] leading-7.5 text-BlackTextColor'>Jenny Wilson</h3>
                    <p className='font-Lato font-normal text-sm leading-6 text-BodyText'>Happy Seller</p>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default ClientsSaying