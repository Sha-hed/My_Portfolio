import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

const Projects = ({project, heading, subHeading}) => {
    console.log(project)
    return (
        <div className="max-w-7xl mx-auto my-10">
            <Heading
            heading={heading}
            subHeading={subHeading}
            ></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5">
                {
                    project?.map(p=><ProjectCard project={p} key={p._id}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;