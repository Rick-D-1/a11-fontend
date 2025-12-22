import axios from "axios";
import React, { useContext, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../../../Provider/AuthProvieder";

const Addproduct = () => {
    const [showOnHome, setShowOnHome] = useState(false);
    const [paymentOptions, setPaymentOptions] = useState([]);
    const { user } = useContext(AuthContext)
    const axiosInstance = useAxios()

    const handlePaymentChange = (option) => {
        setPaymentOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;



        const productName = form.name.value
        const description = form.description.value
        const category = form.category.value
        const priceBDT = form.price.value
        const availableQuantity = form.availableQty.value
        const minimumOrderQuantity = form.minOrderQty.value
        const image = form.image
        paymentOptions
        showOnHome

        const file = image.files[0]


        const res = await axios.post(`https://api.imgbb.com/1/upload?key=e75b91fb05719ebc8691348952e2074a`, { image: file }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const mainPhotoUrl = res.data.data.display_url

        const productData = {
            productName,
            description,
            category,
            priceBDT: parseInt(priceBDT),
            availableQuantity: parseInt(availableQuantity),
            minimumOrderQuantity: parseInt(minimumOrderQuantity),
            image: mainPhotoUrl,
            paymentOptions,
            showOnHome,
            managerEmail: user?.email


        }




        console.log(productData);
        axiosInstance.post('/products', productData)
            .then(res => {
                console.log(res.data);
                alert(res.data.insertedId)

            })
            .catch(err => {
                console.log(err)

            }
            )
        alert("Product Added Successfully!");

        form.reset();
        setPaymentOptions([]);
        setShowOnHome(false);
    };

    return (
        <div className="flex justify-center mt-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xl border p-6">
                <legend className="fieldset-legend text-lg font-semibold">
                    Add New Product
                </legend>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Name */}
                    <label className="label">Product Name</label>
                    <input
                        name="name"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter product name"
                        required
                    />

                    {/* Product Description */}
                    <label className="label">Product Description</label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Product description"
                        required
                    />

                    {/* Category */}
                    <label className="label">Category</label>
                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="shirt">Shirt</option>
                        <option value="pant">Pant</option>
                        <option value="tshirt">T-Shirt</option>
                    </select>

                    {/* Price */}
                    <label className="label">Price (BDT)</label>
                    <input
                        name="price"
                        type="number"
                        className="input input-bordered w-full"
                        placeholder="Price in BDT"
                        required
                    />

                    {/* Quantities */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="label">Available Quantity</label>
                            <input
                                name="availableQty"
                                type="number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Minimum Order Quantity</label>
                            <input
                                name="minOrderQty"
                                type="number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <label className="label">Product Image</label>
                    <input
                        name="image"
                        type="file"
                        className="file-input file-input-bordered w-full"
                        accept="image/*"
                        required
                    />

                    {/* Payment Options */}
                    <label className="label">Payment Options</label>
                    <div className="flex gap-4">
                        {["Cash On Delivery", "Bkash", "Nagad"].map((option) => (
                            <label key={option} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={() => handlePaymentChange(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    {/* Show on Home */}
                    <label className="flex items-center gap-3 mt-2">
                        <input
                            type="checkbox"
                            className="toggle toggle-primary"
                            checked={showOnHome}
                            onChange={() => setShowOnHome(!showOnHome)}
                        />
                        Show on Home Page
                    </label>

                    {/* Submit Button */}
                    <button className="btn btn-neutral w-full mt-4">
                        Add Product
                    </button>
                </form>
            </fieldset>
        </div>
    );
};

export default Addproduct;
