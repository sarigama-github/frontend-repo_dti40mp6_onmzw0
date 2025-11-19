export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <blockquote className="text-white/90">
              <p className="text-lg">“In two weeks I felt my habits click like never before. This is the library I wish I had years ago.”</p>
              <footer className="mt-3 text-sm text-white/60">— Jordan, Product Designer</footer>
            </blockquote>
            <blockquote className="text-white/90">
              <p className="text-lg">“The writing is crisp and the frameworks are practical. It’s like a personal OS upgrade.”</p>
              <footer className="mt-3 text-sm text-white/60">— Sana, Founder</footer>
            </blockquote>
            <blockquote className="text-white/90">
              <p className="text-lg">“Bought one, came back for three more. The updates and bonuses are icing on the cake.”</p>
              <footer className="mt-3 text-sm text-white/60">— Marco, Engineer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
