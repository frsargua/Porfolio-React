import React, { useState } from "react";
import ButtonAppBar from "./Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Porfolio";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  let options = ["HOME", "PORFOLIO", "CONTACT ME"];

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage.toLocaleLowerCase() === "home") {
      return <Home />;
    }

    if (currentPage.toLocaleLowerCase() === "contact me") {
      return <Contact handlePageChange={handlePageChange} />;
    }
    return <Porfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <ButtonAppBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        options={options}
      />
      <SideBar />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </>
  );
}
