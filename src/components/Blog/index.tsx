'use client'

import Link from 'next/link'

import { Post } from '@/app/blog/page'

export default function Posts({ posts } : { posts?: Post[] }) {
    return (
        <div className="py-20">
            <h1 className="mb-10 text-4xl font-bold">BLOG</h1>
            {posts?.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="mb-10 rounded-xl bg-back-dark p-10">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <span>{post.date}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}