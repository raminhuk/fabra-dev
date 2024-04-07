import Script from 'next/script'

import WebStories from '@/components/WebStories'

export default function WebStoriesPage(){
   
    return (
        <div>
            <Script async custom-element="amp-story"
                src="https://cdn.ampproject.org/v0/amp-story-1.0.js"/>
            <Script async src="https://cdn.ampproject.org/v0.js"/>
            <WebStories />
        </div>
    )
}