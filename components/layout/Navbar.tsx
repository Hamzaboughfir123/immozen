"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { openPropertyLeadModal } from "@/components/property-lead/lead-modal-events";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`site-header sticky top-0 z-50 w-full ${scrolled ? "site-header-scrolled" : ""}`}
    >
      <Container className="site-header-inner">
        <div className="site-header-brand">
          <a href="#accueil" className="site-logo-link" aria-label={SITE_NAME}>
            <Image
              src="/images/logo-transparent-noir.png"
              alt={SITE_NAME}
              width={2138}
              height={735}
              className="site-logo"
            />
          </a>

          <a
            href={CONTACT.phoneHref}
            className="site-phone site-phone-mobile lg:hidden"
            aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phone}`}
          >
            <span>{CONTACT.phone}</span>
          </a>
        </div>

        <nav className="site-desktop-nav hidden items-center lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions hidden items-center lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="site-phone hidden xl:inline-flex"
            aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phone}`}
          >
            <PhoneIcon />
            <span>{CONTACT.phone}</span>
          </a>
          <Button onClick={() => openPropertyLeadModal()} size="md">
            Confier mon bien
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="site-menu-toggle flex items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="site-mobile-panel max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-brand-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openPropertyLeadModal();
            }}
          >
            Confier mon bien
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h3l1.5 4.2-2 1.7a15.5 15.5 0 006 6l1.7-2L21 14.4v3c0 2-1.6 3.6-3.6 3.6C9.4 21 3 14.6 3 6.6 3 4.6 4.6 3 6.6 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
