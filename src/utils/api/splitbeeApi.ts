const NOTION_BLOG_ID = '5d15147b9b2a4bc0a7b15f184991263d'

export const getAllPosts = async () => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`,
        { next: { revalidate: 300 }}
    )
    const posts = await res.json()
    return posts
}

export const getPosts = async (id: string) => {
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`,
        { next: { revalidate: 300 } }
    )
    const post = await res.json()
    return post
}