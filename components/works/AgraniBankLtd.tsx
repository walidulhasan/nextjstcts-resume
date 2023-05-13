import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const AgraniBankLtd = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
  >
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Officer
      <span className="text-textGreen tracking-wide">@General Banking</span>
    </h3>
    <p className="text-sm mt-1 font-medium text-textDark">
      Dec 2018 - Nov 2019
    </p>
    <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Deposit Accounts: <br/> Deposit accounts are financial accounts offered by banks and other financial institutions that allow customers to deposit and withdraw money. The most common types of deposit accounts include savings accounts, checking accounts, and certificates of deposit (CDs).
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Investment Services: <br/>Banks often offer investment services to customers who want to invest their money in stocks, bonds, mutual funds, and other financial instruments. These services may include financial planning, investment advice, and brokerage services.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Online Banking: <br/> Online banking allows customers to access their bank accounts and perform banking transactions over the internet. This includes tasks such as checking account balances, transferring money between accounts, and paying bills online.
      </li>
    </ul>
  </motion.div>
  )
}

export default AgraniBankLtd