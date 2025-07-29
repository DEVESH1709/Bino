export default function StatsBox({ value, label }) {
    return (
      <div className="bg-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl md:text-6xl font-bold mb-4">
          {value}
        </div>
        <div className="text-blue-100 text-xl font-semibold">
          {label}
        </div>
        <div className="mt-6 w-20 h-1 bg-white/40 rounded-full mx-auto"></div>
      </div>
    );
  }
  