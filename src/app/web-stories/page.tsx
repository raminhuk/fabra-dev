import Layout from '@/components/Layout'
import Title from '@/components/Title'
import WbStoriesList from '@/components/WebStories'


export default function WebStoriesPage(){

    return (
        <>
            <Layout>
                <div className="w-full">
                    <div className="container">
                        <div className="my-12 max-lg:my-4">
                            <Title
                                type="h1"
                                title="Web Stories" 
                                description="Experience a new dimension of visual storytelling with our Web Stories! Discover captivating and visually stunning tales crafted to inspire and entertain. Immerse yourself in the magic of our Web Stories and dive into a unique online storytelling experience"
                            />
                            <WbStoriesList />  
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}