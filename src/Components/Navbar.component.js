import { FaGrav, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useState } from "react";

const Navbar = () => {
    const [toggled, setToggled] = useState(false);
    const toggle = () => {
        setToggled(toggled => !toggled);
    }
    return (
        <div className="navbar p-2 navbar-light bg-light align-items-center">
            <div className="nav align-items-center">
                <div className="navbar-brand d-flex align-items-center"><Link className='nav-link' to='/'><FaGrav size='40' color='lightblue'/></Link><h3 className="">Martian</h3></div>
                    <nav className="custom-link">
                        <ul className="nav mt-2">
                            <li className="nav-item ctp-link"><Link className="nav-link text-dark" to="/about">About <div className="lin3"></div></Link></li>
                            <li className="nav-item ctp-link"><Link className="nav-link text-dark" to="/contact">Contact <div className="lin3"></div></Link></li>
                            <li className="nav-item ctp-link"><Link className="nav-link text-dark" to="/login" >Login <div className="lin3"></div></Link></li>
                        </ul>
                    </nav>
                    <FaBars className="align-self-center responsive-bar" onClick={toggle}/>
                    {toggled ? <nav className="responsive-link">
                        <ul className="navbar-nav mx-3">
                            <li className="nav-item" onClick={toggle}><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item" onClick={toggle}><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item" onClick={toggle}><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </nav> : null}
            </div>
            <div>
                <Link to="/signUp" className="btn btn-outline-primary">Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar