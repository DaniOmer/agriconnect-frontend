import Banner from "@/components/banner";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Banner />
        <Categories />
      </main>
    </div>
  );
}
