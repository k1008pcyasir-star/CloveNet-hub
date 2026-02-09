import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Settings, PenTool, Printer, ChevronDown, ShieldCheck } from 'lucide-react';
import Header from '../../../components/Header';

function HardwareFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* I. TROUBLESHOOTING & STANDARDS (1–15) */
    { id: 1, cat: "Troubleshoot", q: "Identify the Problem: Ni mambo gani mtaalamu anapaswa kufanya katika hatua hii?", a: "Mtaalamu anauliza maswali kwa mtumiaji, anakagua jumbe za makosa (error messages), na anaangalia dalili za nje kama sauti zisizo za kawaida au harufu ya kuungua." },
    { id: 2, cat: "Troubleshoot", q: "Kwanini ni muhimu kuanzisha nadharia (Establish a Theory) kabla ya kufanya matengenezo?", a: "Inasaidia mtaalamu kubaini chanzo kinachoweza kusababisha hitilafu (mfano boot loop inaweza kuwa RAM au HDD mbaya) ili asifanye kazi kwa kubahatisha." },
    { id: 3, cat: "Troubleshoot", q: "Ni mbinu gani hutumika katika hatua ya 'Test the Theory' ili kudhibitisha chanzo cha tatizo?", a: "Mtaalamu anafanya majaribio kama kubadilisha RAM au kuingia kwenye 'Safe Mode' ili kuona kama tatizo ni hardware au software." },
    { id: 4, cat: "Troubleshoot", q: "Hatua ya nne ya 'Plan of Action and Implement the Solution' inahusisha nini?", a: "Mara baada ya kuthibitisha chanzo, hatua za kurekebisha zinachukuliwa kama kubadilisha kifaa kilichoharibika au kusakinisha upya dereva (drivers)." },
    { id: 5, cat: "Troubleshoot", q: "Kwanini mtaalamu anapaswa kuhakiki utendaji (Verify Full System Functionality) baada ya kurekebisha?", a: "Kuhakikisha kuwa tatizo limeisha na hakuna tatizo jipya lililoanzishwa wakati wa matengenezo." },
    { id: 6, cat: "Troubleshoot", q: "Nini umuhimu wa hatua ya mwisho ya 'Document Findings' kulingana na miongozo ya e-GA?", a: "Ni muhimu kwa ajili ya rejea za baadaye na usimamizi wa rasilimali, ikisaidia kupunguza gharama za kurudia makosa yale yale." },
    { id: 7, cat: "Standards", q: "Sheria ya PDPA 2022 inaathiri vipi usimamizi wa hardware nchini Tanzania?", a: "Inalazimisha wataalamu kuhakikisha kuwa data za siri hazifikiwi na watu wasioruhusiwa wanapofanya matengenezo au uondoaji wa vifaa." },
    { id: 8, cat: "e-GA", q: "Asset Register ni nini kulingana na mwongozo wa e-GA (eGA/EXT/ISA/004)?", a: "Ni daftari la rasilimali ambalo kila taasisi inapaswa kuwa nalo ili kufuatilia mzunguko wa maisha ya hardware (Hardware Lifecycle)." },
    { id: 9, cat: "Hardware", q: "Tofauti kati ya HDD na SSD kiutendaji ni ipi?", a: "SSD hutumia diski za kielektroniki na ni ya haraka zaidi katika uendeshaji wa programu ikilinganishwa na HDD za sumaku." },
    { id: 10, cat: "Hardware", q: "Nini maana ya 'Disk Wiping' kisheria wakati wa uondoaji wa vifaa?", a: "Ni mbinu ya kufuta data zote kitalamu ili kuzuia uvujaji wa taarifa za serikali au kampuni." },
    { id: 11, cat: "Cabling", q: "Kwanini nyaya za Cat6 ndizo kiwango kinachotumika zaidi ofisini Tanzania?", a: "Zina uwezo wa kubeba data hadi kasi ya 1 Gbps kwa umbali wa mita 100." },
    { id: 12, cat: "Cabling", q: "Eleza mpangilio wa rangi wa T568B kwenye pini 1 na 2.", a: "Pini 1 ni Orange-White (Transmit+) na Pini 2 ni Orange (Transmit-)." },
    { id: 13, cat: "Cabling", q: "Pini za 4 (Blue) na 5 (Blue-White) katika T568B mara nyingi hutumika kwa kazi gani?", a: "Hutumiwa kusaidia teknolojia ya PoE (Power over Ethernet) kwa ajili ya kutoa umeme kwenye vifaa." },
    { id: 14, cat: "Cabling", q: "Kwanini ni lazima kutumia 'Cable Tester' baada ya 'Crimping'?", a: "Kuhakikisha mpangilio wa rangi ni sahihi na kuzuia 'crosstalk' au kutokuwepo kwa mawasiliano." },
    { id: 15, cat: "Hardware", q: "Vumbi na unyevu vinaweza kusababisha kosa gani katika vitambuzi vya biometria?", a: "Vinasababisha kosa la FRR (False Rejection Rate) ambapo mfumo unakataa watumiaji halali." },

    /* II. BIOMETRICS & NIDA KITS (16–40) */
    { id: 16, cat: "Biometrics", q: "Aratek A600: Kwanini kitambuzi hiki kinaweza kushindwa kutambua vidole?", a: "Vidole kuwa na vumbi/mafuta, majeraha ya kazi za mikono, au kukandamiza kidole kwa nguvu sana." },
    { id: 17, cat: "Biometrics", q: "Nini suluhisho ikiwa mwombaji ana mistari ya vidole iliyofutika kabisa?", a: "Tumia vidole mbadala kama kidole gumba au cha kati kulingana na miongozo ya usajili." },
    { id: 18, cat: "Biometrics", q: "Nifanye nini PC isipotambua kitambuzi cha biometria kilichounganishwa kwa USB?", a: "Badilisha USB port, kagua drivers kwenye Device Manager, na hakikisha unatumia kamba asilia inayobeba data." },
    { id: 19, cat: "Biometrics", q: "Sifa gani za kiufundi zinahitajika kwa laptop ya usajili wa NIDA?", a: "HP EliteBook (au sawa), angalau 16GB RAM na 512GB SSD." },
    { id: 20, cat: "Biometrics", q: "Kazi ya 'Rugged Case' katika kiti ya usajili ni ipi?", a: "Kulinda vipengele vya hardware dhidi ya mshtuko na hali ya hewa." },
    { id: 21, cat: "Biometrics", q: "Iris Scanner inachukua picha gani kitalamu?", a: "Inachukua picha za mboni za macho kwa ajili ya utambulisho wa ziada." },
    { id: 22, cat: "Biometrics", q: "Unasafishaje kioo cha scanner bila kuharibu kitambuzi?", a: "Tumia kitambaa laini (lint-free cloth) na epuka kukwaruza nyuso za vitambuzi." },
    { id: 23, cat: "Biometrics", q: "Kamera ya uso katika kit ya NIDA inapaswa kufuata kiwango gani?", a: "Inapaswa kuchukua picha kulingana na viwango vya ICAO." },
    { id: 24, cat: "Biometrics", q: "Miongozo ya e-GA inasemaje kuhusu preventive maintenance ya biometria?", a: "Lazima vifaa vifanyiwe matengenezo ya kinga mara kwa mara na rekodi zihifadhiwe." },
    { id: 25, cat: "Biometrics", q: "Alama ya njano kwenye Device Manager inashiria nini?", a: "Driver haijatambuliwa vizuri; fanya 'Update Driver' au uichomeke upya." },
    { id: 26, cat: "Biometrics", q: "NIDA Kit inatumia betri ya aina gani maeneo ya vijijini?", a: "Betri ya 20Ah Lithium-ion yenye msaada wa Solar Panel." },
    { id: 27, cat: "Biometrics", q: "Kwanini tunasafisha vidole kwa maji kabla ya usajili?", a: "Ili kuondoa mafuta na vumbi vinavyoweza kuharibu picha ya alama ya kidole." },
    { id: 28, cat: "Biometrics", q: "Nini maana ya '4-4-2' katika usajili wa vidole?", a: "Ni uandikishaji wa vidole 4 vya mkono wa kulia, 4 wa kushoto, na gumba zote mbili kwa pamoja." },
    { id: 29, cat: "Biometrics", q: "Kazi ya 'Iris scanner' ni ipi?", a: "Kubaini utambulisho kupitia mifumo ya mboni za macho inaposhindikana kutumia vidole." },
    { id: 30, cat: "Biometrics", q: "Kwanini unyevu (sweat) huathiri scanner?", a: "Unasababisha picha ya kidole kutoonekana wazi (blur), jambo linalokwamisha utambulisho." },
    { id: 31, cat: "Biometrics", q: "Kazi ya kamba (cable) ya USB ya asili ni ipi?", a: "Kuhakikisha inapapitisha data (data transfer) na si umeme pekee." },
    { id: 32, cat: "Biometrics", q: "ICAO inasimamia kiwango gani cha picha?", a: "Kiwango cha picha ya uso kwa ajili ya utambulisho wa kitalamu wa kimataifa." },
    { id: 33, cat: "Biometrics", q: "Nini madhara ya kukandamiza kidole kwa nguvu?", a: "Inaharibu muundo wa mistari ya vidole na kutoa picha isiyosomeka (dark smudge)." },
    { id: 34, cat: "Biometrics", q: "FBI PIV ni kiwango gani cha scanner?", a: "Ni kiwango cha usalama na usahihi kilichoidhinishwa kwa vitambuzi vya biometria." },
    { id: 35, cat: "Biometrics", q: "Kazi ya programu ya usajili (Registration app) ni ipi?", a: "Kuunganisha data za biometria na taarifa za maandishi za mwombaji." },
    { id: 36, cat: "Biometrics", q: "NIDA Kit inapaswa kusafishwa kwa nini?", a: "Kitambaa laini bila kutumia kemikali kali zinazoweza kuharibu kioo cha scanner." },
    { id: 37, cat: "Biometrics", q: "Kazi ya binocular iris scanner ni ipi?", a: "Kuchukua picha za mboni za macho zote mbili kwa wakati mmoja." },
    { id: 38, cat: "Biometrics", q: "Kwanini betri ya Lithium-ion inapendekezwa?", a: "Inakaa na chaji muda mrefu na ina uwezo mkubwa (20Ah) kwa kazi za vijijini." },
    { id: 39, cat: "Biometrics", q: "False Rejection Rate huongezeka kwanini?", a: "Huongezeka kutokana na uchafu wa vitambuzi au picha hafifu za vidole." },
    { id: 40, cat: "Biometrics", q: "Kazi ya Solar Panel katika Kit ni ipi?", a: "Kutoa nishati mbadala ya kuchajia Kit kikiwa maeneo yasiyo na gridi ya taifa." },

    /* III. PRINTERS & GePG (41–60) */
    { id: 41, cat: "Printers", q: "Kichapishi cha risiti kinatoa blank paper. Tatizo ni nini?", a: "Karatasi imewekwa upande usio sahihi (upside down) au unatumia plain paper badala ya thermal paper." },
    { id: 42, cat: "Printers", q: "Nini chanzo cha maandishi hafifu kwenye risiti ya GePG?", a: "Uchafu kwenye kichwa cha kichapishi (print head) au betri ya POS kuwa na nguvu ndogo." },
    { id: 43, cat: "Printers", q: "Kwanini tunatumia Thermal Printers kwa malipo ya serikali?", a: "Hazihitaji wino, ni rahisi uendeshaji wake, na zinafanya kazi haraka katika kutoa risiti." },
    { id: 44, cat: "Networking", q: "Mtaalamu anapaswa kukagua nini POS ikiwa 'Offline'?", a: "Kukagua muunganisho wa intaneti na kuhakikisha IP address imesanidiwa bila mgongano." },
    { id: 45, cat: "Printers", q: "Alama za ajabu (gibberish) kwenye kichapishi zinasababishwa na nini?", a: "Kutofautiana kwa Baud Rate au lugha ya kichapishi (Emulation mode) kati ya PC na printer." },
    { id: 46, cat: "Printers", q: "Kwanini mpangilio wa 'WinPrint' unahitajika kwenye Print Processor?", a: "Inahakikisha mawasiliano sahihi kati ya mfumo wa uendeshaji na dereva wa kichapishi." },
    { id: 47, cat: "Printers", q: "Kazi ya kemikali kwenye thermal paper ni ipi?", a: "Kutengeneza maandishi meusi pindi yanapokutana na joto la kichwa cha kichapishi." },
    { id: 48, cat: "Printers", q: "Nini madhara ya kutumia plain paper kwenye thermal printer?", a: "Kichapishi hakitatoa maandishi yoyote kwa sababu plain paper haina kemikali za joto." },
    { id: 49, cat: "Printers", q: "Baud Rate inahusu nini katika mawasiliano ya printer?", a: "Ni kasi ya ubadilishanaji wa taarifa kati ya kompyuta na kifaa cha pembeni." },
    { id: 50, cat: "Printers", q: "Kazi ya POS (Point of Sale) katika GePG ni ipi?", a: "Kupokea miamala na kutoa risiti kielektroniki zenye namba ya control." },
    { id: 51, cat: "Printers", q: "Print Head inapaswa kusafishwa mara ngapi?", a: "Mara kwa mara au pale tu maandishi yanapoanza kutoka yakiwa yamefifia." },
    { id: 52, cat: "Printers", q: "Kwanini thermal printers hazitumii riboni?", a: "Kwa sababu teknolojia ya thermal inategemea joto la moja kwa moja kwenye karatasi." },
    { id: 53, cat: "Printers", q: "Baud rate ya kawaida kwa POS printers ni ipi?", a: "Inatofautiana lakini mara nyingi huanzia 9600 bps kulingana na muundo wa kifaa." },
    { id: 54, cat: "Printers", q: "Emulation mode inasaidia nini?", a: "Inaruhusu kichapishi kuelewa amri (commands) zinazotumwa na programu za miamala." },
    { id: 55, cat: "Printers", q: "Kazi ya 'Paper Roll' sensor ni ipi?", a: "Kutoa taarifa pindi karatasi inapokuwa imeisha kwenye kichapishi." },
    { id: 56, cat: "Printers", q: "Kwanini thermal printer ni ya kimya?", a: "Kwa sababu haina mfumo wa kugonga (impact) karatasi kwa kutumia pini au nyundo." },
    { id: 57, cat: "Printers", q: "Nini madhara ya vumbi kwenye print head?", a: "Vumbi linaweza kusababisha mistari meupe (white lines) kwenye risiti inayochapwa." },
    { id: 58, cat: "Printers", q: "Kazi ya 'Cutter' kwenye POS printer ni ipi?", a: "Kukata karatasi ya risiti moja kwa moja baada ya muamala kukamilika." },
    { id: 59, cat: "Printers", q: "GePG inahakikishaje usalama wa risiti?", a: "Kupitia namba za control na kadi za miamala zilizounganishwa kielektroniki." },
    { id: 60, cat: "Printers", q: "Nini cha kufanya kioo cha POS kikigoma (freeze)?", a: "Fanya 'Hard Reset' kwa kuzima na kuwasha upya kifaa hicho." },

    /* IV. ASSEMBLY, CABLING & BUSINESS (61–80) */
    { id: 61, cat: "Maintenance", q: "PC inazimika baada ya kuwaka kwa muda mfupi. Sababu ni nini?", a: "Mara nyingi ni 'Overheating' kutokana na feni ya CPU kuwa na vumbi au thermal paste kukauka." },
    { id: 62, cat: "Hardware", q: "Nini umuhimu wa CMOS Battery?", a: "Inahifadhi mipangilio ya BIOS na saa ya kompyuta hata umeme unapozimwa." },
    { id: 63, cat: "Networking", q: "Ping 127.0.0.1 inatumika kupima nini?", a: "Loopback Address: Inapima kama NIC na TCP/IP protocol zinafanya kazi vizuri ndani ya PC." },
    { id: 64, cat: "Networking", q: "Straight-through cable inatumika kuunganisha vifaa gani?", a: "Inatumika kuunganisha vifaa tofauti, mfano Kompyuta kwenda kwenye Switch." },
    { id: 65, cat: "Networking", q: "Teknolojia ya Auto-MDIX inasaidia nini?", a: "Inaruhusu vifaa kutambua na kubadilisha mawasiliano yenyewe bila kujali aina ya kamba." },
    { id: 66, cat: "Business", q: "Nini sifa ya kipekee (USP) ya Yaham Education Hub?", a: "Inajikita katika 'Step-by-Step' video solutions na Interview FAQs maalum za soko la TZ." },
    { id: 67, cat: "Business", q: "Kwanini Resume Builder yenye Keyword Optimization ni muhimu?", a: "Kusaidia waombaji kazi kupita kwenye mifumo ya ATS inayotumiwa na kampuni kubwa." },
    { id: 68, cat: "Business", q: "Fursa ya Biometric Maintenance Tanzania ina nafasi gani?", a: "Ni kubwa kwa sababu taasisi nyingi hazina mafundi wa ndani wa kurekebisha vifaa hivi." },
    { id: 69, cat: "Standards", q: "Umuhimu wa documentation kulingana na e-GA ni nini?", a: "Kuepuka kurudiwa kwa makosa na kupunguza gharama za uendeshaji." },
    { id: 70, cat: "Cabling", q: "Kazi ya Brown na Brown-White pini kwenye T568B ni nini?", a: "Zinafanya kazi ya 'Grounding' kusaidia ulinzi wa mzunguko wa umeme kwenye nyaya." },
    { id: 71, cat: "Maintenance", q: "Unasafishaje heat sink ya kompyuta?", a: "Tumia 'Compressed Air' au brashi laini kuondoa vumbi lililoziba matundu ya hewa." },
    { id: 72, cat: "Hardware", q: "Nini madhara ya CMOS battery kuishiwa nguvu?", a: "Saa na tarehe kurudi nyuma na PC kushindwa kutambua diski ngumu mara kwa mara." },
    { id: 73, cat: "Networking", q: "Nini maana ya 'Crosstalk' katika nyaya za mtandao?", a: "Ni muingiliano wa ishara kati ya kamba mbili unaosababisha data kupotea." },
    { id: 74, cat: "Networking", q: "Nini kazi ya 'Switch' katika mtandao?", a: "Kuunganisha vifaa vingi ndani ya LAN and kuelekeza data kwenye kifaa sahihi." },
    { id: 75, cat: "Standards", q: "ICT Asset Management inahusu nini?", a: "Usimamizi wa ununuzi, matengenezo, na uondoaji wa vifaa vya TEHAMA." },
    { id: 76, cat: "Business", q: "Nini faida ya Subscription model kwa Yaham Hub?", a: "Inahakikisha kipato endelevu huku ikitoa huduma bora kwa wanafunzi." },
    { id: 77, cat: "Maintenance", q: "Thermal Paste inafanya kazi gani kitalamu?", a: "Inahamisha joto kutoka kwenye processor kwenda kwenye heat sink kwa ufanisi zaidi." },
    { id: 78, cat: "Hardware", q: "BIOS inamaanisha nini?", a: "Basic Input/Output System: Programu ya kwanza inayowaka kuanzisha hardware ya kompyuta." },
    { id: 79, cat: "Standards", q: "Kwanini data wiping ni lazima wakati wa disposal?", a: "Kuzuia data nyeti za taasisi zisichukuliwe na watu wenye nia mbaya." },
    { id: 80, cat: "Strategy", q: "Nini mustakabali wa TEHAMA Tanzania 2025-26?", a: "Utafiti wa Cybersecurity, AI katika kilimo, na uimarishaji wa miundombinu ya data." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON - Back to Mama IT */}
        <Link 
          to="/faq/it" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Cpu size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Hardware & Troubleshooting
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic leading-relaxed">
            Mkusanyiko kamili wa maswali 80 ya usaili yanayohusu ufundi, viwango vya e-GA, na usimamizi wa hardware nchini Tanzania.
          </p>
        </div>

        {/* STRATEGIC OVERVIEW CARD */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm mb-12">
          <div className="flex items-center gap-4 mb-4">
             <ShieldCheck className="text-neo-mint" size={28} />
             <h3 className="font-bold text-deep-blue text-xl">Strategic Overview: e-Government Standards</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Utekelezaji wa miradi ya TEHAMA nchini Tanzania unahitaji mchanganyiko wa umilisi wa kiufundi na kufuata kanuni za kisheria kama <strong>e-GA</strong> na <strong>PDPA 2022</strong>. 
            Kila mtaalamu anapaswa kufuata hatua 6 za utatuzi wa <strong>CompTIA</strong> ili kupunguza downtime ya mifumo kama <strong>NIDA</strong> na <strong>GePG</strong>.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[28px] border transition-all duration-300 ${activeIndex === index ? 'border-neo-mint shadow-xl' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-5">
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner transition-colors ${activeIndex === index ? 'bg-neo-mint text-deep-blue' : 'bg-slate-50 text-slate-400'}`}>
                    {m.id}
                  </span>
                  <div>
                    <span className="text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border mb-2 inline-block bg-blue-50 text-blue-600 border-blue-100">
                      {m.cat}
                    </span>
                    <h3 className="font-bold text-deep-blue text-lg leading-snug group-hover:text-neo-mint transition-colors">
                      {m.q}
                    </h3>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className={activeIndex === index ? 'text-neo-mint' : 'text-slate-300'} />
                </div>
              </button>

              {activeIndex === index && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-3 duration-500">
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-deep-blue/20"></div>
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block">TECHNICAL RESOLUTION:</small>
                    <p className="text-deep-blue text-sm leading-relaxed italic font-medium">
                      {m.a}
                    </p>
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

export default HardwareFaq;