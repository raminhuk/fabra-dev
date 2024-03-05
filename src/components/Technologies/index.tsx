'use client'
import { useEffect, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'

import Title from '../Title'
import { additionalTechData, technologiesData } from './TechData'

export default function Technologies() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (window.innerWidth > 980) {
            const elements = document.querySelectorAll<HTMLElement>('[data-effect="js-tilt"]')
            elements.forEach(element => {
                VanillaTilt.init(element, {
                    max: 8,
                    speed: 300,
                    glare: true,
                    'max-glare': 0.5,
                    scale: 1.05
                })
            })
        }
    }, [])
    
    return <>
        <div>
            <div className="relative grid grid-cols-3 flex-col gap-8 max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1">
                {technologiesData?.map(({title, icon, description}, i) => (
                    <div key={i} data-effect="js-tilt" className="group flex cursor-pointer items-center gap-5 rounded-xl border-l-[1px] border-t-[1px] border-gray-700 bg-gray-700 !bg-opacity-30 p-6 backdrop-blur-[6px]">
                        <div className="flex flex-col gap-1">
                            <span className="mb-2 flex gap-3">
                                {icon && (
                                    <span className="flex size-7 min-w-8">
                                        {icon}
                                    </span>
                                )}
                                <h3 className="text-lg font-semibold max-lg:text-base">{title}</h3>
                            </span>
                            {description && (
                                <p className={`text-sm text-coldGrey ${open ? 'max-md:line-clamp-none' : 'max-md:line-clamp-3'}`} onClick={handleClick}>{description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-20">
                <Title 
                    title="Additional technologies and skills" 
                    description="Discover my additional skills and expertise, elevating projects to new heights of quality and efficiency."
                />

                <div className="grid grid-cols-4 gap-16 max-lg:grid-cols-3 max-lg:gap-10 max-sm:grid-cols-2 max-sm:gap-5">
                    {additionalTechData?.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50" ></span>
                            <h4 className="text-2xl font-semibold max-lg:text-lg">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}