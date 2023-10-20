import { Link } from "react-router-dom";

const BrandDetails = ({ brand }) => {
    const {_id, brandImage, brandName} = brand;

    return (
            <div className=" w-[120px] border rounded-lg p-4" >
                <Link to={`/brandWisecarList/${_id}`}>
                <div className="flex gap-x-2">
                    <img src={brandImage} alt="Shoes" className="rounded-md" />
                    
                </div>
                </Link>
            </div>

    );
}

export default BrandDetails;