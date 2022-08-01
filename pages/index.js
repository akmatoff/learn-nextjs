import { useEffect } from 'react'
import EventList from '../components/events/EventList'

import { getFeaturedEvents } from '../dummyData'

import styles from '../styles/Home.module.css'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className={styles.container}>
      <EventList events={featuredEvents} />
    </div>
  )
}
