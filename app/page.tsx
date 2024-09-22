import React from "react";
import Header from "./components/Header/Header";
import ResortPage from "./components/ResortPage/Resortpage";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <ResortPage />
      <Services />
    </div>
  );
}
