'Use Client';
import Link from 'next/link';
import { CustomButton } from '@/components';

const links = [
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Projects',
    path: '/projects',
  },

]

const Nav = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className=''>
          <h1 className='text-4xl font-semibold'>
            Jose<span className='text-accent'>.</span>
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
            <CustomButton 
              title='Contact Me'
              btnType='button'
              containerStyles='text-black rounded-lg bg-accent min-w-[130px]'
            />
          </nav>
        </div>
        {/* Mobile Nav */}
        <div className='xl:hidden'> 
          Mobile Nav 
        </div>
      </div>
    </header>
  )
}

export default Nav
