import useBasic from "../data/queryHooks/useBasic";
import FrontPage from "../modules/FrontPage/FrontPage";
function Home() {
  const basicFestivalData = useBasic();

  if (basicFestivalData.isLoading) {
    return null;
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
