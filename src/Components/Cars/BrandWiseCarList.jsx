import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandWiseCarList = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [FiltePproducts, setFiltePproducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching brand id:", error));

        const productFilter = products.filter(product => product.brand_name === id);
        console.log(productFilter);
        setFiltePproducts(productFilter);
    }, []);


    return (

        <div className="py-5">
            <p className="text-2xl font-bold text-center py-2">All Brand Wise Cars</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    FiltePproducts ? FiltePproducts.map((product, index) => (
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
                    )) : <p className="font-bold text-red-600 text-4xl">Not Found</p>
                }
            </div>
        </div>
    );
}

export default BrandWiseCarList;


// const brandWiseCarList = () => {
//     const { brandId } = useParams();
//     console.log(brandId);
//     // const [product,setProduct] = useState([]);

//     // useEffect(() => {
//     //     effect
//     //     return () => {
//     //         cleanup
//     //     }
//     // }, [])
//     return (
//         <div>

//         </div>
//     );
// }

// export default brandWiseCarList;