import { Contact, Services, Socials, Work } from "@/components";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-center'>
            <span className='text-xl'>Software Developer </span>
            <h1 className='h1 mb-6'>
              Hello, I'm <br/> <span className='text-accent'>Jose Argueta</span>
            </h1>
            <p className='max-w-[600px] mb-9 text-white/80'>
              I am a software developer with over two years of experience in creating innovative solutions. A fast learner with a passion for continuous improvement, I thrive on new challenges and am eager to expand my skill set.
            </p>
            {/* btn & socials */}
            <div className='flex flex-col items-center gap-8'>
              <button 

                className='border-[1px] rounded-lg p-2 text-accent border-accent-hover uppercase flex items-center gap-2 hover:bg-accent-hover hover:text-black/90 duration-500'
              >
                <a href='/Jose_2024_Resume.pdf' download='/Jose_2024_Resume.pdf'
                >
                  Download Resume
                </a> 
                <FiDownload className='text-xl' />
              </button>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border-[1px] border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-1'>
          <Services/>
        </div>
        <div className='mb-1'>
          <Work/>
        </div>
        <div className='mb-[5rem]'>
          <Contact/>
        </div>
      </div>
    </section>
  )
}

export default Home

