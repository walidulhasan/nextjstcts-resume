import {TbBrandGithub} from "react-icons/tb";
import {
    SlSocialYoutube,
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
    SlPaypal
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        
        <div className="flex flex-col gap-4">
            <a href="https://github.com/walidulhasan" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <TbBrandGithub/>
                </span>
            </a>
            <a href="https://www.youtube.com/@bdcoders" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <SlSocialYoutube/>
                </span>
            </a>
            <a href="https://bd.linkedin.com/in/walidulhasan-boniamin-57b611138" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <SlSocialLinkedin/>
                </span>
            </a>
            <a href="https://www.facebook.com/walidulhasan.boniamin" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <SlSocialFacebook/>
                </span>
            </a>
            <a href="https://www.instagram.com/walidulhasan/" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <SlSocialInstagram/>
                </span>
            </a>
            <a href="https://paypal.me/walidulhasan?country.x=CY&locale.x=en_US" target="_blank">
                <span className="w-8 h-8 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
                    <SlPaypal/>
                </span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide