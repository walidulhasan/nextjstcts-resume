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
      Jan 2017 - present
    </p>
    <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Web Development <br/> Web development involves creating websites and web applications using a variety of programming languages and frameworks. Fiverr sellers can offer web development services such as HTML/CSS coding, JavaScript development, and full-stack web application development.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        E-commerce Development: <br/>  E-commerce development involves creating online stores and marketplaces that allow businesses to sell products and services online. Fiverr sellers can offer e-commerce development services such as Shopify development, WooCommerce development, and Magento development.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Database Development: <br/> Database development involves designing, developing, and maintaining databases that store and manage data. Fiverr sellers can offer database development services such as SQL database development, NoSQL database development, and database optimization.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        API Development: <br/> API development involves creating application programming interfaces (APIs) that allow different software applications to communicate with each other. Fiverr sellers can offer API development services such as RESTful API development, SOAP API development, and Web API development.
      </li>
    </ul>
  </motion.div>
  )
}

export default Fiverr