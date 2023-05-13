import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const RobinTexGroupBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer & Developer
        <span className="text-textGreen tracking-wide">@ERP</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Garments ERP <br />A Complete ERP solution for garments company with
          different analytical reports.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Garments HRM System <br />HRM System having employee profile, attendance, leave & salary modules.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gate Control System <br/> A system for controlling the products entry & exit for both security & financial aspects.
        </li>
      </ul>
    </motion.div>
  );
};

export default RobinTexGroupBD;
