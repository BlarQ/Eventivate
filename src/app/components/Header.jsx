"use client"
import React, { useState } from 'react'
// import Logo from '/public/logo.png'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Button from './Button';


const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '/' },
    { label: 'Contact', href: '/' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const hamburgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-[#fff] px-5 sm:px-12 py-4 flex items-center justify-between shadow'>
            {/* <Image className='size-14' src={Logo} alt='Logo' /> */}
            {/* placeholder logo */}
            <Link href='/' className='text-2xl font-semibold font-serif'>
                <p>Event<span className='text-[#38b6ff]'>ivate</span></p>
            </Link>

            <div className='lg:flex hidden text-base items-center justify-between gap-12'>
                {
                    links.map(item => (
                        <Link key={item} href={item.href} className=''>
                            <p>{item.label}</p>
                        </Link>
                    ))
                }

                <div>
                    <Button href={'/'} text={'Book Reservation'} className={'text-white px-4 py-2'} />
                </div>
            </div>

            <div className={`lg:hidden block`} onClick={hamburgerMenu}>
                <RxHamburgerMenu className={`size-7 font-bold cursor-pointer ${isOpen ? 'hidden' : ''}`} />
            </div>

            {
                isOpen && (
                    <div className='absolute min-h-screen top-0 right-0 w-full max-w-screen-lg px-4 py-4 bg-white rounded shadow-md'>
                        <div className='absolute right-[4%] md:right-[5%] w-fit p-1' onClick={hamburgerMenu}>
                            <AiOutlineClose className={`size-7 font-bold cursor-pointer z-20 ${!isOpen ? 'hidden' : ''}`} />

                        </div>
                        <div className='flex flex-col gap-4 py-16 px-[3%] md:px-[4%]'>
                            {links.map(item => (
                                <Link key={item} href={item.href} onClick={hamburgerMenu} className='w-fit'>
                                    <p>{item.label}</p>
                                </Link>
                            ))}

                            <div className='py-5'>
                                <Button href={'/'} text={'Book Reservation'} className={'py-3'}/>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header