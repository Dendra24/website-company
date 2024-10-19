import Link from "next/link"
import Image from "next/image"


export default function Services() {
    return(
        <div className="mx-auto p-4">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               
                <div className="bg-[#000000] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#04020a] rounded-[10%] mt-4">
                        <img
                        src="/images/paket-icon.webp" width={90} height={'100%'} className='w-[80px] md:w-[150px]'
                        alt= "background"
                        />
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">FOR COUPLES</h3>
                    <p className='text-white text-center mt-2'>
                        FOR PHOTOGRAPHERS FOR COUPLES MENTORING & COURSES PRICING & FAQ'S GUIDES, PRESETS, WORKSHOPS AND MORE WHAT I OFFER Did you know, I have a huge passion for educating photographers? I'm sharing everything I know to grow your photography business.  <br/>You're my number one priority, and I'm here to serve you throughout the entire process, starting right now.
                    </p>
                        <button className="border-1 bg-[#28218b] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Pilih paket</button>
                 </div>
                <div className="bg-[#000000] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#04020a] rounded-[10%] mt-4">
                        <img
                        src="/images/paket-icon.webp" width={90} height={'100%'} className='w-[80px] md:w-[150px]'
                        alt= "background"
                        />
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">WEDDING OUTDOOR</h3>
                    <p className='text-white text-center mt-2'>
                       PRICE DEPENDS ON EACH PHOTO SPOT
                       <button className="border-1 bg-[#28218b] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Pilih paket</button>
                    </p>
                </div>
                <div className="bg-[#000000] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                <div className="py-4 px-8 bg-[#04020a] rounded-[10%] mt-4">
                        <img
                        src="/images/paket-icon.webp" width={90} height={'100%'} className='w-[80px] md:w-[150px]'
                        alt= "background"
                        />
                    </div>
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">PHOTO STUDIO</h3>
                    <p className='text-white text-center mt-2'>
                    FOR FREE COSTUMES TO CHOOSE AND GET A PACKAGE OF 20 EDITED PHOTOS
                    </p>
                    <button className="border-1 bg-[#28218b] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Pilih paket</button>
                </div>
                <div  className="bg-[#000000] py-[1em] px-[1em] rounded-[10%] md:mt-[5em] md:mb-[5em]">
                    <div className="py-4 px-8 bg-[#04020a] rounded-[10%] mt-4">
                       <img 
                       src="/images/paket-background.jpeg"
                       />
                    </div> 
                    <h3 className="text-white text-center mt-4 px-2 text-2xl font-bold">GALERY</h3>
                    <p className='text-white text-center mt-2'>
                    SEE ALL GALLRY OF US
                    </p>
                    <button className=" flex-auto border-1 bg-[#28218b] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Preview Gallery</button>
                </div>
                {/*  */}
            </div>
            
        </div>
    )
}