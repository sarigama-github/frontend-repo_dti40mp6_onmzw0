import { useMemo, useState } from 'react';
import { useCart } from '../components/CartContext';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, closeCart } = useCart();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const subtotal = useMemo(() => items.reduce((s, i) => s + (i.price || 0) * i.qty, 0), [items]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate navigate to a success page or alert
    alert(`Thank you, ${form.firstName}! We will email your downloads to ${form.email}.`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.16),transparent)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <Link to="/" onClick={closeCart} className="text-white/70 hover:text-white">Continue shopping</Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-white">Contact information</h2>
              <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">First name</label>
                  <input name="firstName" value={form.firstName} onChange={onChange} required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Last name</label>
                  <input name="lastName" value={form.lastName} onChange={onChange} required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-white/70">Email address</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl bg-white/10 text-white px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-white/30" />
                </div>
                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2.5 font-semibold hover:bg-white/90 active:scale-[0.98] transition-all">
                    <CreditCard className="h-4 w-4" />
                    Pay now
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-white font-semibold">Order summary</h3>
              {items.length === 0 ? (
                <p className="mt-4 text-white/70">Your cart is empty.</p>
              ) : (
                <ul className="mt-4 space-y-4">
                  {items.map((i) => (
                    <li key={i.id} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-medium leading-tight">{i.title}</p>
                        <p className="text-white/60 text-sm">By {i.author}</p>
                        <p className="text-white/70 text-sm mt-1">Qty: {i.qty}</p>
                      </div>
                      <div className="text-white/90 font-semibold">${(((i.price || 0) * i.qty)).toFixed(2)}</div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
                <div className="flex items-center justify-between text-white/90">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-white/60">
                  <span className="text-sm">Taxes</span>
                  <span className="text-sm">Calculated at checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
