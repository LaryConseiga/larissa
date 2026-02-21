"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = { email, password, remember };
    alert(JSON.stringify(loginData, null, 2));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col items-center">
        <div className="flex justify-center w-[150px] h-[150px] overflow-hidden rounded-full shrink-0">
          <img src="/image2.jpg" width={150} height={150} className="w-full h-full object-cover" alt="2iE" />
        </div>

        <div className="card bg-base-100 w-full max-w-2xl shadow-2xl mx-auto">
          <form className="card-body py-10 px-8 sm:px-12" onSubmit={handleSubmit} noValidate>
            <fieldset className="fieldset flex flex-col gap-5">
              <div className="form-control">
                <label className="label py-1" htmlFor="email">
                  <span className="label-text text-body-sm font-medium text-base-content">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label py-1" htmlFor="password">
                  <span className="label-text text-body-sm font-medium text-base-content">Mot de passe</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3 py-1">
                  <input
                    id="remember"
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span className="label-text text-body-sm text-base-content">Se souvenir de moi</span>
                </label>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <button className="btn btn-primary text-body font-medium w-full" type="submit">
                  Connexion
                </button>
                <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:items-center">
                  <a className="link link-hover text-body-sm text-base-content/80" href="#">
                    Mot de passe oublié ?
                  </a>
                  <Link href="/inscription" className="link link-primary text-body-sm font-medium">
                    S'inscrire
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

export default Login;