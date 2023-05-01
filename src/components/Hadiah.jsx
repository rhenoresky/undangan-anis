// import { useState, useEffect } from "react"

// export default function Hadiah() {
//     const [data, setData] = useState([])
//     const [isLoading, setLoading] = useState(false)
//     const [salin, setSalin] = useState('Salin Rekening')

//     // useEffect(async () => {
//     //     await fetch(`${window.location.origin}/api/pesan`, { method: "GET" }).then((res) => res.json()).then((data) => {
//     //         setData(data)
//     //         setLoading(false)
//     //     })
//     // }, [])

//     // if (isLoading) {
//     //     return (
//     //         <div className='justify-center flex items-center flex-col mt-28'>
//     //             <p className='text-white font-six italic text-2xl'>Loading...</p>
//     //         </div>
//     //     )
//     // } else if (data.length === 0) {
//     //     return (
//     //         <div className='justify-center flex items-center flex-col mt-28'>
//     //             <p className='text-white font-six italic text-2xl'>No Profile Data</p>
//     //         </div>
//     //     )
//     // } else {
//     return (
//         <div className="flex font-six justify-evenly flex-col md:flex-row items-center mt-28 gap-y-32 md:gap-y-0">
//             <div className="flex flex-col justify-center items-center">
//                 <p className="font-six text-2xl italic text-white">Ucapan Dan Doa Yang Di Berikan</p>
//                 <ul className='mt-5 w-[300px] rounded-[8px] overflow-y-auto h-[300px] border-solid border-[2px] border-white'>
//                     {/* {data.map((pesan) => {
//                             return (
//                                 <li key={pesan.id} className="px-2 py-1 mb-4">
//                                     <p className="font-six font-semibold italic text-white">{pesan.nama}</p>
//                                     <p className="mt-1 text-white font-six italic font-light">{pesan.isi_pesan}</p>
//                                     <div className="b-top"></div>
//                                 </li>
//                             )
//                         })} */}
//                 </ul>
//             </div>
//             <div id="hadiah" className="flex flex-col justify-center items-center">
//                 <p className="font-six italic text-2xl text-white">Beri Hadiah Kepada Kedua Mempelai</p>
//                 <div className="mt-5 w-[300px] flex items-center justify-center flex-col text-center h-[300px] border-[2px] border-solid border-white rounded-[5px]">
//                     <p className="font-three text-5xl text-white">BCA</p>
//                     <p className="font-six text-2xl italic text-white mt-4">Arnis Aida Heriyanti</p>
//                     <p id="myInput" className="font-four mt-1 text-xl text-white">1831357202</p>
//                     <button className="mt-7 font-six italic text-white px-3 py-2 border border-solid border-white hover:rounded-[24px] transition-all duration-500 ease-in-out" onClick={(event) => {
//                         navigator.clipboard.writeText('1831357202')
//                         setSalin('Berhasil')
//                         setTimeout(() => {
//                             setSalin('Salin Rekening')
//                         }, 800);
//                     }}>{salin}</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// // }