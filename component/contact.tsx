"use client";

import React, { useState } from "react";

const Contact = () => {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = { nom, email, sujet, message };
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <section className="bg-base-200 text-base-content pt-12 pb-16 px-4 min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-h2 font-bold text-primary mb-2">Contactez-nous</h2>
                <p className="text-body text-base-content/80 mb-10 max-w-2xl">
                    Une question, une demande ou besoin d&apos;informations ? N&apos;hésitez pas à nous contacter.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Infos de contact */}
                    <div className="space-y-6">
                        <div className="card bg-base-100 shadow-lg border border-base-300">
                            <div className="card-body">
                                <h3 className="text-h4 font-semibold text-base-content">Adresse</h3>
                                <p className="text-body-sm text-base-content/80">
                                    Institut 2iE<br />
                                    Rue de la Science, 01 BP 594<br />
                                    Ouagadougou, Burkina Faso
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg border border-base-300">
                            <div className="card-body">
                                <h3 className="text-h4 font-semibold text-base-content">Email</h3>
                                <a href="mailto:contact@2ie-edu.org" className="link link-primary text-body-sm">
                                    contact@2ie-edu.org
                                </a>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg border border-base-300">
                            <div className="card-body">
                                <h3 className="text-h4 font-semibold text-base-content">Téléphone</h3>
                                <a href="tel:+22625365035" className="link link-primary text-body-sm">
                                    +226 25 36 50 35
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:col-span-2">
                        <div className="card bg-base-100 shadow-lg border border-base-300">
                            <div className="card-body">
                                <h3 className="text-h4 font-semibold text-base-content mb-4">Envoyer un message</h3>
                                <form onSubmit={handleSubmit} className="form-control gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className="form-control">
                                            <span className="label-text font-medium">Nom complet</span>
                                            <input
                                                type="text"
                                                className="input input-bordered w-full"
                                                placeholder="Votre nom"
                                                value={nom}
                                                onChange={(e) => setNom(e.target.value)}
                                                required
                                            />
                                        </label>
                                        <label className="form-control">
                                            <span className="label-text font-medium">Email</span>
                                            <input
                                                type="email"
                                                className="input input-bordered w-full"
                                                placeholder="votre@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <label className="form-control">
                                        <span className="label-text font-medium">Sujet</span>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full"
                                            placeholder="Objet de votre message"
                                            value={sujet}
                                            onChange={(e) => setSujet(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label className="form-control">
                                        <span className="label-text font-medium">Message</span>
                                        <textarea
                                            className="textarea textarea-bordered w-full min-h-32"
                                            placeholder="Votre message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <div className="pt-2">
                                        <button type="submit" className="btn btn-primary">
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
