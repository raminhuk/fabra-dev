import '../../../NotionStyle/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NotionRenderer } from 'react-notion'

import { BlogPost } from '@/@types/blog'
import { getAllPosts, getPosts } from '@/utils/api/splitbeeApi'
import { formateData } from '@/utils/formatDate'

type Props = {
    params: { slug: string };
  };

export const generateMetadata = async (
    props: Props
): Promise<Metadata> => {
    const { params } = props
    const posts = await getAllPosts()
    const post: BlogPost | undefined = posts.find((t: BlogPost) => t.slug === params.slug)
    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
            images: [{
                url: post?.image[0].url ? post?.image[0].url : '',
            }],
        },
    }
}

export default async function PostBlog({ params }: Props) {
    try {
        const posts = await getAllPosts()
        const post: BlogPost | undefined = posts.find((t: BlogPost) => t.slug === params.slug)
        const datePost = formateData(post?.date ? post?.date : '2024-02-23')
        if (!post) {
            throw new Error(`Page not found`)
        }
        const pagePost = await getPosts(post.id)

        return (
            <div>
                <div className="relative flex h-[400px] w-full overflow-hidden max-lg:h-[300px]">
                    <div className="flex w-full items-center justify-center overflow-hidden">
                        <div>
                            <h1 className="w-full max-w-[900px] bg-gradient-custom bg-clip-text px-5 pb-10 text-center text-6xl font-semibold text-transparent drop-shadow-[0_6px_10px_rgba(0,0,0,0.40)] max-lg:text-3xl">{post.title}</h1>
                            <div className="flex justify-center gap-10 text-coldGrey">
                                <span>{datePost}</span>
                                {post.authors[0] && (
                                    <span>Author: {post.authors[0].fullName}</span>
                                )}
                            </div>
                        </div>
                        <figure className="fixed left-0 top-0 -z-20 h-[550px] w-full max-lg:h-[450px]">
                            {post.image ? (
                                <Image className="size-full object-cover" src={post.image[0].url} alt={post.image[0].name} width={400} height={220}/>
                            ) : (
                                <div className="h-[600px] w-full bg-slate-800"></div>
                            )}
                            <span className="absolute left-0 top-0 size-full bg-back-dark !bg-opacity-70 backdrop-blur-[6px]"></span>
                        </figure>
                    </div>
                </div>
                <div className="w-full bg-back py-10">
                    <div className="container max-w-[1000px]">
                        <div>
                            <NotionRenderer
                                blockMap={pagePost}
                                customDecoratorComponents={{
                                    a: ({ decoratorValue, renderComponent }) => (
                                        <Link className="underline hover:text-customPurple" href={decoratorValue} target="_blank" rel="noopener noreferrer">
                                            {renderComponent()?.props.children}
                                        </Link>
                                    )
                                }}
                            />
                        </div>
                        <div className="flex gap-2">
                            Tags: 
                            {post.tags && (
                                post.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border-[1px] border-solid border-customIndigo/80 bg-customIndigo/20 px-[10px] py-1 text-xs max-lg:text-[9px]">{tag}</span>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error fetching post data:', error)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div>Page not found</div>
            </div>
        )
    }
}