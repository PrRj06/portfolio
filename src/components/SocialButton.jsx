function SocialButton({icon:Icon, label}){
    return(
        <>
            <div className="group relative w-fit h-fit p-2 items-center bg-[#00000067] text-[#ffffff] cursor-pointer rounded-full  shadow-[0_-2px_4px_rgba(255,255,255,0.2),0_3px_6px_rgba(0,0,0,0.6)]  hover:scale-[0.96] hover:translate-y-px transition-all duration-100 ease-in-out">
                {Icon && <Icon className="text-white" size={18}/>}
                {label && (
                    <span className="absolute invisible text-black bg-white px-1 py-2 rounded-[5px] group-hover:visible -top-15 left-1/2 -translate-x-1/2
                        after:content-[''] after:absolute after:top-[calc(100%-2px)] after:left-1/2 after:-translate-x-1/2 
                        after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white">
                        {label}
                    </span>
                )}
            </div>
        </>
    )
}
export default SocialButton;