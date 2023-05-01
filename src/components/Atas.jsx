import G_dua from '../../public/DSC07379.webp'
import Image from 'next/image'

export default function Atas() {
    return (
        <div id='atas' className='w-full h-screen relative flex justify-center'>
            <Image alt='g-2' src={G_dua} className='w-full h-screen object-cover brightness-75' />
            <div className="py-3 px-6 absolute mt-6 flex justify-center flex-col items-center hadir">
                <p className='font-second text-atas2 text-2xl text-white'>Undangan Pernikahan</p>
                <p className="text-8xl text-atas font-first text-white">Arnis & Robby</p>
            </div>
        </div>
    )
}