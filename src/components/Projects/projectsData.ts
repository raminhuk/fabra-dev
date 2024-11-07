
type projectsProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    linkPreview?: string;
    linkGithub: string;
}


export const projectsData: projectsProps[] = [
    {
        title: 'Tudo Curiosidade AI-generated curiosity website',
        description: 'Discover fascinating AI-generated curiosities! Our site, built with Next.js and Tailwind',
        image: '/images/projects/tudocuriosidade.png',
        tech: ['Next', 'TypeScript', 'Notion', 'Tailwind', 'Generative AI'],
        linkPreview: 'https://tudocuriosidade.com.br',
        linkGithub: 'https://github.com/raminhuk/tudocuriosidade.com.br'
    },
    {
        title: 'Tunefy: Your Favorite Spotify Music Website',
        description: 'Discover your top songs and artists, favorite genres, and relive recent listens in a unique and meaningful way',
        image: '/images/projects/tunefy.png',
        tech: ['React', 'TypeScript', 'Next', 'Tailwind', 'Axios', 'Zustand', 'Eslint'],
        linkPreview: 'https://tunefy.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/tunefy'
    },
    {
        title: 'QRCode Generator in React + Next',
        description: 'Built using React, Next and Ant Design UI, this QRCode Generator is a user-friendly tool that allows users to effortlessly create QR codes for various purposes.',
        image: '/images/projects/fabracode.png',
        tech: ['React', 'Next', 'TypeScript', 'Ant Design', 'Tailwind'],
        linkPreview: 'https://qrcode.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/qr-code-generator'
    },
    {
        title: 'Serverless Notion API Wrapper - Worker',
        description: 'A serverless wrapper for the private Notion API, providing quick and easy access to your Notion content. Perfect for using Notion as a CMS.',
        image: '/images/projects/notion-worker.png',
        tech: ['Node', 'TypeScript', 'Wrangler', 'Cloudflare', 'Worker'],
        // linkPreview: 'https://unilcursos.com.br',
        linkGithub: 'https://github.com/raminhuk/worker-api-notion'
    },
    {
        title: 'UnilCursos Website with Next.js and TailwindCSS',
        description: 'Experience the sleek and modern UnilCursos website built using Next.js and styled with the power of TailwindCSS',
        image: '/images/projects/unilcursos.png',
        tech: ['React', 'TypeScript', 'Next', 'Tailwind', 'Eslint'],
        // linkPreview: 'https://unilcursos.com.br',
        linkGithub: 'https://github.com/raminhuk/unilcursos2'
    },
    {
        title: 'Spotify Playlist Downloader',
        description: 'Spotify Playlist Downloader is an app that allows you to search for songs in a Spotify playlist and download each track in .mp3 format.',
        image: '/images/projects/spotdl-next.png',
        tech: ['Next 14', 'TypeScript', 'Axios', 'Tailwind', 'Fluent ffmpeg'],
        linkGithub: 'https://github.com/raminhuk/spotdl-next'
    },
    {
        title: 'A simple to-do list app with React',
        description: 'This project is a user-friendly to-do list designed to help you manage your tasks effortlessly. Easily add, edit, and check off tasks to stay organized and focused',
        image: '/images/projects/to-do-list.png',
        tech: ['React', 'JavaScript', 'Styled Components', 'ChakraUi'],
        linkPreview: 'https://tasks.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/react-todo-list'
    },
    {
        title: 'A simple weather application developed with React',
        description: 'A simple weather application developed with React, featuring real-time updates, customizable widgets',
        image: '/images/projects/weather.png',
        tech: ['React', 'JavaScript', 'Styled Components', 'Axios'],
        linkPreview: 'https://weather.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/react-weather'
    },
    {
        title: 'A simple Tic Tac Toe application',
        description: 'Crafted with React, this straightforward Tic Tac Toe application delivers an interactive and engaging experience for players of all ages.',
        image: '/images/projects/tic-tac-toe.png',
        tech: ['React', 'TypeScript', 'NextJs', 'Tailwind'],
        linkPreview: 'https://tic-tac-toe.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/tic-tac-toe'
    },
   
    
]