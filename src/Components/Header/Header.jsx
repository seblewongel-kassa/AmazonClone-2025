
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './header.module.css';
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from '../../Utility/DataProvider/DataProvider';

const Header = () => {
     const [{user,basket},dispatch]=useContext(DataContext)
    const totalItem = basket?.reduce((amount,item)=>{
        return item.amount + amount
    },0)

  return (
    <section className={classes.fixed}>
        <section> 
            <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/* logo */}
                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /> </Link>

                <div className={classes.delivery}>
                       {/* delivery */}
                   <span>
                    {/* icon */}
                      <SlLocationPin />
                   </span>
                   <div>
                      <p>Deliver to</p>
                      <span>Ethiopia</span>
                   </div>
                </div>
            </div>
            
            <div className={classes.search}>
                {/* search bar */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" />
                <BsSearch size={42}/>
            </div>
            {/* right side link */}
            <div className={classes.order_container}>
                
                    <Link  to="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_%28fixed%29.svg/640px-Flag_of_the_United_States_%28fixed%29.svg.png" alt="" />

                    <select>
                        <option value="">EN</option>
                    </select>
                     </Link>
                    
                
                <Link to="/auth">
                  <div>
                    
                            <>
                             <p>Hello</p>
                             <span>Sign Out</span>
                            </>
                           
                        
                            {/* <>
                            <span>Account & Lists</span>
                            <p>Hello, Sign In</p>
                            </> */}
                            
                    
                    
                  </div>
                          
                 </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>returns</p>
                    <span>& Orders</span>
                 </Link>
                
                {/* Cart */}
                <Link  to='/cart' className={classes.cart}>
                <BiCart size={35}/>
                <span>{totalItem}</span>
                 </Link>
            </div>
            </div>
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header