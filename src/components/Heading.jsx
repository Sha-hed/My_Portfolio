
const Heading = ({heading, subHeading}) => {
    return (
        <div className="text-white flex flex-col space-y-3 z-10">
            <h1 className="text-center font-bold text-3xl md:text-5xl">{heading}</h1>
            <h1 className="text-center text-lg md:text-xl font-medium">{subHeading}</h1>
        </div>
    );
};

export default Heading;