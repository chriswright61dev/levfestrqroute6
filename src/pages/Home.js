import useBasic from "../data/queryHooks/useBasic";

function Home() {
  const basicFestivalData = useBasic();

  if (basicFestivalData.isLoading) {
    return null;
  } else {
    const festData = basicFestivalData.data[0];
    console.log("festData", festData);
  }

  return <div>home page</div>;
}

export default Home;
