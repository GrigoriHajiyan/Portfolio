import Project from '../components/project/Project';
import project02 from './../img/projects/02.jpg';
import project03 from './../img/projects/03.jpg';
import project04 from './../img/projects/04.jpg';
import project05 from './../img/projects/05.jpg';
import project06 from './../img/projects/06.jpg';
import { ProjectsList } from '../helpers/ProjectsList';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {ProjectsList.map((project, index) => {
            return <Project key={index} title={project.title} img={project.img}
            index={index}
            />
          })}



        </ul>
      </div>
    </main>
  )
}

export default Projects