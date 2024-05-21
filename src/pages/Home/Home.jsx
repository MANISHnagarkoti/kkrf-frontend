import React from "react";
import Work from "../../component/Home/Work";
import OurStats from "../../component/Home/OurStats";
import Herosection from "../../component/Home/Herosection";
import Whoweare from "../../component/Home/Whoweare";
import Clients from "../../component/Home/Clients";
import Question from "../../component/Home/Question";
import Services from "../../component/Home/Services";
import Experiences from "../../component/Home/Experiences";
import Talk from "../../component/Home/Talk";
import Technology from "../../component/Home/Technology";
import BoxComponent from "../../component/Home/Box";

const Home = () => {
  return (
    <div className="">
      <Herosection />
      <OurStats />
      <Whoweare />
      <Work />
      <Experiences />
      <Services />
      <BoxComponent/>
      <Technology/>
      <Talk/>
      <Clients />
      <Question />
    </div>
  );
};

export default Home;
