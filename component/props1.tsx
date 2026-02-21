"use client";

import React from "react";

type UserProps = {
  img: string;
  width?: number;
  description?: string;
  titre?: string;
  imgClassName?: string;
};

const User: React.FC<UserProps> = ({ img, width, description = "", titre = "", imgClassName = "rounded-lg" }) => {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <img src={img} width={width} className={`mx-auto max-w-full ${imgClassName}`} alt="" />
      {titre && <h2 className="max-w-3xl text-display md:text-display font-bold mt-2 text-base-content">{titre}</h2>}
      {description && <p className="max-w-3xl py-3 text-body-lg text-base-content/90">{description}</p>}
    </section>
  );
};
export default User;
