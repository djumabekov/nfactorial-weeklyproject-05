import { useContext } from 'react';
import { DataContext } from "../../../ContextComponent";
import Project from '../ProjectComponent'

function Projects() {
    const data = useContext(DataContext);
    return (
        <>
            <section className="projects">
            <div className="projects-info">
                <div className="projects-info-title">
                {data[4].projectsWorkedOnMainText}
                </div>
            </div>
            </section> 
            <section className="project">
                {data[4].projectsWorkedOnListItems.map((item, index) => (
                    <Project key={index} data={item} index={index}/>
                ))}
            </section> 
        </>
    );
  }
  
  export default Projects;
  