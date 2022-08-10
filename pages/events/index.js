import { useRouter } from 'next/router'
import { getAllEvents } from "../../dummyData"

import EventList from '../../components/events/EventList'
import EventSearch from "../../components/events/EventSearch";

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter()

  const findEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EventList events={events} />
    </div>
  )
} 