
import { BlogPost } from '@/@types/blog'
import { getAllPosts } from '@/utils/api/splitbeeApi'

const URL = 'https://fabra.dev'

function generateSiteMap(posts: BlogPost[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${URL}</loc>
      <lastmod>2024-02-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/about-me</loc>
      <lastmod>2024-02-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/projects</loc>
      <lastmod>2024-02-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/technologies</loc>
      <lastmod>2024-02-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/tools</loc>
      <lastmod>2024-03-18</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/blog</loc>
      <lastmod>2024-02-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/border-radius-generator</loc>
      <lastmod>2024-03-18</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/box-shadow-generator</loc>
      <lastmod>2024-03-23</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/text-shadow-generator</loc>
      <lastmod>2024-03-24</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/color-gradient-generator</loc>
      <lastmod>2024-03-25</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${URL}/privacy-policy</loc>
      <lastmod>2024-03-25</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
     ${posts.map(({ slug,date }) => {
        return `
           <url>
                <loc>${`${URL}/blog/${slug}`}</loc>
                <lastmod>${date}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
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
