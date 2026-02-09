import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Pill, Scale, Truck, MessageSquare, ShieldCheck, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function PharmacyFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* CATEGORY 1: PROFESSIONAL IDENTITY AND INTRODUCTION (1-20) */
    { id: 1, cat: "Identity", q: "Describe the professional roles and responsibilities of a pharmaceutical technician in a regional hospital.", a: "The technician is responsible for the accurate dispensing of medications, managing department-level inventory using eLMIS, supervising pharmaceutical assistants, and ensuring that all storage conditions meet the standards of the Pharmacy Council." },
    { id: 2, cat: "Motivation", q: "Why did you choose to pursue a career in the pharmacy cadre in Tanzania?", a: "The choice was driven by the desire to serve as a vital link in the healthcare chain, ensuring that the right patient receives the right medicine in the correct dose, thereby contributing to the national goal of improving health outcomes." },
    { id: 3, cat: "Regulation", q: "What are the primary functions of the Pharmacy Council of Tanzania?", a: "The Council functions to regulate the profession through the registration of personnel, licensing of premises, and the oversight of pharmacy education and professional ethics." },
    { id: 4, cat: "Development", q: "Explain the importance of Continuing Professional Development (CPD) for pharmacy professionals.", a: "CPD is essential for maintaining competence in a rapidly evolving field, allowing practitioners to stay updated on new pharmacological developments, regulatory changes, and revised clinical guidelines like the STG 2021." },
    { id: 5, cat: "Ethics", q: "How do you define professional integrity in a pharmaceutical context?", a: "Integrity involves adhering to the Code of Ethics and the Pharmacy Act, prioritizing patient safety over commercial gain, and being honest in all professional interactions." },
    { id: 6, cat: "Vision", q: "Where do you see the role of the pharmacist in Tanzania in the next five years?", a: "The role will likely expand further into clinical pharmacy services, including medication therapy management (MTM) and enhanced roles in public health initiatives like immunization and antimicrobial stewardship." },
    { id: 7, cat: "Skills", q: "What skills do you believe are most critical for a community pharmacist?", a: "Communication is paramount, alongside clinical knowledge, attention to detail in dispensing, and business management skills to ensure the sustainability of the pharmacy." },
    { id: 8, cat: "Behavioral", q: "How do you handle a situation where you feel your work is getting repetitive?", a: "I find motivation in the knowledge that every prescription dispensed is a critical intervention in a patient's life. I also seek opportunities for workplace improvements and mentorship of junior staff." },
    { id: 9, cat: "Technology", q: "Describe your experience with the Pharmacy Council Management Information System (PCMIS).", a: "I am proficient in using the PCMIS online portal for professional registration, retention fee payments, and premises permit applications." },
    { id: 10, cat: "Career", q: "Why should a public institution like the Ministry of Health hire you?", a: "I possess the required technical skills, a deep understanding of the Tanzanian health system, and a commitment to the public service values of accountability and responsiveness." },
    { id: 11, cat: "Career", q: "What is your greatest professional accomplishment to date?", a: "Focus on a quantifiable improvement, such as reducing stockouts at a previous facility or successfully managing a high-volume dispensing unit." },
    { id: 12, cat: "Resilience", q: "How do you manage professional stress, particularly in high-volume settings?", a: "I utilize task prioritization, maintain a calm and organized workflow, and ensure clear communication with my team to prevent errors under pressure." },
    { id: 13, cat: "Education", q: "What subject in your pharmacy studies did you find most challenging and how did you overcome it?", a: "Reflect on resilience and a proactive approach, such as utilizing peer study groups or additional clinical rotations to master complex subjects." },
    { id: 14, cat: "Character", q: "How do your friends or former colleagues describe your professional character?", a: "They would describe me as detail-oriented, reliable, and a supportive team player who remains focused on patient outcomes." },
    { id: 15, cat: "Knowledge", q: "What books or journals do you read to stay current in your field?", a: "I regularly consult the British National Formulary (BNF), the Tanzania Standard Treatment Guidelines, and journals related to East African pharmaceutical practice." },
    { id: 16, cat: "Ethics", q: "How do you handle professional success?", a: "Success is a motivator to continue improving. I use it as a benchmark to set higher standards for myself and my department." },
    { id: 17, cat: "Ethics", q: "Tell us about a time you made a professional mistake and how you resolved it?", a: "The focus should be on accountability, immediate corrective action, and implementation of measures to prevent recurrence." },
    { id: 18, cat: "Service", q: "How comfortable are you with working in remote or rural areas of Tanzania?", a: "As a health professional, I am committed to universal health access and am ready to serve in any region where my skills are needed." },
    { id: 19, cat: "Law", q: "What is the significance of the 'No Objection Certificate' (NOC)?", a: "The NOC is a document from TCU that permits a student to study pharmacy abroad, ensuring their eventual qualification will be recognized in Tanzania." },
    { id: 20, cat: "Governance", q: "Describe the hierarchy within a hospital pharmacy department in Tanzania.", a: "Led by a Pharmacist-in-Charge, followed by Staff Pharmacists, Pharmaceutical Technicians, and Assistants, working collaboratively." },

    /* CATEGORY 2: CLINICAL PHARMACY AND PHARMACOLOGY (21-40) */
    { id: 21, cat: "Clinical", q: "Define Pharmacodynamics and explain its relevance to the STG.", a: "Pharmacodynamics is the study of the biochemical and physiological effects of drugs. It guides the STG in selecting drugs with the best efficacy-to-safety profiles for Tanzanians." },
    { id: 22, cat: "Clinical", q: "What is the difference between a side effect and an adverse drug reaction?", a: "A side effect is a predictable effect occurring at therapeutic doses; an ADR is a more serious, unintended, and noxious response that may necessitate stopping the drug." },
    { id: 23, cat: "Pharmacology", q: "Explain the mechanism of action of Artemether-Lumefantrine (ALU).", a: "Artemether provides rapid reduction of parasite biomass, while Lumefantrine has a longer half-life and eliminates remaining parasites to prevent recrudescence." },
    { id: 24, cat: "Pharmacology", q: "What is the significance of 'Bioavailability'?", a: "It is the fraction of an administered dose that reaches systemic circulation in an active form, crucial for determining dosage and route." },
    { id: 25, cat: "Pediatrics", q: "Describe the clinical signs and management of severe malaria in a child.", a: "Signs: altered consciousness, convulsions, severe anemia. Management: parenteral Artesunate followed by a full course of ALU once oral intake is possible." },
    { id: 26, cat: "Guidelines", q: "What is the 'AWaRe' classification of antibiotics?", a: "A WHO tool adopted in STG 2021 grouping antibiotics into Access (wide use), Watch (limited use), and Reserve (last resort)." },
    { id: 27, cat: "Clinical", q: "Explain the concept of 'Polypharmacy' and its risks in elderly patients.", a: "Polypharmacy is concurrent use of multiple medications, increasing risks of drug-drug interactions, ADRs, and reduced adherence." },
    { id: 28, cat: "Clinical", q: "First-line antihypertensive drug classes recommended for adults in Tanzania?", a: "Thiazide-like diuretics, ACE inhibitors/ARBs, and long-acting dihydropyridine calcium channel blockers." },
    { id: 29, cat: "Pharmacology", q: "Define 'Therapeutic Index' and give an example of a drug with a narrow index.", a: "Ratio of toxic dose to therapeutic dose. Examples: Warfarin and Digoxin require close monitoring." },
    { id: 30, cat: "Storage", q: "What are the storage requirements for oxytocin in a labor ward?", a: "Must be stored in a cold chain ($2^\\circ\\text{C}$ to $8^\\circ\\text{C}$) to maintain potency as it is heat-sensitive." },
    { id: 31, cat: "Clinical", q: "Why is Metformin the preferred first-line agent for Type 2 Diabetes?", a: "Effective, low hypoglycemia risk, weight-neutral, and cost-effective within the Tanzanian essential medicine framework." },
    { id: 32, cat: "Clinical", q: "What is the role of a spacer in asthma therapy?", a: "Improves delivery of inhaled medication to the lungs, especially for children or elderly struggling with inhaler coordination." },
    { id: 33, cat: "Safety", q: "Define 'Pharmacovigilance' and its importance in Tanzania.", a: "Monitoring medicine safety after licensing to identify ADRs specific to the local population and monitor for substandard medicines." },
    { id: 34, cat: "Safety", q: "What is an 'Antidote'? Give an example for Paracetamol poisoning.", a: "A substance that counteracts a poison. N-acetylcysteine is the antidote for Paracetamol overdose." },
    { id: 35, cat: "Clinical", q: "Describe the pharmacokinetic changes in a patient with chronic kidney disease.", a: "Reduced drug clearance leads to increased half-life and potential toxicity, requiring dosage adjustments for renally excreted drugs." },
    { id: 36, cat: "Clinical", q: "What is the first-line treatment for Uncomplicated TB in Tanzania?", a: "A 6-month regimen: 2 months intensive phase (RHZE) and 4 months continuation phase (RH)." },
    { id: 37, cat: "Obstetrics", q: "Why is Folic Acid supplementation critical in early pregnancy?", a: "Significantly reduces the risk of neural tube defects (NTDs) like spina bifida in the developing fetus." },
    { id: 38, cat: "Law", q: "What are 'Legend Drugs'?", a: "Medications legally required to be dispensed only by prescription, as indicated by a 'legend' on the manufacturer's label." },
    { id: 39, cat: "Pediatrics", q: "How do you calculate the pediatric dose of a drug using Clark's Rule?", a: "Formula: $(\\text{Weight in lbs} / 150) \\times \\text{Adult Dose}$. However, weight-based ($mg/kg$) is preferred." },
    { id: 40, cat: "Pharmacology", q: "Explain the difference between an agonist and an antagonist.", a: "Agonist binds and activates a receptor; Antagonist binds but blocks the receptor response." },

    /* CATEGORY 3: PHARMACY LAW, ETHICS, AND GOVERNANCE (41-60) */
    { id: 41, cat: "Law", q: "What is the main objective of the Pharmacy Act, 2011?", a: "To provide for the regulation and control of pharmacy professionals, premises, and the business of medicines to ensure public safety." },
    { id: 42, cat: "Law", q: "Who is a 'Registered Pharmacist' under Tanzanian law?", a: "A person meets education/internship requirements and is approved by the Council to appear in the Register." },
    { id: 43, cat: "Law", q: "Define 'Professional Misconduct' as per the Pharmacy Act.", a: "Any act or omission that contravenes the Code of Ethics or falls short of expected professional standards." },
    { id: 44, cat: "Law", q: "What are the requirements for a valid prescription in Tanzania?", a: "Written, dated, signed by a registered prescriber, containing patient name, address, and clear instructions." },
    { id: 45, cat: "Governance", q: "What is the role of the Registrar of the Pharmacy Council?", a: "Acts as CEO, maintaining registers/rolls and managing the Council's day-to-day operations." },
    { id: 46, cat: "Ethics", q: "What does the term 'Fiduciary Relationship' mean in pharmacy ethics?", a: "A relationship of trust where the pharmacist acts in the best interest of the patient, above all else." },
    { id: 47, cat: "Law", q: "What are the consequences of late renewal of a pharmacy business permit?", a: "A penalty of 25% of the original fee if not completed within the statutory window (June 10 - July 15)." },
    { id: 48, cat: "Ethics", q: "Explain the concept of 'Autonomy' in healthcare ethics.", a: "The principle that a patient has the right to make their own decisions about medical care after being informed." },
    { id: 49, cat: "Law", q: "What is an 'Authorized Seller of Medicines'?", a: "A business other than a registered pharmacy allowed to sell specific medicines (e.g., ADDO/DLDM)." },
    { id: 50, cat: "Law", q: "How long should records of controlled drugs be kept?", a: "Must be maintained for at least two years from the date of the last entry for regulatory inspection." },
    { id: 51, cat: "Quality", q: "Define 'Falsified Medicines' according to the Pharmacy Council.", a: "Medicines that deliberately misrepresent identity or source, often lacking active ingredients or containing wrong ones." },
    { id: 52, cat: "Law", q: "What is the 'Retention Fee' and why is it mandatory?", a: "Annual fee paid by professionals to stay on statutory registers and remain in good standing." },
    { id: 53, cat: "Governance", q: "What is the 'Pharmacy Committee'?", a: "A Council committee tasked with reviewing registration applications and handling professional examinations." },
    { id: 54, cat: "Law", q: "Can a pharmaceutical technician serve as a 'Superintendent' of a retail pharmacy?", a: "No. Under the Pharmacy Act 2011, only a registered pharmacist can act as a superintendent." },
    { id: 55, cat: "Governance", q: "What is the 'Disciplinary Committee'?", a: "Body responsible for inquiring into misconduct complaints and recommending sanctions to the Council." },
    { id: 56, cat: "Ethics", q: "Define 'Professional Secrecy'.", a: "Ethical obligation to maintain confidentiality of all patient-related info obtained during duty." },
    { id: 57, cat: "Safety", q: "What is the importance of the 'Yellow Form' in Tanzanian healthcare?", a: "Official tool used for reporting suspected adverse drug reactions (ADRs) to the TMDA." },
    { id: 58, cat: "Ethics", q: "Explain the principle of 'Non-Maleficence'.", a: "The fundamental ethical commitment to 'do no harm' to the patient through negligence or lack of skill." },
    { id: 59, cat: "Governance", q: "What is the role of the TMDA?", a: "Regulates products (quality, safety, and efficacy of medicines/devices), while the Council regulates personnel." },
    { id: 60, cat: "Law", q: "What constitutes 'Unfit to Practice'?", a: "Physical, mental, or substance-related condition rendering a professional incapable of safe performance." },

    /* CATEGORY 4: INVENTORY MANAGEMENT AND SUPPLY CHAIN (61-80) */
    { id: 61, cat: "Logistics", q: "What is the 'Integrated Logistics System' (ILS) in Tanzania?", a: "A logistics system managed by MSD combining ordering/distribution of various health commodities into one stream." },
    { id: 62, cat: "Logistics", q: "Define 'FEFO' and its importance.", a: "First Expired, First Out. Ensures oldest stock is used first to prevent wastage and ensure viability." },
    { id: 63, cat: "Inventory", q: "What is a 'Bin Card'?", a: "Record kept at storage tracking item movement (receipts/issues) and current physical balance." },
    { id: 64, cat: "Logistics", q: "Explain the purpose of the 'Report and Requisition Form' (RRF).", a: "Tool used by facilities to report monthly consumption/stock to MSD and request new supplies." },
    { id: 65, cat: "Technology", q: "What is the 'eLMIS'?", a: "Electronic Logistics Management Information System providing real-time digital visibility of the health supply chain." },
    { id: 66, cat: "Safety", q: "How do you handle 'Expired Medicines' in a hospital store?", a: "Physically separate from usable stock, label 'EXPIRED', record in register, and dispose via TMDA guidelines." },
    { id: 67, cat: "Inventory", q: "What is a 'Stockout'?", a: "Situation where essential medicine is unavailable, leading to treatment failure or patient risk." },
    { id: 68, cat: "Logistics", q: "Define 'Lead Time'.", a: "Period between placing an order and when goods are received and available for use." },
    { id: 69, cat: "Inventory", q: "What is 'Safety Stock'?", a: "Extra inventory held to protect against stockouts caused by delays or unexpected demand spikes." },
    { id: 70, cat: "Logistics", q: "Describe the process of receiving goods from MSD.", a: "Verify quantities vs delivery note, check for damage, verify batch/expiry, and update bin cards immediately." },
    { id: 71, cat: "Inventory", q: "What is 'ABC Analysis' in inventory?", a: "Categorizing stock by value: A (high value, low volume), B (moderate), C (low value, high volume)." },
    { id: 72, cat: "Inventory", q: "What is a 'Physical Count' and how often?", a: "Manual count to verify records; recommended monthly or at least quarterly in Tanzania." },
    { id: 73, cat: "Logistics", q: "Explain 'Reverse Logistics'.", a: "Process of moving commodities back up the chain, e.g., returning unused campaign medicines." },
    { id: 74, cat: "Inventory", q: "What is a 'Stores Ledger'?", a: "Central accounting record tracking quantity and value of all inventory within a facility/district." },
    { id: 75, cat: "Inventory", q: "Define 'Maximum Stock Level'.", a: "Highest quantity to be held to prevent overstocking and expiry wastage." },
    { id: 76, cat: "Quality", q: "How do you verify medicine quality upon receipt?", a: "Check seals, labeling, absence of discoloration/sedimentation, and tablet consistency." },
    { id: 77, cat: "Finance", q: "What is the 'Control Number' in government payments?", a: "Unique electronic number used for GePG payments ensuring financial transparency." },
    { id: 78, cat: "Management", q: "Why is 'De-junking' necessary in a pharmacy?", a: "Remove non-viable/expired items taking up space and risking accidental use." },
    { id: 79, cat: "Logistics", q: "What is 'Cold Chain Management'?", a: "Using refrigerators/cold boxes to maintain temp for sensitive items like vaccines/insulin." },
    { id: 80, cat: "Inventory", q: "What if there is a discrepancy between RRF and actual count?", a: "Investigate cause (theft/error), document on bin card, and report to supervisor." },

    /* CATEGORY 5: BEHAVIORAL, SCENARIO, AND COMMUNICATION (81-100) */
    { id: 81, cat: "Counseling", q: "Counsel a patient hesitant to take ART for HIV?", a: "Empathize, explain benefits (viral suppression for normal life), and address fears about side effects." },
    { id: 82, cat: "Safety", q: "What if you dispensed the wrong strength of medication?", a: "Contact patient immediately to stop use, offer replacement, apologize, and file incident report." },
    { id: 83, cat: "Behavioral", q: "How to handle an aggressive customer?", a: "Remain professional, listen without interrupting, and prioritize health needs while maintaining policy." },
    { id: 84, cat: "Dispensing", q: "What if a prescriber's handwriting is illegible?", a: "Never guess. Call the prescriber to confirm medication, dose, and instructions before dispensing." },
    { id: 85, cat: "Communication", q: "Explain complex dosing to low-literacy patients?", a: "Use visual aids (colors/symbols), simple language, and 'teach-back' method for understanding." },
    { id: 86, cat: "Safety", q: "Patient asks for 'Watch' antibiotic over the counter?", a: "Politely refuse, explain antibiotic resistance risks and legal prescription requirement." },
    { id: 87, cat: "Behavioral", q: "Describe a time you demonstrated leadership.", a: "Focus on initiative in workflow improvement, managing stockout crises, or training juniors." },
    { id: 88, cat: "Ethics", q: "Ensure patient confidentiality in a busy pharmacy?", a: "Maintain professional distance, use low voices for counseling, and secure all records." },
    { id: 89, cat: "Ethics", q: "Colleague showing signs of substance abuse?", a: "Report to Pharmacist-in-Charge or management as patient safety is at risk." },
    { id: 90, cat: "Ethics", q: "Parent refuses life-saving treatment for a child?", a: "Explain medical risks, document refusal, and consult social worker or legal officer." },
    { id: 91, cat: "Dispensing", q: "How to prioritize multiple urgent requests?", a: "Prioritize by clinical urgency (e.g., pediatric emergencies) and use an organized queue." },
    { id: 92, cat: "Behavioral", q: "Disagree with a colleague on a clinical issue?", a: "Discuss privately, refer to STG or clinical evidence to reach consensus for patient interest." },
    { id: 93, cat: "Safety", q: "Suspect a medicine in stock is falsified?", a: "Quarantine stock, inform TMDA/Council, and notify supplier (MSD/Wholesaler)." },
    { id: 94, cat: "Service", q: "Your approach to 'Exceptional Customer Service'?", a: "Attentive, empathetic, ensuring correct medication and clear patient understanding." },
    { id: 95, cat: "Resilience", q: "Pressure of working in understaffed facility?", a: "Focus on accuracy over speed, communicate wait times, and stay organized." },
    { id: 96, cat: "Dispensing", q: "Patient has questions about unfamiliar drug?", a: "Consult clinical references or senior colleague, then provide correct information." },
    { id: 97, cat: "Dispensing", q: "Importance of asking 'Allergy History'?", a: "Prevent fatal hypersensitivity reactions to meds like Penicillin or Sulfonamides." },
    { id: 98, cat: "Counseling", q: "Counsel on 'Treatment Adherence'?", a: "Explain that missing doses leads to treatment failure and drug-resistant strains." },
    { id: 99, cat: "Policy", q: "Understanding of 'Universal Health Coverage' (UHC)?", a: "Goal for all Tanzanians to access health services without financial hardship via stable supply." },
    { id: 100, cat: "Career", q: "Why are you the best candidate for this position?", a: "Summarize knowledge of STG, ethics commitment, and proactive attitude toward improvement." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Pharmacology': case 'Clinical': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Law': case 'Regulation': return 'bg-red-50 text-red-600 border-red-100';
      case 'Logistics': case 'Inventory': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Ethics': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Safety': case 'Counseling': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        <Link 
          to="/faq/afya" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Pill size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-deep-blue">
            Pharmacy Cadre
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Strategic Evaluation: 100 Frequently Asked Questions. <br />
            Reflecting expert-level knowledge for PSRS (Utumishi) and Pharmacy Council evaluations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Pill className="text-blue-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">21-40</span>
            <h5 className="text-xs font-bold uppercase text-center">Clinical & Pharma</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Scale className="text-red-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">41-60</span>
            <h5 className="text-xs font-bold uppercase text-center">Law & Ethics</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Truck className="text-indigo-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">61-80</span>
            <h5 className="text-xs font-bold uppercase text-center">Logistics/ILS</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <MessageSquare className="text-orange-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">81-100</span>
            <h5 className="text-xs font-bold uppercase text-center">Counseling</h5>
          </div>
        </div>

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
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block">TECHNICAL RESPONSE:</small>
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