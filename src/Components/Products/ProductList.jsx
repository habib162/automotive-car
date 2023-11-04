import { Link, useLoaderData } from "react-router-dom";
import ProductMenu from "./productMenu";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductList = () => {
    const loadedProduct = useLoaderData();
    const [productList, setProductList] = useState(loadedProduct)
    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a10-brandshop-server-side-habib162.vercel.app/product/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your file has been deleted',
                                'success'
                            )
                            const updatedProduct = productList.filter(product => product._id !== id);
                            setProductList(updatedProduct);
                        }
                    })
            }
        })

    }
    return (
        <div className="min-h-screen py-5 grid grid-cols-5 bg-gray-100 gap-9">
            <div className="my-12 ml-6">
                <ProductMenu></ProductMenu>
            </div>
            <div className="overflow-x-auto col-span-4">
                {
                    productList &&
                    (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Brand Name</th>
                                    <th>Product Name</th>
                                    <th>Type</th>
                                    <th>Image</th>
                                    <th>price</th>
                                    <th>rating</th>
                                    <th>description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((product, index) => (
                                    <tr key={index} className="bg-base-200">
                                        <th>{index + 1}</th>
                                        <td>{product.brand_name}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.type}</td>
                                        <td> <img src={product.image} alt="Logo 1" className="w-12 h-12 object-contain" /></td>
                                        <td>{product.price}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <button className="btn bg-[#D2B48C] btn-sm rounded-md"><AiFillEye></AiFillEye></button>
                                            <Link to={`/update-product/${product._id}`}><button className="btn btn-neutral btn-sm rounded-md"><AiFillEdit></AiFillEdit></button></Link>
                                            <button className="btn bg-[#EA4744] btn-sm rounded-md" onClick={() => handleDeleteProduct(product._id)}><AiFillDelete></AiFillDelete></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    );
}

export default ProductList;