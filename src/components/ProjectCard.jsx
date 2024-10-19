import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectCard = ({ project }) => {
    const { name, image, timeSpan, skillRequired, description, liveLink, githubLink } = project

    return (
        <div data-aos='zoom-in' data-aos-duration='200'>
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
                <div className="h-[150px] md:h-[100px] items-center justify-center">
                    <p>{description.length > 200 ? <p>{description.slice(0, 150) + '........'}</p> : <p>{description}</p>}</p>
                </div>
                <div className="flex justify-around">
                    <Link to={liveLink} target="_blank" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Live Site</Link>
                    <Link to={githubLink} target="_blank" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Github Link</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;