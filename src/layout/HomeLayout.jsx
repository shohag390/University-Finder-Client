import React from "react";
import Hero from "../components/Hero";
import UniversityFilter from "../components/UniversityFilter";
import UniversityCard from "../components/UniversityCard";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <UniversityFilter />
      <UniversityCard />
    </div>
  );
};

export default HomeLayout;
