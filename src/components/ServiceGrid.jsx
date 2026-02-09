import { FileText, MessageSquare, Mail, Library, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "AI CV Builder",
    desc: "Tengeneza resume inayopita mifumo ya ATS ndani ya sekunde chache.",
    icon: <FileText size={32} />,
    tag: "Popular",
    path: "/cv-builder" 
  },
  {
    title: "Interview FAQ",
    desc: "Jizoeze maswali ya usaili yaliyotengenezwa mahususi kwa kila nafasi.",
    icon: <MessageSquare size={32} />,
    tag: "Updated",
    path: "#interview-faq" 
  },
  {
    title: "Email Guide",
    desc: "Templates za barua pepe kwa waajiri zilizosukwa na algorithms za AI.",
    icon: <Mail size={32} />,
    tag: "New",
    path: "/email-guide" // MABORESHO: Anuani maalum ya Email
  },
  {
    title: "Study Library",
    desc: "Pata vitabu, miongozo, na resources zote muhimu kwa safari yako.",
    icon: <Library size={32} />,
    tag: "Free",
    path: "/study-library" // MABORESHO: Anuani maalum ya Library
  }
];

export default function ServiceGrid({ onOpenLogin, isLoggedIn }) {
  const navigate = useNavigate();

  const handleServiceClick = (e, path) => {
    e.preventDefault();
    
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // MABORESHO: Sasa tunapitisha 'path' kwenye onOpenLogin ili ikumbukwe
    if (!isLoggedIn) {
      onOpenLogin(path); 
    } else {
      navigate(path); 
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-neo-mint font-bold uppercase tracking-widest text-xs">Explore Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue mt-2">Kila kitu kwa ajili ya Kazi yako.</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={(e) => handleServiceClick(e, service.path)}
            className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-neo-mint hover:shadow-2xl hover:shadow-neo-mint/5 transition-all cursor-pointer relative z-30 overflow-hidden active:scale-95 pointer-events-auto"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold bg-slate-50 text-slate-400 px-2 py-1 rounded-full group-hover:bg-neo-mint group-hover:text-deep-blue transition-colors">
              {service.tag}
            </span>

            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-deep-blue mb-6 group-hover:bg-neo-mint transition-colors pointer-events-none">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-deep-blue mb-3 pointer-events-none">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 pointer-events-none">{service.desc}</p>
            
            <div className="flex items-center gap-2 text-deep-blue font-bold text-sm group-hover:text-neo-mint transition-colors pointer-events-none">
              Anza Sasa <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}