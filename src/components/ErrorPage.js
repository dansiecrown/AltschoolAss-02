import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {



    return (
        <div className="Error">
            <div className="contain">
                <p>Error 404</p>
                <h1>You are lost!</h1>

                <Link to="/" className="btn">Go Home</Link>
            </div>
        </div>
    )
}
