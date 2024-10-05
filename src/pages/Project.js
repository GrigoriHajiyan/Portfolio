import { useParams } from 'react-router-dom'

import BtnGithub from '../components/ButtonGithub/BtnGithub';
import{ProjectsList} from './../helpers/ProjectsList';
const Project = () => {
  const{id} = useParams();
  const project = ProjectsList[id];

  
  return (
    <main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">{project.title}</h1>
            <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

            <div className="project-details__desc">
                <p>Skills:{project.skills}</p>
            </div>
             {project.gitHubLink && (
                         <BtnGithub link="http://github.com" />

             )}
         
        </div>
    </div>
</main>

  )
}

export default Project