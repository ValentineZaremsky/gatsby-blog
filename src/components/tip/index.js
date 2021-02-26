// components/tip/index.js
import React from "react"
import styles from "./tip.module.css"

export default function Tip ({ type, heading, children }) {
  return (
    <div className={[styles.tip, styles[type]].join(' ')}>
      <p className={styles.heading}>{heading}</p>
      {children}
    </div>
  )
}
