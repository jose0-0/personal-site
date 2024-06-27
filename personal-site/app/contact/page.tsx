'use client'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt  } from 'react-icons/fa';
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea} from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react';
import 'dotenv/config';
require('dotenv').config();

const info = [
    {
        icon: <FaEnvelope/>,
        title: 'Email',
        description: 'joselikescode@gmail.com',
    },
    // {
    //     icon: <FaPhoneAlt/>,
    //     title: 'Phone',
    //     description: '(702)-123-4567'
    // },
    {
        icon: <FaMapMarkerAlt/>,
        title: 'Based In',
        description: 'Las Vegas, Nevada',
    }
]


const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const initState = {values: initValues}

const Contact = () => {
    // const [state, setState] = useState(initState)

    // const {values} = state

    // const handleChange = ({target}: any) => setState((prev) => ({
    //     ...prev,
    //     values: {
    //         ...prev.values,
    //         [target.name]: target.value
    //     }
    // }))

    const [state, handleSubmit] = useForm('mldrrvpd')

    if (state.succeeded) {
        return <p>Thank you! I'll try my best to get back to you soon</p>
    }

  return (
    <div className='h-[100%] container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
            {/* form */}
            <div className='xl:w-[54%] order-2 xl:order-none'>
                <form 
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                    <h3 className='text-4xl text-accent'>Lets Work Together !</h3>
                    <p className='text-white/60'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugiat pariatur tempora
                    </p>
                    {/* input */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Name */}
                        <FormControl 
                            isRequired
                        >
                            <FormLabel>Full Name</FormLabel>
                            <input
                                required
                                type='text'
                                name='name'
                                placeholder='John Smith'
                                className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                            />
                            <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                        </FormControl>

                        {/* Email */}
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='exmaple@gmail.com'

                                className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                            />
                            <FormErrorMessage className='text-red-400'>Required</FormErrorMessage> 
                        </FormControl>
                    </div>

                    {/* Subject */}
                    <FormControl isRequired>
                        <FormLabel>Subject</FormLabel>
                        <input 
                            type='subject' 
                            name='subject'
                            placeholder='Subject'
                            className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                        />
                        <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                    </FormControl>

                    {/* Message */}
                    <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <textarea 
                            rows={4}
                            name='message'
                            className='flex min-h-[80px] w-full  rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60'
                        />
                        <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                    </FormControl>
                    <button className='max-w-40 rounded-md bg-accent text-black '>Send Message</button>
                </form>
            </div>
            {/* form */}
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                <ul className='flex flex-col gap-10 '>
                    {info.map((item, index) => {
                        return (
                            <li key={index} className='flex items-center gap-6'>
                                <div className='w-[52px] h-[53px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                    <div className='text-[28px]'>{item.icon}</div>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-white/60'>{item.title}</p>
                                    <h3 className='text-xl'>{item.description}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact

// const key = process.env.FORMSPREE_KEY || '';


// function Contact() {
//     const [state, handleSubmit] = useForm('mldrrvpd');

//     if (state.succeeded) {
//         return <p>Success!</p>;
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="email">
//                 Email Address
//             </label>
//             <input
//                 required
//                 className='text-black'
//                 id="email"
//                 type="email" 
//                 name="email"
//             />
//             <ValidationError 
//                 prefix="Email" 
//                 field="email"
//                 errors={state.errors}
//             />
//             <textarea
//                 required
//                 className='text-black/75'
//                 id="message"
//                 name="message"
//             />
//             <ValidationError 
//                 prefix="Message" 
//                 field="message"
//                 errors={state.errors}
//             />
//             <button 
//                 type="submit" 
//                 disabled={state.submitting}>
//                 Submit
//             </button>
//         </form>
//     );
// }

// export default Contact;