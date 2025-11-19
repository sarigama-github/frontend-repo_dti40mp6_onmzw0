import { X, ShoppingCart, Trash2 } from "lucide-react";

export default function CartDrawer({ open, items = [], onClose, onRemoveItem, onShopNow }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-slate-950/95 backdrop-blur-xl border-l border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-white/10 flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-white font-semibold">Your Cart</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white rounded-lg p-2"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 h-[calc(100%-64px)] overflow-y-auto">
          {items.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-white/80 text-lg">cart is empty</p>
              <button
                onClick={onShopNow}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                shop now
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-white font-medium leading-tight">{item.title}</p>
                    <p className="text-white/60 text-sm">By {item.author}</p>
                    <p className="text-white/70 text-sm mt-1">Qty: {item.qty}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-white/70 hover:text-white rounded-lg p-2"
                    aria-label={`Remove ${item.title}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}
