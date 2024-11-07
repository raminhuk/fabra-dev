'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const [toast, setToast] = useState<string | null>(null)
    const {
        handleSubmit,
        register,
        reset,
        formState: { isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            await axios.post('/api/contact', data)
            console.log('Mensagem enviada com sucesso!')
            setToast('Message sent successfully!')
            reset()

            setTimeout(() => {
                setToast(null)
            }, 5000)
        } catch (error) {
            console.log('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
            console.log(error)
            setToast('Message sent error :(')
        }
    }

    return (
        <section
            className="flex"
            id="contact"
        >
            <div className="w-full max-w-[600px]">
                <form
                    className="mt-2 flex w-full flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        placeholder="Name"
                        className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
                        {...register('name')}
                    />
                    <input
                        placeholder="E-mail"
                        type="email"
                        className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
                        {...register('email')}
                    />
                    <textarea
                        placeholder="Message"
                        className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
                        {...register('message')}
                        maxLength={500}
                    />

                    <span className="h-5 text-sm text-green-600">
                        {toast && (
                            toast
                        )}
                    </span>
                    <div className="relative mx-auto mt-2 w-max ">
                        <button className="flex cursor-pointer items-center rounded-sm bg-gradient-custom p-4 text-center text-sm shadow-md shadow-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/50 disabled:cursor-not-allowed max-lg:p-3 max-lg:text-xs" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send message'}
                            {isSubmitting && (
                                <span className="ml-4 flex size-4 animate-spin rounded-full border-t border-gray-100"></span>
                            )}
                        </button>

                    </div>
                </form>
            </div>
        </section>
    )
}