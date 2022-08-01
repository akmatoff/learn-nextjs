import EventElement from "./EventElement";

import styles from './EventList.module.css'

export default function EventList({events}) {

  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventElement
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
