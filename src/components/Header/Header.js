import styles from './Header.module.scss'

import React from 'react'

const Header = () => {
  return (
    <div className={styles.header}>
     <h1 className={styles.title}>
      <strong>Dinner Notes </strong>Pin Now Share Later
       
       </h1>
     
     </div>
  )
}

export default Header

