'use client'
import { ChangeEvent, useState } from 'react'

import Title from '@/components/Title'

interface BoxShadowValuesProps {
    horizontal: number;
    vertical: number;
    blur: number;
    spread: number;
    color: string;
}

const BoxShadowGenerator = () => {
    const [shadowValues, setShadowValues] = useState<BoxShadowValuesProps>({
        horizontal: 4,
        vertical: 4,
        blur: 4,
        spread: 0,
        color: '#252525'
    })
    const [copied, setCopied] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: keyof BoxShadowValuesProps | string) => {
        setShadowValues({ ...shadowValues, [key]: e.target.value !== '' ? e.target.value : '0' })
    }

    const handleCopyClick = () => {
        const codeToCopy = `box-shadow: ${generateBoxShadowCSS(shadowValues)};
-webkit-box-shadow: ${generateBoxShadowCSS(shadowValues)};
-moz-box-shadow: ${generateBoxShadowCSS(shadowValues)}`

        navigator.clipboard.writeText(codeToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    const generateBoxShadowCSS = (values: BoxShadowValuesProps): string => {
        const { horizontal, vertical, blur, spread, color } = values
        return `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`
    }

    return (
        <div className="container">
            <div className="my-12 max-lg:my-4">
                <div className="w-full">
                    <Title
                        type="h1"
                        styleDescription="w-full"
                        title="Box Shadow Generator"
                        description="Welcome to our Box Shadow CSS Generator, a powerful tool crafted to simplify the process of creating stunning box shadow effects for your website effortlessly. With a plethora of customizable options, this intuitive tool delivers instant previews, enabling you to perfect the shadows on your website&apos;s elements with ease. Looking to enhance your design further? Don&apos;t miss out on exploring our Font Generator to effortlessly incorporate stylish fonts into your project."
                    />
                </div>
                <div className="flex w-full items-center justify-between gap-20 py-5 max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col gap-6 max-lg:order-2">
                        {Object.entries(shadowValues).map(([key, value]) => (
                            <div key={key} className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor={key} className="mb-2 block capitalize">
                                        {key}:
                                    </label>
                                    <input
                                        type={key === 'color' ? 'color' : 'number'}
                                        min={key === 'color' ? '' : '0'}
                                        max="100"
                                        value={value}
                                        onChange={(e) => handleInputChange(e, key)}
                                        className={`${key === 'color' ? 'h-8' : 'h-6 pl-4'} w-14 cursor-pointer appearance-none rounded bg-gray-700 ${
                                            key === 'color' ? '' : 'text-center'
                                        } text-xs`}
                                    />
                                </div>

                                {key !== 'color' ? (
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={value}
                                        onChange={(e) => handleInputChange(e, key)}
                                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
                                    />
                                ) : null}
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full flex-1 flex-col items-center gap-8 max-lg:order-1 max-lg:gap-4">
                        <div className="flex w-full justify-center rounded bg-white px-2 py-20">

                            <div
                                className="flex size-64 items-center rounded-lg bg-gradient-custom p-8 max-lg:h-32 max-lg:p-4"
                                style={{
                                    boxShadow: `${shadowValues.horizontal}px ${shadowValues.vertical}px ${shadowValues.blur}px ${shadowValues.spread}px ${shadowValues.color}`
                                }}
                            ></div>
                        </div>
                        <div className="w-full">
                            <pre className="w-full rounded bg-gray-800 p-8 text-base max-sm:p-4 max-sm:text-[11px]">
                                <code>
                                    box-shadow: {generateBoxShadowCSS(shadowValues)};<br />
                                    -webkit-box-shadow: {generateBoxShadowCSS(shadowValues)};<br />
                                    -moz-box-shadow: {generateBoxShadowCSS(shadowValues)};
                                </code>
                            </pre>
                        </div>
                        <div className="flex w-full flex-1 justify-end">
                            <button
                                onClick={handleCopyClick}
                                className="w-full rounded border-[1px] border-gray-700 bg-gray-800 p-4 hover:bg-gray-900"
                            >
                                {copied ? 'Copied!' : 'Copy Code'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxShadowGenerator
