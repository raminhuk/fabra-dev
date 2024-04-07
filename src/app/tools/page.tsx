import { Metadata } from 'next'

import Layout from '@/components/Layout'
import Title from '@/components/Title'
import Tools from '@/components/Tools'

export const metadata: Metadata = {
    title: 'Tools - Fabio J. Raminhuk',
    description: 'Explore a variety of essential frontend development tools on the Tools page of fabra.dev. Discover utilities such as Box Shadow, Text Shadow, CSS Cursor, Border, Border Radius, Gradient CSS, Transform CSS, RGBA & Hex Color, Multiple Columns, and Filter, all conveniently located in one place to enhance your web projects',
    openGraph: {
        title: 'Tools - Fabio J. Raminhuk',
        description: 'Explore a variety of essential frontend development tools on the Tools page of fabra.dev. Discover utilities such as Box Shadow, Text Shadow, CSS Cursor, Border, Border Radius, Gradient CSS, Transform CSS, RGBA & Hex Color, Multiple Columns, and Filter, all conveniently located in one place to enhance your web projects',
    },
}

export default function TollsPage() {
    return (
        <Layout>
            <div className="w-full">
                <div className="container">
                    <div className="my-12 max-lg:my-4">
                        <Title
                            styleDescription="max-w-full"
                            type="h1"
                            title="Tools" 
                            description="Explore a variety of essential frontend development tools on the Tools page of fabra.dev. Discover utilities such as Box Shadow, Text Shadow, CSS Cursor, Border, Border Radius, Gradient CSS, Transform CSS, RGBA & Hex Color, Multiple Columns, and Filter, all conveniently located in one place to enhance your web projects"
                        />
                        <Tools />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
