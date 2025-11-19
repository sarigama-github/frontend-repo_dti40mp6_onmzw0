import { Star, Clock, Download, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Expertly Curated",
    desc: "Handpicked titles with proven impact across mindset, productivity, and wellbeing.",
  },
  {
    icon: Clock,
    title: "Bite-size Learning",
    desc: "Learn in focused sprints. Most books are designed to be finished in a weekend.",
  },
  {
    icon: Download,
    title: "Instant Access",
    desc: "Download immediately on purchase. Compatible with all your favorite devices.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Updates",
    desc: "Buy once. Enjoy future revisions and bonus chapters for free.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/10">
              <div className="h-10 w-10 rounded-xl bg-white text-slate-900 flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.25)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
