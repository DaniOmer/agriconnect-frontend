import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

import images from "@/contantes/images/images";

function Banner() {
  return (
    <section className="bg-background py-10 md:py-20">
      <div className="container mx-auto flex flex-col-reverse xl:flex-row items-center gap-10 xl:gap-40">
        <div>
          <span className="text-sm">Bienvenue chez Agriconnect</span>
          <h1 className="font-bold font-title text-3xl lg:text-5xl mt-2 mb-4">
            Soutenez nos agriculteurs, <br /> savourez le meilleur du terroir.
          </h1>
          <p>
            Découvrez une sélection de produits frais et locaux directement
            issus des fermes de Guinée. Chez Agriconnect, nous valorisons le
            travail des producteurs et vous rapprochons des saveurs authentiques
            de notre terre.
          </p>
          <Link
            href={"/store"}
            className="flex gap-2 px-6 py-3 mt-12 rounded-full bg-banner w-fit text-white"
          >
            Commander maintenant
            <MoveRight />
          </Link>
        </div>
        <div className="relative z-10 min-w-[15rem] lg:min-w-[25rem]">
          <div className="relative z-10 lg:translate-x-12">
            <Image
              src={images.Women}
              alt="Black woman fruit and vegetable vendor"
              className="w-[15rem] lg:w-[20rem]"
            />
          </div>
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 bg-banner min-w-[18rem] min-h-[18rem] lg:w-[25rem] lg:h-[25rem] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
