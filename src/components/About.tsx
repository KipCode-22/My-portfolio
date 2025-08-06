import Title from "./Title"
import img from "../assets/image/img3.png"
import { BarChart, Code, User } from "lucide-react"


const aboutSections = [
    {
        id:1,
        icon:<User className="text-orange-500 scale-150"/> ,   
        description: "Etudiante en informatique Fondamantale, avec une formation initiale en mathématiques, statistiques,et informatique. Ce parcours m'a permis de développer une double compétence en raisonnement mathématique et en outils numériques, que je mets aujourd'hui au service de l'analyse de données.",
    },
    {
        id:2,
        icon:<Code className="text-orange-500 scale-150"/> ,
        description: "Je maitrise les bases de la programmation (Python, SQL), de l'analyse statistique(descriptive et inférentielle), de la modélisation mathématique et de la visualisation des données. Je suis animé par l'intérèt que suscite la richesse et la valeur cachée des données, et je prends plaisir à les explorer pour en extraire des insights utiles. ",
    },
    {
        id:3,
        icon:<BarChart className="text-orange-500 scale-150"/> ,
        description: "Mon objectif est de devenir Data Analyst, en combinant rigueur scientifique, curiosité et maitrise technique pour transformer les données en leviers de décision. "
    },
]

const About = () =>{
    return(
        <div className="bg-base-300 pb-10 mb-10 md:mb-64 "  id="About">
            <Title title = "à-propos" />
    
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={img} alt="" className=" w-96 p-5 md:justify-left" 
                     style={{
                        borderRadius : "50% / 40%"
                    }}
                    />
                </div>

                <div className=" md:ml-4 space-y-4 m-8">
                    {aboutSections.map((Section) => (
                        <div key={Section.id }
                             className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-100 shadow-xl "
                        >
                            <div className="mb-2 md:mb-0 ">
                                <p>
                                    {Section.icon}
                                </p>
                            </div>

                            <div  className="md:ml-4 text-center md:text-left">
                                <div  className="text-sm">
                                    {Section.description
                                    }
                                </div>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About