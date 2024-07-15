import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen bg-white">
            <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-black">404</h1>
            <p className="text-lg text-black/60">Page not found</p>
            </div>
            
            <Link to="/" className="text-lg text-white bg-blue-500 py-2 px-4 rounded hover:text-white hover:bg-blue-900">Go back to home</Link>
        </div>
    );
}