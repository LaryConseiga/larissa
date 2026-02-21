"use client";

import React from "react";


const User1 = ({ home }: { home: string }) => {
  return (
    <section className="text-center font-bold space-y-2">
      <h1 className="text-2xl md:text-3xl">{home}</h1>
    </section>
  );
};

export default User1;