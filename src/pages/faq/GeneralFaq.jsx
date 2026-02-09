import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../../components/Header';

export default function GeneralFaq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { hash } = useLocation();

  // Mbinu ya kitalamu kuhakikisha scroll inafanya kazi akirudi home
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash]);

  const maswali = [
    { id: 1, swali_sw: "Elezea kuhusu wewe mwenyewe", swali_en: "Tell us about yourself", muongozo: "Lenga uzoefu wako wa kazi, elimu, na ujuzi unaoendana na nafasi unayoomba. Usitaje mambo binafsi sana.", jibu_en: "I am a results-oriented professional with a degree in Information Technology and three years of experience in systems administration..." },
    { id: 2, swali_sw: "Kwa nini unataka kufanya kazi nasi?", swali_en: "Why do you want to work here?", muongozo: "Onyesha kuwa umefanya utafiti kuhusu shirika. Taja namna malengo yako yanavyoendana na dira (Vision) ya taasisi hiyo.", jibu_en: "I have followed your organization for several months and I am impressed by your innovative approach..." },
    { id: 3, swali_sw: "Nguvu zako ni zipi?", swali_en: "What are your strengths?", muongozo: "Taja ujuzi wa kiufundi na kijamii (soft skills) unaoleta matokeo halisi.", jibu_en: "My greatest strength is my problem-solving ability combined with strong communication skills." },
    { id: 4, swali_sw: "Udhaifu wako mkubwa ni upi?", swali_en: "What is your greatest weakness?", muongozo: "Taja udhaifu ambao hauathiri kazi moja kwa moja na ueleze hatua unazochukua kuuboresha.", jibu_en: "I sometimes focus too much on details. I now use project management tools to stay focused on the bigger picture." },
    { id: 5, swali_sw: "Unajiona wapi katika kipindi cha miaka mitano ijayo?", swali_en: "Where do you see yourself in 5 years?", muongozo: "Onyesha kuwa una mpango wa kukuza taaluma yako ndani ya taasisi hiyo.", jibu_en: "In five years, I see myself as a senior expert or a manager within this organization." },
    { id: 6, swali_sw: "Kwa nini tukuajiri wewe?", swali_en: "Why should we hire you?", muongozo: "Linganisha ujuzi wako na mahitaji ya kazi. Eleza thamani ya kipekee unayoleta.", jibu_en: "You should hire me because I possess both the technical certifications and hands-on experience required." },
    { id: 7, swali_sw: "Mafanikio yako makubwa hadi sasa ni yapi?", swali_en: "What is your greatest achievement?", muongozo: "Chagua mafanikio ya kikazi ya hivi karibuni. Tumia namba kuthibitisha (STAR method).", jibu_en: "My biggest achievement was designing inventory software that saved over 10 million TZS annually." },
    { id: 8, swali_sw: "Elezea changamoto uliyokutana nayo na namna ulivyoitatua", swali_en: "Tell us about a challenge you solved", muongozo: "Tumia mbinu ya STAR (Situation, Task, Action, Result).", jibu_en: "We faced a 15% drop in system efficiency. I audited the database and optimized it for 25% speed improvement." },
    { id: 9, swali_sw: "Kwa nini unaacha kazi yako ya sasa?", swali_en: "Why are you leaving your job?", muongozo: "Baki kuwa chanya. Taja kuwa unatafuta changamoto mpya au fursa ya kukua.", jibu_en: "I am ready for a new challenge that offers more responsibility and growth." },
    { id: 10, swali_sw: "Unajua nini kuhusu taasisi yetu?", swali_en: "What do you know about our company?", muongozo: "Taja historia fupi, huduma wanazotoa, na mafanikio yao kulingana na utafiti wako.", jibu_en: "I know you are a pioneer in the logistics sector in East Africa with innovative tracking systems." },
    { id: 11, swali_sw: "Unapendelea kufanya kazi peke yako au kwenye timu?", swali_en: "Do you prefer working alone or in a team?", muongozo: "Eleza kuwa unaweza kufanya yote, lakini timu ni muhimu kwa malengo makubwa.", jibu_en: "I am self-motivated for independent work, but I believe teamwork is essential for complex results." },
    { id: 12, swali_sw: "Unawezaje kukabiliana na shinikizo la kazi?", swali_en: "How do you handle stress or pressure?", muongozo: "Eleza mbinu unazotumia kama kupanga vipaumbele au kukaa na utulivu.", jibu_en: "I handle pressure by staying organized and prioritizing tasks to maintain high standards." },
    { id: 13, swali_sw: "Je, una maswali yoyote kwetu?", swali_en: "Do you have any questions for us?", muongozo: "Uliza maswali yanayoonyesha nia ya kukua na utamaduni wa kazi.", jibu_en: "Yes, could you tell me more about the team culture and immediate projects?" },
    { id: 14, swali_sw: "Mshahara wako unategemea uwe kiasi gani?", swali_en: "What are your salary requirements?", muongozo: "Uliza kiwango cha nafasi hiyo au sema unategemea mshahara wa ushindani wa soko.", jibu_en: "I am looking for a competitive salary based on my research and the value I bring." },
    { id: 15, swali_sw: "Toa mfano wa wakati ulionyesha uongozi", swali_en: "Give an example of leadership", muongozo: "Taja wakati ulipochukua hatua ya kuanzisha kitu au kumsaidia mwenzako.", jibu_en: "I volunteered to create a user guide for the whole department, reducing transition time by a week." },
    { id: 16, swali_sw: "Wenzako wanazungumziaje uwezo wako?", swali_en: "How would your colleagues describe you?", muongozo: "Taja sifa chanya kama 'Mchapa kazi' au 'Mwenye kuaminika'.", jibu_en: "My colleagues would describe me as a reliable team player who meets deadlines consistently." },
    { id: 17, swali_sw: "Unawezaje kukaa na taarifa za mabadiliko kwenye sekta yako?", swali_en: "How do you stay updated with industry trends?", muongozo: "Taja vyanzo kama blogs, kozi za mtandaoni, au mikutano ya TAIC.", jibu_en: "I follow technical blogs and attend events like the Tanzania Annual ICT Conference." },
    { id: 18, swali_sw: "Nini kinakuhamasisha kufanya kazi?", swali_en: "What motivates you?", muongozo: "Taja vyanzo vinavyoendana na kazi kama kutatua matatizo.", jibu_en: "I am motivated by the opportunity to solve complex challenges and see operational improvements." },
    { id: 19, swali_sw: "Elezea wakati ulipofanya kosa na namna ulivyoirekebisha", swali_en: "Tell us about a mistake you made", muongozo: "Eleza namna ulivyowajibika na hatua ulizokuchukua kuzuia lisijirudie.", jibu_en: "I once misconfigured a server. I reported it immediately, corrected it, and created a checklist." },
    { id: 20, swali_sw: "Unawezaje kushughulikia mgogoro na mfanyakazi mwenzako?", swali_en: "How do you handle conflict with a coworker?", muongozo: "Onyesha ukomavu na uwezo wa kuwasiliana ili kupata suluhu ya kitaalamu.", jibu_en: "I address conflicts directly and professionally by finding common ground through conversation." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta">
      <Header />
      <main className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON - Inasolve changamoto ya ku-scroll */}
        <Link 
          to="/#interview-faq" 
          className="inline-flex items-center gap-2 px-6 py-2 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-12 hover:bg-deep-blue hover:text-white transition-all"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO SECTION - KAMA KWENYE PICHA */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-deep-blue mb-4 tracking-tight">
            General Interview Q&A
          </h1>
          <p className="text-slate-500 font-medium">
            Mkusanyiko wa maswali ya Mfano yanayoulizwa kwenye Usaili.
          </p>
        </div>

        {/* ETIQUETTE SECTION - KAMA KWENYE PICHA */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
          <h3 className="font-bold text-deep-blue mb-6">Muongozo wa Kitalamu (Etiquette)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-neo-mint pl-4">
              <h4 className="font-bold text-deep-blue text-sm mb-1">1. Salamu</h4>
              <p className="text-slate-500 text-xs">Gonga mlango, tabasamu, na wasalimie wataalamu kwa heshima.</p>
            </div>
            <div className="border-l-4 border-neo-mint pl-4">
              <h4 className="font-bold text-deep-blue text-sm mb-1">2. Kukaa</h4>
              <p className="text-slate-500 text-xs">Kaa wima, mikono iwe juu ya mapaja, na fanya eye contact kitalamu.</p>
            </div>
            <div className="border-l-4 border-neo-mint pl-4">
              <h4 className="font-bold text-deep-blue text-sm mb-1">3. Kutoka</h4>
              <p className="text-slate-500 text-xs">Shukuru kwa muda wao na funga mlango kistaarabu ukiondoka.</p>
            </div>
          </div>
        </div>

        {/* ACCORDION LIST - KAMA KWENYE PICHA */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div key={m.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-deep-blue text-white flex items-center justify-center font-bold text-sm">
                    {m.id}
                  </span>
                  <div>
                    <h3 className="font-bold text-deep-blue text-base md:text-lg">{m.swali_sw}</h3>
                    <p className="text-slate-400 text-xs italic">({m.swali_en})</p>
                  </div>
                </div>
                {activeIndex === index ? <ChevronUp className="text-deep-blue" /> : <ChevronDown className="text-slate-300" />}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-5 bg-neo-mint/5 rounded-2xl border border-neo-mint/20">
                    <p className="text-[10px] font-black text-neo-mint uppercase mb-2 tracking-widest">Muongozo wa Kitalamu:</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{m.muongozo}</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-deep-blue uppercase mb-2 tracking-widest">Sample English Answer:</p>
                    <p className="text-deep-blue text-sm italic leading-relaxed">{m.jibu_en}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}