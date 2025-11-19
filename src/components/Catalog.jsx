import { BookOpen, ArrowRight, Plus } from "lucide-react";
import { useCart } from "./CartContext";

const books = [
  {
    id: 1,
    title: "Atomic Focus",
    author: "M. Reyes",
    tagline: "A 14‑day protocol to rebuild deep work.",
    accent: "from-cyan-400/30 via-sky-300/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Mindset OS",
    author: "A. Patel",
    tagline: "Upgrade your beliefs like software.",
    accent: "from-fuchsia-400/30 via-purple-300/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "Sleepcraft",
    author: "T. Nakamura",
    tagline: "Master rest to multiply results.",
    accent: "from-emerald-400/30 via-teal-300/20 to-cyan-500/20",
  },
];

export default function Catalog() {
  const { addItem } = useCart();

  return (
    <section id="catalog" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured Titles</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b) => (
            <article key={b.id} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl">
              <div className={`relative h-64 w-full overflow-hidden`}> 
                <div className={`absolute inset-0 bg-gradient-to-br ${b.accent}`} />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:50px_50px]" />
                <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/40 to-transparent">
                  <div>
                    <h3 className="text-white font-medium text-lg">{b.title}</h3>
                    <p className="text-sm text-white/70">By {b.author}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-white/70">{b.tagline}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-3 py-2 text-sm font-medium hover:bg-white/90 active:scale-[0.98] transition-all">
                    <BookOpen className="h-4 w-4" />
                    Read sample
                  </button>
                  <button
                    onClick={() => addItem({ id: b.id, title: b.title, author: b.author })}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 text-white px-3 py-2 text-sm font-medium hover:bg-white/10 active:scale-[0.98] transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="px-5 pb-5 -mt-2">
                <button className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
