import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const YouTube = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
  >
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">
    Content Creator
      <span className="text-textGreen tracking-wide">@Technology Blog</span>
    </h3>
    <p className="text-sm mt-1 font-medium text-textDark">
      Jan 2017 - present
    </p>
    <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        How-to/Tutorial Videos <br/> How-to and tutorial videos involve creating video content that teaches viewers how to do something. Topics can range from makeup tutorials and cooking recipes to DIY home repairs and technology tips.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Education <br/>  Educational content involves creating video content that teaches viewers about a specific topic or subject. Topics can range from history and science to language learning and skill development.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Vlogging <br/> Vlogging involves creating video content that showcases your daily life, experiences, and opinions. Vlogs can cover a wide range of topics, such as travel, lifestyle, entertainment, and more.
      </li>
      
    </ul>
  </motion.div>
  )
}

export default YouTube