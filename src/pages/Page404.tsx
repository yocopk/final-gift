import { Link } from "react-router-dom";

export default function Page404() {
    const url = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXN5bzg4d2pmMXZmYjNtYXhnZnQ3bnVmOGVsYWR6MXk4aGd3OXR1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KKOMG9EB7VqBq/giphy.gif";
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen bg-white">
           
            <div className="flex flex-col items-center">
            <h1 className="text-8xl font-bold text-black">404</h1>
            <p className="text-2xl text-black/60">Page not found</p>
            <img src={url} width="480" height="274" className="giphy-embed rounded-lg"></img>
            </div>
            
            <Link to="/" className="text-lg text-white bg-blue-500 py-2 px-4 rounded hover:text-white hover:bg-blue-900">Go back to home</Link>
        </div>
    );
}