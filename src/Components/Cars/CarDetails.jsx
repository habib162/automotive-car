import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CarDetails = () => {
    const product = useLoaderData();
    const { _id, productName, type, image, price, description } = product;
    const handleMyCart = (id) => {
        const newData = { productId: id, productName, price };
        console.log(newData);
        fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/my-cart', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Add to cart successfully")
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="ml-3">
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="py-3">{description}</p>
                        <p className="text-3xl mb-3">Category: {type}</p>
                        <p className="text-3xl mb-3 font-semibold">Price: {price}$</p>
                        <button className="btn btn-primary rounded-md bg-red-400 text-white border-none btn-sm hover:bg-red-500" onClick={() => handleMyCart(_id)}>Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;