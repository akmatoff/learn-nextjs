import { getAllEvents } from "../../dummyData"

import EventList from '../../components/events/EventList'

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  )
}