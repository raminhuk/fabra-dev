'use client'
import { useState } from 'react'

interface titleProps {
    title: string;
    description: string;
    type?: string;
    styleDescription?: string
}

export default function Title({
    title,
    description,
    type = 'h2',
    styleDescription = 'max-w-2xl'
}: titleProps) {
    const TypeElement = type as keyof JSX.IntrinsicElements

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return <div className="mb-10 flex flex-col gap-4 max-sm:mb-6 max-sm:gap-2">
        <TypeElement className="text-4xl font-semibold max-lg:text-3xl max-xs:text-2xl">{title}</TypeElement>
        <p className={`${styleDescription} tracking-wide text-coldGrey max-xs:text-sm ${open ? 'max-md:line-clamp-none' : 'max-md:line-clamp-3'}`} onClick={handleClick}>{description}</p>
    </div>
}