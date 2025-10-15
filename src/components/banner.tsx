import Link from "next/link";

function Banner() {
  return (
    <section>
      <div>
        <span>Bienvenue chez Agriconnect</span>
        <h1>
          Soutenez nos agriculteurs, savourez le meilleur du terroir avec
          Agriconnect
        </h1>
        <p>
          Découvrez une sélection de produits frais et locaux directement issus
          des fermes de Guinée. Chez Agriconnect, nous valorisons le travail des
          producteurs et vous rapprochons des saveurs authentiques de notre
          terre.
        </p>
        <Link href={"/store"}>Commander maintenant</Link>
      </div>
    </section>
  );
}
export default Banner;
