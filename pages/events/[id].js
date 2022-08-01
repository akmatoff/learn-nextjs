import { useRouter } from "next/router"
import { getEventById } from "../../dummyData"

import EventSummary from "../../components/event-details/EventSummary"
import EventContent from '../../components/event-details/EventContent'
import EventLogistics from '../../components/event-details/EventLogistics'


export default function EventDetailsPage() {
  const { query: { id } } = useRouter()

  const event = getEventById(id)

  if (!event) {
    return <p>Event not found!</p>
  }

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.image} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  )
}