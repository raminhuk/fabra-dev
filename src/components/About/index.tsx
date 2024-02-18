import { ReactNode } from 'react'

import Title from '../Title'
import { aboutData } from './aboutData'

interface aboutProps {
    type?: string;
    children?: ReactNode;
}

export default function AboutMe({type = 'h2', children}: aboutProps) {
    return <div className="py-16 max-lg:px-8 max-lg:py-10 max-xs:px-6">
        <Title 
            type={type}
            title="About me" 
            description="Crafting visually stunning and functional experiences - I'm a Frontend Developer passionate about turning ideas into digital reality"
        />
        {children && (
            <div className="text-base text-coldGrey">
                {children}
            </div>
        )}
        <div className="grid grid-cols-4 pt-5 max-lg:grid-cols-1">
            {aboutData?.map((item, i) => (
                <div key={i} className="flex flex-col gap-6 max-lg:flex-row">
                    <h3 className="text-2xl font-semibold max-lg:min-w-[48px] max-lg:text-xl">{item.year}</h3>
                    <div className="relative max-lg:w-1 max-lg:min-w-1">
                        <span className="absolute bottom-[-7px] left-[-7px] block size-5 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50 max-lg:bottom-auto max-lg:left-[-8px] max-lg:top-0"></span>
                        <span className="block h-1 w-full bg-white max-lg:h-full"></span>
                    </div>
                    <p className="pr-8 text-base text-coldGrey max-lg:px-0 max-lg:pb-8 max-lg:text-sm">
                        {item.description}
                    </p>
                </div>
            ))}

        </div>
    </div>
}