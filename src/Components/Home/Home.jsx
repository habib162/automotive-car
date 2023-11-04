
import Slider from "../Slider/Slider";
import Support from "../Support/Support";
import CarCard from "../Cars/CarCard";
import BrandCard from "../Brand/BrandCard";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="max-w-6xl mx-auto">
        <Support></Support>
        <CarCard></CarCard>
        <BrandCard></BrandCard>
      </div>
    </div>
  );
}

export default Home;