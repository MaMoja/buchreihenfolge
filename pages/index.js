import HeroSlider from "../components/HeroSlider";
import CategoryGrid from "../components/CategoryGrid";
import BookCarousel from "../components/BookCarousel";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CategoryGrid />
      <BookCarousel />
      {/* Rest der Seite */}
    </div>
  );
}
