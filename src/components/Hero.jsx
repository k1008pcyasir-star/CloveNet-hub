import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-deep-blue text-white px-6 py-16 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-neo-mint font-bold tracking-widest text-sm uppercase mb-4 block">
          The Next-Gen Career AI
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Learn Without <span className="text-neo-mint">Limits.</span> <br />
          Build Without <span className="text-neo-mint">Fear.</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10">
          Gundua fursa za ajira na scholarships duniani kote ukitumia nguvu ya AI kuandaa wasifu wako kitalamu.
        </p>

        {/* SEARCH BAR - Inabadilika kulingana na kioo */}
        <div className="flex flex-col md:flex-row bg-white p-2 rounded-2xl md:rounded-full shadow-2xl max-w-3xl">
          <div className="flex items-center flex-1 px-4 py-2 text-deep-blue">
            <Search className="text-slate-400 mr-3" />
            <input 
              type="text" 
              placeholder="Unataka kuanza na nini leo? Mf: Interview Prep..."
              className="w-full bg-transparent outline-none py-2 text-base"
            />
          </div>
          <button className="bg-neo-mint text-deep-blue font-bold px-8 py-4 rounded-xl md:rounded-full hover:scale-105 transition-transform">
            Search
          </button>
        </div>
      </div>
      
      {/* MAPAMBO YA BACKGROUND (Kama ya Coursera) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neo-mint opacity-5 blur-[120px] rounded-full translate-x-1/2"></div>
    </section>
  );
}