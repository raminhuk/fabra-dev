'use client'
import { ChangeEvent, useState } from 'react'

import Title from '@/components/Title'

interface GradientValuesProps {
    type: 'linear' | 'radial';
    direction: string;
    colors: string[];
    stops: number[];
}

const ColorGradientGenerator = () => {
    const [gradientValues, setGradientValues] = useState<GradientValuesProps>({
        type: 'linear',
        direction: 'to right',
        colors: ['#FF5733', '#3333FF'],
        stops: [0, 100],
    })

    const [copied, setCopied] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: keyof GradientValuesProps, index?: number) => {
        if (index !== undefined) {
            const newStops = [...gradientValues.stops]
            const newValue = parseInt(e.target.value)
            newStops[index] = isNaN(newValue) ? 0 : Math.min(100, Math.max(0, newValue))
            setGradientValues({ ...gradientValues, stops: newStops })
        } else {
            setGradientValues({ ...gradientValues, [key]: e.target.value })
        }
    }

    const handleAddColorStop = () => {
        const newColors = [...gradientValues.colors]
        const newStops = [...gradientValues.stops]
        
        // Calculate equal distribution of stops
        const step = 100 / (gradientValues.colors.length + 1)
        newStops.push((gradientValues.colors.length + 1) * step)

        setGradientValues({
            ...gradientValues,
            colors: [...newColors, '#000000'],
            stops: newStops,
        })
    }

    const handleRemoveColor = (index: number) => {
        const newColors = [...gradientValues.colors]
        const newStops = [...gradientValues.stops]

        newColors.splice(index, 1)
        newStops.splice(index, 1)

        setGradientValues({
            ...gradientValues,
            colors: newColors,
            stops: newStops,
        })
    }

    const handleCopyClick = () => {
        const codeToCopy = `background: ${generateGradientCSS(gradientValues)};`

        navigator.clipboard.writeText(codeToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    const generateGradientCSS = (values: GradientValuesProps): string => {
        const { type, direction, colors, stops } = values

        // Ensure correct gradient function for radial type
        const gradientType = type === 'radial' ? 'radial-gradient' : 'linear-gradient'

        const colorStops = colors.map((color, index) => `${color} ${stops[index]}%`).join(', ')
        return `${gradientType}(${direction}, ${colorStops})`
    }

    return (
        <div className="container">
            <div className="my-12 max-lg:my-4">
                <div className="w-full">
                    <Title
                        type="h1"
                        styleDescription="w-full"
                        title="Gradient Color Generator"
                        description="Welcome to our Gradient Color Generator, a simple tool for creating linear gradient backgrounds effortlessly. Customize your gradient type, direction, colors, and stops to achieve the perfect gradient for your website's elements."
                    />
                </div>
                <div className="flex w-full items-center justify-between gap-20 py-5 max-lg:flex-col">
                    <div className="flex w-full flex-1 flex-col gap-6 max-lg:order-2">
                        <div className="mb-4">
                            <label htmlFor="type" className="mb-2 block capitalize">
                                Type:
                            </label>
                            <select
                                id="type"
                                value={gradientValues.type}
                                onChange={(e) => handleInputChange(e, 'type')}
                                className="h-8 w-full cursor-pointer appearance-none rounded bg-gray-700"
                            >
                                <option value="linear">Linear</option>
                                <option value="radial">Radial</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="direction" className="mb-2 block capitalize">
                                Direction:
                            </label>
                            <select
                                id="direction"
                                value={gradientValues.direction}
                                onChange={(e) => handleInputChange(e, 'direction')}
                                className="h-8 w-full cursor-pointer appearance-none rounded bg-gray-700"
                            >
                                <option value="to top">To Top</option>
                                <option value="to bottom">To Bottom</option>
                                <option value="to left">To Left</option>
                                <option value="to right">To Right</option>
                            </select>
                        </div>
                        {gradientValues.colors.map((color, index) => (
                            <div key={index} className="mb-4 flex items-center">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="flex flex-col">
                                        <label htmlFor={`color-${index}`} className="mb-2 block capitalize">
                                    Color {index + 1}:
                                        </label>
                                        <input
                                            type="color"
                                            id={`color-${index}`}
                                            value={color}
                                            onChange={(e) => {
                                                const newColors = [...gradientValues.colors]
                                                newColors[index] = e.target.value
                                                setGradientValues({ ...gradientValues, colors: newColors })
                                            }}
                                            className="h-8 w-full cursor-pointer appearance-none rounded bg-gray-700"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor={`stop-${index}`} className="mb-2 ml-2 block capitalize">
                                    Stop {index + 1}:
                                        </label>
                                        <input
                                            type="range"
                                            id={`stop-${index}`}
                                            min="0"
                                            max="100"
                                            value={gradientValues.stops[index]}
                                            onChange={(e) => handleInputChange(e, 'stops', index)}
                                            className="h-3 w-full cursor-pointer appearance-none rounded bg-gray-700"
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveColor(index)}
                                    className="ml-2 rounded bg-red-500 px-2 py-1 font-semibold text-white"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="flex justify-end">
                            <button
                                onClick={handleAddColorStop}
                                className="rounded border-[1px] border-gray-700 bg-gray-800 p-2 hover:bg-gray-900"
                            >
                                Add Color Stop
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full flex-1 flex-col items-center gap-8 max-lg:order-1 max-lg:gap-4">
                        <div
                            className="w-full rounded bg-white px-2 py-20"
                            style={{ background: generateGradientCSS(gradientValues) }}
                        ></div>
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

export default ColorGradientGenerator
