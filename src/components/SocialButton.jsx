function SocialButton({icon:Icon, label, link}){
    return(
        <a
            href={link}
            aria-label={label}
            className="group relative inline-flex h-fit w-fit items-center rounded-full bg-[#00000067] p-2 text-[#ffffff] shadow-[0_-2px_4px_rgba(255,255,255,0.2),0_3px_6px_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:scale-[0.96] hover:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
            {Icon && <Icon className="text-white" size={18}/>}
            {label && (
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute invisible -top-15 left-1/2 -translate-x-1/2 rounded-[5px] bg-white px-1 py-2 text-black group-hover:visible
                    after:content-[''] after:absolute after:top-[calc(100%-2px)] after:left-1/2 after:-translate-x-1/2 
                    after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white"
                >
                    {label}
                </span>
            )}
        </a>
    )
}
export default SocialButton;
