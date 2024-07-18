import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function CardPage(){

    return (
        <div className="flex flex-col gap-8 justify-center items-center bg-white h-screen w-screen">
            <div>
                <h1 className="text-black text-4xl font-medium fade-in-first">Riccardo, scegli il tuo gruppo preferito...</h1>
            </div>
            <Card/>
            <Link to="/other" className="text-2xl text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-fourth">O magari altro..</Link>
        </div>
    )
}