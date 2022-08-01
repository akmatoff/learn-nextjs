import Link from "next/link";

import Button from "../shared/Button";
import AddressIcon from "../shared/icons/address-icon";
import ArrowRightIcon from "../shared/icons/arrow-right-icon";
import DateIcon from "../shared/icons/date-icon";

import styles from "./EventElement.module.css";

export default function EventElement({ title, image, date, location, id }) {
  const parsedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{parsedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={"/events/" + id}>
            <span>Explore Event</span>
            <span className={styles.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
}
