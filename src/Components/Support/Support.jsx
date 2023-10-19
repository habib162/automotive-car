import { BiSupport } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

const Support = () => {
    return (
        <div className="w-full bg-slate-50 my-8">
            <div><p className="py-8 mx-10">Why Us___</p></div>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-y-10 p-8 rounded-lg gap-4">
                <div className="flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100 w-full h-[120px]">
                    <div className="flex gap-x-2">
                        <BiSupport className="w-12 h-12"></BiSupport>
                        <div>
                        <p className="font-semibold">24/7 Customer Support</p>
                        <p>We have dedicated support</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100 w-full h-[120px]">
                    <div className="flex gap-x-2">
                        <GiAutoRepair className="w-12 h-12"></GiAutoRepair>
                        <div>
                        <p className="font-semibold">Unlimited Repair Warranty</p>
                        <p>We have dedicated support</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100 w-full h-[120px]">
                    <div className="flex gap-x-2">
                        <AiFillCar className="w-12 h-12"></AiFillCar>
                        <div>
                        <p className="font-semibold">Largest Dealership of Cars</p>
                        <p>We have dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;