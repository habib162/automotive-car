import { Link, useLoaderData } from "react-router-dom";
import ProductMenu from "./productMenu";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductList = () => {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
    return (
        <div className="min-h-screen py-5 grid grid-cols-5 bg-gray-100 gap-9">
            <div className="my-12 ml-6">
                <ProductMenu></ProductMenu>
            </div>
            <div className="overflow-x-auto col-span-4">
               {
                loadedProduct &&
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
                            {loadedProduct.map((product, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{product.brand_name}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.type}</td>
                                    <td> <img src={product.image} alt="Logo 1" class="w-12 h-12 object-contain" /></td>
                                    <td>{product.price}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button className="btn bg-[#D2B48C] btn-sm rounded-md"><AiFillEye></AiFillEye></button>
                                        <Link to={`/update-product/${product._id}`}><button className="btn btn-neutral btn-sm rounded-md"><AiFillEdit></AiFillEdit></button></Link>
                                        <button className="btn bg-[#EA4744] btn-sm rounded-md" onClick={() => handleDeleteCoffee(product._id)}><AiFillDelete></AiFillDelete></button>
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