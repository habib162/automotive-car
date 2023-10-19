const AddProduct = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-opacity-40 bg-white bg-blur w-96 p-8 rounded-lg">
            <form>
                <div className="mb-6">
                    <label htmlFor="productName" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="Product Name"
                        className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Brand Name</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Price"
                        className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Price"
                        className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Product Description"
                        className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal resize-none"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Price"
                        className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 block appearance-none leading-normal"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                >
                    Add Product
                </button>
            </form>
        </div>
    </div>
)

export default AddProduct;