export const config = { amp: true }
 
function MyAmpPage() {
    const date = new Date()
    return (
        <div>
            <p>Some time: {date.toJSON()}</p>
            <amp-story standalone
                title="Joy of Pets"
                publisher="AMP tutorials"
                publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
                poster-portrait-src="assets/cover.jpg">
            </amp-story>
        </div>
    )
}
 
export default MyAmpPage