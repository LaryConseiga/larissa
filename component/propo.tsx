"use client";

import React from "react";
import CardStack from "./ui/card-stack";
import type { AdminCard } from "./ui/card-stack";
import AproposBackground from "./apropos-background";

const administration: AdminCard[] = [
  {
    id: 1,
    role: "Directeur Général",
    name: "Prof. El Hadji Bamba DIAW",
    description:
      "Dirige l'institut, supervise la stratégie académique et représente 2iE dans des partenariats internationaux et événements institutionnels.",
  },
  {
    id: 2,
    role: "Secrétaire Général",
    name: "Prof. Hamma YACOUBA",
    description: "Chargé de coordonner l'administration générale de l'institut.",
  },
  {
    id: 3,
    role: "Directeur de la Recherche",
    name: "Prof. Arouna KARAMBIRI",
    description: "Responsable des activités de recherche et des programmes scientifiques.",
  },
  {
    id: 4,
    role: "Directeur des Enseignements et Affaires Académiques",
    name: "Prof. Mahamoudou KOITA",
    description: "Supervise les programmes d'enseignement et la légitimité académique des formations.",
  },
  {
    id: 5,
    role: "Directeur des Finances et de la Comptabilité",
    name: "Tonlitiom Ibrahim HEBIE",
    description: "Responsable de la gestion financière.",
  },
  {
    id: 6,
    role: "Directeur de l'Entrepreneuriat, de la Coopération et de la Formation Continue",
    name: "Dr DJIM DOUMBE DAMBA",
    description: "Pilote les activités entrepreneuriales et les formations professionnelles.",
  },
  {
    id: 7,
    role: "Directeur des Ressources Humaines",
    name: "M. Noufou SANOGO",
    description: "Responsable du personnel et des politiques RH.",
  },
  {
    id: 8,
    role: "Directeur des Services Généraux",
    name: "M. Amadou SIMAL",
    description: "Supervise la logistique et les services internes.",
  },
  {
    id: 9,
    role: "Directrice de la Communication, du Marketing et de l'Audiovisuel",
    name: "Mme Farida THIOMBIANO",
    description: "En charge de l'image, des médias et de la communication externe.",
  },
  {
    id: 10,
    role: "Directeur des Systèmes d'Information",
    name: "M. Ephrem TIEMTORE",
    description: "Responsable des technologies numériques.",
  },
  {
    id: 11,
    role: "Assistante du Directeur Général",
    name: "Amélie DAYAMBA/ZONGO",
    description: "Soutient l'équipe de direction dans ses fonctions administratives.",
  },
];

export default function Propo() {
  return (
    <AproposBackground overlayOpacity="medium">
      <div className="min-h-screen text-base-content">
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-16">
        {/* Titre principal */}
        <header className="text-center mb-12">
          <h1 className="text-h1 font-bold text-primary mb-4">Qu'est-ce que 2iE ?</h1>
          <p className="text-body-lg text-base-content/90 max-w-3xl mx-auto">
            2iE (Institut International d'Ingénierie de l'Eau et de l'Environnement) est un institut international
            d'enseignement supérieur et de recherche appliquée basé à Ouagadougou, au Burkina Faso.
          </p>
        </header>

        <div className="space-y-12">
          {/* Présentation générale */}
          <section className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-h2 font-semibold text-primary">Présentation générale</h2>
              <div className="space-y-4 text-body">
                <p>
                  C'est une école d'ingénieurs et un centre de recherche spécialisé dans l'eau, l'énergie, l'environnement,
                  le génie civil, l'électricité et les mines.
                </p>
                <p>
                  L'institut propose des formations de haut niveau : Bachelor (Bac+3), Master (Bac+5), Masters
                  spécialisés, MBA et Doctorat, ainsi que des formations continues pour professionnels.
                </p>
                <p>
                  Les diplômes délivrés sont accrédités internationalement par la Commission française des Titres
                  d'Ingénieur (CTI) et reconnues en Europe (label EUR-ACE) et en Afrique.
                </p>
                <p>
                  2iE fonctionne selon un modèle de gouvernance public-privé, regroupant des États fondateurs, des
                  entreprises privées, des institutions académiques et des partenaires scientifiques.
                </p>
              </div>
            </div>
          </section>

          {/* Mission principale */}
          <section className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-h2 font-semibold text-primary">Mission principale</h2>
              <p className="text-body-lg text-base-content/90">
                L'institut a pour objectif de former des ingénieurs-entrepreneurs africains capables de répondre aux défis
                de l'eau, de l'énergie, de l'environnement et du développement durable sur le continent.
              </p>
            </div>
          </section>

          {/* Chiffres et communauté */}
          <section className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-h2 font-semibold text-primary">Chiffres et communauté</h2>
              <ul className="space-y-2 text-body">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Étudiants issus de plus de 30 pays africains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Enseignants et chercheurs internationaux.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Campus principal à Ouagadougou et présence dans d'autres pays d'Afrique.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Administration et gouvernance */}
          <section className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-h2 font-semibold text-primary mb-2">2iE – Administration et gouvernance</h2>
              <p className="text-body-sm text-base-content/80 mb-8">
                Membres principaux de l'administration (structure officielle publiée par l'institut).
              </p>
              <CardStack cards={administration.slice(0, 5)} />
            </div>
          </section>

          
        </div>
        </div>
      </div>
    </AproposBackground>
  );
}
