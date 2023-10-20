import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    const product = useLoaderData();
    const {_id, productName,brand_name,image,price,description} = product;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{productName}</h1>
                        <p className="py-3">{description}</p>
                        <p>{brand_name}</p>
                        <p>{price}</p>
                        <button className="btn btn-primary">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;