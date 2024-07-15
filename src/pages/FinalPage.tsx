import { Link } from "react-router-dom";

export default function FinalPage() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center bg-white h-screen w-screen">
            <div>
                <h1 className="text-black text-5xl fade-in-first">Grazie di tutto <b>Riccardo</b>, sei stato un <span className="text-green-500">fenomeno!</span></h1>
                <p className="text-black fade-in-third">Anche se tu non ci vuoi bene, noi ti vogliamo bene</p>
            </div>

            <Link to="/" className="text-sm absolute left-5 top-5 text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-fourth">Torna all'inizio</Link>
        </div>
    )
}