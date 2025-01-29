import React from 'react'
import styles from './Challenge.module.css'

const Challenge = ({brand, km, color}) => {
  return (
    <div>
      <div className={brand === "ferrari" ? styles.ferrari : brand === "lamborghini" ? styles.lamborghini : styles.ford}>
        <ul>
          <li>Brand: {brand}</li>
          <li>Km: {km}</li>
          <li>Color: {color}</li>
        </ul>
      </div>
    </div>
  )
}

export default Challenge
