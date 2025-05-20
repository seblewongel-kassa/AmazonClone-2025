import React from 'react'
import styles from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
const Header = () => {
  return (
    <section className={styles.fixed}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </a>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={35} />
        </div>
        <div className={styles.orders_container}>
          <a href="" className={styles.flag}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_%28fixed%29.svg/640px-Flag_of_the_United_States_%28fixed%29.svg.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <div>
              <div>
                <p>Hello,Sebli</p>
                <span>SignOut</span>
              </div>
              {/* <div>
                <span>Account & Lists</span>
                <p>Hello,Sign In</p>
              </div> */}
            </div>
          </a>

          <a href="">
            <p>returns</p>
            <span>&Orders</span>
          </a>

          <a href=" " className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header
