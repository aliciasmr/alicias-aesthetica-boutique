import { ArrowDown } from 'lucide-react';
interface HeroProps {
  onScrollToCategories: () => void;
}
const Hero = ({
  onScrollToCategories
}: HeroProps) => {
  return <div className="min-h-screen flex flex-col justify-center items-center text-center animate-fade-in">
      {/* Main Title with Glowing Effect */}
      <div className="mb-12 animate-scale-in">
        <h1 className="text-8xl md:text-9xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          alicias
        </h1>
        <div className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-wider">18 + Shop</div>
        <div className="w-64 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full animate-pulse" />
      </div>

      {/* Subtitle */}
      <p className="text-2xl md:text-3xl text-pink-200 mb-16 max-w-2xl leading-relaxed animate-fade-in" style={{
      animationDelay: '0.5s'
    }}>Look at my 13 year old body</p>

      {/* CTA Button */}
      <button onClick={onScrollToCategories} className="group relative bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 animate-bounce" style={{
      animationDelay: '1s'
    }}>
        <span className="flex items-center gap-3">
          Discover Shop
          <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </span>
        
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-sm animate-pulse" />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce" style={{
      animationDelay: '2s',
      animationDuration: '3s'
    }}>
        <div className="w-3 h-3 bg-pink-400 rounded-full opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce" style={{
      animationDelay: '2.5s',
      animationDuration: '4s'
    }}>
        <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce" style={{
      animationDelay: '3s',
      animationDuration: '2.5s'
    }}>
        <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40" />
      </div>
    </div>;
};
export default Hero;