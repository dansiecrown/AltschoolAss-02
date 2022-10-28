import React, { useState } from 'react';


export default function Pagination({ paginate, page }) {

    const endNum = page + 9
    let startNum = page

    const btns = []
    for (startNum; startNum <= endNum; startNum++) {
        btns.push(startNum)
    }

    return (
        <div className="pagination">
            {page > 1 && <div> <button onClick={() => paginate(1)} className="numbers">1</button><span> . . .</span></div>}

            {
                btns.map(num => {
                    return <button onClick={() => paginate(num)} key={num} className="numbers" disabled={page === num ? true : false}>{num}</button>
                })
            }
        </div>
    )
}
