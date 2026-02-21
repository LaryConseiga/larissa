
import React from "react";
import Hero from "../../../component/hero";
//import User1 from "../../component/props";
import Liste from "../../../component/liste"

export default function Page() {
  return (
    <>
      <Hero />
      <Liste limit={4} showVoirPlus />

    </>
  );
}