import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import bigLogo from "@/assets/branding/logo_big.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { waLink } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/corporate-conclaves", label: "Corporate Conclaves" },
  { to: "/packages", label: "Packages" },
  { to: "/cruises", label: "Cruises" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const SPECIAL_TOURS = [
  { to: "/corporate-conclaves", label: "Corporate Conclaves" },
  { to: "/batch-reunions", label: "Batch Re-Unions" },
  { to: "/senior-citizens", label: "Senior Citizens" },
  { to: "/honeymoon", label: "Honeymoon" },
  { to: "/golf-tourism", label: "Golf Tourism" },
] as const;

const ANCILLARY = [
  { to: "/hotels", label: "Hotels" },
  { to: "/flights", label: "Flights" },
  { to: "/visa", label: "Visa" },
  { to: "/foreign-travel-card", label: "Foreign Travel Card" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [specialOpen, setSpecialOpen] = useState(false);
  const [ancOpen, setAncOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_4px_24px_-16px_rgba(41,59,147,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* <BrandLogo /> */}
        <img src={bigLogo} alt="UniSetGo" width={150} className="mb-2" />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 xl:flex py-3">
          {/* Home */}
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            About
          </Link>

          {/* Packages */}
          <Link
            to="/packages"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Packages
          </Link>

          {/* Corporate Conclave */}
          <Link
            to="/corporate-conclaves"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Corporate Conclaves
          </Link>

          {/* Special Tours Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 outline-none transition hover:text-primary hover:bg-secondary data-[state=open]:bg-secondary data-[state=open]:text-primary">
              Speciality Tours
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-56">
              {SPECIAL_TOURS.map((tour) => (
                <DropdownMenuItem key={tour.to} asChild>
                  <Link to={tour.to} className="cursor-pointer">
                    {tour.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cruises */}
          <Link
            to="/cruises"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Cruises
          </Link>

          {/* Gallery */}
          {/* <Link
            to="/gallery"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Gallery
          </Link> */}

          {/* Ancillary Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 outline-none transition hover:text-primary hover:bg-secondary data-[state=open]:bg-secondary data-[state=open]:text-primary">
              Ancillary Services
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-48">
              {ANCILLARY.map((a) => (
                <DropdownMenuItem key={a.to} asChild>
                  <Link to={a.to} className="cursor-pointer">
                    {a.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact */}
          <Link
            to="/contact"
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary"
            activeProps={{ className: "text-primary bg-secondary" }}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Button
            asChild
            className="rounded-full py-3 gradient-accent text-accent-foreground shadow-[var(--shadow-card)] hover:opacity-95"
          >
            <a
              href={waLink("Hi UniSetGo, I'd like to plan a custom trip.")}
              target="_blank"
              rel="noreferrer"
            >
              Plan a Trip
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[86vw] max-w-sm overflow-y-auto p-0"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              {/* <BrandLogo /> */}

              <img
                src={bigLogo}
                alt="UniSetGo"
                width={150}
                // className="mb-2 -translate-x-3"
              />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-6">
              {/* Main Links */}
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                  activeProps={{ className: "text-primary bg-secondary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Special Tours */}
              <button
                type="button"
                onClick={() => setSpecialOpen((v) => !v)}
                className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
              >
                Special Tours
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    specialOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {specialOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                  {SPECIAL_TOURS.map((tour) => (
                    <Link
                      key={tour.to}
                      to={tour.to}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                      activeProps={{
                        className: "text-primary bg-secondary",
                      }}
                    >
                      {tour.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Ancillary Services */}
              <button
                type="button"
                onClick={() => setAncOpen((v) => !v)}
                className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
              >
                Ancillary Services
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    ancOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {ancOpen && (
                <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                  {ANCILLARY.map((a) => (
                    <Link
                      key={a.to}
                      to={a.to}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                      activeProps={{
                        className: "text-primary bg-secondary",
                      }}
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Button
                asChild
                className="mt-4 rounded-full gradient-accent text-accent-foreground"
              >
                <a
                  href={waLink("Hi UniSetGo, I'd like to plan a custom trip.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Plan a Trip on WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
