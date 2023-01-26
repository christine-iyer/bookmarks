import styles from './Header.module.scss'

import React from 'react'

const Header = () => {
  return (
    <div className={styles.header}>
     <h1 className={styles.title}>Dinner Notes</h1>
     <h3 className={styles.subtitle}>Pin Now Share Later</h3>
     
     </div>
  )
}

export default Header