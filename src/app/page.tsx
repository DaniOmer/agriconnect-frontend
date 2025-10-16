import Banner from "@/components/sections/banner";
import Categories from "@/components/sections/categories";
import Community from "@/components/sections/community";
import Trust from "@/components/sections/trust";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Banner />
        <Categories />
        <Community />
        <Trust />
      </main>
    </div>
  );
}
