import { AWS, CSS, Figma, GraphQL, HTML, JavaScript, Next, Node, PHP, React, StyleComponents, TypeScript } from './TechIcons'

type technologiesProps = {
    title: string
    description?: string
    icon?: React.ReactNode
}

export const technologiesData: technologiesProps[] = [
    {
        title: 'TypeScript',
        description: 'Commonly employed across all of my projects, it provides optional static typing and modern features, enhancing robust development practices.',
        icon: <TypeScript/>
    },
    {
        title: 'JavaScript & jQuery',
        description: 'JavaScript, celebrated for its optional static typing and contemporary features, stands as a cornerstone in virtually all of my projects, ensuring robust development practices and fostering innovation.',
        icon: <JavaScript/>
    },
    {
        title: 'React, Zustand',
        description: 'A cutting-edge JavaScript library for front-end development, offering a component-based approach for efficient rendering and dynamic user interfaces.',
        icon: <React/>
        
    },
    {
        title: 'Next',
        description: 'React simplifies front-end development with server-side rendering, automatic code splitting, and SEO-friendly features, empowering developers to create dynamic and responsive web applications with ease',
        icon: <Next/>
    },
    {
        title: 'PHP, Twig',
        description: 'A versatile scripting language powering dynamic web development with its server-side capabilities, database integration, and extensive library support.',
        icon: <PHP/>
    },
    {
        title: 'HTML',
        description: 'The backbone of web development, providing the structure and semantics for building interactive and accessible websites.',
        icon: <HTML/>
    },
    {
        title: 'CSS, Sass, & Tailwind',
        description: 'The styling language that brings life to web pages, offering powerful design capabilities for creating visually stunning and responsive websites.',
        icon: <CSS/>
    },
    {
        title: 'Styled Components',
        description: 'A CSS-in-JS library for React that enables developers to style components with JavaScript, streamlining the creation of dynamic and reusable UI elements.',
        icon: <StyleComponents/>
    },
    {
        title: 'UI design in Figma',
        description: 'A collaborative design tool revolutionizing the way teams create, prototype, and collaborate on user interfaces, with its intuitive interface, real-time collaboration, and powerful design features.',
        icon: <Figma/>
    },
    {
        title: 'Node',
        description: 'A robust runtime environment executes JavaScript code server-side, fostering scalable and efficient back-end development with its event-driven architecture and vast package ecosystem.',
        icon: <Node/>
    },
    {
        title: 'PostgreSQL & GraphQL',
        description: 'A modern API query language and runtime, GraphQL offers developers a flexible and efficient way to fetch and manipulate data, enabling precise data definition and requests.',
        icon: <GraphQL/>
    },
    {
        title: 'AWS',
        description: 'The premier cloud platform provides a range of scalable services for computing, storage, database, and more, enabling businesses to innovate and grow cost-effectively.',
        icon: <AWS/>
    },
]

export const additionalTechData: technologiesProps[] = [
    {
        title: 'Git, Github',
    },
    {
        title: 'Testing',
    },
    {
        title: 'Linters',
    },
    {
        title: 'SEO',
    },
    {
        title: 'UX/UI',
    },
    {
        title: 'Wordpress',
    },
   
    {
        title: 'APIs',
    },
    {
        title: 'Google Ads',
    }
]