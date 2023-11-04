import { useEffect, useState } from "react"
import Carlist from "./Carlist";

const CarCard = () => {
    const [loading, setLoading] = useState(true);
    const [loadedCar, setLoadedCar] = useState([])
    useEffect(() => {
        fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setLoadedCar(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <div className="py-5">
                <p className="text-2xl font-bold text-center py-2">All Featured Cars</p>
                {
                    loading && <div className="flex justify-center py-20">
                        <span className="loading loading-spinner text-success"></span>
                    </div>
                }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        loadedCar &&  loadedCar.map(car => <Carlist key={car._id} car={car}></Carlist>)
                    }
                </div>
            </div>
        </div>
    );
}

export default CarCard;