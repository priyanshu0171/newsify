import Navbar from './UIComponents/Navbar';
import NewsTopTenLoader from './NewsTopTenLoader';
function Home() {
    return (
        <>
            <Navbar landedPage="home"/>
            {/* Top 10 news  */}
            <NewsTopTenLoader/>
        </>
    )
}
export default Home;