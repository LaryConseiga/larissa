"use client";

import React from "react";

interface AproposBackgroundProps {
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: "light" | "medium" | "strong";
}

const overlayClasses = {
  light: "bg-base-200/60",
  medium: "bg-base-200/75",
  strong: "bg-base-200/90",
};

export default function AproposBackground({
  children,
  className = "",
  overlayOpacity = "medium",
}: AproposBackgroundProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      {/* Image de fond : uniquement dans la zone contenu (pas sous navbar ni footer) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/image.png)" }}
        aria-hidden
      />
      {/* Overlay pour la lisibilité du contenu */}
      <div
        className={`absolute inset-0 z-[1] ${overlayClasses[overlayOpacity]}`}
        aria-hidden
      />
      {/* Contenu */}
      <div className="relative z-10 min-h-full">{children}</div>
    </div>
  );
}
