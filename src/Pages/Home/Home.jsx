import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <section className="bg-red-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Donate Blood, Save Lives ❤️
                        </h1>
                        <p className="text-lg mb-6">
                            Your blood donation can save up to three lives.
                            Join our community of lifesavers today.
                        </p>
                        <div className="flex gap-4">
                            <Link to='dashboard/add-request' className="btn bg-white text-red-600">
                                Become a Donor
                            </Link>
                            <Link to="/search" className="btn btn-outline text-white">
                                Find Blood
                            </Link>
                        </div>
                    </div>

                    <img
                        src="https://i.ibb.co/wYJvJ9Y/blood-donation.png"
                        alt="Blood Donation"
                        className="rounded-lg"
                    />
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-3xl font-bold text-red-600">1200+</h2>
                        <p className="mt-2">Donors</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-3xl font-bold text-red-600">850+</h2>
                        <p className="mt-2">Requests Completed</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-3xl font-bold text-red-600">24/7</h2>
                        <p className="mt-2">Emergency Support</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-3xl font-bold text-red-600">All</h2>
                        <p className="mt-2">Blood Groups</p>
                    </div>
                </div>
            </section>

            {/* WHY DONATE */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Why Donate Blood?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                        Blood donation is a simple, safe way to make a big difference.
                        Every drop counts and every donor is a hero.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                            <p className="text-gray-600">
                                One donation can save up to three lives.
                            </p>
                        </div>
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-semibold mb-2">Quick & Safe</h3>
                            <p className="text-gray-600">
                                Donation takes less than 15 minutes.
                            </p>
                        </div>
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                            <p className="text-gray-600">
                                Help patients in emergencies and surgeries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="font-semibold mb-2">1. Register</h3>
                            <p className="text-sm text-gray-600">
                                Create your donor account
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="font-semibold mb-2">2. Search</h3>
                            <p className="text-sm text-gray-600">
                                Find blood requests near you
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="font-semibold mb-2">3. Donate</h3>
                            <p className="text-sm text-gray-600">
                                Contact and donate safely
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="font-semibold mb-2">4. Save Lives</h3>
                            <p className="text-sm text-gray-600">
                                Become a real-life hero
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-red-600 text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Save a Life?
                </h2>
                <p className="mb-6">
                    Join thousands of donors and help people in need.
                </p>
                <Link to="/register" className="btn bg-white text-red-600">
                    Join as Donor
                </Link>
            </section>

        </div>
    );
};

export default Home;
