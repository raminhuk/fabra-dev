import { Metadata } from 'next'
import Image from 'next/image'

import AboutMe from '@/components/About'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'About Me - Fabio J. Raminhuk',
    description: 'Turning ideas into digital reality: Fabio J.R, a Fullstack Developer building end-to-end solutions with elegant frontends and reliable backends to deliver outstanding user experiences.',
    openGraph: {
        title: 'About Me - Fabio J. Raminhuk',
        description: 'Meet Fabio J. Raminhuk, a passionate Fullstack Developer skilled in a wide range of technologies. Discover his background, technical expertise, and commitment to staying current with the latest industry trends.'
    },
}

export default function AboutPage() {
    return (
        <Layout>
            <div className="w-full">
                <div className="container">
                    <div className="my-12 max-lg:my-4">
                        <Title
                            type="h1"
                            title="About me"
                            description="Building robust and seamless digital experiences – I'm a Fullstack Developer passionate about turning ideas into fully functional products"
                        />
                        <div className="tracking-wide text-coldGrey max-xs:text-sm">
                            <article className="my-16 flex items-center px-16 max-xl:px-0 max-lg:my-6 max-lg:flex-col max-lg:gap-5">
                                <div className="relative z-50 mr-16 size-80 min-w-80 overflow-hidden rounded-full bg-gradient-custom p-0.5 shadow-xl shadow-blue-500/50 max-lg:relative max-lg:right-0 max-lg:top-0 max-lg:mr-0 max-lg:size-64 max-lg:min-w-64">
                                    <Image priority className="h-auto w-full max-w-xs rounded-full" src="/images/fabio-developer.jpg" width="320" height="320" alt="Fabio Junior Raminhuk - Fullstack Developer" quality={100} />
                                </div>
                                <div className="relative rounded-lg p-0.5">
                                    {/* <span className="absolute inset-y-0 -left-16 -z-10 m-auto h-[3px] w-20 rotate-180 bg-gradient-custom"></span> */}

                                    <div className="relative rounded-lg bg-back p-2 max-lg:p-0">
                                        <p>Hi there! I&apos;m Fabio J. Raminhuk, a Fullstack Developer with a strong background in technology. Let me introduce myself and share a bit about my journey in the world of software development.</p><br />

                                        <p>I was born in Salete, a small town in Santa Catarina, Brazil, where I grew up surrounded by nature and a close-knit community. From a young age, I was curious about technology and driven to understand how things work—from hardware to code.</p><br />

                                        <p>Outside of development, I stay active and balanced through hobbies that keep me sharp. On weekends, I enjoy playing soccer with friends in local leagues. I also spend time gaming, exploring new virtual worlds and challenges. Fitness is part of my routine too—I&apos;m regularly at the gym pushing limits and staying focused.</p>
                                    </div>

                                </div>
                            </article>
                            <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                                <article className="mb-10">
                                    <div>
                                        <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                                            Education and Skills
                                        </h2>
                                        <p>I graduated from the Centro Universitário Leonardo Da Vinci (UNIASSELVI) with a degree in Analysis and Systems Development. This academic foundation has provided me with a solid understanding of software development principles and best practices.</p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-5 flex items-center gap-3 text-base font-semibold text-white">
                                            Skills
                                        </h3>
                                        <p>I have expertise in a wide range of technologies, including HTML, CSS, Sass, Less & Tailwind CSS, JavaScript, TypeScript & jQuery, React, Next & Zustand. My diverse skill set enables me to create engaging and functional digital experiences for clients and users alike.</p>
                                    </div>
                                </article>
                                <article className="mb-10">
                                    <div>
                                        <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                                            Professional Experience
                                        </h2>
                                        <p>In addition to my academic background, I&apos;ve gained practical experience working as a technical support specialist in a software company. This experience has given me a holistic understanding of the challenges faced by development teams and honed my communication and problem-solving skills.</p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-5 flex items-center gap-3 text-base font-semibold text-white">
                                            Current Role
                                        </h3>
                                        <p>Currently, I work as a Tech Leader at Magazord, an e-commerce platform, where I lead a team of developers and contribute across the full stack. I oversee projects, ensure the delivery of scalable and high-quality solutions, and help drive technical decisions. This role has sharpened both my leadership and development skills, allowing me to push for innovation and excellence in every part of the stack.</p>
                                    </div>
                                </article>

                                <article className="mb-10">
                                    <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                        <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                                        Continuous Learning and Specialization
                                    </h2>
                                    <p>I am committed to continuous learning and staying updated with the latest trends in the industry. Currently, I&apos;m dedicating time to studying and deepening my understanding of Artificial Intelligence (AI) and emerging technologies in the development market.</p>
                                </article>
                                <article className="mb-10">
                                    <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                        <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                                        Get in Touch
                                    </h2>
                                    <p>If you&apos;re looking for a passionate Fullstack Developer with solid technical skills and a commitment to delivering high-quality, end-to-end solutions, I&apos;d love to connect. Let&apos;s work together to turn your digital ideas into reality!</p>
                                </article>
                            </div>
                        </div>
                        <AboutMe />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
