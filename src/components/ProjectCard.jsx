import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectCard = ({ project }) => {
    const { name, image, timeSpan, skillRequired, description, liveLink } = project

    return (
        <Link data-aos='zoom-in' data-aos-duration='200' to={liveLink} target="_blank">
            <div className="w-full hover:scale-105 duration-100 md:w-96 p-6 rounded-md shadow-md bg-gray-900 mx-auto">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="flex flex-wrap">
                    {
                        skillRequired?.map((skill, id) => <a key={id}
                            className="ml-2 p-2 rounded-xl my-1 bg-[#854ce615]"
                        >
                            #{skill}
                        </a>)
                    }
                </div>
                <h1 className="font-bold text-xl underline">{name}</h1>
                <p>{timeSpan}</p>
                <div className="h-[100px] items-center justify-center">
                    <p>{description.length > 200 ? <p>{description.slice(0, 150) + '........'}</p> : <p>{description}</p>}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;