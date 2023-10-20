import { Link } from "react-router-dom";

const ProductMenu = () => {
    return (

        <div className='shadow-md h-fit w-full rounded-[10px]' >
            <ul className=''>
                {/* <li><Link to='/dashboard'><button className='w-full p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium text-left'>About Me</button></Link></li> */}
                    <ul>
                        <li><Link to='/add-products'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>Add a Product</button></Link></li>

                        <li><Link to='/product-list'><button className='w-full text-left p-3 text-black/80 cursor-pointer hover:bg-slate-200 rounded-[10px] pl-5 font-medium'>My products</button></Link> </li>
                    </ul>
            
            </ul>
        </div>
    );
}

export default ProductMenu;