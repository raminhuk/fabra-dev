'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

import Title from '../Title'
import { additionalTechData, technologiesData } from './TechData'

export default function Technologies() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('[data-effect="js-tilt"]')
        elements.forEach(element => {
            // Importe VanillaTilt conforme necessário
            VanillaTilt.init(element, {
                max: 5,
                speed: 200,
                glare: true,
                'max-glare': 0.5,
                scale: 1.03
            })
        })
    }, [])
    
    return <>
        <div>
            {/* <div className="flex flex-col gap-16 max-xs:gap-12">
                {technologiesData?.map((item, i) => (
                    <div key={i}>
                        <div className="flex items-center justify-between gap-5 pb-3">
                            <h3 className="text-2xl font-semibold max-lg:text-base">{item.title}</h3>
                            <p className="max-xs:text-xs">{item?.score >= 90 ? 'Advanced' : item?.score >= 60 && item?.score < 90 ? 'Intermediate' : item?.score > 40 && item?.score < 60 ? 'Regular' : 'Beginner'}</p>
                        </div>
                        <div className="w-full rounded-full bg-back-dark">
                            <span className="block h-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50 max-lg:h-3" style={{width: item.score+'%'}}></span>
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
            </div> */}
            <div className="relative grid grid-cols-3 flex-col gap-8 max-xs:gap-4">
                {technologiesData?.map(({title, file}, i) => (
                    <div key={i} className="relative">
                        
                        <div data-effect="js-tilt" className="flex cursor-pointer items-center gap-5 rounded-xl border-l-[1px] border-t-[1px] border-gray-700 bg-gray-700 !bg-opacity-30 p-8 backdrop-blur-[6px]">
                            <span className="size-10 min-w-10">
                                {file && (
                                    <Image src={`/images/icons/${file}.svg`} width={40} height={40} alt={title}/>
                                )}
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold max-lg:text-base">{title}</h3>
                                <p className="text-sm text-coldGrey">Muito utilizado em praticamento todos meus projetos oferecendo tipagem estática opcional e recursos modernos para desenvolvimento mais robusto</p>
                            </div>
                        
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