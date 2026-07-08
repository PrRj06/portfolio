import { GitHubCalendar } from "react-github-calendar"
function GitActivity({username}){
    return(
        <>
            <hr className='text-(--secondary)'/>
            <div className="bg-(--card-bg) px-3 py-5 sm:px-4 md:px-10 w-full">
                <p className="text-base sm:text-xl text-(--secondary) [font-family:var(--font-instrument-serif)] my-5 sm:mt-6 ">
                    Github Activity • 
                    <span className="italic">@{username}</span>
                </p>
                <div className="w-full overflow-x-auto">
                    <GitHubCalendar
                        className="text-(--primary) mx-auto "
                        username={username}
                        blockSize={13}
                        blockMargin={2}
                        fontSize={14}
                        colorScheme="dark"
                        theme={{
                            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                            dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"]
                        }}
                    />
                </div>
            </div>
        </>
    )    
}
export default GitActivity;