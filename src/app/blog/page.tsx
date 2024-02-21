import Posts from '@/components/Blog'
import { getAllPosts } from '@/utils/api/splitbeeApi'
export type Post = { id: string; slug: string; title: string; date: string };

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
