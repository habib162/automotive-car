
function Slider() {
    return (
        <div>
            <div className="carousel w-full h-[630px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className="hero h-[630px]" style={{ backgroundImage: 'url(https://i.ibb.co/w00pPXd/bg-3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">The Ultimate Driving Machine</h1>
                                <p className="mb-5">Where dreams of parenthood bloom and joy overflows.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between rounded-lg transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero h-[630px]" style={{ backgroundImage: 'url(https://i.ibb.co/FxNyMGK/bg-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">The Power of Dreams</h1>
                                <p className="mb-5">Where joy, laughter, and memories come together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero h-[630px]" style={{ backgroundImage: 'url(https://i.ibb.co/k1PZZpS/bg-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Drive Safe, Arrive Safe</h1>
                                <p className="mb-5">Where two hearts unite in love and commitment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero h-[630px]" style={{ backgroundImage: 'url(https://i.ibb.co/WGr0CdT/cover5.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Your Love Story Unfolds</h1>
                                <p className="mb-5">Where love begins and memories are made.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;