import { Video, Camera } from 'lucide-react';
interface CategorySectionProps {
  onSelectCategory: (category: 'videos' | 'photos') => void;
  onGoBack: () => void;
}
const CategorySection = ({
  onSelectCategory,
  onGoBack
}: CategorySectionProps) => {
  return <div className="min-h-screen flex flex-col justify-center items-center p-8 animate-fade-in">
      {/* Back Button */}
      <button onClick={onGoBack} className="absolute top-8 left-8 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
        ← Zurück
      </button>

      {/* Title */}
      <h2 className="text-6xl font-bold text-white mb-4 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-scale-in">
        Wähle deine Kategorie
      </h2>
      <p className="text-xl text-pink-200 mb-16 text-center max-w-2xl">Entdecke meine geilen Bilder und Videos</p>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
        {/* Videos Category */}
        <div onClick={() => onSelectCategory('videos')} className="group relative bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-12 border border-pink-500/30 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 hover:border-pink-400/50 animate-slide-in-right">
          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-600/10 to-purple-600/10 group-hover:from-pink-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
          
          <div className="relative z-10 text-center">
            <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
              <Video className="w-24 h-24 text-pink-400 mx-auto group-hover:text-pink-300" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
              Videos
            </h3>
            <p className="text-lg text-pink-200 mb-6">
              Hochwertige Video-Inhalte in Premium-Qualität
            </p>
            <div className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-pink-500 transition-colors duration-300">
              6 Exklusive Sets
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
        </div>

        {/* Photos Category */}
        <div onClick={() => onSelectCategory('photos')} className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-12 border border-purple-500/30 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/50 animate-slide-in-right" style={{
        animationDelay: '0.2s'
      }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500" />
          
          <div className="relative z-10 text-center">
            <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-24 h-24 text-purple-400 mx-auto group-hover:text-purple-300" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
              Fotos
            </h3>
            <p className="text-lg text-purple-200 mb-6">
              Atemberaubende Foto-Sets in höchster Auflösung
            </p>
            <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-purple-500 transition-colors duration-300">
              6 Exklusive Sets
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 animate-spin" style={{
      animationDuration: '20s'
    }}>
        <div className="w-8 h-8 border-2 border-pink-400 rounded-full opacity-30" />
      </div>
      <div className="absolute bottom-20 left-20 animate-spin" style={{
      animationDuration: '15s'
    }}>
        <div className="w-6 h-6 border-2 border-purple-400 rounded-full opacity-30" />
      </div>
    </div>;
};
export default CategorySection;