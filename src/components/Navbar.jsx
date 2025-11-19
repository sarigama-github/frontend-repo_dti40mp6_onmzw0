import { Menu, ShoppingBag, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <div className="h-14 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-white/90 to-white/40 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-slate-900" />
              </div>
              <span className="text-white/90 font-semibold tracking-tight">Lumina Books</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#catalog" className="hover:text-white transition-colors">Catalog</a>
              <a href="#features" className="hover:text-white transition-colors">Why Us</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
            </nav>
            <button className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium rounded-xl bg-white px-3 py-1.5 hover:bg-white/90 active:scale-[0.98] transition-all">
              <ShoppingBag className="h-4 w-4" />
              Cart
            </button>
            <button className="md:hidden text-white/80"><Menu className="h-6 w-6" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}
