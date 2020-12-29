import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="nav-item">
                        <Link to="/" className="brand">
                            <h2>BLOG_POST</h2>
                        </Link>
                        <div className="nav-link">
                            <ul>
                                <li><Link to="/" className="link">Home</Link></li>
                                <li><Link to="/about" className="link">About</Link></li>
                                <li><Link to="/contact" className="link">Contact</Link></li>
                                <li><Link to="/create" className="link">Create</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Header
