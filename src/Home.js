import Header from './Components/Header.component';
import Section from './Components/Section.component'
import SectionView from './Components/SectionView.component'
import { FaStreetView, FaStethoscope,FaStar , FaMapMarked } from 'react-icons/fa'


const Home = () => {
    return (
        <div className="Home">
            <Header />
            <br /><br />
            <span className="nav-link disabled display-6">Our Motto</span>
            <br />
            <Section bg='light' icons={[<FaStreetView size="120" color="grey"/>, <FaStethoscope size="120" color="grey"/>, <FaStar size="120" color="grey"/>]} descrs={["You can do it if you try", "Believe in yourself", "You are a Star"]} />
            <br /><br />
            <span className="nav-link disabled display-6">Why you should join us?</span>
            <br />
            <SectionView icon={<FaMapMarked size="220" color="grey"/>} content="We have multiple branches which are spread across all of Europe, North and South America, East Asia, Africa and Australia. We offer the best of our services to our partners and patronizers. "/>
        </div>
    )
}

export default Home;