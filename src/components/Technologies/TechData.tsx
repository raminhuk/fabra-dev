import { AWS, CSS, Figma, GraphQL, HTML, JavaScript, Next, Node, PHP, React, StyleComponents, TypeScript } from './TechIcons'

type technologiesProps = {
    title: string
    description?: string
    icon?: React.ReactNode
}

export const technologiesData: technologiesProps[] = [
    {
        title: 'TypeScript',
        description: 'Widely used in practically all my projects, offering optional static typing and modern features for more robust development',
        icon: <TypeScript/>
    },
    {
        title: 'JavaScript & jQuery',
        description: 'JavaScript, with its optional static typing and modern features, is a staple in nearly all my projects for robust development',
        icon: <JavaScript/>
    },
    {
        title: 'React, Zustand',
        description: 'A cutting-edge JavaScript library for front-end development, offering a component-based approach for efficient rendering and dynamic user interfaces',
        icon: <React/>
        
    },
    {
        title: 'Next',
        description: 'A React framework simplifying front-end development with server-side rendering, automatic code splitting, and SEO-friendly features.',
        icon: <Next/>
    },
    {
        title: 'PHP, Twig',
        description: 'A versatile scripting language powering dynamic web development with its server-side capabilities, database integration, and extensive library support',
        icon: <PHP/>
    },
    {
        title: 'HTML',
        description: 'The backbone of web development, providing the structure and semantics for building interactive and accessible websites',
        icon: <HTML/>
    },
    {
        title: 'CSS, Sass, & Tailwind',
        description: 'The styling language that brings life to web pages, offering powerful design capabilities for creating visually stunning and responsive websites',
        icon: <CSS/>
    },
    {
        title: 'Styled Components',
        description: 'A CSS-in-JS library for React that enables developers to style components with JavaScript, streamlining the creation of dynamic and reusable UI elements',
        icon: <StyleComponents/>
    },
    {
        title: 'UI design in Figma',
        description: 'A collaborative design tool revolutionizing the way teams create, prototype, and collaborate on user interfaces, with its intuitive interface, real-time collaboration, and powerful design features',
        icon: <Figma/>
    },
    {
        title: 'Node',
        description: 'A powerful runtime environment for executing JavaScript code server-side, enabling scalable and efficient back-end development with its event-driven architecture and extensive package ecosystem',
        icon: <Node/>
    },
    {
        title: 'PostgreSQL & GraphQL',
        description: 'A modern API query language and runtime, GraphQL offers developers a flexible and efficient way to fetch and manipulate data, enabling precise data definition and requests',
        icon: <GraphQL/>
    },
    {
        title: 'AWS',
        description: 'The leading cloud computing platform offering a comprehensive suite of scalable and reliable services for computing, storage, database, and more, empowering businesses to innovate and grow with flexible and cost-effective cloud solutions',
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