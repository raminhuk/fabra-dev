'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function WebStorie() {
    const [scriptLoaded, setScriptLoaded] = useState(false)

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.ampproject.org/v0/amp-story-1.0.js'
        script.async = true
        script.onload = () => setScriptLoaded(true)
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])
 
    return (
        <>
            <Script async custom-element="amp-story"
                src="https://cdn.ampproject.org/v0/amp-story-1.0.js"/>
            <Script async src="https://cdn.ampproject.org/v0.js"/>
            {scriptLoaded && (
                <amp-story standalone
                    title="Key Features of Next.js"
                    publisher="Key Features of Next.js"
                    publisher-logo-src="favicon.ico"
                    poster-portrait-src="/assets/key-features-of-next-js.jpg">
                    <amp-story-page id="cover">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg"
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Introduction to Next.js</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Explore Next.js, a powerful React framework for building high-performance web applications with server-side rendering (SSR) and static site generation (SSG). Learn about its features, benefits, and how it compares to other popular frameworks like Angular and React.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page1">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Server-side rendering (SSR)</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js supports server-side rendering out of the box, improving performance and SEO by generating HTML on the server for every request.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page2">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Static Site Generation (SSG)</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js supports static site generation, allowing developers to pre-render pages at build time to improve performance and reduce hosting costs.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page3">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Automatic code splitting</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js automatically splits JavaScript code into smaller pieces, ensuring each page loads only the necessary code, resulting in faster load times</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page4">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Client-Side Routing</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js provides a simple and intuitive routing system that allows seamless navigation between pages without reloading the entire page.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page5">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">API Routes</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js allows developers to easily create API routes to manage server-side logic and data retrieval, making it ideal for building full-stack applications.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page6">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">No configuration required</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js requires minimal setup and configuration, allowing developers to focus on writing code rather than configuring tools.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page7">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Hot Module Replacement (HMR)</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js supports hot module replacement, which can instantly update application code during development without reloading the entire page.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page8">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Static file serving</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js efficiently serves static assets such as images, stylesheets, and fonts, thereby improving overall performance.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    <amp-story-page id="page9">
                        <amp-story-grid-layer template="fill">
                            <amp-img src="/assets/key-features-of-next-js.jpg" 
                                width="720" height="1280"
                                layout="responsive">
                            </amp-img>
                        </amp-story-grid-layer>
                        <amp-story-grid-layer template="vertical">
                            <div className="absolute bottom-0 left-0 p-5">
                                <h1 className="mb-2 animate-fade-up text-xl font-semibold">Dynamic import</h1>
                                <p className="animate-fade-up text-sm font-light  delay-200">Next.js supports dynamic import, enabling lazy loading of components and routes to further optimize performance.</p>
                            </div>
                        </amp-story-grid-layer>
                    </amp-story-page>

                    
                </amp-story>
            )}
        </>
    )
}
            