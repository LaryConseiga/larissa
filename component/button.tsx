
"use client";
import React from "react";
import Link from "next/link";

const Buttons: React.FC = () => {
  return (
    <div className="flex gap-3 justify-center mt-4">
      <Link href="/connexion"><button className="btn btn-outline btn-primary text-body font-medium">Connexion</button></Link>
      <Link href="/inscription"><button className="btn btn-primary text-body font-medium">Inscription</button></Link>
    </div>
  );
};

export default Buttons;