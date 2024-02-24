'use client'

import Image from 'next/image'
import Link from 'next/link'

import { BlogPost } from '@/@types/blog'

export default function Posts({ posts } : { posts?: BlogPost[] }) {
    return (
        <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {posts?.map((post) => (
                <Link className="group/item" key={post.id} href={`/blog/${post.slug}`}>
                    <div className="overflow-hidden rounded-xl bg-back-dark">
                        <figure>
                            {post.image ? (
                                <Image className="h-[220px] w-full object-cover" src={post.image[0].url} alt={post.image[0].name} width={400} height={220}/>
                            ) : (
                                <div className="h-[220px] w-full bg-slate-800"></div>
                            )}
                        </figure>
                        <div className="flex flex-col gap-3 px-7 py-5">
                            <h2 className="flex min-h-[84px] items-center bg-gray-200 bg-clip-text text-xl font-bold text-transparent transition-all group-hover/item:bg-gradient-custom">{post.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {post.tags && (
                                    post.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border-[1px] border-solid border-customIndigo/80 bg-customIndigo/20 px-[10px] py-1 text-xs max-lg:text-[9px]">{tag}</span>
                                    ))
                                )}
                            </div>
                            <span className="mb-3 min-h-28 text-sm text-coldGrey ">{post.description}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}