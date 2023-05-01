import { useEffect } from "react"

export default function Jadwal() {
    useEffect(() => {
        const countdownDays = document.querySelector('.countdown-days')
        const countdownHours = document.querySelector('.countdown-hours')
        const countdownMinutes = document.querySelector('.countdown-minutes')
        const countdownSeconds = document.querySelector('.countdown-seconds')
        let timeOut = "2023-05-28 08:00:00"
        let getDeadline = Math.floor(new Date(timeOut).getTime() / 1000)
        let now = Math.floor(Date.now() / 1000)
        let seconds = getDeadline - now
        if (seconds > 0) {
            let d = Math.floor(seconds / (3600 * 24));
            let h = Math.floor(seconds % (3600 * 24) / 3600);
            let m = Math.floor(seconds % 3600 / 60);
            let s = Math.floor(seconds % 60);
            let setTimeElement = function () {
                let setSecond = s < 10 ? '0' + s : s;
                let setMinute = m < 10 ? '0' + m : m;
                let setHour = h < 10 ? '0' + h : h;
                let setDay = d < 10 ? '0' + d : d;
                countdownDays.innerHTML = setDay;
                countdownHours.innerHTML = setHour;
                countdownMinutes.innerHTML = setMinute;
                countdownSeconds.innerHTML = setSecond;
            }
            setTimeElement();
            let timer = setInterval(function () {
                s--;
                if (s < 0) {
                    s = 59;
                    m--;
                    if (m < 0) {
                        9
                        m = 59;
                        h--;
                        if (h < 0) {
                            h = 23;
                            d--;
                            if (d < 0) {
                                clearInterval(timer);
                            }
                        }
                    }
                }
                setTimeElement();
            }, 1000);
        } else {
            countdownDays.innerHTML = '00';
            countdownHours.innerHTML = '00';
            countdownMinutes.innerHTML = '00';
            countdownSeconds.innerHTML = '00';
        }
    }, [])
    return (
        <>
            <div id="jadwal" className="mt-32 text-white text-center font-second text-lg md:text-2xl">Menuju Hari Pernikahan</div>
            <div className="countdown mt-10 flex flex-wrap gap-10 justify-center items-center w-[90%] max-w-xl text-white m-auto">
                <div className="countdown-box">
                    <span className="font-semibold uppercase mb-1">Hari</span>
                    <p className="countdown-days font-four">0</p>
                </div>
                <div className="countdown-box">
                    <span className="font-semibold uppercase mb-1">Jam</span>
                    <p className="countdown-hours font-four">0</p>
                </div>
                <div className="countdown-box">
                    <span className="font-semibold uppercase mb-1">Menit</span>
                    <p className="countdown-minutes font-four">0</p>
                </div>
                <div className="countdown-box">
                    <span className="font-semibold uppercase mb-1">Detik</span>
                    <p className="countdown-seconds font-four">0</p>
                </div>
            </div>

            <div className="justify-center items-center flex flex-col md:flex-row mt-28 md:gap-32 gap-16">
                <div className="w-[300px] flex items-center justify-center flex-col text-center h-[300px] border-[2px] border-solid border-white rounded-[5px]">
                    <p className="font-three text-7xl text-white">Akad</p>
                    <p className="font-six text-base font-light italic text-white mt-3">Minggu, 28 Mei 2023<br />Pukul, 09.00 WIB - Selesai</p>
                    <p className="font-six mt-6 text-base font-light italic text-white">Bertempat di Gedung Korpri<br />Jln. Raya Bandung Sadewata<br />Kec. Karangtengah Kab. Cianjur</p>
                </div>
                <div className="w-[300px] flex items-center justify-center flex-col text-center h-[300px] border-[2px] border-solid border-white rounded-[5px]">
                    <p className="font-three text-7xl text-white">Resepsi</p>
                    <p className="font-six text-base font-light italic text-white mt-5">Minggu, 28 Mei 2023<br />Pukul, 10.00 WIB - 15.00 WIB</p>
                    <p className="font-six mt-6 text-base font-light italic text-white">Bertempat di Gedung Korpri<br />Jln. Raya Bandung Sadewata<br />Kec. Karangtengah Kab. Cianjur</p>
                </div>
            </div>

            <div className="justify-center items-center flex flex-col mt-28 md:mt-32">
                <p className="text-white text-center font-second text-2xl md:text-3xl">Lokasi</p>
                <section className="w-[80%] max-w-md border-[2px] border-solid border-white mt-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.681775986828!2d107.1548687!3d-6.8085087999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68531b9962435b%3A0x986824c5a9f4f408!2sKORPRI%20building%20Cianjur!5e0!3m2!1sen!2sid!4v1682434626219!5m2!1sen!2sid" className="brightness-75 w-full h-[300px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </div>
        </>
    )
}