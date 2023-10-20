
import { useLoaderData } from "react-router-dom";
import Carlist from "../Cars/Carlist";
import Slider from "../Slider/Slider";
import Support from "../Support/Support";
import BrandDetails from "../Brand/BrandDetails";
import { useEffect, useState } from "react";

const Home = () => {
    const loadedCar = useLoaderData();
    const [brandData, setBrandData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const brandResponse = await fetch('http://localhost:5000/brand');
            const brandJson = await brandResponse.json();
            setBrandData(brandJson);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div>
            <Slider></Slider>
            <div className="max-w-6xl mx-auto">
                <Support></Support>
                
                <div className="py-5">
                    <p className="text-2xl font-bold text-center py-2">All Featured Cars</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            loadedCar.map(car => <Carlist key={car._id} car={car}></Carlist>)
                        }
                    </div>
                </div>
               <div>
               <p className="text-2xl font-bold text-center py-2">All Brand List</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 py-5 items-center">
                            {brandData && brandData.map(brand => <BrandDetails key={brand._id} brand={brand}></BrandDetails>)}
                    
                    </div>
               </div>
                

            </div>
        </div>
    );
}

export default Home;