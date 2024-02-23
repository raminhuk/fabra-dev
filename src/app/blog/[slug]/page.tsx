import Image from 'next/image'
import { NotionRenderer } from 'react-notion'

import { BlogPost } from '@/@types/blog'
import { getAllPosts, getPosts } from '@/utils/api/splitbeeApi'


export default async function PostBlog({ params }: { params: { slug: string } }) {
    try {
        const posts = await getAllPosts()
        const post: BlogPost | undefined = posts.find((t: BlogPost) => t.slug === params.slug)

        if (!post) {
            throw new Error(`Page not found`)
        }
        const pagePost = await getPosts(post.id)

        return (
            <div className="container max-w-[1000px]">
                <h1>{post.title}</h1>
                {post.image ? (
                    <Image className="h-[220px] object-cover" src={post.image[0].url} alt={post.image[0].name} width={400} height={220}/>
                ) : (
                    <div className="h-[220px] w-full bg-slate-800"></div>
                )}
                <div className="text-xl text-coldGrey">
                    <NotionRenderer blockMap={pagePost} />
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error fetching post data:', error)
        return <div>Pagina não encontrada</div>
    }
}