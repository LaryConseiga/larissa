"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { RotateCcw, Shuffle, ChevronLeft, ChevronRight } from "lucide-react";

export interface AdminCard {
  id: number;
  role: string;
  name: string;
  description: string;
}

interface CardStackProps {
  cards: AdminCard[];
  className?: string;
}

export default function CardStack({ cards: initialCards, className = "" }: CardStackProps) {
  const [cards, setCards] = useState<AdminCard[]>(initialCards);
  const [dragDirection, setDragDirection] = useState<"up" | "down" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  const offset = 10;
  const scaleStep = 0.06;
  const dimStep = 0.15;
  const stiff = 170;
  const damp = 26;
  const borderRadius = 12;
  const swipeThreshold = 50;

  const spring = {
    type: "spring" as const,
    stiffness: stiff,
    damping: damp,
  };

  const moveToEnd = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const resetCards = () => {
    setCards(initialCards);
    setCurrentIndex(0);
  };

  const handleDragEnd = (_: unknown, info: { velocity: { y: number }; offset: { y: number } }) => {
    const velocity = info.velocity.y;
    const offsetY = info.offset.y;

    if (Math.abs(offsetY) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offsetY < 0 || velocity < 0) {
        setDragDirection("up");
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection("down");
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }
    dragY.set(0);
  };

  if (initialCards.length === 0) return null;

  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center py-10 px-4 bg-primary/10 rounded-2xl ${className}`}
    >
      {/* Contrôles */}
      <div className="flex gap-2 mb-4 z-30">
        <motion.button
          onClick={resetCards}
          className="btn btn-ghost btn-sm btn-circle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Réinitialiser"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
        <motion.button
          onClick={shuffleCards}
          className="btn btn-ghost btn-sm btn-circle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Mélanger"
        >
          <Shuffle className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Navigation */}
      <motion.button
        onClick={moveToStart}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle z-20"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={moveToEnd}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle z-20"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Stack de cartes */}
      <div className="relative w-48 sm:w-52 aspect-[3/4] overflow-visible z-10">
        <ul className="relative w-full h-full m-0 p-0 list-none">
          <AnimatePresence>
            {cards.map((card, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.3, 1 - i * dimStep);
              const baseZ = cards.length - i;

              return (
                <motion.li
                  key={card.id}
                  className="absolute w-full h-full overflow-hidden border-2 border-base-300 bg-base-100 rounded-box cursor-grab active:cursor-grabbing flex flex-col p-3 sm:p-4 justify-center"
                  style={{
                    borderRadius: `${borderRadius}px`,
                    touchAction: "none",
                    boxShadow: isFront
                      ? "0 25px 50px rgba(0,0,0,0.15)"
                      : "0 15px 30px rgba(0,0,0,0.08)",
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000,
                  }}
                  animate={{
                    top: `${i * -offset}%`,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: baseZ,
                    opacity: dragDirection && isFront ? 0 : 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.2 },
                  }}
                  transition={spring}
                  drag={isFront ? "y" : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDrag={(_, info) => {
                    if (isFront) dragY.set(info.offset.y);
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          zIndex: cards.length + 1,
                          scale: 1.05,
                        }
                      : {}
                  }
                >
                  <h3 className="text-body-lg font-semibold text-primary leading-tight">{card.role}</h3>
                  <p className="text-body font-medium text-base-content mt-1">{card.name}</p>
                  <p className="text-body-sm text-base-content/80 mt-2 line-clamp-3">{card.description}</p>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      {/* Indicateur de position */}
      <div className="flex gap-2 mt-4 z-20">
        {initialCards.map((_, i) => (
          <motion.div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex % initialCards.length
                ? "bg-primary w-8"
                : "bg-base-300 w-1.5"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <p className="text-body-sm text-base-content/70 mt-2 z-20">
        Carte {currentIndex + 1} sur {initialCards.length} · Glissez ou utilisez les flèches
      </p>
    </div>
  );
}
