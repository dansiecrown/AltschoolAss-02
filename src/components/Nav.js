import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <div className="menu">
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="card">User</Link>
            </div>
        </div>
    )
}
