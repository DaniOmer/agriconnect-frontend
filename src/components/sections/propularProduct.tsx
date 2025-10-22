import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import images from "@/contantes/images/images";
import { Button } from "../ui/button";
import { StaticImageData } from "next/image";

function PropularProduct() {
  const products = [
    {
      name: "Tomates fraîches",
      price: 8000,
      description: "Tomates rouges et juteuses cultivées localement.",
      per: "kg",
      image: images.Tomato,
    },
    {
      name: "Patates douces",
      price: 6500,
      description: "Patates douces sucrées et riches en nutriments.",
      per: "lot",
      image: images.Potato,
    },
    {
      name: "Manioc frais",
      price: 5000,
      description: "Racines de manioc fraîches issues des fermes guinéennes.",
      per: "kg",
      image: images.Cassava,
    },
    {
      name: "Miel pur de Guinée",
      price: 30000,
      description:
        "Miel naturel non filtré, récolté dans les forêts guinéennes.",
      per: "litre",
      image: images.Honey,
    },
    {
      name: "Poivrons",
      price: 40000,
      description: "Un assortiment coloré de fruits et légumes de saison.",
      per: "panier",
      image: images.Peppers,
    },
    {
      name: "Riz",
      price: 12000,
      description: "Riz étuvé produit dans le nord du pays.",
      per: "kg",
      image: images.Rice,
    },
    {
      name: "Igname",
      price: 15000,
      description: "Igname de qualité pour tout type de préparation.",
      per: "lot",
      image: images.Yam,
    },
    {
      name: "Huile de palme",
      price: 20000,
      description: "Huile de palme produit de manière artisanale.",
      per: "litre",
      image: images.Palmoil,
    },
  ];

  type ProductCardProps = {
    name: string;
    price: number;
    description: string;
    per: string;
    image: StaticImageData;
  };

  const ProductCard = ({
    name,
    price,
    description,
    per,
    image,
  }: ProductCardProps) => {
    return (
      <div>
        <div className="relative w-full rounded-xl bg-slate-100 overflow-hidden p-6 mb-4">
          <Image src={image} alt="Tomates fraîches" />
          <Button className="absolute w-10 h-10 top-3 right-3 bg-white rounded-full hover:bg-banner hover:text-white">
            <Heart />
          </Button>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <h3 className="font-medium text-xl">{name}</h3>
            <p>
              {price} GNF/{per}
            </p>
          </div>
          <p className="w-full truncate text-sm">{description}</p>
          <div className="flex gap-1 items-center mt-3">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={15}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}
            <span className="text-sm ml-2">(130)</span>
          </div>
          <Button className="px-6 py-3 border border-black rounded-full mt-4 hover:bg-banner hover:border-banner hover:text-white">
            Ajouter au panier
          </Button>
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className="container mx-auto py-10 mb-10 px-4 xl:px-0">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-title font-medium text-2xl">
            Les produits populaires
          </h1>
          <Link href="products?popular=true" className="hover:underline">
            Voir plus
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              name={product.name}
              description={product.description}
              price={product.price}
              per={product.per}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PropularProduct;
