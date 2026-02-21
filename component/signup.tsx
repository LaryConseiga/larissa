"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/home");
    };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col items-center py-8 gap-8">
        <div className="flex justify-center w-[150px] h-[150px] overflow-hidden rounded-full shrink-0">
          <img src="/image2.jpg" width={150} height={150} className="w-full h-full object-cover" alt="2iE" />
        </div>

        <div className="card bg-base-100 w-full max-w-xl shadow-2xl mx-auto">
          <form className="card-body py-8 px-4 sm:px-10" onSubmit={handleSubmit} noValidate>
            <fieldset className="fieldset flex flex-col gap-5">
              <div className="form-control">
                <label className="label py-1" htmlFor="nom">
                  <span className="label-text text-body-sm font-medium text-base-content">Nom</span>
                </label>
                <input id="nom" type="text" className="input input-bordered w-full" placeholder="Nom" />
              </div>

              <div className="form-control">
                <label className="label py-1" htmlFor="prenom">
                  <span className="label-text text-body-sm font-medium text-base-content">Prénom</span>
                </label>
                <input id="prenom" type="text" className="input input-bordered w-full" placeholder="Prénom" />
              </div>

              <div className="form-control">
                <label className="label py-1" htmlFor="email">
                  <span className="label-text text-body-sm font-medium text-base-content">Email</span>
                </label>
                <input id="email" type="email" className="input input-bordered w-full" placeholder="votre@email.com" />
              </div>

              <div className="form-control">
                <label className="label py-1" htmlFor="password">
                  <span className="label-text text-body-sm font-medium text-base-content">Mot de passe</span>
                </label>
                <input id="password" type="password" className="input input-bordered w-full" placeholder="Mot de passe" />
              </div>

              <div className="form-control">
                <label className="label py-1" htmlFor="confirm-password">
                  <span className="label-text text-body-sm font-medium text-base-content">Confirmer le mot de passe</span>
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Confirmer le mot de passe"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <button className="btn btn-primary text-body font-medium w-full" type="submit">
                  S'inscrire
                </button>
                <div className="flex justify-center">
                  <Link href="/connexion" className="link link-primary text-body-sm font-medium">
                    Déjà un compte
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;