import React from "react";
import TitlebarImageList from "../components/ImageListItem/ImageListItem";
import MultiActionAreaCard from "../components/UI/Card";
import SimpleContainer from "../layouts/Container";
import NavBar from "../layouts/Navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <TitlebarImageList />
      <SimpleContainer>
        <MultiActionAreaCard/>
      </SimpleContainer>
    </div>
  );
};

export default Home;
