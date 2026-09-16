"use client";

import { openPropertyLeadModal } from "./lead-modal-events";

/** Bouton de la section propriétaires ouvrant le formulaire de contact. */
export function OwnersCtaTrigger({
  children,
  className = "owners-cta",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href="#confier-mon-bien"
      onClick={(e) => {
        e.preventDefault();
        openPropertyLeadModal();
      }}
    >
      {children}
    </a>
  );
}
