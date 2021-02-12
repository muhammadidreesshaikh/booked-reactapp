import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <div>
            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <a href="#"><i class="fas fa-dice-d20"></i>Booked App</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to={process.env.PUBLIC_URL + '/home'}>Home</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/booking'}>Booking</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/calendar'}>Calendar</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/listpanding'}>List Panding</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/listtoday'}>List Today</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/listupcoming'}>List Upcoming</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + '/listcompleted'}>List Completed</Link></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className='logo'>
                            <a href="#"><i class="fas fa-dice-d20"></i></a>
                        </div>
                    </div>

                    <li><Link to={process.env.PUBLIC_URL + '/home'} onClick={() => setMenuToggle(!menuToggle)}>Home</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/booking'} onClick={() => setMenuToggle(!menuToggle)}>Booking</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/calendar'} onClick={() => setMenuToggle(!menuToggle)}>Calendar</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/listpanding'} onClick={() => setMenuToggle(!menuToggle)}>ListPanding</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/listtoday'} onClick={() => setMenuToggle(!menuToggle)}>List Today</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/listupcoming'} onClick={() => setMenuToggle(!menuToggle)}>List Upcoming</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + '/listcompleted'} onClick={() => setMenuToggle(!menuToggle)}>List Completed</Link></li>
                </div>
            </div>
        </div>
    );
}

export default Header;