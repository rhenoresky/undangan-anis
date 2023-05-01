import Image from "next/image"
import foto1 from '../../public/foto1.webp'
import foto2 from '../../public/foto2.webp'
import foto3 from '../../public/foto3.webp'
import foto4 from '../../public/foto4.webp'
import foto5 from '../../public/foto5.webp'
import foto6 from '../../public/foto6.webp'
import foto7 from '../../public/foto7.webp'
import foto8 from '../../public/foto8.webp'
import foto9 from '../../public/foto9.webp'
import foto10 from '../../public/foto10.webp'

export default function Galeri() {
    return (
        <>
            <p className="text-center text-white font-six italic font-medium text-sm mx-[8%] md:mx-[20%] md:text-xl mt-28">Surat Ar-Rum : 21</p>
            <p className="text-center text-white font-six italic font-normal text-sm mx-[8%] md:mx-[20%] md:text-xl">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
            <p id="galeri" className="font-second text-2xl text-white text-center mt-28">Galeri Kenangan</p>
            <div className="columns-2 w-[80%] md:w-[60%] mx-auto mt-6">
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img1" src={foto1} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img2" src={foto2} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img3" src={foto5} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img4" src={foto4} />
                </div>
                <div className="w-full max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img5" src={foto6} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img6" src={foto3} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img7" src={foto8} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img8" src={foto7} />
                </div>
                <div className="w-full mb-3 max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img9" src={foto9} />
                </div>
                <div className="w-full max-w-[400px] overflow-hidden rounded border border-solid border-white">
                    <Image alt="img10" src={foto10} />
                </div>
            </div>
        </>
    )
}