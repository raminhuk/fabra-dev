'use client'
 
import { sendGAEvent } from '@next/third-parties/google'
 
export function ButtonDownload() {
    return (
        <div>
            <button onClick={() => sendGAEvent({ event: 'download_cv', value: 'Download CV' })} className="rounded-full bg-blue-500 bg-gradient-custom px-8 py-4 text-sm shadow-lg shadow-blue-500/50"
            >
            Download CV
            </button>
        </div>
    )
}