'use client'

import Image from 'next/image'
import Link from 'next/link'

import { BlogPost } from '@/@types/blog'

export default function Posts({ posts } : { posts?: BlogPost[] }) {
    return (
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
            {posts?.map((post) => (
                post.published === true && (
                    <Link className="group/item" key={post.id} href={`/blog/${post.slug}`}>
                        <div className="overflow-hidden rounded-xl bg-back-dark">
                            <figure>
                                {post.image ? (
                                    <Image className="h-[220px] w-full object-cover" src={post.image[0].url} alt={post.image[0].name} width={400} height={220} quality={70}/>
                                ) : (
                                    <div className="h-[220px] w-full bg-slate-800"></div>
                                )}
                            </figure>
                            <div className="flex flex-col gap-3 px-6 py-5">
                                <h2 className="flex min-h-[84px] items-center bg-gray-200 bg-clip-text text-xl font-bold tracking-wide text-transparent transition-all group-hover/item:bg-gradient-custom max-sm:min-h-0 max-sm:text-lg max-sm:tracking-tight">{post.title}</h2>
                                <div className="flex max-h-[26px] flex-wrap gap-2 overflow-hidden">
                                    {post.tags && (
                                        post.tags.map((tag) => (
                                            <span key={tag} className="flex-1 whitespace-nowrap rounded-full border-[1px] border-solid border-customIndigo/80 bg-customIndigo/20 px-[10px] py-1 text-center text-xs max-lg:text-[9px]">{tag}</span>
                                        ))
                                    )}
                                </div>
                                <span className="mb-3 line-clamp-5 min-h-[100px] overflow-hidden text-sm text-coldGrey max-md:line-clamp-4 max-md:min-h-0 ">{post.description}</span>
                            </div>
                        </div>
                    </Link>
                )
            ))}
        </div>
    )
}