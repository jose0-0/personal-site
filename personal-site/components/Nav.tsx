'use client';
import Link from 'next/link';
import { useState } from 'react'
import { CustomButton } from '@/components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const links = [
  {
    name: 'Services',
    path: '/#services',
  },
  {
    name: 'Projects',
    path: '/#projects',
  },
]

const Nav = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className=''>
          <h1 className='text-4xl font-semibold'>
            JOSE<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* Desktop Nav */}
        <div className=''>
          <nav className='hidden xl:flex items-center gap-8'>
            {links.map(( link, index ) => {
              return (
                <Link 
                  href={link.path} 
                  key={index}
                  className='hover:text-accent duration-300'
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href='/Jose_2024_Resume.pdf'
              target='_blank'
              className='hover:text-accent duration-300'
            >
              Resume
            </Link>
            <CustomButton 
              title='Contact Me'
              btnType='button'
              containerStyles='text-white/90 rounded-lg bg-accent min-w-[130px]'
            />
          </nav>
        </div>
        {/* Mobile Nav */}
        <div onClick={toggleNav} className='block xl:hidden z-10'> 
          { mobileNavVisible 
            ? <AiOutlineClose size={20}/> 
            : <AiOutlineMenu size={20} />
          }
        </div>
        <div className={ 
          mobileNavVisible 
            ? 'xl:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-white ease-in duration-300' 
            : 'xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-white ease-in duration-300'
          }
        >
          {links.map(( link, index ) => {
            return (
              <Link 
                onClick={toggleNav}
                href={link.path} 
                key={index}
                className='p-4 text-4xl hover:text-accent duration-300'
              >
                {link.name}
              </Link>
            )
          })}

          <Link
            href='/Jose_2024_Resume.pdf'
            target='_blank'
            className='p-4 text-4xl hover:text-accent duration-300'
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
