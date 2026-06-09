function ProjectBanner(props){
    const {imagePath, projectName} = props;
    return(
        <>
            <div className="flex flex-col w-full rounded-md bg-white/10 p-2 cursor-pointer">
                <img src={imagePath} alt={projectName} className="w-full h-60 rounded-md" />
                <h1 className="font-(family-name:--font-instrument-serif) text-(--primary) text-xl mx-2">{projectName}</h1>
            </div>
        </>
    )
};
export default ProjectBanner;