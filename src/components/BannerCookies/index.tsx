'use client'
import { sendGAEvent } from '@next/third-parties/google'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from './storageHelper'

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState<any>(null)
    const [storageLoaded, setStorageLoaded] = useState(false)


    useEffect(() => {
        const storedCookieConsent = getLocalStorage('cookie_consent', null)
        setCookieConsent(storedCookieConsent)
        setStorageLoaded(true)

        
    }, [])

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied'
            sendGAEvent('consent', 'default', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            })
    
            sendGAEvent('consent', 'update', {
                'ad_storage': newValue,
                'analytics_storage': newValue
            })
            setLocalStorage('cookie_consent', cookieConsent)
        }
    }, [cookieConsent])

    

    const handleDecline = () => {
        setCookieConsent(false)
    }

    const handleAccept = () => {
        setCookieConsent(true)
    }
    
    if (!storageLoaded) {
        return null
    }

    return (
        <div className={`fixed inset-x-0 bottom-0 z-50 m-auto my-8
                        w-11/12 max-w-max flex-col items-center
                        justify-between gap-5 rounded-lg bg-gray-800 px-3 py-4 text-xs shadow sm:flex-row
                         md:max-w-screen-md md:px-5 md:text-sm ${cookieConsent !== null ? 'hidden' : 'flex'}` }>
            <div className="flex flex-1 tracking-wide text-gray-300">
                <div>
                    Accept cookies and have a better experience on our website, please refer to our <Link className="text-sky-400 hover:underline" href="/privacy-policy ">Privacy Policy.</Link>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="rounded-md px-5 py-2 text-xs text-gray-300 hover:bg-gray-700" onClick={handleDecline}>Decline</button>
                <button className="rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-950" onClick={handleAccept}>Accept</button>
            </div>
        </div>
    )
}
