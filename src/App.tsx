import { CartProvider } from './context/CartContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { CategoryRail } from './components/home/CategoryRail';
import { HeroSlider } from './components/home/HeroSlider';
import { MarketplaceHub } from './components/home/MarketplaceHub';
import { FlashDeals } from './components/home/FlashDeals';
import { ProductGrid } from './components/home/ProductGrid';
import { TrustSection } from './components/home/TrustSection';
import { ReviewSection } from './components/home/ReviewSection';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { QuickViewModal } from './components/ui/QuickViewModal';
import { CartDrawer } from './components/ui/CartDrawer';
import { PincodeModal } from './components/ui/PincodeModal';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-brand-accent selection:text-white pb-16 md:pb-0">
      {/* Top Banner & Header */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1">
        <CategoryRail />
        <HeroSlider />
        <MarketplaceHub />
        <FlashDeals />
        <ProductGrid />
        <TrustSection />
        <ReviewSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile App-like Bottom Navigation */}
      <MobileBottomNav />

      {/* Global Interactive Overlays */}
      <QuickViewModal />
      <CartDrawer />
      <PincodeModal />
      <WhatsAppButton />
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
