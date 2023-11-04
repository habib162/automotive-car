
import { toast } from "react-toastify";
import ProductMenu from "./productMenu";
import { useEffect, useState } from "react";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const rating = form.rating.value;

        const newProduct = { productName, brand_name, type, price, description, image, rating };
        fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("product inserted successfully")
            })

    }

    const [brandId, setBrandId] = useState([]);

    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/brand')
            .then(res => res.json())
            .then(data => setBrandId(data))
            .catch(error => console.error("Error fetching brand id:", error));
    }, []);
    return (
        <div className="grid grid-cols-5">
            <div className="my-12 ml-6">
                <ProductMenu></ProductMenu>
            </div>
            <div className="flex items-center justify-center min-h-screen  col-span-4">
                <div className="bg-opacity-40 bg-white bg-blur w-[50%] p-8 rounded-md py-10">
                    <form onSubmit={handleAddProduct}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="productName" className="text-gray-700 text-sm font-bold mb-2">Product Name</label>
                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="Product Name"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                                />
                            </div>
                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="brand_name" className="text-gray-700 text-sm font-bold mb-2">Select Brand</label>
                                {/* <input
                                    type="text"
                                    name="brand_name"
                                    placeholder="Brand Name"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                                /> */}
                                <select
                                    name="brand_name"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal"
                                    required
                                >
                                    {brandId.map((brand, index) => (
                                        <option key={index} value={brand._id}>{brand.brandName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="type" className="text-gray-700 text-sm font-bold mb-2">Product Type</label>
                                <input
                                    type="text"
                                    id="type"
                                    name="type"
                                    placeholder="Product Type"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 appearance-none leading-normal" required
                                />
                            </div>

                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="price" className="text-gray-700 text-sm font-bold mb-2">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="Price"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 block appearance-none leading-normal" required
                                />
                            </div>
                            <div className="mb-6 col-span-2">
                                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Short description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Short description"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 block appearance-none leading-normal resize-none" required
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    placeholder="image"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 block appearance-none leading-normal" required
                                />
                            </div>
                            <div className="mb-6 col-span-2 md:col-span-1">
                                <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating (Out of 5)</label>
                                <input
                                    type="text"
                                    id="rating"
                                    name="rating"
                                    placeholder="rating"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 block appearance-none leading-normal"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;