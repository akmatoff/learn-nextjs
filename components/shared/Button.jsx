import Link from "next/dist/client/link"

import styles from './Button.module.css'

export default function Button({link, children, onClick}) {
  if (link) {
    return <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  } 

  return <button className={styles.btn} onClick={onClick}>{children}</button>
  
}