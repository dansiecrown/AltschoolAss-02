import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Spinner from './Spinner';
import User from './User';
import axios from 'axios';

export default function Card() {
    const [data, setData] = useState([""])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            setLoading(true)
            const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`)
            setData(response.data.results[0])
            setLoading(false)


        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [page])



    const paginate = (num) => {
        setPage(num)
    }

    const next = () => {
        setPage((prev) => prev + 1)
    }
    const prev = () => {
        setPage((prev) => prev - 1)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="card">
                    <button className="btn prev" onClick={prev} disabled={page === 1 ? true : false}>
                        Previous
                    </button>
                    {
                        loading ? <Spinner /> : <User data={data} />
                    }

                    <button className="btn next" onClick={next}>
                        Next </button>
                </div>
                <Pagination paginate={paginate} page={page} className="paginate" />
            </div>
        </div>
    )
}
