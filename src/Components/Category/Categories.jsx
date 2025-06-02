import React from 'react'
import {categoryInfos} from './categoryFullinfos';
import CategoryCard from './CategoryCard';
import styles from './category.module.css';

const Categories = () => {
  return (
    <section className={styles.category_container}>
        {
            categoryInfos.map((infos,i)=>{
                return <CategoryCard data = {infos} key={i}/>
                
            })
        }
    </section>
  )
}

export default Categories