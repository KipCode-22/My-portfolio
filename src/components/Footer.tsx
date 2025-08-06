import { BookUser, Github, Instagram, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  p-10">
            <aside>

                <BookUser className="w-10 h-10" />
                <p className="font-bold">
                    Kip
                    <span className="text-orange-500">Code</span>
                </p>

                <p>Copyright © {new Date().getFullYear()} - Tous droits reservés </p>

            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                 <a href="https://www.instagram.com/k.i.p_02/#" target="_blank" rel="noopenernoreferrer">
                    <Instagram className="w-6 h-6 text-current"/>
                 </a>

                 <a href="https://www.youtube.com/@KipCode-22" target="_blank" rel="noopenernoreferrer">
                    <Youtube className="w-6 h-6 text-current"/>
                 </a>

                 <a href="https://github.com/KipCode-22" target="_blank" rel="noopenernoreferrer">
                    <Github className="w-6 h-6 text-current"/>
                 </a>
                 
                </div>
            </nav>
        </footer>
    )
}

export default Footer