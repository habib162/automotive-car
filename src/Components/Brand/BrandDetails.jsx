import { useLoaderData } from "react-router-dom";

const BrandDetails = ({ brand }) => {
    console.log(brand);
    return (
        <div class="flex items-center justify-center space-x-6 overflow-x-auto">
            <img src={brand.brandImage} alt="Logo 1" class="w-12 h-12 object-contain" />
        </div>

    );
}

export default BrandDetails;