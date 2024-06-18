import Projectcard from "./Projectcard";
import "./Project.scss";

import { useSelector } from 'react-redux';


function Project() {
    const projects = useSelector((state) => state.projects);
    return (
        <div className="project__wrapper">
            <div className="header">
                <span className="header__title">Featured works</span>
                <span>
                    <a href="/projects">See more</a>
                </span>
            </div>
            <div className="projects">
                <ul className="project__card__list">
                    {projects.map((project) => {
                        const projectData = project.attributes;
                        console.log(projectData);
                        console.log(projectData.thumbnail.data.attributes.url);
                        return (
                            <li className="project__card" key={project.id}>
                                <Projectcard
                                    title={projectData.title}
                                    year={projectData.createdat.substring(0, 4)}
                                    description={projectData.description}
                                    tags={projectData.tags.data}
                                    img={
                                        projectData.thumbnail.data.attributes
                                            .url
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Project;
