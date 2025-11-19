import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { useCart } from './components/CartContext'

function App() {
  const { open, closeCart, items, removeItem } = useCart();

  const handleShopNow = () => {
    closeCart();
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background luxury gradient + subtle grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.16),transparent)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <Testimonials />
      </main>
      <Footer />

      <CartDrawer
        open={open}
        items={items}
        onClose={closeCart}
        onRemoveItem={removeItem}
        onShopNow={handleShopNow}
      />
    </div>
  )
}

export default App
