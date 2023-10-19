import Login from "../Auth/Login";
import Carlist from "../Cars/Carlist";
import Slider from "../Slider/Slider";
import Support from "../Support/Support";

const Home = () => {
    
    return (
        <div>
            <Slider></Slider>
            <div className="max-w-6xl mx-auto">
            <Support></Support>
            <Login></Login>
            <Carlist></Carlist>
            </div>
        </div>
    );
}

export default Home;