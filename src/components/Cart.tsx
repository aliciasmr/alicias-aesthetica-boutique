
import { Trash2, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface CartProps {
  items: Product[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onGoBack: () => void;
}

const Cart = ({ items, onRemove, onCheckout, onGoBack }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen p-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onGoBack}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          ← Zurück
        </button>
        <h2 className="text-4xl font-bold text-white text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
          <ShoppingCart className="w-10 h-10 text-pink-400" />
          Warenkorb
        </h2>
        <div></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Dein Warenkorb ist leer</h3>
            <p className="text-gray-400">Füge einige Produkte hinzu, um loszulegen!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-20 h-20 bg-cover bg-center rounded-lg"
                        style={{
                          backgroundImage: `url('${item.preview}')`,
                          filter: 'blur(8px) brightness(0.7)',
                        }}
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
                        <p className="text-pink-400 text-sm uppercase font-semibold">{item.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-pink-400">€{item.price}</span>
                      <button
                        onClick={() => onRemove(item.id!)}
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-pink-500/30 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-white">Gesamtsumme:</span>
                <span className="text-4xl font-bold text-pink-400">€{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Zur Kasse gehen
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
