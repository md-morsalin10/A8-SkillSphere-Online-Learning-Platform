import bannerImg from "@/assets/banner2.jpg"
import Image from "next/image";

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col-reverse lg:flex-row  justify-between my-10 lg:my-20'>
            <div className="space-y-6 lg:space-y-8 p-5">
                <p className="badge bg-[#E2DFFF] text-[#0F0069]">PREMIUM LEARNING PLATFORM</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C30]">Upgrade Your Skills <br /> Today 🚀</h2>
                <p className="text-[#464555] font-normal">Learn from Industry Experts with carefully curated
                      designed <br className="hidden lg:block"/> to  accelerate your career growth in
                    the modern economy.</p>

                <div>
                    <button className='btn btn-primary mr-5'>Explore Courses</button>
                    <button className='btn btn-primary btn-outline'>Get Started</button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 p-3 lg:p-1">
                <Image 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                src={bannerImg} 
                width={400} 
                height={400} 
                alt="BannerImage"/>
            </div>
        </div>
    );
};

export default Banner;