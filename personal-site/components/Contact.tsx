'use client'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea} from '@chakra-ui/react'

const info = [
    {
        icon: <FaEnvelope/>,
        title: 'Email',
        description: 'Email'
    },
    {
        icon: <FaPhoneAlt/>,
        title: 'Phone',
        description: 'Phone'
    },
]


const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const initState = {values: initValues}

const Contact = () => {
    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({})

    const {values} = state

    const handleChange = ({target}: any) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
            {/* form */}
            <div className='xl:h-[54%] order-2 xl:order-none'>
                <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                    <h3 className='text-4xl text-accent'>Lets Work Together !</h3>
                    <p className='text-white/60'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugiat pariatur tempora
                    </p>
                    {/* input */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Name */}
                        <FormControl isRequired isInvalid={!values.name}>
                            <FormLabel>Full Name</FormLabel>
                            <Input 
                                type='text'
                                name='name'
                                value={values.name}
                                placeholder='John Smith'
                                onChange={handleChange}
                                className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                            />
                            <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                        </FormControl>

                        {/* Email */}
                        <FormControl isRequired isInvalid={!values.email}>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type='email' 
                                name='email'
                                placeholder='exmaple@gmail.com'
                                value={values.email}
                                onChange={handleChange}
                                className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                            />
                            <FormErrorMessage className='text-red-400'>Required</FormErrorMessage> 
                        </FormControl>
                    </div>

                    {/* Subject */}
                    <FormControl isRequired isInvalid={!values.subject}>
                        <FormLabel>Subject</FormLabel>
                        <Input 
                            type='subject' 
                            name='subject'
                            placeholder='Subject'
                            value={values.subject}
                            onChange={handleChange}
                            className='w-full flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60'
                        />
                        <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                    </FormControl>

                    {/* Message */}
                    <FormControl isRequired isInvalid={!values.message}>
                        <FormLabel>Message</FormLabel>
                        <Textarea 
                            rows={4}
                            name='message'
                            value={values.message}
                            onChange={handleChange}
                            className='h-[200px] w-full text-black px-1 py-1'
                        />
                        <FormErrorMessage className='text-red-400'>Required</FormErrorMessage>
                    </FormControl>
                </form>
            </div>
            {/* form */}
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>info</div>
        </div>
    </div>
  )
}

export default Contact
