import { useEffect, useState } from "react";
import BrandDetails from "./BrandDetails";

const BrandCard = () => {
    const [loading, setLoading] = useState(true);
    const [brandData, setBrandData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const brandResponse = await fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/brand');
                const brandJson = await brandResponse.json();
                setBrandData(brandJson);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <p className="text-2xl font-bold text-center py-2">All Brand List</p>
            {
                loading && <div className="flex justify-center py-20">
                    <span className="loading loading-spinner text-success"></span>
                </div>
            }
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-5 items-center">
                {brandData && brandData.map(brand => <BrandDetails key={brand._id} brand={brand}></BrandDetails>)}

            </div>
        </div>
    );
}

export default BrandCard;