import { Link } from "react-router-dom";

const BrandDetails = ({ brand }) => {
    const {_id, brandImage, brandName} = brand;

    return (
            <div className=" w-[120px] h-[150px] border rounded-lg p-4" >
                <Link to={`/brandWisecarList/${_id}`}>
                <div className="gap-x-2">
                    <img src={brandImage} alt={brandName} className="rounded-md" />
                    <p className="text-center text-sm pt-2">{brandName}</p>
                </div>
                </Link>
            </div>

    );
}

export default BrandDetails;