// import AboustUs from "@/contentful/richText/richText";
import BannerHome from "@/views/pages/home/benner";
import Services from "@/views/pages/home/services.";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <BannerHome />
     <h1 className="text-2xl md:text-5xl font-bold text-center p-4 m-[2em]">
        AUTHENTIC<br />Stories In Live
      </h1>
        <div className="text-center">
            <Link href="/services">
                <button className="border-1 bg-[#24194d] font-bold text-white py-2 px-5 rounded-3xl mb-[4em] md:mb-[1em]">Lihat Paket</button>
            </Link>
            <Services />
        </div>
       
    </>

  )
}
