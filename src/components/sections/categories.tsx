import CategoryCard from "../categoryCard";
import images from "@/contantes/images/images";

function Categories() {
  return (
    <section className="py-16 px-4 xl:px-0">
      <div className="container mx-auto">
        <h1 className="mb-10 text-2xl font-medium">
          Choisissez vos catégories de produits préférées
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          <CategoryCard
            image={images.Cassava}
            alt="Tubers & Roots"
            name="Tubercules & Racines"
            className="bg-background"
          />
          <CategoryCard
            image={images.Vegetables}
            alt="Fruits & Vegetables"
            name="Fruits & Légumes"
            className="bg-purple-100"
          />
          <CategoryCard
            image={images.Cassava}
            alt="Cereals & Grains"
            name="Céréales & Grains"
            className="bg-orange-200"
          />
          <CategoryCard
            image={images.Cassava}
            alt="Processed products"
            name="Produits transformés"
            className="bg-purple-200"
          />
          <CategoryCard
            image={images.Tomato}
            alt="Spices & condiments"
            name="Épices & condiments"
            className="bg-foreground"
          />
        </div>
      </div>
    </section>
  );
}
export default Categories;
