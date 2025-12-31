import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/Auth'

const Navbar = () => {
    const { isLoggedIn, users } = useAuth();
    const isAdmin = users?.isAdmin;
    return (
        <>
            <header>
                <div className='container'>
                    <div className='logo-brand'>
                        <h1>
                            <span style={{ color: "red" }}>CODE</span>
                            <span>WIZARD</span>
                        </h1>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            {isAdmin == true ? (
                                <>
                                    <li>
                                        <NavLink to="/serviceform">Form</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/admin">Admin</NavLink>
                                    </li>
                                </>

                            ) : null}

                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">Service</NavLink>
                            </li>
                            {isLoggedIn ? (<li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>) : (<>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">login</NavLink>
                                </li>
                            </>
                            )}


                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
