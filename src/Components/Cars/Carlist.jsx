const Carlist = () => (
    <div className="py-4">
        <p className="text-2xl font-bold text-center py-2">All Featured Cars</p>
        <div className="card w-96 bg-base-100 shadow-md">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/w00pPXd/bg-3.jpg" alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary rounded-md ">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
);

export default Carlist;