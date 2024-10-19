import Image from 'next/image';

export default function BannerHome() {
  return (
    <div className="relative w-full h-[70vh] md:h-screen">
      <div className="absolute inset-0">
      <Image 
         src="/images/backgroundLayout.jpg" 
         fill 
         alt="Background Layout" 
        style={{ objectFit: 'cover' }} 
       />
        
      </div>

      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-4 md:text-center">
          {/* <h1 className="text-4xl font-bold md:text-6xl">GOJEK</h1> */}
          <p className="text-2xl md:text-5xl font-bold">
          DOCUMENTING YOUR EVERY MOMENT
          </p>
        </div>
      </div>
    </div>
  );
}