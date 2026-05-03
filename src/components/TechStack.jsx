function TechIcon(){
    const items = [
        // languages
        { name: "JavaScript", src: "/tech-icons/js.svg" },
        { name: "TypeScript", src: "/tech-icons/typescript.svg" },
        { name: "Python", src: "/tech-icons/python.svg" },
        { name: "Java", src: "/tech-icons/java.svg" },
        { name: "SQL", src: "/tech-icons/sql1.svg" },

        // Frameworks & Libraries
        { name: "React.js", src: "/tech-icons/react.svg" },
        { name: "Node.js", src: "/tech-icons/node.svg" },
        { name: "Express.js", src: "/tech-icons/express.svg" },
        { name: "Tailwind.js", src: "/tech-icons/tailwind.svg" },
        
        // Databases
        { name: "MongoDB", src: "/tech-icons/mongo.svg" },
        { name: "PostgreSQL", src: "/tech-icons/postgresql.svg" },

        // Dev Tools
        { name: "Git", src: "/tech-icons/git.svg" },
        { name: "Vercel", src: "/tech-icons/vercel.svg" },
        { name: "Figma", src: "/tech-icons/figma.svg" },
        { name: "Postman", src: "/tech-icons/postman.svg" }
    ];
    return(
        <>  
            <hr className='text-(--secondary)'/>
            <div className="px-(--padding-x) py-5 bg-(--card-bg)">
                <h2 className="text-base sm:text-xl text-(--secondary) [font-family:var(--font-instrument-serif)] mb-3 mt-4 sm:mt-6">Stack I use</h2>
                <p className=" text-sm sm:text-base text-(--primary) leading-relaxed">Technologies I work with to build products that solve real problems</p>
                <div className="flex flex-wrap mt-4">
                    {
                        items.map((item,index)=>(
                            <div key={`${item.name}-${index}`} className="w-fit h-fit min-h-0 mr-2 my-2 rounded-2xl text-(--primary) flex items-center bg-[#00000061] shadow-[0_-2px_4px_rgba(255,255,255,0.2),0_3px_6px_rgba(0,0,0,0.6)] px-1.75 py-1 cursor-default">
                                <img 
                                    src={item.src}
                                    width={20}
                                    height={20}
                                    className="mx-0.5"
                                    />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default TechIcon;