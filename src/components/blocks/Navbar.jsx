import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            <nav className="bg-gray-800">
                <div className="container mx-auto px-6 py-3">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-between items-center">
                            <div className="text-xl text-white">
                                <Link to="/">Brand</Link>
                            </div>
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <div className="flex items-center">
                                <Link to="#" className="text-gray-300 hover:text-gray-400">Home</Link>
                            </div>
                            <div className="flex items-center">
                                <Link to="/About" className="text-gray-300 hover:text-gray-400">About</Link>
                            </div>
                            <div className="flex items-center">
                                <Link to="#" className="text-gray-300 hover:text-gray-400">Services</Link>
                            </div>
                            <div className="flex items-center">
                                <Link to="#" className="text-gray-300 hover:text-gray-400">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}