import styles from "./Header.module.css"
import { AiOutlineMenu } from "react-icons/ai";
const LowerHeader = () => {
  return (
    <div className={styles.lower_header}>
      <ul>
        <li>
            <AiOutlineMenu />
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
