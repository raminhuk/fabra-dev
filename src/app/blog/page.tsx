import Posts from '@/components/Blog'
const NOTION_BLOG_ID = '5d15147b9b2a4bc0a7b15f184991263d'
export type Post = { id: string; slug: string; title: string; date: string };

export const getAllPosts = async () => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)
    const posts = await res.json()
    console.log(posts)
    return posts
}

export default async function Blog() {
    const recentPosts: Post[] = await getAllPosts()
    return (
        <div className="w-full">
            <div className="container">
                
                <Posts posts={recentPosts} />
            </div>
        </div>
    )
}
