import Quote from "./Quote";
import Copyright from "./Copyright";
import SocialButton from "./SocialButton";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = {
    "github":"https://github.com/PrRj06",
    "linkedin":"https://www.linkedin.com/in/prabhat06/",
    "twitter":"https://x.com/_prabhat06"
}

function Footer() {
    return (
        <>
            <hr className='text-(--secondary)'/>
            <footer className="w-full overflow-hidden bg-(--card-bg) px-3 py-9 sm:px-4 md:px-(--padding-x)">
                <Quote />
                <div className="mt-6 flex w-full flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                    <div className="flex flex-col gap-1">
                        <Copyright />
                    </div>
                    <div className="flex h-fit w-fit flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <SocialButton icon={FaGithub} label="Github" link={links.github}/>
                        <SocialButton icon={FaLinkedin} label="LinkedIn" link={links.linkedin}/>
                        <SocialButton icon={FaXTwitter} label="Twitter" link={links.twitter}/>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
