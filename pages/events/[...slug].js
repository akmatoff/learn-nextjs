import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "../../dummyData";

import EventList from "../../components/events/EventList";
import Button from "../../components/shared/Button";
import ErrorAlert from "../../components/shared/ErrorAlert/ErrorAlert";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (isNaN(filteredYear) || isNaN(filteredMonth)) {
    return (
      <ErrorAlert>
        <p className="center">Invalid filters</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No events found for the selected filters.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <EventList events={filteredEvents} />
    </div>
  );
}
