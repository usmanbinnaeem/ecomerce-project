// import Jumbotron from "../Components/cards/Jumbotron";
import NewArrivals from "../Components/home/NewArrivals";
import BestSellers from "../Components/home/BestSellers";
import Main from "../Components/header/Main"

const Home = () => {
  return (
    <>
    <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Main />
      </div>
      {/* <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div> */}

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />
    </>
  );
};

export default Home;
