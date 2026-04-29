import bannerImg from "@/assets/banner2.jpg"
import Image from "next/image";

const Banner = () => {
    return (
        <div className='container mx-auto flex justify-between my-20'>
            <div className="space-y-8">
                <p className="badge bg-[#E2DFFF] text-[#0F0069]">PREMIUM LEARNING PLATFORM</p>
                <h2 className="text-5xl font-bold text-[#0B1C30]">Upgrade Your Skills <br /> Today 🚀</h2>
                <p className="text-[#464555] font-normal">Learn from Industry Experts with carefully curated
                      designed <br /> to  accelerate your career growth in
                    the modern economy.</p>

                <div>
                    <button className='btn btn-primary mr-5'>Explore Courses</button>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
            <div>
                <Image 
                className="w-full"
                src={bannerImg} 
                width={400} 
                height={400} 
                alt="BannerImage"/>
            </div>
        </div>
    );
};

export default Banner;