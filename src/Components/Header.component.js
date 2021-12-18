import { FaGrav } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="jumbotron jumbotron-fluid ">
            <div className="responsive-adjust">
                <div className="responsive-header justify-content-around my-5 align-items-center">
                   <div className="mx-4 astro-icon"><FaGrav size="200" color="lightblue" /></div>
                    <div className="header-right">
                        <div className="custom-display">Welcome to Martian!</div>
                        <p className="lead w-75 mauto">Why opt for something less when you can get a much better experience here?</p>
                        <p className="lead w-50 mauto">Try Martian Today!</p>
                        <Link className="btn btn-outline-secondary btn-lg" to="/discover">Discover</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;