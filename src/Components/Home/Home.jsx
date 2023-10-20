
import { useLoaderData } from "react-router-dom";
import BrandDetails from "../Brand/BrandDetails";
import Carlist from "../Cars/Carlist";
import Slider from "../Slider/Slider";
import Support from "../Support/Support";

const Home = () => {
    const loadedBrand = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <div className="max-w-6xl mx-auto">
            <Support></Support>
         
           
            <Carlist></Carlist>
            {
                loadedBrand.map(brand => <BrandDetails key={brand._id} brand={brand}></BrandDetails>)
            }
            </div>
        </div>
    );
}

export default Home;