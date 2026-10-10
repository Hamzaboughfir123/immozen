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
            href={CONTACT.whatsappHref}
            className="site-phone site-phone-mobile lg:hidden"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phone}`}
          >
            <WhatsAppIcon />
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
            href={CONTACT.whatsappHref}
            className="site-phone hidden xl:inline-flex"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phone}`}
          >
            <WhatsAppIcon />
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

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5C11 9.6 10.6 8.5 10.4 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.2 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z" />
    </svg>
  );
}
