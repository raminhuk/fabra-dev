'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
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
            reset()
        } catch (error) {
            console.log('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
            console.log(error)
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
                        placeholder="Nome"
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
                        placeholder="Mensagem"
                        className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-neon placeholder:text-gray-400 focus:outline-none focus:ring-2"
                        {...register('message')}
                        maxLength={500}
                    />

                    <div className="relative mx-auto mt-6 w-max">
                        <button className="cursor-pointer rounded-sm bg-gradient-custom px-6 py-4 text-center text-sm shadow-md shadow-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/50 max-lg:p-3 max-lg:text-xs" disabled={isSubmitting}>
                            Enviar mensagem
                        </button>
                        <div className="absolute inset-0 bg-emerald-600 opacity-20 blur-2xl" />
                    </div>
                </form>
            </div>
        </section>
    )
}