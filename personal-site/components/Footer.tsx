import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-2 w-full bg-[#26262e] text-white/60'>
      Built with: 
        <RiNextjsFill className='text-xl'/> 
        <SiTypescript/> 
        <RiTailwindCssFill/>
    </div>
  )
}

export default Footer
