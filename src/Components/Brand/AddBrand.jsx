import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AddBrand = () => {
    const brands = useLoaderData();
    const [brandlist,setBrandlist] = useState(brands);
    const handleBrandAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.brandName.value;
        const brandImage = form.brandImage.value;

        const newBrand = { brandName, brandImage }
        console.log(newBrand);

        fetch('http://localhost:5000/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    }
    const handleBrandDelete = (id) => {
        fetch(`http://localhost:5000/brand:${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
               const updatedBrand =  brands.filter(brand => {
                brand._id != id
               })
               console.log(updatedBrand);
               setBrandlist(updatedBrand);
            }
        
        })
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 gap-6">
            <div className="bg-opacity-40 bg-white bg-blur w-96 p-8 rounded-lg">
                <form onSubmit={handleBrandAdd}>
                    <div className="mb-6">
                        <label htmlFor="brandName" className="block text-gray-700 text-sm font-bold mb-2">Brand Name</label>
                        <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            placeholder="Brand Name"
                            className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="brandImage" className="block text-gray-700 text-sm font-bold mb-2">Brand URL</label>
                        <input
                            type="text"
                            id="brandImage"
                            name="brandImage"
                            placeholder="Brand Name"
                            className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                    >
                        Add Brand
                    </button>
                </form>
            </div>
            {
                brandlist &&  <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        brandlist.map(brand => <tr key={brand._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={brand.brandImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{brand.brandName}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => handleBrandDelete(brand._id)}>X</button>
                            </th>
                        </tr>)
                    }
                        
                    </tbody>

                </table>
            </div>
            }
           
        </div>
    );
}

export default AddBrand;