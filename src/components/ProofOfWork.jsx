import ProjectBanner from "./ProjectBanner";
function ProofOfWork(){
    return(
        <>
            <hr className='text-(--secondary)'/>
            <div className="w-full px-3 py-5 sm:px-4 md:px-10 bg-(--card-bg) ">
                <p className="text-base sm:text-xl text-(--secondary) [font-family:var(--font-instrument-serif)] mb-3 mt-4 sm:mt-6">
                    Proof of Work
                </p>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 justify-items-center gap-3">
                    <ProjectBanner imagePath="/coming-soon.jpeg" projectName="Comming Soon"/>
                    <ProjectBanner imagePath="/coming-soon.jpeg" projectName="Comming Soon"/>
                </div>
            </div>
        </>
    )
};
export default ProofOfWork;