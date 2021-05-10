import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav__content">
                        <Link to="/" className="brand"><h1>Contacts</h1></Link>
                        <Link to="/create" className="create__link">create contact</Link>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Navbar
