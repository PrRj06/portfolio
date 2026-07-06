import NameText from "./NameText";
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
    <footer className="w-full overflow-hidden bg-black py-10">
      <NameText />
      
      <div className="z-10  mt-6 flex w-full flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <Copyright />
        <div className="w-fit h-fit flex gap-3">
            <SocialButton icon={FaGithub} label="Github" link={links.github}/>
            <SocialButton icon={FaLinkedin} label="LinkedIn" link={links.linkedin}/>
            <SocialButton icon={FaXTwitter} label="Twitter" link={links.twitter}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;