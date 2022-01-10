import { Fragment, useState } from 'react';
import "../NavBar/Navigation.css";
import { NavLink } from 'react-router-dom'


export default function Navigation ({ selectedImg }) {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click)

    return (
        <Fragment>
            <main className={selectedImg ? 'nav-none': "nav-container" } >
                <nav className="nav" >
                    <NavLink exact to="/" className="nav-logo"> Jeff Provorse </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu" }>
                        <li className="nav-list">
                            <NavLink exact to="/" activeClassName="active" className="link" onClick={handleClick}> Home </NavLink>
                        </li>
                        
                        <li className="nav-list">
                            <NavLink exact to="/about" activeClassName="active" className="link" onClick={handleClick}> About </NavLink>
                        </li>
                        
                        <li className="nav-list">
                            <NavLink exact to="/contact" activeClassName="active" className="link" onClick={handleClick}> Contact </NavLink>  
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times": "fas fa-bars"}></i>
                    </div>
                </nav>
            </main>
        </Fragment>
    )
}