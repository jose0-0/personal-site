import Link from 'next/link';
import { SocialButtonProps } from '@/types';
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'


const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/jose0-0',
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.linkedin.com/in/jose-argueta-8b6ab616b/',
    }
]

const Socials = ({containerStyles, iconStyles}: SocialButtonProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            target='_blank'
            key={index} 
            href={item.path} 
            className={iconStyles}
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
