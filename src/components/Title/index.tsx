interface titleProps {
    title: string,
    description: string
}

export default function Title({
    title,
    description
}: titleProps) {
    return <div className="mb-10 flex flex-col gap-4">
        <h2 className="text-5xl font-semibold max-xl:text-2xl">{title}</h2>
        <p className="max-w-2xl tracking-wide text-coldGrey max-xs:text-sm">{description}</p>
    </div>
}