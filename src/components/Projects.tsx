import Title from "./Title"

import imgASA from "../assets/projects/asapppd.png";
import { Github, Video } from "lucide-react";


const projects =[
    {
        id:1,
        title: "ASAPPPD",
        description: "Aplication de suivi alimentaire, prédiction de la prise de poids et du diabète",
        technologies: [ "HTML", "CSS", "JavaScript","Python", "Django"],
        demoLink: '#',
        repoLink: '#',
        image: imgASA,

    },

]

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title=" mes projets" />
            <div className="grid md:grid-cols-1 graps-4"> 

                { projects.map((project) =>(

                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full rounded-xl h-50 object-cover"
                        />

                        <div>
                            <h1 className="my-2 font-bold text-orange-500">
                                {project.title}
                            </h1>
                            <p className="text-md"> {project.description} </p>
                        </div>

                        <div className="flex flex-wrap gap-2 my-3 ">
                            {project.technologies.map((tech, index) =>(
                                   <span key = {index} className="badge badge-sm bg-orange-500 text-black">
                                    {tech}
                                   </span> 
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn bg-orange-500 w-2/3 text-black" href={project.demoLink}> 
                                Demo 
                                <Video className="w-4"/>
                            </a>
                            <a className="btn btn-neutral ml-2 w-1/3" href={project.repoLink}> 
                                <Github className="w-4"/>
                            </a>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}
export default Projects