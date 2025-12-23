import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyRequest = () => {

    const [myRequests, setMyRequests] = useState([]);
    const [totalRequests, setTotalRequests] = useState(0);
    const [itemsParPage, setItemParPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const axiosSecure = useAxiosSecure()


    useEffect(() => {
        axiosSecure.get(`/my-request?page=${currentPage - 1}&size=${itemsParPage}`)
            .then(res => {
                setMyRequests(res.data.request);
                setTotalRequests(res.data.totalRequest)

            })

    }, [axiosSecure, currentPage, itemsParPage])
    const numberOfPages = Math.ceil(totalRequests / itemsParPage)

    const pages = [...Array(numberOfPages).keys()].map(e => e + 1)


    // console.log(myRequests);
    // console.log(totalRequests);
    // console.log(numberOfPages);

    // console.log(pages);
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Hopital Name</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myRequests.map((request, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{request?.Recp_name}</td>
                                    <td>{request?.Hospital_name}</td>
                                    <td>{request?.blood_grp}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-12 gap-4'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map(page =>
                        <button
                            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
                            onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    )
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default MyRequest;