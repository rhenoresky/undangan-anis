import Image from "next/image"
import G_Anis from "../../public/Anis.jpg"
import G_Robi from "../../public/Robi.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { useEffect } from "react"

export default function Calon() {
    useEffect(() => {
        window.addEventListener("scroll", zoom)

        function zoom() {
            let kotak = document.querySelectorAll(".kotak-calon")
            for (let i = 0; i < kotak.length; i++) {
                let tinggilayar = window.innerHeight;
                let jarakatas = kotak[i].getBoundingClientRect().top;
                let ukuranscroll = 150;
                if (jarakatas < tinggilayar - ukuranscroll) {
                    kotak[i].classList.add("zoom-in")
                } else {
                    kotak[i].classList.remove("zoom-in")
                }
            }
        }
    }, []);

    return (
        <div id="calon" className="mt-20">
            <p className="text-center text-white font-six italic font-medium text-sm mx-[8%] md:mx-[20%] md:text-2xl">Assalamu`alaikum Warahmatullaahi Wabarakaatuh, Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami</p>
            <div className="flex items-center flex-col md:flex-row md:justify-evenly md:gap-14 md:w-[80%] md:m-auto mt-20 md:mt-16">
                <div className="kotak-calon flex justify-center items-center flex-col md:mt-10 w-[85%] rounded-[50px] bg-calon2">
                    <div className="flex items-center justify-center mt-10">
                        <div className="w-[200px] h-[200px] object-cover rounded-[50%] overflow-hidden">
                            <Image alt="g-anis" src={G_Anis} />
                        </div>
                    </div>
                    <p className="font-three text-3xl mt-4 text-white">Arnis Aida Heriyanti</p>
                    <p className="text-center mt-2 mb-10 text-white font-four text-sm font-extralight">Putri Dari Bpk. Heri Hermawan<br />Dan Ibu Nia Rusmayati</p>
                </div>
                <div className="mt-16 md:mt-0 z-10">
                    <FontAwesomeIcon icon={faHeart} className="text-white text-[100px] font-extralight" />
                </div>
                <div className="flex kotak-calon justify-center items-center flex-col mt-16 md:mt-10 w-[85%] rounded-[50px] bg-calon2">
                    <div className="flex items-center justify-center mt-10">
                        <div className="w-[200px] h-[200px] object-cover rounded-[50%] overflow-hidden">
                            <Image alt="g-robby" src={G_Robi} />
                        </div>
                    </div>
                    <p className="font-three text-3xl mt-4 text-white">Robby Fauzi Kamal</p>
                    <p className="text-center mt-2 mb-10 text-white font-four text-sm font-extralight">Putra Dari Bpk. H. Kamal (Almh)<br />Dan Ibu Hj. Sariyah (Almh)</p>
                </div>
            </div>
        </div>
    )
}