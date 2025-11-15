// app/page.tsx
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection'; // Import your new features section

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* You can add more sections here like testimonials, call to action, etc. */}
      
      {/* Basic Footer (optional) */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Your Platform. All rights reserved.</p>
      </footer>
    </main>
  );
}