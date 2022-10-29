import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>

            <Nav />
            <Outlet />
            <p>Click any of the link above to Navigate to any section of the page;</p>
        </div>
    )
}
