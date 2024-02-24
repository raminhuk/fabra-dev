
import { BlogPost } from '@/@types/blog'
import { getAllPosts } from '@/utils/api/splitbeeApi'

const URL = 'https://fabra.dev'

function generateSiteMap(posts: BlogPost[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/about-me</loc>
     </url>
      <url>
       <loc>${URL}/projects</loc>
     </url>
      <url>
       <loc>${URL}/technologies</loc>
     </url>
      <url>
       <loc>${URL}/tools</loc>
     </url>
      <url>
       <loc>${URL}/blog</loc>
     </url>
     ${posts.map(({ slug }) => {
        return `
           <url>
               <loc>${`${URL}/blog/${slug}`}</loc>
           </url>
         `
    }).join('')}
   </urlset>
 `
}

export async function GET() {
    const posts = await getAllPosts()
    const body = generateSiteMap(posts)

    return new Response(body, {
        status: 200,
        headers: {
            'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
            'content-type': 'application/xml',
        },
    })
}
