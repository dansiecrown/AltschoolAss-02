import React from 'react'

export default function User({ data }) {
    return (
        <div>
            <div className='contain'>
                <img src={data.picture.large} alt="" />
                <h1>{data.name.first} {data.name.last}</h1>
                <p>{data.email}</p>
                <p>{data.cell}</p>
                <p>{data.location.country}</p>
            </div>
        </div>
    )
}
