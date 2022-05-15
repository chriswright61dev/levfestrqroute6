import useBasic from "../data/queryHooks/useBasic";
import FrontPage from "../modules/FrontPage/FrontPage";
import Loader from "../components/Loader/Loader";
function Home() {
  const basicFestivalData = useBasic();

  if (basicFestivalData.isLoading) {
    return <Loader />;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0];
    console.log("festData", festData);

    return (
      <div>
        <FrontPage />
      </div>
    );
  }
}

export default Home;
