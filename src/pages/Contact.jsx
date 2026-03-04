import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/p image/image.png'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import emailjs from 'emailjs-com'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = (data) => {
        // Use EmailJS to send the email
        emailjs
            .send(
                'service_lp02slg',  // Replace with your service ID
                'template_ty94xth',  // Replace with your template ID
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: data.message,
                },
                'HFsuS9dBO5R8lS7V_'  // Replace with your User ID from EmailJS
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response);
                    toast.success('Message sent successfully!')
                },
                (error) => {
                    console.error('Error sending email:', error);
                    toast.error('Failed to send message, please try again.')
                }
            )
        reset()  // Reset the form fields after submission
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-[sans-serif] max-w-6xl mx-auto relative shadow-[0_4px_20px_rgba(29,78,216,0.6)] rounded-3xl overflow-hidden mt-4"
        >
            <Toaster position="top-center" reverseOrder={false} />
            <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-4 mb-2 text-3xl font-bold text-center text-blue-600"
            >
                Contact me
            </motion.h2>

            {/* Decorative circles */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute w-20 h-20 bg-blue-400 rounded-full -bottom-6 -left-6"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute w-20 h-20 bg-blue-400 rounded-full -top-6 -right-6"
            />

            <div className="grid gap-8 px-6 py-8 md:grid-cols-2">
                {/* Image and social links section */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <img
                        src={image}
                        className="w-5/6 shrink-0 scale-x-[-1]"
                        alt="Contact"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex mt-6 space-x-4"
                    >
                        {/* Social Media Icons with animations */}
                        {[{ icon: FaFacebook, link: 'https://www.facebook.com/ashique8927', color: 'hover:text-blue-700' },
                        { icon: FaInstagram, link: 'https://www.instagram.com/_.ashique00/', color: 'hover:text-pink' },
                        { icon: FaLinkedin, link: 'https://www.linkedin.com/in/ashique-hussain-553166251/', color: 'hover:text-blue-700' },
                        { icon: FaXTwitter, link: 'https://x.com/ashique_0000', color: 'hover:text-pink' }].map((social, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <Link
                                    to={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={social.color}
                                >
                                    {React.createElement(social.icon, { size: 24 })}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Form section */}
                <motion.form
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded-tl-3xl rounded-bl-3xl"
                >
                    <div className="relative max-w-md mx-auto space-y-3">
                        {/* Animated Input Fields */}
                        {[{
                            label: 'Name',
                            placeholder: 'Name',
                            name: 'name',
                            type: 'text',
                            error: errors.name,
                            validation: { required: 'Name is required' }
                        }, {
                            label: 'Email',
                            placeholder: 'Email',
                            name: 'email',
                            type: 'email',
                            error: errors.email,
                            validation: { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } }
                        }, {
                            label: 'Phone',
                            placeholder: 'Phone No.',
                            name: 'phone',
                            type: 'text',
                            error: errors.phone,
                            validation: { required: 'Phone number is required', length: { min: 10, max: 10 }, pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' } }
                        }].map((input, index) => (
                            <motion.div
                                key={input.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                            >
                                <label
                                    htmlFor={input.name}
                                    className="block mb-2 text-sm font-medium"
                                >
                                    {input.label}
                                </label>
                                <input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    {...register(input.name, input.validation)}
                                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md text-black-900 outline-blue-600 focus-within:bg-transparent"
                                />
                                {input.error && (
                                    <p className="text-xs text-red-500">{input.error.message}</p>
                                )}
                            </motion.div>
                        ))}

                        {/* Animated Text Area */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * (4 + 1) }}
                        >
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                placeholder="Message"
                                rows="6"
                                {...register('message', { required: 'Message is required' })}
                                className="w-full px-4 pt-3 text-sm bg-gray-100 rounded-md text-black-900 outline-blue-600 focus-within:bg-transparent"
                            />
                            {errors.message && (
                                <p className="text-xs text-red-500">{errors.message.message}</p>
                            )}
                        </motion.div>

                        {/* Animated Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            type="submit"
                            className="flex items-center justify-center w-full px-6 py-3 mt-6 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Send Message
                            <IoIosSend className="ml-2 text-lg" />
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
