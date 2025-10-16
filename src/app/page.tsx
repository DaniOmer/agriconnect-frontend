import Banner from "@/components/sections/banner";
import Categories from "@/components/sections/categories";
import CallToAction from "@/components/sections/callToAction";
import Community from "@/components/sections/community";
import Trust from "@/components/sections/trust";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Banner />
        <Categories />
        <CallToAction />
        <Community />
        <Trust />
      </main>
    </div>
  );
}
