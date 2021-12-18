import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Blank from './Blank';
import Footer from './Components/Footer.component';

export default function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path= '/' element={<Home />} />
                <Route path= '/SignUp' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Blank name="contact"/>} />
                <Route path='/about' element={<Blank name="about" />} />
                <Route path='/discover' element={<Blank name="discover" />} />
            </Routes>
            <Footer />
        </Router>
    )
}