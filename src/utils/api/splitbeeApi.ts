const NOTION_BLOG_ID = process.env.NEXT_PUBLIC_NOTION_BLOG_ID

export const getAllPosts = async () => {
    const res = await fetch(`https://worker-notion.fabioraminhuk.workers.dev/v1/table/${NOTION_BLOG_ID}`,
        { next: { revalidate: 3000 }}
    )
    const posts = await res.json()
    return posts
}

export const getPosts = async (id: string) => {
    const res = await fetch(`https://worker-notion.fabioraminhuk.workers.dev/v1/page/${id}`,
        { next: { revalidate: 3000 } }
    )
    const post = await res.json()
    return post
}