"use client";

import Link from "next/link";
import Image from "next/image";
import { CircleUserRound, ShoppingCart, Menu, X } from "lucide-react";
import SearchInput from "../searchInput";
import { Button } from "../ui/button";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import images from "@/contantes/images/images";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { href: "/store", label: "Boutique" },
      { href: "/blog", label: "Blog" },
      { href: "/products", label: "Produit" },
      { href: "/contact", label: "Contact" },
      { href: "/about", label: "À propos" },
    ],
    []
  );

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (q?: string) => {
    if (!q) return;
    // TODO: router.push(`/search?q=${encodeURIComponent(q)}`)
    console.log("Search:", q);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="fixed w-full h-[75px] px-4 xl:px-0 flex items-center z-30 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center lg:gap-10 z-50">
        <Image src={images.Logo} alt="Agriconnect logo" className="w-40" />

        <div className="xl:flex-1 flex justify-between items-center">
          <ul className="hidden xl:flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "font-semibold underline underline-offset-4"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <SearchInput
            className="hidden lg:flex"
            onSubmit={handleSearchSubmit}
          />
        </div>

        <div className="hidden xl:flex gap-4">
          <div className="flex items-center gap-1.5">
            <CircleUserRound />
            <p>Compte</p>
          </div>
          <div className="flex items-center gap-1.5">
            <ShoppingCart />
            <p>Panier</p>
          </div>
        </div>

        {/* Mobile */}
        <div className="xl:hidden bg-banner text-white">
          <Button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed z-40 inset-0 min-h-screen top-0 right-0 bottom-0 bg-black/20 transition-opacity ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile navigation */}
      <div className="xl:hidden">
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          className={`fixed left-0 right-0 z-50 top-14  lg:top-20 py-10 bg-banner transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="container mx-auto text-foreground flex flex-col justify-center items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="w-full sm:w-1/2 px-4">
              <SearchInput
                onSubmit={handleSearchSubmit}
                className="w-full flex"
              />
            </li>
          </ul>

          <div className="xl:hidden mt-10 flex justify-center mx-auto gap-16 text-foreground">
            <div className="flex items-center gap-1.5">
              <CircleUserRound />
              <p>Compte</p>
            </div>
            <div className="flex items-center gap-1.5">
              <ShoppingCart />
              <p>Panier</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
