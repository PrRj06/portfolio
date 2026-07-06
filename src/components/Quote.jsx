import NameText from "./NameText";
function Quote(){
    return(
        <>
            <div className="w-full">
                <NameText />
                <div className="flex items-center justify-end">
                    <p className="font-mono text-sm italic text-pretty text-(--secondary)">— Gojo Satoru</p>
                    <img className="w-10 h-10 " src="/gojo-finger.png"/>
                </div>
            </div>
            
        </>
    )
};
export default Quote;
