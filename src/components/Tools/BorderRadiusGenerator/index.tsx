'use client'
import { useState } from 'react'

import Title from '@/components/Title'

interface BorderRadiusProps {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
}

const BorderRadiusGenerator = () => {
    const [positions, setPositions] = useState<BorderRadiusProps>({
        topLeft: 4,
        topRight: 4,
        bottomRight: 4,
        bottomLeft: 4
    })
    const [allRadius, setAllRadius] = useState(4)
    const [copied, setCopied] = useState(false)

    const handleAllRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value)
        setAllRadius(newValue)
        setPositions({
            topLeft: newValue,
            topRight: newValue,
            bottomRight: newValue,
            bottomLeft: newValue
        })
    }

    const handleSliderChange = (key: keyof BorderRadiusProps, value: number) => {
        setPositions({ ...positions, [key]: value > 100 ? 100 : value })
    }

    const handleCopyClick = () => {
        const codeToCopy = `border-radius: ${positions.topLeft}px ${positions.topRight}px ${positions.bottomRight}px ${positions.bottomLeft}px;
-webkit-border-radius: ${positions.topLeft}px ${positions.topRight}px ${positions.bottomRight}px ${positions.bottomLeft}px;
-moz-border-radius: ${positions.topLeft}px ${positions.topRight}px ${positions.bottomRight}px ${positions.bottomLeft}px;`
        navigator.clipboard.writeText(codeToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    return (
        <div className="container">
            <div className="my-12 max-lg:my-4">
                <div className="w-full">
                    <Title
                        type="h1"
                        styleDescription="w-full"
                        title="Border Radius Generator" 
                        description="Welcome to our Border-Radius CSS Generator, designed to streamline the process of creating elegant border-radius CSS declarations for your website effortlessly. Packed with numerous customizable options, this tool showcases instant results, empowering you to achieve the perfect look for your website&apos;s elements. And if you&apos;re seeking to elevate your design further, don&apos;t forget to explore our Font Generator for adding stylish fonts to your project."
                    />
                    <div>
                        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4699585166403980"
                            crossOrigin="anonymous"></script>
                        <ins className="adsbygoogle"
                            style={{display:'block'}}
                            data-ad-client="ca-pub-4699585166403980"
                            data-ad-slot="9144368362"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                        <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </div>
                    
                </div>
                <div className="flex w-full items-center justify-between gap-20 py-5 max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col gap-6 max-lg:order-2">
                        <div>
                            <div className="flex justify-between">
                                <label htmlFor="allRadius" className="mb-2 block">All Sides:</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={allRadius}
                                    onChange={handleAllRadiusChange}
                                    className="h-6 w-12 cursor-pointer appearance-none rounded bg-gray-700 text-center text-xs"
                                />
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={allRadius}
                                onChange={handleAllRadiusChange}
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
                            />
                        </div>
                        {Object.entries(positions).map(([key, value]) => (
                            <div key={key} className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor={key} className="mb-2 block capitalize">{key}:</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={value}
                                        onChange={(e) => handleSliderChange(key as keyof BorderRadiusProps, parseInt(e.target.value))}
                                        className="h-6 w-12 cursor-pointer appearance-none rounded bg-gray-700 text-center text-xs"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={(e) => handleSliderChange(key as keyof BorderRadiusProps, parseInt(e.target.value))}
                                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
                                />

                            </div>
                        ))}
                    
                    </div>
                    <div className="flex w-full flex-1 flex-col items-center gap-8 max-lg:order-1 max-lg:gap-4">
                        <div className="flex size-64 items-center rounded-lg bg-gradient-custom p-8 max-lg:h-32 max-lg:p-4" style={{borderRadius: `${positions.topLeft}px ${positions.topRight}px ${positions.bottomRight}px ${positions.bottomLeft}px`}}></div>
                        <div className="w-full">
                            <pre className="w-full rounded bg-gray-800 p-8 text-base max-sm:p-4 max-sm:text-[11px]">
                                <code>
                                    border-radius: {positions.topLeft}px {positions.topRight}px {positions.bottomRight}px {positions.bottomLeft}px;<br/>
                                    -webkit-border-radius: {positions.topLeft}px {positions.topRight}px {positions.bottomRight}px {positions.bottomLeft}px;<br/>
                                    -moz-border-radius: {positions.topLeft}px {positions.topRight}px {positions.bottomRight}px {positions.bottomLeft}px;
                                </code>
                            </pre>
                        </div>
                        <div className="flex w-full flex-1 justify-end">
                            <button onClick={handleCopyClick} className="w-full rounded border-[1px] border-gray-700 bg-gray-800 p-4 hover:bg-gray-900">
                                {copied ? 'Copied!' : 'Copy Code'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BorderRadiusGenerator
