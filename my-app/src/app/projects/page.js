import Card from "./card";

import {projects} from "@/app/data/projects";

export default function Projects() {
    console.log("PROJECTS: ", projects);

    return (
    <>
      <div className="container">
        <div className="row row-cols-3">
          {
            projects.map((project) => (
            <div className="col" key={project.id}>
              <Card title={project.title} description={project.description} stack={project.stack} repoUrl={project.repoUrl} />
            </div>
          ))}
        </div>
      </div>
    </>
    )
}
