import React from "react";
import TitlebarImageList from "../components/ImageListItem/ImageListItem";
import MultiActionAreaCard from "../components/UI/Card";
import cardData from "../data";
import SimpleContainer from "../layouts/Container";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      <TitlebarImageList />
      <SimpleContainer>
        <div className="cards">
          {cardData.map((data) => (
            <MultiActionAreaCard {...data} />
          ))}
        </div>
      </SimpleContainer>
      <Footer />
    </>
  );
};

export default Home;
