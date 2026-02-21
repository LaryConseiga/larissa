"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface Etudiant2iE {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    filiere: string;
    niveau: string;
    pays: string;
    matricule: string;
    photo?: string;
}

export const etudiantsExemple: Etudiant2iE[] = [
    {
        id: 1,
        nom: "Sawadogo",
        prenom: "Amina",
        email: "amina.sawadogo@2ie-edu.org",
        filiere: "Génie de l'eau et de l'environnement",
        niveau: "Master 2",
        pays: "Burkina Faso",
        matricule: "2IE-2022-0842",
        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
        id: 2,
        nom: "Traoré",
        prenom: "Ibrahim",
        email: "ibrahim.traore@2ie-edu.org",
        filiere: "Énergie et électrification",
        niveau: "Master 1",
        pays: "Mali",
        matricule: "2IE-2023-0105",
        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
        id: 3,
        nom: "Diallo",
        prenom: "Fatou",
        email: "fatou.diallo@2ie-edu.org",
        filiere: "Génie civil",
        niveau: "Bachelor 3",
        pays: "Sénégal",
        matricule: "2IE-2023-1523",
        photo: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
        id: 4,
        nom: "Ouédraogo",
        prenom: "Jean-Baptiste",
        email: "jb.ouedraogo@2ie-edu.org",
        filiere: "Mines et géologie",
        niveau: "Master 2",
        pays: "Burkina Faso",
        matricule: "2IE-2022-0911",
        photo: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
    {
        id: 5,
        nom: "Kaboré",
        prenom: "Salam",
        email: "salam.kabore@2ie-edu.org",
        filiere: "Génie de l'eau et de l'environnement",
        niveau: "Bachelor 2",
        pays: "Burkina Faso",
        matricule: "2IE-2024-0034",
        photo: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    },
    {
        id: 6,
        nom: "Cissé",
        prenom: "Aïssata",
        email: "aissata.cisse@2ie-edu.org",
        filiere: "Énergie et électrification",
        niveau: "Master 2",
        pays: "Mali",
        matricule: "2IE-2022-0789",
        photo: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    },
    {
        id: 7,
        nom: "Bâ",
        prenom: "Moussa",
        email: "moussa.ba@2ie-edu.org",
        filiere: "Génie civil",
        niveau: "Master 1",
        pays: "Sénégal",
        matricule: "2IE-2023-0891",
        photo: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    },
    {
        id: 8,
        nom: "Zoungrana",
        prenom: "Wendkuni",
        email: "wendkuni.zoungrana@2ie-edu.org",
        filiere: "Mines et géologie",
        niveau: "Bachelor 3",
        pays: "Burkina Faso",
        matricule: "2IE-2023-1122",
        photo: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
        id: 9,
        nom: "Sylla",
        prenom: "Mariama",
        email: "mariama.sylla@2ie-edu.org",
        filiere: "Génie de l'eau et de l'environnement",
        niveau: "Master 1",
        pays: "Guinée",
        matricule: "2IE-2023-0456",
        photo: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
    {
        id: 10,
        nom: "Koné",
        prenom: "Drissa",
        email: "drissa.kone@2ie-edu.org",
        filiere: "Énergie et électrification",
        niveau: "Bachelor 3",
        pays: "Côte d'Ivoire",
        matricule: "2IE-2023-1567",
        photo: "https://img.daisyui.com/images/profile/demo/1@94.webp",
    },
];

interface ListeProps {
    limit?: number;
    showVoirPlus?: boolean;
}

const FILIERES = [
    "Génie de l'eau et de l'environnement",
    "Énergie et électrification",
    "Génie civil",
    "Mines et géologie",
];
const NIVEAUX = ["Bachelor 2", "Bachelor 3", "Master 1", "Master 2"];
const PAYS = ["Burkina Faso", "Mali", "Sénégal", "Guinée", "Côte d'Ivoire", "Bénin", "Togo", "Niger"];

const Liste = ({ limit, showVoirPlus = false }: ListeProps) => {
    const [etudiants, setEtudiants] = useState<Etudiant2iE[]>(() => [...etudiantsExemple]);
    const etudiantsAffiches = useMemo(
        () => (limit != null ? etudiants.slice(0, limit) : etudiants),
        [etudiants, limit]
    );

    const [etudiantSelectionne, setEtudiantSelectionne] = useState<Etudiant2iE | null>(null);
    const [selection, setSelection] = useState<Set<number>>(new Set());
    const [formModal, setFormModal] = useState<{ mode: "create" | "edit"; initial?: Etudiant2iE } | null>(null);
    const [formData, setFormData] = useState<Omit<Etudiant2iE, "id">>({
        nom: "",
        prenom: "",
        email: "",
        filiere: FILIERES[0],
        niveau: NIVEAUX[0],
        pays: PAYS[0],
        matricule: "",
    });

    const toggleSelection = (id: number) => {
        setSelection((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const toggleSelectionTous = () => {
        if (selection.size === etudiantsAffiches.length) {
            setSelection(new Set());
        } else {
            setSelection(new Set(etudiantsAffiches.map((e) => e.id)));
        }
    };

    const openCreate = () => {
        setFormData({
            nom: "",
            prenom: "",
            email: "",
            filiere: FILIERES[0],
            niveau: NIVEAUX[0],
            pays: PAYS[0],
            matricule: `2IE-${new Date().getFullYear()}-${String(etudiants.length + 1).padStart(4, "0")}`,
        });
        setFormModal({ mode: "create" });
    };

    const openEdit = (e: Etudiant2iE) => {
        setFormData({
            nom: e.nom,
            prenom: e.prenom,
            email: e.email,
            filiere: e.filiere,
            niveau: e.niveau,
            pays: e.pays,
            matricule: e.matricule,
        });
        setFormModal({ mode: "edit", initial: e });
    };

    const handleFormSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (formModal?.mode === "create") {
            const newId = etudiants.length > 0 ? Math.max(...etudiants.map((x) => x.id)) + 1 : 1;
            setEtudiants((prev) => [...prev, { ...formData, id: newId }]);
        } else if (formModal?.mode === "edit" && formModal.initial) {
            setEtudiants((prev) =>
                prev.map((e) => (e.id === formModal.initial!.id ? { ...formData, id: e.id, photo: e.photo } : e))
            );
        }
        setFormModal(null);
    };

    const handleDelete = (e: Etudiant2iE) => {
        if (typeof window !== "undefined" && window.confirm(`Supprimer ${e.prenom} ${e.nom} ?`)) {
            setEtudiants((prev) => prev.filter((x) => x.id !== e.id));
            setSelection((prev) => {
                const next = new Set(prev);
                next.delete(e.id);
                return next;
            });
        }
    };

    return (
        <>
            <section className="bg-base-200 text-base-content pt-12 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <h2 className="text-h2 font-bold text-primary">Liste des étudiants</h2>
                        <button type="button" className="btn btn-primary" onClick={openCreate}>
                            Créer
                        </button>
                    </div>
                    <div className="overflow-x-auto rounded-box bg-base-100 shadow-lg border border-base-300">
                        <table className="table">
                            <thead>
                                <tr className="bg-base-200/80 text-base-content">
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={selection.size === etudiantsAffiches.length && etudiantsAffiches.length > 0}
                                                onChange={toggleSelectionTous}
                                            />
                                        </label>
                                    </th>
                                    <th className="text-body-sm font-semibold">Étudiant</th>
                                    <th className="text-body-sm font-semibold">Filière</th>
                                    <th className="text-body-sm font-semibold">Niveau</th>
                                    <th className="text-body-sm font-semibold">Pays</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {etudiantsAffiches.map((e) => (
                                    <tr key={e.id} className="hover bg-base-100">
                                        <th>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                    checked={selection.has(e.id)}
                                                    onChange={() => toggleSelection(e.id)}
                                                />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={e.photo || "https://img.daisyui.com/images/profile/demo/1@94.webp"}
                                                            alt={`${e.prenom} ${e.nom}`}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-base-content">
                                                        {e.prenom} {e.nom}
                                                    </div>
                                                    <div className="text-body-sm opacity-70">{e.matricule}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary badge-outline badge-sm font-normal">{e.filiere}</span>
                                        </td>
                                        <td className="text-body-sm">{e.niveau}</td>
                                        <td className="text-body-sm">{e.pays}</td>
                                        <th>
                                            <div className="flex flex-wrap gap-1">
                                                <button
                                                    type="button"
                                                    className="btn btn-ghost btn-xs btn-primary"
                                                    onClick={() => setEtudiantSelectionne(e)}
                                                >
                                                    Détails
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-ghost btn-xs"
                                                    onClick={() => openEdit(e)}
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-ghost btn-xs text-error"
                                                    onClick={() => handleDelete(e)}
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    {showVoirPlus && (
                        <div className="mt-6 mb-6 flex justify-center">
                            <Link
                                href="/etudiants"
                                className="btn btn-primary text-body font-medium"
                            >
                                Voir plus
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal Détails étudiant */}
            <dialog id="modal_etudiant" className="modal" open={!!etudiantSelectionne}>
                <div className="modal-box max-w-md">
                    <form method="dialog">
<button
                                                            type="button"
                                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                                            onClick={() => setEtudiantSelectionne(null)}
                                                            aria-label="Fermer"
                                                        >
                                                            ✕
                                                        </button>
                    </form>
                    {etudiantSelectionne && (
                        <>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-20 h-20">
                                        <img
                                            src={
                                                etudiantSelectionne.photo ||
                                                "https://img.daisyui.com/images/profile/demo/1@94.webp"
                                            }
                                            alt={`${etudiantSelectionne.prenom} ${etudiantSelectionne.nom}`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-h3 font-bold text-base-content">
                                        {etudiantSelectionne.prenom} {etudiantSelectionne.nom}
                                    </h3>
                                    <p className="text-body-sm text-primary font-medium">
                                        {etudiantSelectionne.matricule}
                                    </p>
                                </div>
                            </div>
                            <dl className="space-y-3 text-body-sm">
                                <div>
                                    <dt className="font-semibold text-base-content/70">Email</dt>
                                    <dd className="text-base-content">{etudiantSelectionne.email}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-base-content/70">Filière</dt>
                                    <dd className="text-base-content">{etudiantSelectionne.filiere}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-base-content/70">Niveau</dt>
                                    <dd className="text-base-content">{etudiantSelectionne.niveau}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-base-content/70">Pays</dt>
                                    <dd className="text-base-content">{etudiantSelectionne.pays}</dd>
                                </div>
                            </dl>
                        </>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button type="button" onClick={() => setEtudiantSelectionne(null)}>
                        fermer
                    </button>
                </form>
            </dialog>

            {/* Modal formulaire Créer / Modifier */}
            <dialog className="modal" open={!!formModal}>
                <div className="modal-box max-w-lg">
                    <h3 className="text-h3 font-bold text-primary mb-4">
                        {formModal?.mode === "create" ? "Ajouter un étudiant" : "Modifier l'étudiant"}
                    </h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-control gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="form-control">
                                    <span className="label-text font-medium">Nom</span>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={formData.nom}
                                        onChange={(ev) => setFormData((d) => ({ ...d, nom: ev.target.value }))}
                                        required
                                    />
                                </label>
                                <label className="form-control">
                                    <span className="label-text font-medium">Prénom</span>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={formData.prenom}
                                        onChange={(ev) => setFormData((d) => ({ ...d, prenom: ev.target.value }))}
                                        required
                                    />
                                </label>
                            </div>
                            <label className="form-control">
                                <span className="label-text font-medium">Email</span>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                    value={formData.email}
                                    onChange={(ev) => setFormData((d) => ({ ...d, email: ev.target.value }))}
                                    required
                                />
                            </label>
                            <label className="form-control">
                                <span className="label-text font-medium">Matricule</span>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    value={formData.matricule}
                                    onChange={(ev) => setFormData((d) => ({ ...d, matricule: ev.target.value }))}
                                    required
                                />
                            </label>
                            <label className="form-control">
                                <span className="label-text font-medium">Filière</span>
                                <select
                                    className="select select-bordered w-full"
                                    value={formData.filiere}
                                    onChange={(ev) => setFormData((d) => ({ ...d, filiere: ev.target.value }))}
                                >
                                    {FILIERES.map((f) => (
                                        <option key={f} value={f}>{f}</option>
                                    ))}
                                </select>
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="form-control">
                                    <span className="label-text font-medium">Niveau</span>
                                    <select
                                        className="select select-bordered w-full"
                                        value={formData.niveau}
                                        onChange={(ev) => setFormData((d) => ({ ...d, niveau: ev.target.value }))}
                                    >
                                        {NIVEAUX.map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </label>
                                <label className="form-control">
                                    <span className="label-text font-medium">Pays</span>
                                    <select
                                        className="select select-bordered w-full"
                                        value={formData.pays}
                                        onChange={(ev) => setFormData((d) => ({ ...d, pays: ev.target.value }))}
                                    >
                                        {PAYS.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn btn-ghost" onClick={() => setFormModal(null)}>
                                Annuler
                            </button>
                            <button type="submit" className="btn btn-primary">
                                {formModal?.mode === "create" ? "Créer" : "Enregistrer"}
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button type="button" onClick={() => setFormModal(null)}>fermer</button>
                </form>
            </dialog>
        </>
    );
};

export default Liste;
