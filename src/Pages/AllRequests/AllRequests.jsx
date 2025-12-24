import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const AllRequests = () => {
    const axiosInstance = useAxios();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/all-requests')
            .then(res => {
                setRequests(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                All Blood Requests ({requests.length})
            </h2>

            {requests.length === 0 && (
                <p className="text-red-500">No requests found</p>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {requests.map(req => (
                    <div key={req._id} className="border rounded p-4 shadow">
                        <h3 className="font-semibold text-lg mb-2">
                            Blood Group: {req.blood}
                        </h3>

                        <p><b>District:</b> {req.district}</p>
                        <p><b>Upazila:</b> {req.upazila}</p>
                        <p><b>Requester Email:</b> {req.req_email}</p>

                        <p className="text-sm text-gray-500 mt-2">
                            {new Date(req.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRequests;
