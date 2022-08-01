import Link from "next/dist/client/link"

import styles from './Button.module.css'

export default function Button({link, children}) {
  return <Link href={link}>
    <a className={styles.btn}>{children}</a>
  </Link>
}