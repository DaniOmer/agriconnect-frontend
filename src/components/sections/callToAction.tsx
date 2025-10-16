import Link from "next/link";
import { MoveRight } from "lucide-react";

function CallToAction() {
  return (
    <section className="bg-foreground py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 px-4 xl:px-0">
        <h1>Produits frais & Bio</h1>
        <p className="text-3xl lg:text-5xl font-medium font-title leading-10">
          Besoin de produits frais <br /> et bio chaque semaine ?
        </p>
        <Link
          href="/store"
          className="w-fit flex gap-3 px-6 py-3 rounded-full bg-banner text-white"
        >
          Commander maintenant
          <MoveRight />
        </Link>
      </div>
    </section>
  );
}
export default CallToAction;
