import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, ShieldCheck, FileText, BarChart3, Globe, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

function SoftwareFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* SEHEMU YA 1: OPERATING SYSTEMS & HARDWARE BASICS (1-15) */
    { id: 1, cat: "OS", q: "Kompyuta yangu imekuwa nzito sana (inastack), nifanye nini bila kufuta mafaili yangu?", a: "Futa 'Temporary Files' (Win + R, andika %temp%). Pia, fungua Task Manager (Ctrl + Shift + Esc) na ufunge programu kwenye 'Startup'." },
    { id: 2, cat: "OS", q: "Kuna tofauti gani kati ya Windows 10 na Windows 11 kwa mtumiaji wa Tanzania?", a: "Windows 11 ina muonekano mpya na usalama mkubwa (TPM 2.0). Windows 10 bado inafanya kazi vizuri kwenye kompyuta nyingi za zamani sokoni kwetu." },
    { id: 3, cat: "OS", q: "Nini maana ya 'Blue Screen of Death' (BSOD) na naitatua vipi?", a: "Ni kosa la mfumo (system error). Suluhisho la haraka ni ku-restart. Ikitokea mara kwa mara, update drivers au kagua kama RAM ina shida." },
    { id: 4, cat: "Security", q: "Je, ni lazima kununua Antivirus au Windows Defender inatosha?", a: "Windows Defender inatosha sana mradi uwe unafanya Update. Antivirus za kulipia ni bora kama unatumia flash za watu wengi mara kwa mara." },
    { id: 5, cat: "OS", q: "Nawezaje kubadili lugha ya kompyuta yangu iwe Kiswahili?", a: "Nenda Settings > Time & Language > Language & Region > Add a language na utafute 'Kiswahili'." },
    { id: 6, cat: "OS", q: "Nawezaje kujua uwezo wa RAM na Processor ya kompyuta yangu kabla ya kununua?", a: "Right-click kwenye icon ya 'This PC', chagua Properties. Itakuonyesha ukubwa wa RAM na aina ya Processor." },
    { id: 7, cat: "OS", q: "Kuna umuhimu gani wa kufanya 'Eject' kabla ya kuchomoa Flash Disk?", a: "Inazuia uharibifu wa mafaili (file corruption). Ukichomoa ghafla wakati kompyuta inasoma data, flash inaweza kuharibika." },
    { id: 8, cat: "OS", q: "Kompyuta imekwama (imestack) kabisa, hata mouse haichezi. Nifanyeje?", a: "Bonyeza na ushikilie kitufe cha Power kwa sekunde 10 mpaka izime yenyewe (Hard Restart). Hii ni njia ya mwisho." },
    { id: 9, cat: "OS", q: "'Driver' ni nini na kwa nini ni muhimu?", a: "Ni software inayoiambia OS jinsi ya kuwasiliana na hardware (kama Printer au Wi-Fi). Bila driver, kifaa hakitafanya kazi." },
    { id: 10, cat: "Hardware", q: "Nini tofauti kati ya HDD na SSD? Ipi ni bora?", a: "SSD ina kasi zaidi mara 10 na haina sehemu zinazozunguka ndani, hivyo haiharibiki kirahisi kompyuta ikitikisika." },
    { id: 11, cat: "OS", q: "Nawezaje kuzuia programu zisijifungue zenyewe nikiwasha kompyuta (Startup Apps)?", a: "Ctrl + Shift + Esc, nenda tab ya Startup, chagua programu na ubonyeze Disable." },
    { id: 12, cat: "OS", q: "Nini maana ya 'Formatting' kompyuta?", a: "Ni kufuta kila kitu kwenye hard disk na kuweka mfumo mpya wa Windows. Inafanyika kurekebisha matatizo makubwa ya virusi." },
    { id: 13, cat: "OS", q: "Nawezaje kupiga picha ya screen yangu (Screenshot)?", a: "Bonyeza Windows + Shift + S. Utaweza kuchagua eneo na kisha ku-paste (Ctrl + V) popote." },
    { id: 14, cat: "Hardware", q: "Kuna umuhimu gani wa kutumia UPS kwenye desktop kompyuta?", a: "Inakupa dakika za ziada kuhifadhi kazi na kuzima kompyuta kwa usalama umeme unapokatika ghafla." },
    { id: 15, cat: "OS", q: "Nini tofauti kati ya Software na Hardware?", a: "Hardware ni sehemu unazoweza kugusa (Monitor). Software ni programu unazoziona ndani (Windows, Chrome)." },

    /* SEHEMU YA 2: MICROSOFT WORD & NYARAKA (16-30) */
    { id: 16, cat: "Word", q: "Nawezaje kutengeneza 'Table of Contents' (Yaliyomo) moja kwa moja?", a: "Tumia Styles (Heading 1, 2). Nenda References > Table of Contents na uchague mtindo; itajijenga yenyewe." },
    { id: 17, cat: "Word", q: "Nifanye nini kama nimesahau ku-save faili na umeme ukakatika?", a: "File > Info > Manage Document > Recover Unsaved Documents. Word huhifadhi nakala ya dharura (AutoRecover)." },
    { id: 18, cat: "Word", q: "Kuna tofauti gani kati ya 'Save' na 'Save As'?", a: "Save inahifadhi mabadiliko kwenye faili lilelile. Save As inatengeneza nakala mpya kwa jina au format nyingine." },
    { id: 19, cat: "Word", q: "Nawezaje kuweka namba za kurasa kuanzia ukurasa wa tatu?", a: "Tumia Section Breaks (Layout > Breaks > Next Page) mwishoni mwa ukurasa wa pili. Ondoa 'Link to Previous' ukurasa wa tatu." },
    { id: 20, cat: "Word", q: "Jinsi gani naweza kulinda faili langu la Word kwa password?", a: "File > Info > Protect Document > Encrypt with Password. Usipoteze password kwani faili halitafunguka." },
    { id: 21, cat: "Word", q: "Nawezaje kubadili mwandiko herufi ndogo kwenda kubwa bila kufuta?", a: "Highlight maandishi, kisha bonyeza Shift + F3." },
    { id: 22, cat: "Word", q: "'Line Spacing' sahihi kwa ripoti au CV ni ipi?", a: "Kitaaluma hutumia 1.15 au 1.5. Inapatikana kwenye tab ya Home, sehemu ya Paragraph." },
    { id: 23, cat: "Word", q: "Nawezaje kuunganisha nyaraka mbili tofauti kuwa moja?", a: "Tab ya Insert > Object (mshale) > Text from File." },
    { id: 24, cat: "Word", q: "'Hyperlink' ni nini na nawekaje?", a: "Ni link inayokupeleka mtandaoni. Highlight neno, bonyeza Ctrl + K na weka link." },
    { id: 25, cat: "Word", q: "Nawezaje kuzuia neno lisisisitizwe na mstari mwekundu (Spell check)?", a: "Right-click neno, chagua 'Ignore All' au 'Add to Dictionary'." },
    { id: 26, cat: "Word", q: "Nini tofauti kati ya 'Portrait' na 'Landscape'?", a: "Portrait ni karatasi kusimama; Landscape ni karatasi kulala. Inapatikana Layout > Orientation." },
    { id: 27, cat: "Word", q: "Nawezaje kuandika namba ndogo chini (H₂O) au juu (x²)?", a: "Superscript (juu): Ctrl + Shift + +. Subscript (chini): Ctrl + =." },
    { id: 28, cat: "Word", q: "'Margin' ni nini na kwanini ni muhimu?", a: "Ni nafasi ya pembeni mwa karatasi; inahakikisha maandishi hayakatwi wakati wa binding." },
    { id: 29, cat: "Word", q: "Nawezaje ku-save faili kama PDF?", a: "File > Save As, kisha chagua format ya PDF kwenye sehemu ya 'Save as type'." },
    { id: 30, cat: "Word", q: "Nifanye nini kama nimefuta neno kwa bahati mbaya?", a: "Tumia shortcut ya Ctrl + Z (Undo) kurudisha mabadiliko ya mwisho." },

    /* SEHEMU YA 3: EXCEL, INTERNET & SECURITY (31-45) */
    { id: 31, cat: "Excel", q: "Nawezaje kujumlisha namba nyingi kwenye Excel kwa haraka?", a: "Highlight namba, kisha bonyeza Alt + = (AutoSum)." },
    { id: 32, cat: "Excel", q: "Nini tofauti kati ya 'Formula' na 'Function'?", a: "Formula unaandika mwenyewe (=A1+B1). Function ipo ndani ya Excel (=SUM(A1:B1))." },
    { id: 33, cat: "Excel", q: "Nawezaje kuzuia Header isipotee ninaposhuka chini (Scroll)?", a: "Tab ya View > Freeze Panes > Freeze Top Row." },
    { id: 34, cat: "Excel", q: "Alama ya ##### kwenye cell inamaanisha nini?", a: "Cell ni ndogo sana kuonyesha namba. Panua column kwa ku-double click herufi za juu." },
    { id: 35, cat: "Excel", q: "Nawezaje kubadili namba ziwe na alama ya fedha (TSH)?", a: "Right-click cell > Format Cells > Currency. Tafuta 'TZS' au 'TSH'." },
    { id: 36, cat: "Email", q: "Tofauti kati ya 'CC' na 'BCC' kwenye Email?", a: "CC inaonyesha nani mwingine amepokea. BCC inaficha majina ya wapokeaji wengine." },
    { id: 37, cat: "Security", q: "'Spam Email' ni nini na kwanini ni hatari?", a: "Ni email za kero; zinaweza kuwa na virusi au link za wizi wa taarifa (Phishing)." },
    { id: 38, cat: "Security", q: "Nawezaje kujua kama website ni salama kuweka kadi ya benki?", a: "Angalia alama ya Padlock (Kufuri) na link ianze na https://." },
    { id: 39, cat: "Internet", q: "'Browser Cache' ni nini na kwanini nifute?", a: "Ni kumbukumbu ya picha za website; kuifuta husaidia kurekebisha website zisizofunguka vizuri." },
    { id: 40, cat: "Security", q: "Ni ipi password salama zaidi?", a: "Yenye herufi kubwa, ndogo, namba, na alama (mfano: Yaham#2026$). Epuka tarehe ya kuzaliwa." },
    { id: 41, cat: "Software", q: "Faili la PDF ni kubwa kulituma kwa email, nipunguzeje?", a: "Tumia iLovePDF au uki-save kutoka Word chagua 'Minimum size (publishing online)'." },
    { id: 42, cat: "Cloud", q: "Nini maana ya 'Cloud Storage' na ipi nzuri TZ?", a: "Kuhahifadhi mafaili mtandaoni. Google Drive na OneDrive ni chaguo bora kwani ni bure." },
    { id: 43, cat: "Software", q: "Kwanini programu hazitaki ku-install (Error: 64-bit vs 32-bit)?", a: "Inategemea processor. Programu ya 64-bit haifanyi kazi kwenye mfumo wa 32-bit." },
    { id: 44, cat: "Software", q: "Nawezaje kufungua faili la 'ZIP'?", a: "Right-click faili, chagua 'Extract All'." },
    { id: 45, cat: "Software", q: "Nini maana ya 'Cloud Computing' kwa maneno mepesi?", a: "Kutumia kompyuta au data kupitia intaneti bila kumiliki hardware (mfano: Google Photos)." },

    /* SEHEMU YA 4: TROUBLESHOOTING & MISC (46-50) */
    { id: 46, cat: "Hardware", q: "Printer yangu imejaa karatasi (Paper Jam), nifanye nini?", a: "Zima printer. Vuta karatasi taratibu kufuata mwelekeo wa inapotokea; usivute kinyume." },
    { id: 47, cat: "Software", q: "Programu imegoma kufunguka kabisa. Suluhisho?", a: "Restart kompyuta. Ikishindikana, ifute (Uninstall) na uisakinishe upya." },
    { id: 48, cat: "Software", q: "'PDF' ni kifupi cha nini na kwanini ni maarufu?", a: "Portable Document Format. Inapendwa kwa sababu muonekano haubadiliki kwenye kifaa chochote." },
    { id: 49, cat: "Internet", q: "'Wi-Fi' yangu inakata kata, nifanye nini?", a: "Sogeza router karibu na PC au izime na kuiwasha tena (Restart router)." },
    { id: 50, cat: "Hardware", q: "Nifanye nini kama nimemwaga maji kwenye laptop?", a: "Izime haraka, chomoa chaja, geuza iwe V-shape chini. Usiiwashe kwa angalau saa 24 ikauke." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'OS': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Security': return 'bg-red-50 text-red-600 border-red-100';
      case 'Word': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Excel': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Internet': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON */}
        <Link 
          to="/faq/it" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Monitor size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            General Software & OS
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            <strong>Essential Knowledge: Windows, MS Office, & Troubleshooting.</strong> <br />
            Mkusanyiko wa maswali 50 muhimu kwa wanafunzi na wafanyakazi nchini Tanzania.
          </p>
        </div>

        {/* INFO CARDS (Kundi la Maswali) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ShieldCheck className="text-blue-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-15</span>
            <h5 className="text-xs font-bold uppercase">OS & Basics</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <FileText className="text-indigo-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">16-30</span>
            <h5 className="text-xs font-bold uppercase">MS Word</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <BarChart3 className="text-emerald-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">31-45</span>
            <h5 className="text-xs font-bold uppercase">Excel & Web</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Globe className="text-amber-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">46-50</span>
            <h5 className="text-xs font-bold uppercase">Misc Tips</h5>
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[32px] border transition-all duration-300 ${activeIndex === index ? 'border-neo-mint shadow-xl' : 'border-slate-100 shadow-sm'}`}
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
                    <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border mb-2 inline-block ${getCatStyles(m.cat)}`}>
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

export default SoftwareFaq;