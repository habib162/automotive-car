import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandWiseCarList = () => {
    const { id } = useParams();
    const [FiltePproducts, setFiltePproducts] = useState([]);
    useEffect(() => {
        fetch('https://automotive-server-side-ksc9idnd4.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                const productFilter = data.filter(product => product.brand_name === id);
                setFiltePproducts(productFilter);
            }
            )
            .catch(error => console.error(error));


    }, []);


    return (

        <div className="py-5 min-h-screen">
            <p className="text-2xl font-bold text-center py-2"> Brand Wise Cars List</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    FiltePproducts.length > 0 ? FiltePproducts.map((product, index) => (
                    <div className="py-4" key={index}>
                        <div className="card w-80 bg-base-100 shadow-md">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="Product" className="rounded-md" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.productName}</h2>
                                <p>{product.price}$</p>
                                <p>Rating: {product.rating}/5</p>
                                <div className="card-actions">
                                    <Link to={`/carDetails/${product._id}`}>
                                        <button className="btn btn-primary rounded-md bg-red-400 text-white border-none btn-sm hover:bg-red-500">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div className="text-center"> <p className="font-bold text-red-600 text-4xl">Data Not Found</p></div>
                }
            </div>
        </div>
    );
}

export default BrandWiseCarList;
