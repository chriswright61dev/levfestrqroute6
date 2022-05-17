import EventsList from "../modules/Events/EventsList/EventsList";
import useEventYear from "../data/queryHooks/useEventYear";
import Loader from "../components/Loader/Loader";
function EventsOld() {
  const thisYear = new Date().getFullYear();
  // add some state for the year and a dropdown to change it
  const allEventData = useEventYear(thisYear);
  // get data by year
  if (allEventData.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="content">
        <h1 className="page_h1">Levenshulme Festival Events {thisYear}</h1>

        <EventsList eventListData={allEventData.data} />
      </div>
    );
  }
}

export default EventsOld;
