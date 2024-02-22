import { NotionRenderer } from 'react-notion'

import { getAllPosts, getPosts } from '@/utils/api/splitbeeApi'

import { Post } from '../page'

export default async function PostBlog({ params }: { params: { slug: string } }) {
    try {
        const posts = await getAllPosts()
        const post: Post | undefined = posts.find((t: Post) => t.slug === params.slug)

        if (!post) {
            throw new Error(`Post with slug '${params.slug}' not found`)
        }
        const pagePost = await getPosts(post.id)

        return (
            <div>
                <h1>{post.title}</h1>
                <NotionRenderer blockMap={pagePost} />
            </div>
        )
    } catch (error) {
        console.error('Error fetching post data:', error)
        return <div>Pagina não encontrada</div>
    }
}