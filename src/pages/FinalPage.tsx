import { Link } from "react-router-dom";

export default function FinalPage() {
    const gifUrl = "https://media.giphy.com/media/W0DimFzOiPQV1uVmaE/giphy.gif";

    return (
        <div className="flex flex-col gap-8 justify-start md:justify-center items-center bg-white h-screen w-screen">
            <div>
                <h1 className="text-black px-2 text-center mt-24 text-2xl md:text-5xl fade-in-first">Grazie di tutto <b>Riccardo</b>, sei stato un <span className="text-green-500">fenomeno! 🤙</span></h1>
                <p className="text-black text-md md:text-xl fade-in-third px-2">Anche se tu non ci vuoi bene, <span className="text-red-500">noi te ne vogliamo</span></p>
            </div>
            <img src={gifUrl} alt="Grazie Riccardo" className="1/2 md:w-1/3 h-auto fade-in-second rounded-lg" />

            <Link to="/" className="text-sm absolute left-5 top-5 text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-fourth">Torna all'inizio</Link>
        </div>
    );
}
