import { BookUser } from "lucide-react"
const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#"
                className="flex items-center font-bold text-3xl md:text-xl"
            >
                <BookUser className="mr-2" />
                Kip
                <span className="text-orange-500">Code</span>
            </a>

            <ul

                className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home"
                        className="btn btn-sm  hover:bg-orange-600 "
                    >
                        Acceuil
                    </a>
                </li>

                <li>
                    <a href="#About"
                        className="btn btn-sm  hover:bg-orange-600 "
                    >
                       A propos
                    </a>
                </li>

                <li>
                    <a href="#Experiences"
                        className="btn btn-sm  hover:bg-orange-600 "
                    >
                        Mes expériences
                    </a>
                </li>

                
                <li>
                    <a href="#Projects"
                        className="btn btn-sm  hover:bg-orange-600 "
                    >
                        Mes projets
                    </a>
                </li>


            </ul>
        </div>
    )
}

export default Navbar
