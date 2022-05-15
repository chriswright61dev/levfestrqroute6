import useBasic from "../data/queryHooks/useBasic";

function Home() {
  const basicFestivalData = useBasic();
  console.log("basicFestivalData", basicFestivalData);
  return <div>home page</div>;
}

export default Home;
