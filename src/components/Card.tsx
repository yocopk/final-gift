import { Link } from "react-router-dom"

export default function Card(){
    const group = [
        {
        title: "Tutto il gruppo",
        description: "Ma senza Flavio",
        link: "/flavio"
    },
    {
        title: "Tutto il gruppo",
        description: "Ma senza Valerio",
        link: "/valerio"
    },
    {
        title: "Tutto il gruppo",
        description: "Ma senza Christian",
        link: "/christian"
    },
    {
        title: "Tutto il gruppo",
        description: "Ma senza Sofia",
        link: "/sofia"
    },
    {
        title: "Solo Sofia",
        description: "(Mi ha obbligato)",
        link: "/sofia-plus"
    }

]

    return (
        <div className="flex gap-8 fade-in-second">
            {group.map((item, index) => (
                <Link to={item.link} key={index} className="flex bg-blue-500 text-white p-5 rounded-lg flex-col items-center justify-center gap-2 transition-all hover:text-white hover:scale-110 hover:bg-blue-700">
                    <p className="text-2xl">{item.title}</p>
                    <p className="text-xl text-blue-300">{item.description}</p>
                </Link>
            ))}
        </div> 
    )
}