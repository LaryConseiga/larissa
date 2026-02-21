"use client";
import React from "react";
import Link from "next/link";
import User from "./props1";

const Navbar = () => {
  return (
    <div>
<div className="navbar bg-base-100 shadow-sm border border-base-300 rounded-box ">
  <div className="flex-1">
  <Link className="btn btn-ghost text-h4 font-semibold text-base-content" href="/home"><User img="image2.jpg" width={50} /></Link>
    </div>
    <ul className="menu menu-horizontal bg-base-100 gap-1 text-nav font-medium">
        <li><Link href="/home" className="text-base-content hover:text-primary">Home</Link></li>
        <li><Link href="/apropos" className="text-base-content hover:text-primary">À propos</Link></li>
        <li><Link href="/contact" className="text-base-content hover:text-primary">Contact</Link></li>
        <li><Link href="/inscription" className="text-base-content hover:text-primary">Inscription</Link></li>
        <li><Link href="/connexion" className="text-base-content hover:text-primary">Connexion</Link></li>
</ul>
  </div>

     </div>
  );
};

export default Navbar;