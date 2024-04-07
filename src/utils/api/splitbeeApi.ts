const NOTION_BLOG_ID = process.env.NEXT_PUBLIC_NOTION_BLOG_ID
const NOTION_WEB_STORIES_ID = process.env.NEXT_PUBLIC_NOTION_WEB_STORIES_ID

export const getAllPosts = async () => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`,
        { next: { revalidate: 3000 }}
    )
    const posts = await res.json()
    return posts
}

export const getPosts = async (id: string) => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`,
        { next: { revalidate: 3000 } }
    )
    const post = await res.json()
    return post
}

export const getAllWebStories = async () => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_WEB_STORIES_ID}`,
        { next: { revalidate: 30000 }}
    )
    const stories = await res.json()
    return stories
}
