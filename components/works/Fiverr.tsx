import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const Fiverr = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
  >
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Programmer
      <span className="text-textGreen tracking-wide">@Software</span>
    </h3>
    <p className="text-sm mt-1 font-medium text-textDark">
      Jan 2023 - present
    </p>
    <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui necessitatibus architecto cumque consequuntur nam expedita perferendis id harum fuga maiores similique culpa! Dolor error, quis corrupti atque minima ab.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, qui necessitatibus architecto cumque consequuntur.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam expedita perferendis id harum fuga maiores similique culpa! Dolor error, quis corrupti atque minima ab.
      </li>
    </ul>
  </motion.div>
  )
}

export default Fiverr