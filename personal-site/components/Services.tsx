'use client'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Ensuring optimal performance and user experience across all devices.',
        href: ''
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'Tailored designs to match your brand identity and business goals.',
        href: ''
    },
    {
        num: '03',
        title: 'Quality Assurance Testing',
        description: 'Ensures your software meets the highest standards of functionality, performance, and security.',
        href: ''
    }, 
    {
        num: '04',
        title: 'Search Engine Optimization (SEO)',
        description: 'Improving search engine rankings and website loading speed for better user engagement and visibility.',
        href: ''
    },
]

const Services = () => {
  return (
    <section id='services' className='flex flex-col justify-center py-12'>
        <div className='container mx-auto'>
            <h1 className='text-[4rem]'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px] intro'>
                {services.map((service, index) => {
                    return (
                        <div key={index}
                        className='flex-1 flex flex-col justify-center gap-6 group'>
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-3xl'/>
                                </Link>
                            </div>
                            {/* Heading */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            <p className='text-white/60'>{service.description}</p>
                            {/* border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Services
