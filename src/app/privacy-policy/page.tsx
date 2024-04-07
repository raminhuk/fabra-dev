import { Metadata } from 'next'

import Layout from '@/components/Layout'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'Privacy Policy - Fabra.dev',
    description: 'Welcome to our Privacy Policy page. If you need additional information or have any questions about our privacy policy, feel free to contact us via email at contato@fabra.dev.',
    openGraph: {
        title: 'Privacy Policy - Fabra.dev',
        description: 'Welcome to our Privacy Policy page. If you need additional information or have any questions about our privacy policy, feel free to contact us via email at contato@fabra.dev.',
    },
}

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="w-full">
                <div className="container">
                    <div className="my-12 max-lg:my-4">
                        <Title
                            type="h1"
                            title="Privacy Policy" 
                            description="Welcome to our Privacy Policy page. If you need additional information or have any questions about our privacy policy, feel free to contact us via email at contato@fabra.dev"
                        />
                        <div className="tracking-wide text-coldGrey max-xs:text-sm">
                            <div className="mx-auto">
                                <p className="mb-6">
            If you need additional information or have any questions about our privacy policy, feel free to contact us via
            email at contato@fabra.dev.
                                </p>
  
                                <h2 className="mb-2 text-2xl font-semibold text-white">Log Files</h2>
                                <p className="mb-6">
            Like most websites, we collect and use data contained in log files. Information in log files includes your IP
            address (Internet Protocol), your ISP (Internet Service Provider, such as NET, Vivo, Oi, etc.), the browser
            you used to visit our site (such as Google Chrome, Firefox, Internet Explorer, etc.), the time of your visit,
            and which pages you visited within our site.
                                </p>
  
                                <h2 className="mb-2 text-2xl font-semibold text-white">Cookies and Web Beacons</h2>
                                <p className="mb-6">
            We use cookies to store information, such as your personal preferences when you visit our site. This may
            include a simple popup or a link to various services we provide, such as forums.
                                </p>
  
                                <h2 className="mb-2 text-2xl font-semibold text-white">Google Analytics and Google Tag Manager</h2>
                                <p className="mb-6">
            We use Google Analytics and Google Tag Manager to collect information about the use of our site. These services
            provide us with statistics and other information about website traffic, such as average time spent, pages
            visited, type of browser used, among other metrics. This data helps us continuously improve the user experience
            on our site.
                                </p>
  
                                <h2 className="mb-2 text-2xl font-semibold text-white">Google AdSense</h2>
                                <p className="mb-6">
            Our site displays ads provided by Google AdSense. Google uses cookies to serve ads based on users&apos; visits to
            this and other sites on the Internet. Users can opt out of the use of the DART cookie by visiting Google&apos;s
            content network and ad privacy policy.
                                </p>
  
                                <p className="mb-6">
            Please note that by using our site, you consent to the use of cookies and the processing of data collected by
            Google as described above.
                                </p>
  
                                <p>
            Please note that this privacy policy may be updated or modified occasionally to reflect changes in our
            information practices. We recommend that you review this page periodically to stay informed of such changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
