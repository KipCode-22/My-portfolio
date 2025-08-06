import Title from "./Title"

import imgPYTHON from "../assets/techno/pngegg.png"
import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/js.png"
import imgREACT from "../assets/techno/react.png"
import imgTAILWIND from "../assets/techno/tailwind.png"


const skills = [
    { id: 8, name: "Python", image: imgPYTHON},
    { id: 1, name: "HTML", image: imgHTML},
    { id: 2, name: "CSS", image: imgCSS},
    { id: 3, name: "JavaScript", image: imgJS},
    { id: 4, name: "React", image: imgREACT},
    { id: 5, name: "Tailwind CSS", image: imgTAILWIND},
      
       
]

const experiences = [
    { id: 1, 
      role:"Secrétaire Générale du club STEAM",
      compagny: "Faculté des Sciences de l'université de Bertoua", 
      period:"novembre 2024 - à nos jours", 
      description:[ "Coordinations des activités",
                    "Plannification des réunions et rédaction des rapoorts",
                    "Organisation des ateliers technologiques et scientifiques",
        
      ],
      
    },

     { id: 2, 
      role:"Stagaire Data & Developpement",
      compagny: "Business Hill", 
      period:"juillet 2025 - En cours", 
      description:[ "Analyse de données ", 
            "Developpement web(React, Laravel)",
            "Projets en Data Science et environnement agile",

      ],

    }
]

const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title ="expériences"/>

           <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            
                <div className="flex flex-wrap gap-4 justify-center items-center mt-4 md:mt-0 md:w-1/3">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-orange-400">
                                <img src={skill.image} alt={skill.name}
                                className="object-cover rounded-full h_full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4 ">
                    {experiences.map((experience) =>(
                        <div key={experience.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">

                                {/* <img src={experience.image} 
                                alt={experience.compagny}
                                className="object-cover h-15 w-10"
                                /> */}
                                <div className="ml-4">
                                    <h1 className="text-xl text-orange-400 font-bold">
                                        {experience.role}, {experience.compagny}
                                    </h1>
                                    <span>{experience.period}</span>
                                </div>

                            </div>

                            <br />

                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <div>
                                        <li key={index}> {desc} </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
           </div>
            
        </div>
    )
}

export default Experiences