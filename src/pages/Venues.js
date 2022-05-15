import useVenue from "../data/queryHooks/useVenue";
import VenueList from "../modules/Venues/VenueList/VenueList";
import Loader from "../components/Loader/Loader";

function Venues() {
  const allVenueData = useVenue();
  // get all the venues

  if (allVenueData.isLoading) {
    return <Loader />;
  } else {
    const VenueData = allVenueData.data;

    return (
      <div className="content">
        <h1 className="page_h1">Levenshulme Festival Venues</h1>

        <VenueList venueListData={VenueData} />
      </div>
    );
  }
}

export default Venues;
