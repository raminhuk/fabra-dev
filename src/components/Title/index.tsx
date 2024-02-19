interface titleProps {
    title: string;
    description: string;
    type?: string;
}

export default function Title({
    title,
    description,
    type = 'h2',
}: titleProps) {
    const TypeElement = type as keyof JSX.IntrinsicElements
    return <div className="mb-10 flex flex-col gap-4">
        <TypeElement className="text-4xl font-semibold max-lg:text-3xl max-xs:text-2xl">{title}</TypeElement>
        <p className="max-w-2xl tracking-wide text-coldGrey max-xs:text-sm">{description}</p>
    </div>
}