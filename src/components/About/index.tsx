import Title from '../Title'

export default function AboutMe() {
    return <div className="mt-36">
        <Title 
            title="About me" 
            description="Crafting visually stunning and functional experiences - I'm a Frontend Developer passionate about turning ideas into digital reality"
        />

        <div className="grid grid-cols-4 pt-5">
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">2014</h3>
                <div className="relative">
                    <span className="absolute bottom-[-7px] left-[-7px] block size-5 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                    <span className="block h-1 w-full bg-white"></span>
                </div>
                <p className="pr-8 text-base text-coldGrey">
                I took part in the course on Delphi Programming offered by Dimapel Informática LTDA. Throughout the course, I gained a basic understanding of programming principles using Delphi.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">2015</h3>
                <div className="relative">
                    <span className="absolute bottom-[-7px] left-[-7px] block size-5 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                    <span className="block h-1 w-full bg-white"></span>
                </div>
                <p className="pr-8 text-base text-coldGrey">
                I actively participated in the Web Developer course offered by SENAI/SC, an experience that transformed my professional journey. Throughout the program, I had the opportunity to delve into web programming, exploring languages such as HTML, CSS, and JavaScript.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">2020</h3>
                <div className="relative">
                    <span className="absolute bottom-[-7px] left-[-7px] block size-5 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                    <span className="block h-1 w-full bg-white"></span>
                </div>
                <p className="pr-8 text-base text-coldGrey">
                Graduated in Analysis and Systems Development from the Centro Universitário Leonardo Da Vinci (UNIASSELVI). Throughout my academic journey, I acquired essential competencies to thrive in the software development market, including the ability to analyze businesses and create solutions through computerized systems.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">2021 - 2023</h3>
                <div className="relative">
                    <span className="absolute bottom-[-7px] left-[-7px] block size-5 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                    <span className="block h-1 w-full bg-white"></span>
                </div>
                <p className="pr-8 text-base text-coldGrey">
                Actively participating in the latest courses and acquiring technical knowledge about various technologies, I am always present at The Developer&apos;s Conference.
                </p>
            </div>

        </div>
    </div>
}