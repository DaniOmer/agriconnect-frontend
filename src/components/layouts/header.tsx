"use client";

import Link from "next/link";
import { CircleUserRound, ShoppingCart } from "lucide-react";

import SearchInput from "../searchInput";

function Header() {
  const handleSearchSubmit = () => {
    console.log("Is submitting...");
  };
  return (
    <header className="py-4 lg:py-8 blur-in">
      <nav className="container fixed translate-x-1/2 right-1/2 flex justify-between items-center gap-3 lg:gap-28">
        <h1 className="uppercase text-xl font-bold">Agriconnect</h1>
        <div className="flex-1 flex justify-between items-center">
          <ul className="flex gap-4 lg:gap-8">
            <li>
              <Link href="/store">Boutique</Link>
            </li>
            <li>
              <Link href="/store">Blog</Link>
            </li>
            <li>
              <Link href="/store">Produit</Link>
            </li>
            <li>
              <Link href="/store">Contact</Link>
            </li>
            <li>
              <Link href="/store">À propos</Link>
            </li>
          </ul>
          <SearchInput onSubmit={handleSearchSubmit} />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <CircleUserRound />
            <p>Compte</p>
          </div>
          <div className="flex items-center gap-1.5">
            <ShoppingCart />
            <p>Panier</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
