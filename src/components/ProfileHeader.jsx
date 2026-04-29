import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SocialButton from "./SocialButton";
function ProfileHeader(){
    return(
        <>
            <div className="w-full px-5 py-5 bg-[#1f1d1da5]">
                <div className="relative z-10 -mt-15 w-24 h-24 bg-[url('/luffy.jpg')] bg-cover bg-center rounded-full overflow-hidden"></div>
                <div className="min-w-3xl h-fit flex justify-between items-center ">
                    <div className="w-fit h-fit flex flex-col">
                        <p className="text-(--primary) text-4xl [font-family:var(--font-instrument-serif)]">Prabhat Ranjan</p>
                        <p className="text-(--secondary) font-medium text-xs flex items-center gap-1">
                            22 • Engineer • Otaka
                        </p>
                    </div>
                    <div className="w-fit h-fit flex gap-3">
                        <SocialButton icon={FaGithub} label="Github"/>
                        <SocialButton icon={FaLinkedin} label="LinkedIn"/>
                        <SocialButton icon={FaXTwitter} label="Twitter"/>
                        <SocialButton icon={IoMdMail} label="Email"/>
                        <SocialButton icon={FaPaperclip} label="Resume"/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProfileHeader;