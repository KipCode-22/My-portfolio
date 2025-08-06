import { Mail } from "lucide-react"
import img from '../assets/image/img.png'
const Home = () =>{
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" >

            <div className="flex flex-col"> 
                <h1 className="text-3xl md:text-6xl font-blod text-center md:text-left ">
                    <i>Salut  , <br /> Je suis </i> {" "}
                    <span className="text-orange-500"> Kouna Ines Patricia</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                   Étudiante en Informatique Fondamentale ,
                   <br />
                    avec une passion pour l'analyse de données et la programmation .
                    <br />
                    Ici, je partage mes projets, mes expériences et mon évolution
                    <br />
                    vers le métier de <b>Data Analyst </b> . Bonne visite !
                </p>

                <a href="https://inespatricia648@gmail.com" className="btn bg-orange-500 text-black border-none hover:bg-orange-600  md:w-fit " >
                   <Mail className="w-5 h-5"/>
                   Contactez-moi
                </a>
            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-80 h-60 object-cover shadow-xl my-6 rounded-3xl" 
                   
                />
            </div>
        </div>
    )
}

export default Home