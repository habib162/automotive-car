import { toast } from "react-toastify";

const Contact = () => {

    const messageSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const newContact = {name, email, message};

        fetch('https://b8a10-brandshop-server-side-habib162.vercel.app/contact',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("Message sent successfully")
        })
    }
    return (
        <div>
             <div className="flex items-center justify-center min-h-screen  col-span-4">
                <div className="bg-opacity-40 bg-base-200 bg-blur w-[50%] p-8 rounded-md py-10 shadow-md">
                <h1 className="text-4xl font-semibold text-center mb-6">Contact Us</h1>
                    <form onSubmit={messageSubmit}>
                        <div className="gap-4">
                            <div className="mb-6">
                                <label htmlFor="name" className=" text-sm font-bold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4  appearance-none leading-normal" required
                                />
                            </div>
                            <div className="mb-6 col-span-2">
                                <label htmlFor="email" className=" text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 appearance-none leading-normal" required
                                />
                            </div>
                            <div className="mb-6 col-span-2">
                                <label htmlFor="message" className="block  text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    className="w-full bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md py-2 px-4 block appearance-none leading-normal resize-none" required
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;