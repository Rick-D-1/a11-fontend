import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvieder";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [profile, setProfile] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        axiosSecure.get(`/users/${user.email}`)
            .then(res => setProfile(res.data));
    }, [user, axiosSecure]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        axiosSecure.patch(`/users/${user.email}`, profile)
            .then(() => {
                setEdit(false);
            });
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Profile</h2>
                {!edit && (
                    <button onClick={() => setEdit(true)} className="btn btn-sm">
                        Edit
                    </button>
                )}
            </div>

            {/* FORM */}
            <div className="space-y-4">

                <div>
                    <label className="label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name || ""}
                        onChange={handleChange}
                        disabled={!edit}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Email</label>
                    <input
                        type="email"
                        value={profile.email || ""}
                        disabled
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <div>
                    <label className="label">Blood Group</label>
                    <select
                        name="blood"
                        value={profile.blood || ""}
                        onChange={handleChange}
                        disabled={!edit}
                        className="select select-bordered w-full"
                    >
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

                <div>
                    <label className="label">District</label>
                    <input
                        type="text"
                        name="district"
                        value={profile.district || ""}
                        onChange={handleChange}
                        disabled={!edit}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="label">Upazila</label>
                    <input
                        type="text"
                        name="upazila"
                        value={profile.upazila || ""}
                        onChange={handleChange}
                        disabled={!edit}
                        className="input input-bordered w-full"
                    />
                </div>

                {edit && (
                    <button onClick={handleSave} className="btn btn-success w-full">
                        Save Changes
                    </button>
                )}

            </div>
        </div>
    );
};

export default Profile;
