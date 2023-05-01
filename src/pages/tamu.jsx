export async function getServerSideProps({ req }) {
    const hasilReq = await fetch(`http://${req.headers.host}/api/status`)
    const res = await hasilReq.json()
    return {
        props: {
            tamu: res.kehadiran
        },
    }
}

export default function Tamu(props) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto mt-10">
            <p className="text-white font-six font-semibold text-3xl italic">Daftar Tamu</p>
            <div className="table border border-solid border-white border-collapse text-white mt-6 font-six italic text-xl">
                <div className="table-row border border-solid border-white border-collapse">
                    <span className="table-cell border border-solid border-white border-collapse px-10 py-5 font-medium text-center">Nama</span>
                    <span className="table-cell border border-solid border-white border-collapse px-10 py-5 font-medium text-center">Status</span>
                </div>
                {props.tamu.map((t) => {
                    return (
                        <div key={t.id} className="table-row border border-solid border-white border-collapse">
                            <span className="table-cell border border-solid border-white border-collapse font-light py-3 px-6 text-center">
                                {t.name}
                            </span>
                            <span className="table-cell border border-solid border-white border-collapse font-light py-3 px-6 text-center">
                                {t.status}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}