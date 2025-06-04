import { useState } from 'react';
import { CreditCard, Mail, MapPin, User, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onGoBack: () => void;
  onOrderComplete: () => void;
}

const Checkout = ({ items, onGoBack, onOrderComplete }: CheckoutProps) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showError, setShowError] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowError(false);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show error message
    setIsProcessing(false);
    setShowError(true);
  };

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
        <h2 className="text-4xl font-bold text-white text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Checkout
        </h2>
        <div></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-pink-400" />
            Bestellübersicht
          </h3>
          
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-black/20 rounded-lg">
                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-pink-400 text-sm uppercase">{item.type}</p>
                </div>
                <span className="text-pink-400 font-semibold">€{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-pink-500/20 pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-white">Gesamtsumme:</span>
              <span className="text-pink-400">€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
          {/* Error Message */}
          {showError && (
            <div className="mb-6 bg-red-900/30 border border-red-500/50 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="text-red-300 font-semibold">Error 408 Request Timeout</h4>
                <p className="text-red-200 text-sm">Die Zahlung konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-purple-400" />
              Zahlungsinformationen
            </h3>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400" />
                E-Mail Adresse
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                placeholder="deine@email.de"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-pink-400" />
                Vollständiger Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                placeholder="Max Mustermann"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                Adresse
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                placeholder="Musterstraße 123"
              />
            </div>

            {/* City and Zip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white font-semibold">Stadt</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="Berlin"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white font-semibold">PLZ</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="12345"
                />
              </div>
            </div>

            {/* Card Number */}
            <div className="space-y-2">
              <label className="text-white font-semibold flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-pink-400" />
                Kartennummer
              </label>
              <input
                type="text"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white font-semibold">Ablaufdatum</label>
                <input
                  type="text"
                  name="expiryDate"
                  required
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div className="space-y-2">
                <label className="text-white font-semibold">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  required
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-pink-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="123"
                  maxLength={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Zahlung wird verarbeitet...
                </div>
              ) : (
                `Jetzt bezahlen - €${total.toFixed(2)}`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
