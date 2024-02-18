import { Metadata } from 'next'
import Image from 'next/image'

import AboutMe from '@/components/About'

export const metadata: Metadata = {
    title: 'About Me - Fabio J. Raminhuk',
    description: 'Meet Fabio J. Raminhuk, a passionate frontend developer with expertise in various technologies. Learn about his education, skills, and dedication to staying updated with the latest trends in the industry',
}


export default function About() {
    return (
        <div className="block w-full">
            <div className="container">
                <AboutMe type="h1">
                    <div className="">
                        <article className="my-16 flex items-center px-16 max-lg:flex-col max-lg:gap-5 max-lg:px-0">
                            <div className="relative z-50 mr-16 size-80 min-w-80 overflow-hidden rounded-full bg-gradient-custom p-0.5 shadow-xl shadow-blue-500/50 max-lg:relative max-lg:right-0 max-lg:top-0 max-lg:mr-0 max-lg:size-64 max-lg:min-w-64">
                                <Image priority className="h-auto w-full max-w-xs rounded-full" src="/images/fabio-developer.jpg" width="320" height="320" alt="Fabio Junior Raminhuk - Frontend Developer" quality={100}/>
                            </div>
                            <div className="relative rounded-lg p-0.5">
                                {/* <span className="absolute inset-y-0 -left-16 -z-10 m-auto h-[3px] w-20 rotate-180 bg-gradient-custom"></span> */}

                                <div className="relative rounded-lg bg-back p-2 max-lg:p-0">
                                    <p>Hi there! I&apos;m Fabio J. Raminhuk, a passionate frontend developer with a strong background in technology. Let me introduce myself and tell you more about my journey in the world of web development.</p><br/>

                                    <p>I was born in Salete, a charming town located in the state of Santa Catarina, Brazil, where I spent my childhood surrounded by nature and a close-knit community. From an early age, I developed a curiosity for technology and a desire to understand how things work.</p><br/>

                                    <p>In addition to my love for coding, I have several hobbies that keep me balanced and energized. On weekends, you&apos;ll often find me on the soccer field, where I enjoy playing with friends and competing in local leagues. When I&apos;m not on the pitch, I unwind by immersing myself in the virtual worlds of video games, exploring new challenges and stories. I also prioritize my health and fitness by hitting the gym regularly, where I push myself to achieve new personal bests and stay active.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="mb-10 grid grid-cols-2 gap-20 max-xl:grid-cols-1 max-xl:gap-5">
                            <div>
                                <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-xl:text-xl">
                                    <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Education and Skills
                                </h2>
                                <p>I graduated from the Centro Universitário Leonardo Da Vinci (UNIASSELVI) with a degree in Analysis and Systems Development. This academic foundation has provided me with a solid understanding of software development principles and best practices.</p>
                            </div>
                            <div>
                                <h3 className="mb-3 mt-5 flex items-center gap-3 text-xl font-semibold text-white max-xl:text-base">
                                    
                            Skills
                                </h3>
                                <p>I have expertise in a wide range of technologies, including HTML, CSS, Sass, Less & Tailwind CSS, JavaScript, TypeScript & jQuery, React, Next & Zustand. My diverse skill set enables me to create engaging and functional digital experiences for clients and users alike.</p>
                            </div>
                        </article>
                        <article className="mb-10 grid grid-cols-2 gap-20 max-xl:grid-cols-1 max-xl:gap-5">
                            <div>
                                <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-xl:text-xl">
                                    <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Professional Experience
                                </h2>
                                <p>In addition to my academic background, I&apos;ve gained practical experience working as a technical support specialist in a software company. This experience has given me a holistic understanding of the challenges faced by development teams and honed my communication and problem-solving skills.</p>
                            </div>
                            <div>
                                <h3 className="mb-3 mt-5 flex items-center gap-3 text-xl font-semibold text-white max-xl:text-base">
                                    
                            Current Role
                                </h3>
                                <p>Currently, I am actively involved as a Tech Leader in the frontend department of Magazord, an e-commerce platform. In this role, I lead a team of frontend developers, overseeing projects and ensuring the delivery of high-quality solutions. This experience has further strengthened my leadership and technical skills, allowing me to effectively drive innovation and excellence in frontend development.</p>
                            </div>
                        </article>
                        <article className="mb-10">
                            <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-xl:text-xl">
                                <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Continuous Learning and Specialization
                            </h2>
                            <p>I am committed to continuous learning and staying updated with the latest trends in the industry. Currently, I&apos;m dedicating time to studying and deepening my understanding of Artificial Intelligence (AI) and emerging technologies in the development market.</p>
                        </article>
                        <article className="mb-10">
                            <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-xl:text-xl">
                                <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Get in Touch
                            </h2>
                            <p>If you&apos;re looking for a passionate frontend developer who is highly skilled and dedicated to delivering high-quality solutions and exceptional user experiences, I&apos;d love to hear from you. Let&apos;s collaborate and bring your digital ideas to life!</p>
                        </article>
                    </div>
                </AboutMe>
            </div>
        </div>
    )
}
