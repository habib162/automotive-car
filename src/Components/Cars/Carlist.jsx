import { Link } from "react-router-dom";

const Carlist = ({car}) => (
    <div className="py-4">
        <div className="card w-80 bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src={car.image} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{car.productName}</h2>
                <p>{car.price}$</p>
                <p>Rating: {car.rating}/5</p>
                <div className="card-actions">
                    <Link to={`/carDetails/${car._id}`}><button className="btn btn-primary rounded-md bg-red-400 text-white border-none btn-sm hover:bg-red-500">Details</button></Link>
                </div>
            </div>
        </div>
    </div>
);

export default Carlist;