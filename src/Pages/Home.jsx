import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Portfolio from "../Components/Portfolio";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Cheers | Home</title>
      </Helmet>
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
