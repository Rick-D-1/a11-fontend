import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvieder';
import axios from 'axios';
// import useAxios from '../../../hooks/useAxios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Addrequest = () => {

    const { user } = useContext(AuthContext)

    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState('')
    const [upazila, setUpazila] = useState('')
    // const axiosInstance = useAxios();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)

            })
        axios.get('/district.json')
            .then(res => {
                setDistricts(res.data.districts)
            })
    }, [])


    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target
        const req_name = form.req_name.value;
        const req_email = form.req_email.value;
        const Recp_name = form.Recp_name.value;
        const blood_grp = form.blood_grp.value;
        const Recp_Dist = district;
        const recp_Upz = upazila;
        const Hospital_name = form.Hospital_name.value;
        const Full_add = form.Full_add.value;
        const donation_date = form.donation_date.value;
        const donation_time = form.donation_time.value;
        const req_sms = form.req_sms.value;


        const formData = {
            req_name,
            req_email,
            Recp_name,
            blood_grp,
            Recp_Dist,
            recp_Upz,
            Hospital_name,
            Full_add,
            donation_date,
            donation_time,
            req_sms,
            donation_status: 'pending'
        }

        axiosSecure.post('/requests', formData)
            .then(res => {
                alert(res.data.insertedId)
            })
            .catch(
                err => console.log(err)
            )
    }



    return (
        <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <form onSubmit={handleRequest} class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 space-y-6">

                <h2 class="text-2xl font-semibold text-red-600 text-center">
                    Blood Donation Request
                </h2>

                {/* <!-- Requester Info --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Requester Name</label>
                        <input
                            name='req_name'
                            type="text"
                            value={user?.displayName}
                            readonly
                            class="w-full bg-gray-100 border rounded-lg px-3 py-2 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-1">Requester Email</label>
                        <input
                            name='req_email'
                            type="email"
                            value={user?.email}
                            readonly
                            class="w-full bg-gray-100 border rounded-lg px-3 py-2 cursor-not-allowed"
                        />
                    </div>
                </div>

                {/* <!-- Recipient Info --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Recipient Name</label>
                        <input
                            name='Recp_name'
                            type="text"
                            placeholder="Recipient full name"
                            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-1">Blood Group</label>
                        <select class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" name='blood_grp'>
                            <option value="">Select blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                </div>

                {/* <!-- Location --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Recipient District</label>
                        <select value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" name='Recp_Dist'>
                            <option disabled selected value=''>Select Your District</option>
                            {
                                districts.map(d =>
                                    <option value={d?.name} key={d.id}>{d?.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-1">Recipient Upazila</label>
                        <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" name='recp_Upz'>
                            <option disabled selected value=''>Select Your Upazila</option>
                            {
                                upazilas.map(u =>
                                    <option value={u?.name} key={u.id}>{u?.name}</option>)
                            }
                        </select>
                    </div>
                </div>

                {/* <!-- Hospital & Address --> */}
                <div>
                    <label class="block text-sm font-medium mb-1">Hospital Name</label>
                    <input
                        name='Hospital_name'
                        type="text"
                        placeholder="e.g. Dhaka Medical College Hospital"
                        class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Full Address Line</label>
                    <input
                        name='Full_add'
                        type="text"
                        placeholder="e.g. Zahir Raihan Rd, Dhaka"
                        class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* <!-- Date & Time --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Donation Date</label>
                        <input
                            name='donation_date'
                            type="date"
                            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-1">Donation Time</label>
                        <input
                            name='donation_time'
                            type="time"
                            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                        />
                    </div>
                </div>


                <div>
                    <label class="block text-sm font-medium mb-1">Request Message</label>
                    <textarea
                        name='req_sms'
                        rows="4"
                        placeholder="Explain why blood is needed..."
                        class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                    ></textarea>
                </div>


                <button
                    type="submit"
                    class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                    Submit Donation Request
                </button>

            </form>
        </div>

    );
};

export default Addrequest;