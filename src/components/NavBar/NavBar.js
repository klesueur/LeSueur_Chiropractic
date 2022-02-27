import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {

    return (
        // set background of superstition mountains - gradiant darker toward right....or custom gradiant to turquoise; fully turquoise
        <header className="header">
            <div className="main-section">
                {/* Add a <img> tag insdie the <a> tag. add height and width too. */}
                {/* <a className="logo-home-link" href="">
                    transparant background img of 'Back & Neck <br> Pain Relief Clinic'
                    <img src="" />
                </a> */}
                <p> Generic Medical Practice </p>

                <section className="call-now">
                    <p> Call to schdule now! </p>

                    {/* if mobile view, display as button to call from phone */}
                    {/* <button></button> */}

                    <p> display num </p>
                </section>
            </div>

            <nav className="nav-links">
                <Link to='/'> Home </Link>
                <Link to='/services'> Services </Link>
                <Link to='/aboutus'> About Us </Link>
                <Link to='/aboutus'> Contact Us </Link>
                <Link to='/aboutus'> Reviews </Link>
            </nav>
        </header>

    //     <div className="header">
    //         <div className="main-section">
    //             {/* Add a <img> tag insdie the <a> tag. add height and width too. */}
    //             {/* <a className="logo-home-link" href="">
    //     transparant background img of 'Back & Neck <br> Pain Relief Clinic'
    //     <img src="" />
    // </a> */}
    //             <p> Generic Medical Practice </p>

    //             <div className="call-now">
    //                 <p> Call to schdule now! </p>

    //                 {/* if mobile view, display as button to call from phone */}
    //                 {/* <button></button> */}

    //                 <p> display num </p>
    //             </div>
    //         </div>

    //         <nav className="nav-links">
    //             <Link to='/'> Home </Link>
    //             <Link to='/services'> Services </Link>
    //             <Link to='/aboutus'> About Us </Link>
    //             <Link to='/aboutus'> Contact Us </Link>
    //             <Link to='/aboutus'> Reviews </Link>
    //         </nav>
    //     </div>
    )
};

export default NavBar;