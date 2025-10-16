import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

import images from "@/contantes/images/images";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 xl:px-0 ">
        <div className="py-10 lg:py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 xl:gap-32">
          <div className="md:col-span-2 flex flex-col">
            <Image
              src={images.Logo}
              alt="Agriconnect logo"
              className="w-40 mb-4"
            />
            <p>
              Agriconnect est une plateforme 100% guinéenne dédiée à la
              promotion des produits agricoles locaux. Notre mission :
              rapprocher producteurs et consommateurs pour une alimentation plus
              saine, plus équitable et plus durable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:col-span-2 lg:col-span-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="font-semibold text-base mb-2">
                Qui sommes-nous ?
              </h2>
              <ul>
                <li>
                  <Link href="/about-us">Notre histoire</Link>
                </li>
                <li>
                  <Link href="/our-values">Nos valeurs</Link>
                </li>
                <li>
                  <Link href="/contact-us">Nous contacter</Link>
                </li>
                <li>
                  <Link href="/help-center">Aide</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-base mb-2">Liens utils</h2>
              <ul>
                <li>
                  <Link href="/our-partners">Nos fournisseurs</Link>
                </li>
                <li>
                  <Link href="/payment-method">Moyens de paiement</Link>
                </li>
                <li>
                  <Link href="/delivery-policy">Délai de livraison</Link>
                </li>
                <li>
                  <Link href="/questions-and-answers">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-base mb-2">
                Nos meilleurs produits
              </h2>
              <ul>
                <li>
                  <Link href="/products?name=cassava">Manioc</Link>
                </li>
                <li>
                  <Link href="/products?name=tomato">Tomate grappe</Link>
                </li>
                <li>
                  <Link href="/products?name=vegetable">Panier de légume</Link>
                </li>
                <li>
                  <Link href="/products?name=yam">Sac d&apos;igname</Link>
                </li>
                <li>
                  <Link href="/products?name=honey">Pot de miel</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-black py-10 flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
          <ul className="flex gap-4">
            <li>
              <Link href="terms-of-use" className="underline cursor-pointer">
                Condition générale
              </Link>
            </li>
            <li>
              <Link href="privacy-policy" className="underline cursor-pointer">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
          <p className="uppercase">
            &copy; {new Date().getFullYear()} Agriconnect - Tous droits réservés
          </p>
          <div className="flex justify-center items-center gap-4">
            <FontAwesomeIcon icon={faCcVisa} size="2x" />
            <FontAwesomeIcon icon={faCcMastercard} size="2x" />
            <FontAwesomeIcon icon={faCcPaypal} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
