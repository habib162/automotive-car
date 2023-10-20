import { useLoaderData } from "react-router-dom";
import {  AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2";
const MyCart = () => {
    const carts = useLoaderData();
    const [cartList, setCartList] = useState(carts);

    console.log(carts);

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
                fetch(`http://localhost:5000/my-cart/${id}`, {
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
                            const updatedProduct = carts.filter(cart => cart._id !== id);
                            setCartList(updatedProduct);
                        }
                    })
            }
        })

    }
    return (
        <div className="min-h-screen">
            <div className="overflow-x-auto col-span-4">
                {
                    cartList &&
                    (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map((cart, index) => (
                                       
                                        <tr key={index} className="bg-base-200">
                                            <th>{index + 1}</th>
                                            <td>{cart.productName}</td>
                                            <td>{cart.price}</td>
                                            <td>
                                            <button className="btn bg-[#EA4744] btn-sm rounded-md" onClick={() => handleDeleteProduct(cart._id)}><AiFillDelete></AiFillDelete></button>
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

export default MyCart;