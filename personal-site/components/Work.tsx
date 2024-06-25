'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { WorkSliderBtns } from '@/components';

const projects = [
    {
        num: '01', 
        category: 'frontend',
        title: 'project 1',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        stack: [
            {name: 'HTML 5'}, {name: 'CSS'}, {name: 'Javascript'}
        ],
        image: '/',
        live: '',
        github: '',
    },
    {
        num: '02', 
        category: 'frontend',
        title: 'project 2',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        stack: [
            {name: 'React'}, {name: 'CSS'}, {name: 'Typescript'}
        ],
        image: '/',
        live: '',
        github: '',
    },
    {
        num: '03', 
        category: 'frontend',
        title: 'project 3',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        stack: [
            {name: 'Next.Js'}, {name: 'Tailwind'}, {name: 'Typescript'}
        ],
        image: '/',
        live: '',
        github: '',
    },
    {
        num: '04', 
        category: 'frontend',
        title: 'project 4',
        description: 'lorem ipsum dolor sit amet, consectetur adipis',
        stack: [
            {name: 'React'}, {name: 'CSS'}, {name: 'Typescript'}
        ],
        image: '/',
        live: '',
        github: '',
    }
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: any) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project store based on current slide index
        setProject(projects[currentIndex])
    }

  return (
    <motion.section 
        id='projects'
        initial={{opacity: 0}} 
        animate={{
            opacity: 1,
            transition: { 
                delay: 2.4, 
                duration: 0.4, 
                ease: 'easeIn'
            }
        }} 
        className='flex flex-col justify-center py-12 xl:px-0'
    >
        <div className='container mx-auto'>
            <h1 className='text-[4rem]'>Projects</h1>
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                    <div className='flex flex-col gap-[30px] h-[50%]'>
                        {/* outline num */}
                        <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                            {project.num}
                        </div>
                        {/* project category */}
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                            {project.category}
                        </h2>
                        {/* project description */}
                        <p className='text-white/60'>{project.description}</p>
                        {/* stack */}
                        <ul className='flex gap-4'>
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className='text-accent'>
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='border border-white/20'></div>
                        <div className='flex items-center gap-4'>
                            <Link href={project.live} className='text-white text-3xl group-hover:text-accent'>
                                <BsArrowUpRight/>
                            </Link>
                            <Link href={project.github} className='text-white text-3xl group-hover:text-accent'>
                                <BsGithub/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[50%]'>
                    <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-start items-center bg-pink-50/20'>
                                    {/* overlay */}
                                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                    {/* image */}
                                    <Image
                                        src={project.image}
                                        fill 
                                        className='object-cover'
                                        alt=''
                                    />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        {/* Work slider buttons */}
                        <WorkSliderBtns 
                            containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' 
                            btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                        />
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Work
