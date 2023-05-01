import Image from "next/image"
import G_Utama from "../../public/DSC07216.webp"
import { BsPauseFill, BsPlayFill, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { GoBrowser } from "react-icons/go"
import lagu from "../../public/lagu.mp3"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faEnvelopeOpenText, faCalendarDays, faImages, faHeartCircleCheck, faBook, faGift } from '@fortawesome/free-solid-svg-icons'
import Atas from "../components/Atas"
import Calon from "../components/Calon"
import Jadwal from "../components/Jadwal"
import { useEffect, useState } from "react"
import Galeri from "../components/Galeri"

export async function getServerSideProps({ req }) {
  const hasilReq = await fetch(`http://${req.headers.host}/api/pesan`)
  const hasil = await hasilReq.json()
  return {
    props: {
      data: hasil.data
    },
  }
}

export default function Home(props) {
  useEffect(() => {
    const pause = document.getElementById('pause');
    const play = document.getElementById('play');
    const song = document.getElementById('song');
    const main = document.getElementById('main');
    const hero = document.getElementById('hero');
    const buka = document.getElementById('buka');
    const tutup = document.getElementById('tutup');
    const navbar = document.getElementById('navbar')
  }, [])

  const [ucapan, setUcapan] = useState({
    nama: '',
    isi_pesan: ''
  })
  const [kehadiran, setKehadiran] = useState({
    name: '',
    status: ''
  })
  const [salin, setSalin] = useState('Salin Rekening')
  const [wordSatu, setWordSatu] = useState('RSVP')
  const [wordDua, setWordDua] = useState('KIRIM UCAPAN')
  const router = useRouter();
  const { to } = router.query;

  function refreshData() {
    router.replace(router.asPath);
    setTimeout(() => {
      setWordDua('KIRIM UCAPAN')
    }, 2000);
  }

  function playPause() {
    if (song.paused === true) {
      pause.classList.remove('hidden')
      play.classList.add('hidden')
      song.play()
    } else {
      pause.classList.add('hidden')
      play.classList.remove('hidden')
      song.pause()
    }
  }

  function nav() {
    if (tutup.classList.contains('hidden')) {
      tutup.classList.remove('hidden')
      buka.classList.add('hidden')
      navbar.classList.add('kanan')
      navbar.classList.remove('hidden')
      navbar.classList.add('flex')
    } else {
      tutup.classList.add('hidden')
      buka.classList.remove('hidden')
      navbar.classList.remove('kanan')
      navbar.classList.remove('flex')
      navbar.classList.add('hidden')
    }
  }

  function open() {
    song.play()
    hero.classList.add('hidden')
    main.classList.remove('hidden')
  }

  async function kirimKehadiran(e) {
    e.preventDefault()
    await fetch('/api/addstatus', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kehadiran)
    })
    setKehadiran({
      name: '',
      status: ''
    })
    setWordSatu('Berhasil')
    setTimeout(() => {
      setWordSatu('RSVP')
    }, 2000);
  }

  async function kirimUcapan(e) {
    e.preventDefault()
    const res = await fetch('/api/addpesan', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ucapan)
    })
    setUcapan({
      nama: '',
      isi_pesan: ''
    })
    setWordDua('Berhasil')
    if (res.status < 300) {
      refreshData();
    }
  }

  return (
    <>
      <div id="hero" className="relative w-full h-screen flex justify-center">
        <Image src={G_Utama} alt="gambar-u" className="posisi w-full h-screen object-cover brightness-[.65] hadir" />
        <div className="py-3 px-6 outline outline-white absolute mt-6 flex justify-center flex-col items-center hadir">
          <p className="text-6xl font-first text-white">Arnis & Robby</p>
          <p className="font-four text-xs font-semibold text-white mt-1">28.05</p>
          <p className="font-three text-sm text-white text-center mt-7">Undangan spesial untuk<br />Bapak/Ibu/Sahabat :</p>
          <p className="font-second text-lg mt-2 text-white uppercase">{to}</p>
          <button onClick={open} className="mt-2 w-16 h-6 font-four text-xs text-center border border-solid border-white bg-transparent text-white font-semibold mb-[10px] hover:rounded-xl transition-all duration-500 ease-in-out"><span className="animate-pulse">BUKA</span></button>
        </div>
      </div>
      <audio loop id="song">
        <source src={lagu} />
      </audio>
      <main id="main" className="hidden">
        <button onClick={playPause} className="bg-pause z-50 fixed bottom-20 rounded-[50%] right-4 h-10 w-10  flex justify-center items-center">
          <BsPauseFill id="pause" className="text-[30px] text-white" />
          <BsPlayFill id="play" className="text-[30px] text-white hidden" />
        </button>
        <button onClick={nav} className="z-50 bg-pause fixed bottom-5 rounded-[50%] right-4 w-10 h-10 flex justify-center items-center">
          <FontAwesomeIcon id="buka" icon={faBars} className="text-[25px] text-white" />
          <FontAwesomeIcon id="tutup" icon={faXmark} className="text-[25px] hidden text-white" />
        </button>
        <nav id="navbar" className="z-50 hidden kiri justify-evenly items-center bg-pause w-4/6 h-10 fixed bottom-5 left-[20%] rounded-[12px]">
          <a href="#atas" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-white" />
          </a>
          <a href="#calon" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faHeartCircleCheck} className="text-white" />
          </a>
          <a href="#jadwal" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faCalendarDays} className="text-white" />
          </a>
          <a href="#galeri" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faImages} className="text-white" />
          </a>
          <a href="#pesan" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faBook} className="text-white" />
          </a>
          <a href="#hadiah" className="flex justify-center items-center w-[32px] h-[32px] tekan rounded-[10px]">
            <FontAwesomeIcon icon={faGift} className="text-white" />
          </a>
        </nav>
        <Atas />
        <Calon />
        <Jadwal />
        <Galeri />
        <div id='pesan' className="flex font-six justify-evenly flex-col md:flex-row items-center mt-28 gap-y-32 md:gap-y-0">
          <form className="card" onSubmit={kirimKehadiran}>
            <a className="singup">{wordSatu}</a>
            <div className="inputBox1">
              <input value={kehadiran.name} type="text" required="required"
                onChange={(event) => {
                  setKehadiran({
                    ...kehadiran,
                    name: event.target.value
                  })
                }} />
              <span className="user">Nama</span>
            </div>
            <div className="flex justify-center items-start flex-col">
              <label className='flex items-center justify-center'>
                <input name="radio" type="radio" className="input" value="Hadir"
                  onClick={(event) => {
                    setKehadiran({
                      ...kehadiran,
                      status: event.target.value
                    })
                  }} />
                <span className='text-white italic'>Iya, Saya Akan Datang</span>
              </label>
              <label className='flex items-center justify-center'>
                <input name="radio" type="radio" className="input" value="Ragu"
                  onClick={(event) => {
                    setKehadiran({
                      ...kehadiran,
                      status: event.target.value
                    })
                  }} />
                <span className='text-white italic'>Saya Masih Ragu</span>
              </label>
              <label className='flex items-center justify-center'>
                <input name="radio" type="radio" className="input" value="Halangan"
                  onClick={(event) => {
                    setKehadiran({
                      ...kehadiran,
                      status: event.target.value
                    })
                  }} />
                <span className='text-white italic'>Maaf, Saya Tidak Bisa Datang</span>
              </label>
            </div>
            <button className="enter" type='submit'>Enter</button>
          </form>
          <form onSubmit={kirimUcapan} className="card">
            <a className="singup">{wordDua}</a>
            <div className="inputBox1">
              <input value={ucapan.nama} type="text" required="required"
                onChange={(event) => {
                  setUcapan({
                    ...ucapan,
                    nama: event.target.value
                  })
                }} />
              <span className="user">Nama</span>
            </div>
            <div className="inputBox">
              <input value={ucapan.isi_pesan} type="text" required="required"
                onChange={(event) => {
                  setUcapan({
                    ...ucapan,
                    isi_pesan: event.target.value
                  })
                }} />
              <span>Ucapan</span>
            </div>
            <button className="enter" type='submit'>Enter</button>
          </form>
        </div>
        <div className="flex font-six justify-evenly flex-col md:flex-row items-center mt-28 gap-y-32 md:gap-y-0">
          <div className="flex flex-col justify-center items-center">
            <p className="font-six text-2xl italic text-white">Ucapan Dan Doa Yang Di Berikan</p>
            <div id="ucapan" className='mt-5 w-[300px] rounded-[8px] overflow-y-auto h-[300px] border-solid border-[2px] border-white'>
              {props.data.reverse().map((pesan) => {
                return (
                  <div key={pesan.id} className="px-2 py-1 mb-4">
                    <p className="font-six font-semibold italic text-white">{pesan.nama}</p>
                    <p className="mt-1 text-white font-six italic font-light">{pesan.isi_pesan}</p>
                    <div className="b-top"></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div id="hadiah" className="flex flex-col justify-center items-center">
            <p className="font-six italic text-2xl text-white">Beri Hadiah Kepada Kedua Mempelai</p>
            <div className="mt-5 w-[300px] flex items-center justify-center flex-col text-center h-[300px] border-[2px] border-solid border-white rounded-[5px]">
              <p className="font-three text-5xl text-white">BCA</p>
              <p className="font-six text-2xl italic text-white mt-4">Arnis Aida Heriyanti</p>
              <p id="myInput" className="font-four mt-1 text-xl text-white">1831357202</p>
              <button className="mt-7 font-six italic text-white px-3 py-2 border border-solid border-white hover:rounded-[24px] transition-all duration-500 ease-in-out" onClick={(event) => {
                navigator.clipboard.writeText('1831357202')
                setSalin('Berhasil')
                setTimeout(() => {
                  setSalin('Salin Rekening')
                }, 800);
              }}>{salin}</button>
            </div>
          </div>
        </div>
      </main >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#4f4f4f" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        <path fill="#323232" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <footer className="bg-[#323232] h-[200px] md:h-[250px] w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-20">
          <a target="_blank" href="https://wa.me/6281214196304">
            <BsWhatsapp className="text-white text-[30px]" />
          </a>
          <a target="_blank" href="https://instagram.com/rhenoresky?igshid=ZDdkNTZiNTM=">
            <BsInstagram className="text-white text-[30px]" />
          </a>
          <a target="_blank" href="https://nizny.my.id/">
            <GoBrowser className="text-white text-[30px]" />
          </a>
        </div>
        <div className="flex justify-center flex-col items-center mt-5 w-[310px] md:w-[450px]">
          <div className="b-top"></div>
          <p className="text-white font-six font-semibold italic mt-5">Copyright & Development By Rheno</p>
        </div>
      </footer>
    </>
  )
}
