import './index.css'
const Fonders = () => {
    return (
        <>
            <div className="mt-10 w-full bg-white flex flex-col items-center justify-center">
                <div data-aos="fade-up" data-aos-duration="800" className=" fonunder1 w-full md:w-[90%] h-full flex items-center justify-center flex-col">
                    <div className=" h-fit flex justify-center items-center gap-[5vw] py-5 px-5 w-[90%] rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                        <div><h1 className=" text-zinc-800 text-2xl mb-5">01. For Founders</h1>
                            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[5vw]">
                                <div className="h-[30vh] w-full md:w-[20vw] bg-zinc-800 rounded-lg overflow-hidden ">
                                    <img src="/src/assets/images/founder/Rectangle 72.png" alt="An image" className=" h-full w-full object-cover object-center " />
                                </div>
                                <div className="h-[30vh] w-full md:w-[20vw] bg-zinc-800 rounded-lg overflow-hidden ">
                                    <img src="/src/assets/images/founder/Rectangle 73.png" alt="An image" className=" h-full w-full object-cover object-center " />
                                </div>
                                <div className="h-[30vh] w-full md:w-[20vw] bg-zinc-800 rounded-lg overflow-hidden ">
                                    <img src="/src/assets/images/founder/Rectangle 73.png" alt="An image" className=" h-full w-full object-cover object-center " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className="mt-10 fonunder2 w-full md:w-[90%] h-full flex items-center justify-center flex-col">
                    <div className=" h-fit flex justify-center items-center gap-[5vw] py-5 px-5 w-[90%] rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                        <div><h1 className=" text-zinc-800 text-2xl mb-5">02. For Enterprises</h1>
                            <div className="  flex w-full flex-col md:flex-row items-center justify-center gap-[5vw]">
                                <div className=" h-[30vh] w-full md:w-[20vw] bg-zinc-800 rounded-lg overflow-hidden ">
                                    <img src="/src/assets/images/founder/Rectangle 72.png" alt="An image" className=" h-full w-full object-cover object-center " />
                                </div>
                                <div className=" h-[30vh] w-full md:w-[20vw] bg-zinc-800 rounded-lg overflow-hidden ">
                                    <img src="/src/assets/images/founder/Rectangle 73.png" alt="An image" className=" h-full w-full object-cover object-center " />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h2 className=" text-2xl p-5 mt-10 text-center font-semibold tracking-wider" data-aos="fade-up" data-aos-duration="800">We are disrupting technology as a service, and this is <span className=" text-sky-600">how</span></h2>
            </div>
            <div className=" h-fit w-full md:w-[90%] flex flex-col md:flex-row items-center p-5 justify-center">
                <div data-aos="fade-up-right" data-aos-duration="800" className=" card h-[40vh] py-10 px-5 w-[95%] md:w-[18vw]  rounded-3xl ">
                    <h1 className=" text-xl font-semibold text-white">Modern Tech at the Core</h1>
                    <p className=" text-lg font-thin  text-white">We use the latest tech stacks, microservices architecture, open-source languages, and popular frameworks to build best-in-class products.</p>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="800" className="h-fit md:h-[40vh] py-4 md:py-10 px-5 w-[95%] md:w-[15vw] bg-white rounded-3xl ">
                    <img src="/src/assets/images/founder/Vector-3.png" alt="An image" className=" " />
                    <h2 className=" text-lg font-semibold ">Superfast Pace of Execution</h2>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="800" className="h-fit md:h-[40vh] py-4 md:py-10 px-5 w-[95%] md:w-[15vw] bg-white rounded-3xl ">
                    <img src="/src/assets/images/founder/Vector2.png" alt="An image" className=" " />
                    <h2 className=" text-lg font-semibold ">AI Expertise</h2>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="800" className="h-fit md:h-[40vh] py-4 md:py-10 px-5 w-[95%] md:w-[15vw] bg-white rounded-3xl ">
                    <img src="/src/assets/images/founder/Vector3.png" alt="An image" className=" " />
                    <h2 className=" text-lg font-semibold ">Intuitive UX</h2>
                </div>
            </div>

        </>
    )
}

export default Fonders
