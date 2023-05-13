import {
    SlSocialYoutube,
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialGithub
} from "react-icons/sl";
const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href='https://github.com/walidulhasan' target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialGithub/>
            </span>
        </a>
        <a href='https://www.youtube.com/@bdcoders' target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialYoutube/>
            </span>
        </a>
        <a href="https://bd.linkedin.com/in/walidulhasan-boniamin-57b611138" target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialLinkedin/>
            </span>
        </a>
        <a href='https://www.facebook.com/walidulhasan.boniamin' target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialFacebook/>
            </span>
        </a>
        <a href='https://www.instagram.com/walidulhasan/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SlSocialInstagram/>
            </span>
        </a>
    </div>
  )
}

export default Footer