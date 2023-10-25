import Banner from "./Banner";
import Bistro from "./Bistro";
import CallUs from "./CallUs";
import Category from "./Category";
import CheffRecommend from "./CheffRecommend";
import CustomerReview from "./CustomerReview";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div style={{ margin: "auto", width: "80%" }}>
        <Category></Category>
        <Bistro></Bistro>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <CheffRecommend></CheffRecommend>
        <Featured></Featured>
        <CustomerReview></CustomerReview>
      </div>
    </>
  );
};

export default Home;
