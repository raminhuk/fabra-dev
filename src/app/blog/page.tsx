import { Metadata } from 'next'

import { BlogPost } from '@/@types/blog'
import Posts from '@/components/Blog'
import Title from '@/components/Title'
import { getAllPosts } from '@/utils/api/splitbeeApi'

export const metadata: Metadata = {
    title: 'Blog - Fabio J. Raminhuk',
    description: 'Bringing the Latest News and Essential Tips for Developers and Tech Professionals: Stay Updated on the World of Technology with Our Blog',
    openGraph: {
        title: 'Blog - Fabio J. Raminhuk',
        description: 'Bringing the Latest News and Essential Tips for Developers and Tech Professionals: Stay Updated on the World of Technology with Our Blog',
    },
}


export default async function Blog() {
    const recentPosts: BlogPost[] = await getAllPosts()
    return (
        <div className="w-full">
            <div className="container">
                <div className="my-12 max-lg:my-4">
                    <Title
                        type="h1"
                        title="Blog" 
                        description="Bringing the Latest News and Essential Tips for Developers and Tech Professionals: Stay Updated on the World of Technology with Our Blog!"
                    />
                    <Posts posts={recentPosts} />  
                </div>
            </div>
        </div>
    )
}
