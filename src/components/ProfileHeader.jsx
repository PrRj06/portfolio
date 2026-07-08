import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SocialButton from "./SocialButton";

const links = {
    "github":"https://github.com/PrRj06",
    "linkedin":"https://www.linkedin.com/in/prabhat06/",
    "email":"mailto:prabhat.rj06@gmail.com",
    "twitter":"https://x.com/_prabhat06"
}

function ProfileHeader(){
    return(
        <>
            <div className="w-full px-3 py-5 sm:px-4 md:px-(--padding-x) bg-[#1f1d1da5]">
                <div className="relative z-10 -mt-15 w-24 h-24 bg-[url('/luffy.jpg')] bg-cover bg-center rounded-full overflow-hidden sm:mx-0"></div>
                <div className="w-full h-fit flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
                    <div className="w-fit h-fit flex flex-col">
                        <p className="text-(--primary) md:text-4xl text-2xl [font-family:var(--font-instrument-serif)]">Prabhat Ranjan</p>
                        <p className="text-(--secondary) font-medium text-xs flex items-center gap-1">
                            22 • Engineer • Otaka
                        </p>
                    </div>
                    <div className="w-fit h-fit flex flex-wrap justify-start sm:justify-end md:gap-3 gap-2">
                        <SocialButton icon={FaGithub} label="Github" link={links.github}/>
                        <SocialButton icon={FaLinkedin} label="LinkedIn" link={links.linkedin}/>
                        <SocialButton icon={FaXTwitter} label="Twitter" link={links.twitter}/>
                        <SocialButton icon={IoMdMail} label="Email" link={links.email}/>
                        <SocialButton icon={FaPaperclip} label="Resume" link={"https://www.google.com"}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProfileHeader;