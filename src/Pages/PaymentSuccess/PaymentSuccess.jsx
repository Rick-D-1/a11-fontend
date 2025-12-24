import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../hooks/useAxios';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosInstance = useAxios();

    useEffect(() => {
        if (!sessionId) return;

        axiosInstance
            .post(`/success-payment?session_id=${sessionId}`)
            .then(res => console.log('Payment verified:', res.data))
            .catch(err => console.error(err));
    }, [sessionId, axiosInstance]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-green-600">
                Payment Successful 🎉
            </h1>
        </div>
    );
};

export default PaymentSuccess;
