import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TestTube2, Microscope, ShieldAlert, Activity, FileCheck2, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function LaboratoryFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* SECTION 1: IDENTITY, ETHICS & PUBLIC SERVICE (1-20) */
    { 
      id: 1, cat: "Identity", 
      q: "Introduce yourself and explain why you are the right candidate for this Laboratory Technologist position.", 
      guide: "Evaluates communication skills and alignment with job requirements.",
      ans: "I am a qualified Medical Laboratory Technologist registered with the HLPC. I possess expertise in modern diagnostic equipment, including PCR and automated analyzers. Beyond my technical skills, I am a person of high integrity who prioritizes patient confidentiality and safety protocols." 
    },
    { 
      id: 2, cat: "Public Service", 
      q: "What is the meaning of Standing Orders 2009 and why is it important for a health worker?", 
      guide: "Tests understanding of government regulations.",
      ans: "Standing Orders 2009 are permanent regulations governing public service in Tanzania. They are essential as they ensure equity, integrity, and provide a clear framework for the rights and duties of public servants." 
    },
    { id: 3, cat: "Law", q: "Who is the legal owner of medical records in Tanzania?", guide: "Tests knowledge of medical documentation ownership.", ans: "Legally, medical records are the property of the Health Department (Government), although patients have the right to be informed about the contents therein." },
    { id: 4, cat: "Discipline", q: "Explain the difference between Formal and Summary disciplinary proceedings.", guide: "Understanding of disciplinary frameworks.", ans: "Formal proceedings are used for gross misconduct (Schedule A), while Summary proceedings are for minor offenses (Schedule B) with a shorter resolution process." },
    { id: 5, cat: "Ethics", q: "If you find a colleague violating safety protocols, what action would you take?", guide: "Measures professional responsibility.", ans: "I would first advise them professionally to follow the protocols. If the violation persists, I would report it to the Laboratory Manager to prevent harm to staff and patients." },
    { id: 6, cat: "Ethics", q: "What does 'Confidentiality' mean in the laboratory setting?", guide: "Tests understanding of patient privacy.", ans: "It is the professional obligation to not disclose patient information to anyone not involved in their treatment without patient consent or a court order." },
    { id: 7, cat: "Public Service", q: "State the official working hours according to Standing Order F.1.", guide: "Knowledge of standard working times.", ans: "The official hours are 07:30 AM to 03:30 PM on working days, though healthcare environments require readiness beyond these hours." },
    { id: 8, cat: "Service", q: "Explain the importance of the Client Service Charter.", guide: "Accountability and service quality.", ans: "It increases accountability and provides clients with a clear understanding of the quality of services they are entitled to receive." },
    { id: 9, cat: "HR", q: "Who issues permits for new employment in the government?", guide: "Tests knowledge of recruitment authorities.", ans: "The President’s Office, Public Service Management, and Good Governance (PO-PSMGG) after receiving requirements from employers." },
    { id: 10, cat: "Policy", q: "Is it true that only low-educated staff are posted to rural areas?", guide: "Understanding of deployment policy.", ans: "No. Posting is based on institutional needs and the requirement for services across the entire nation, regardless of education level." },
    { id: 11, cat: "Regulation", q: "What are the duties of the Health Laboratory Practitioners Council (HLPC)?", guide: "Knowledge of regulatory bodies.", ans: "To register practitioners, oversee ethics, and ensure the quality of laboratory training and practice in Tanzania." },
    { id: 12, cat: "Ethics", q: "What would you do if you realized you issued an incorrect lab result to a patient?", guide: "Measures accountability.", ans: "I would immediately inform the treating physician to prevent incorrect treatment, then file an incident report for quality improvement purposes." },
    { id: 13, cat: "Ethics", q: "Explain the concept of 'Professionalism' in healthcare.", guide: "Professional standards.", ans: "It is a combination of technical expertise, integrity, humility, and consistent adherence to service delivery standards." },
    { id: 14, cat: "Research", q: "Why is it important for a lab technologist to conduct research?", guide: "Evidence-based practice.", ans: "To improve diagnostic methods and assist in formulating health policies based on scientific evidence." },
    { id: 15, cat: "Public Service", q: "What is 'Public Service' according to Tanzanian law?", guide: "Legal definition.", ans: "It is the system or institution entrusted with delivering services to the public on behalf of the government." },
    { id: 16, cat: "HR", q: "Explain the appeal procedure if a staff member is unsatisfied with a disciplinary action.", guide: "Knowledge of labor rights.", ans: "An employee has the right to appeal to the Public Service Commission (Mamlaka ya Rufaa) within the legally prescribed timeframe." },
    { id: 17, cat: "Leadership", q: "Mention three qualities of a good lab manager.", guide: "Leadership skills.", ans: "Decision-making ability, excellent time management, and the ability to motivate the team to reach quality goals." },
    { id: 18, cat: "HR", q: "What is 'Establishment' (Ikama) in government employment?", guide: "Budgetary planning.", ans: "It is the authorized list of job positions within an institution based on the approved budget." },
    { id: 19, cat: "Ethics", q: "Explain the importance of uniforms and identity cards.", guide: "Professional identity.", ans: "They aid in identifying the staff to clients and ensure security and adherence to workplace professional standards." },
    { id: 20, cat: "Management", q: "What would you do if lab supplies are out of stock during a disease outbreak?", guide: "Problem-solving under pressure.", ans: "I would immediately notify the hospital management to contact MSD or purchase from approved alternative sources to ensure services do not stop." },

    /* SECTION 2: HEMATOLOGY & BLOOD BANK (21-40) */
    { id: 21, cat: "Hematology", q: "Explain the difference between Serum and Plasma.", guide: "Bio-chemistry basics.", ans: "Serum is the liquid part of blood that remains after clotting (lacks fibrinogen), whereas Plasma is the liquid part where clotting is prevented by an anticoagulant." },
    { id: 22, cat: "Hematology", q: "Which anticoagulant is used for a Complete Blood Count (CBC)?", guide: "Sampling standards.", ans: "EDTA (Ethylenediaminetetraacetic acid)." },
    { id: 23, cat: "Hematology", q: "What is the function of Sodium Fluoride in a glucose tube?", guide: "Pre-analytical standards.", ans: "It acts as a glycolytic inhibitor to prevent the drop of glucose levels before testing." },
    { id: 24, cat: "Blood Bank", q: "Explain the steps of 'Cross-matching' in a blood bank.", guide: "Transfusion safety.", ans: "It involves mixing donor cells with recipient serum (Major cross-match) and vice-versa (Minor) to check for agglutination (clumping)." },
    { id: 25, cat: "Hematology", q: "What is Erythrocyte Sedimentation Rate (ESR)?", guide: "Inflammation marker.", ans: "It is the rate at which red blood cells sink; an increased rate indicates infection or inflammation in the body." },
    { id: 26, cat: "Blood Bank", q: "Explain 'Universal Donor' and 'Universal Recipient' blood groups.", guide: "ABO system basics.", ans: "Universal Donor is O Negative because it lacks antigens; Universal Recipient is AB Positive because it lacks antibodies against A or B." },
    { id: 27, cat: "Hematology", q: "Which blood cells are responsible for blood clotting (hemostasis)?", guide: "Cell function.", ans: "Platelets (Thrombocytes)." },
    { id: 28, cat: "Hematology", q: "What does 'Leukocytosis' mean?", guide: "Clinical terminology.", ans: "It is an increase in white blood cell (WBC) count above the normal range, often due to infection." },
    { id: 29, cat: "Parasitology", q: "Explain the importance of a 'Blood Smear' in malaria diagnosis.", guide: "Diagnosis standards.", ans: "It allows for the visualization of malaria parasites, species identification, and determination of parasite density." },
    { id: 30, cat: "Hematology", q: "Which anticoagulant is used for PT/APTT tests?", guide: "Coagulation tests.", ans: "Trisodium Citrate (Blue top tube)." },
    { id: 31, cat: "Hematology", q: "Explain the concept of 'Buffy Coat'.", guide: "Blood separation.", ans: "It is the thin white layer found between Plasma and Red Cells after centrifugation, consisting of WBCs and Platelets." },
    { id: 32, cat: "Hematology", q: "What causes Hemolysis in the laboratory?", guide: "Sample quality.", ans: "Using a very small needle, vigorous shaking of the tube, or storing blood at extreme temperatures." },
    { id: 33, cat: "Hematology", q: "Explain the function of Hemoglobin in the body.", guide: "Oxygen transport.", ans: "To transport oxygen from the lungs to the tissues and return carbon dioxide (CO2)." },
    { id: 34, cat: "Hematology", q: "What is Hematocrit (PCV)?", guide: "Blood volume measurement.", ans: "It is the percentage of the volume of red blood cells in the total blood volume." },
    { id: 35, cat: "Hematology", q: "Explain the importance of testing for Reticulocytes.", guide: "Bone marrow function.", ans: "It helps evaluate the ability of the bone marrow to produce new red blood cells." },
    { id: 36, cat: "Hematology", q: "Under what condition do 'Sickle Cells' appear in the blood?", guide: "Genetic pathology.", ans: "Due to a genetic mutation in Hemoglobin (HbS) which causes cells to take a sickle shape when oxygen levels are low." },
    { id: 37, cat: "Chemistry", q: "Explain the use of the Green top tube (Heparin).", guide: "Electrolyte testing.", ans: "It is used for chemistry tests like electrolytes and blood gases because it does not alter mineral levels." },
    { id: 38, cat: "Hematology", q: "What does 'Pancytopenia' mean?", guide: "Blood deficiency.", ans: "A reduction in all three types of blood cells: RBCs, WBCs, and Platelets." },
    { id: 39, cat: "Blood Bank", q: "Explain the process of 'Aphaeresis'.", guide: "Selective donation.", ans: "A process where only one part of the blood (like platelets) is removed and the rest is returned to the donor." },
    { id: 40, cat: "Hematology", q: "Which parameters are used to calculate 'Red Cell Indices'?", guide: "MCV, MCH, and MCHC.", ans: "MCV, MCH, and MCHC. For example, $MCHC = (Hb / Hct) \times 100$." },

    /* SECTION 3: CLINICAL CHEMISTRY (41-60) */
    { id: 41, cat: "Chemistry", q: "Explain the function of the kidneys in the body.", guide: "Renal physiology.", ans: "To filter waste from the blood, regulate water and electrolyte balance, and help control blood pressure." },
    { id: 42, cat: "Endocrinology", q: "Which hormone regulates glucose levels?", guide: "Glucose metabolism.", ans: "Insulin, produced by the pancreas." },
    { id: 43, cat: "Chemistry", q: "Urea is a metabolic byproduct of what?", guide: "Protein metabolism.", ans: "Amino Acids (Proteins)." },
    { id: 44, cat: "Chemistry", q: "Explain the importance of the Creatinine test.", guide: "Renal function marker.", ans: "It is a more accurate indicator of kidney function because its production is stable and independent of diet." },
    { id: 45, cat: "Chemistry", q: "What does Jaundice signify in lab results?", guide: "Liver function marker.", ans: "An increase in Bilirubin in the blood, signifying liver problems or excessive red cell breakdown." },
    { id: 46, cat: "Chemistry", q: "Explain the difference between LDL and HDL.", guide: "Lipid profile.", ans: "LDL is 'bad cholesterol' that clogs arteries; HDL is 'good cholesterol' that removes fats from the arteries." },
    { id: 47, cat: "Chemistry", q: "Which enzymes are used for Liver Function Tests (LFT)?", guide: "Liver markers.", ans: "ALT, AST, and ALP." },
    { id: 48, cat: "Chemistry", q: "What is GFR (Glomerular Filtration Rate)?", guide: "Kidney stage marker.", ans: "A measure of the volume of blood filtered by the kidneys per minute; used to stage Chronic Kidney Disease (CKD)." },
    { id: 49, cat: "Chemistry", q: "Explain the importance of Electrolyte tests (Na+, K+, Cl-).", guide: "Acid-base balance.", ans: "Crucial for nerve and muscle function and maintaining the body's acid-base balance." },
    { id: 50, cat: "Chemistry", q: "What does an increase in Amylase signify?", guide: "Pancreatic marker.", ans: "Pancreatitis (inflammation of the pancreas)." },
    { id: 51, cat: "Chemistry", q: "What is HbA1c?", guide: "Diabetes monitoring.", ans: "Glycated Hemoglobin; measures the average blood sugar of a patient over the past three months." },
    { id: 52, cat: "Chemistry", q: "Explain the concept of 'Metabolism'.", guide: "Biological processes.", ans: "The sum of all chemical reactions in the body, divided into Catabolism (breaking down) and Anabolism (building up)." },
    { id: 53, cat: "Chemistry", q: "Which hormone regulates calcium in the body?", guide: "Mineral regulation.", ans: "Parathyroid Hormone (PTH) and Calcitonin." },
    { id: 54, cat: "Chemistry", q: "What is the source of ATP in the body?", guide: "Cellular energy.", ans: "Cellular respiration (Glycolysis, Citric Acid Cycle) within the mitochondria." },
    { id: 55, cat: "Chemistry", q: "Explain 'Hypoglycemia'.", guide: "Low sugar.", ans: "Blood sugar levels being significantly lower than normal, which can cause loss of consciousness." },
    { id: 56, cat: "Chemistry", q: "Which test is used to detect Prostate problems?", guide: "Oncology markers.", ans: "PSA (Prostate Specific Antigen)." },
    { id: 57, cat: "Chemistry", q: "Explain the importance of testing for Albumin in urine.", guide: "Kidney damage sign.", ans: "It is an early sign of kidney damage (Microalbuminuria)." },
    { id: 58, cat: "Chemistry", q: "What is the function of a Spectrophotometer?", guide: "Lab instrumentation.", ans: "To measure the amount of light absorbed by a sample to determine the chemical concentration." },
    { id: 59, cat: "Chemistry", q: "Explain 'Renal Threshold' for glucose.", guide: "Sugar excretion.", ans: "The blood sugar level above which the kidneys begin to excrete sugar into the urine (usually 180 mg/dL)." },
    { id: 60, cat: "Chemistry", q: "Which disease causes an increase in Uric Acid?", guide: "Gout marker.", ans: "Gout (a form of inflammatory arthritis)." },

    /* SECTION 4: MICROBIOLOGY & PARASITOLOGY (61-80) */
    { id: 61, cat: "Microbiology", q: "Difference between Prokaryotic and Eukaryotic cells.", guide: "Cell biology.", ans: "Prokaryotes (like bacteria) lack a membrane-bound nucleus; Eukaryotes (like fungi) have a nucleus." },
    { id: 62, cat: "Microbiology", q: "Which organism causes Tuberculosis?", guide: "Infectious diseases.", ans: "Mycobacterium tuberculosis." },
    { id: 63, cat: "Microbiology", q: "Explain the Gram Staining process.", guide: "Staining standards.", ans: "Uses Crystal Violet (primary), Iodine (mordant), Alcohol (decolorizer), and Safranin (counterstain)." },
    { id: 64, cat: "Microbiology", q: "What is 'Culture and Sensitivity'?", guide: "Antibiotic stewardship.", ans: "Growing organisms in the lab (culture) and testing drugs against them to see which is effective (sensitivity)." },
    { id: 65, cat: "Parasitology", q: "Which parasite causes Malaria?", guide: "Parasite identification.", ans: "Plasmodium species (e.g., P. falciparum)." },
    { id: 66, cat: "Microbiology", q: "Explain the use of an 'Autoclave'.", guide: "Sterilization standards.", ans: "Uses pressurized steam to kill organisms, typically at 121°C for 15 minutes." },
    { id: 67, cat: "Microbiology", q: "What is 'Antibiotic Resistance'?", guide: "Global health threat.", ans: "The ability of bacteria to grow despite the presence of an antibiotic meant to kill them." },
    { id: 68, cat: "Safety", q: "Steps after a needlestick injury in the lab?", guide: "Post-exposure protocol.", ans: "Wash with soap and water, notify supervisor, and start Post-Exposure Prophylaxis (PEP) within 72 hours." },
    { id: 69, cat: "Microbiology", q: "Which bacteria produce spores?", guide: "Bacterial survival.", ans: "Bacillus and Clostridium species." },
    { id: 70, cat: "Microbiology", q: "What are 'Zoonotic Diseases'?", guide: "Animal-to-human transmission.", ans: "Diseases transmitted from animals to humans, like Anthrax or Rabies." },
    { id: 71, cat: "Microbiology", q: "Which stain is used for 'Acid Fast Bacilli' (AFB)?", guide: "TB diagnosis.", ans: "Ziehl-Neelsen stain." },
    { id: 72, cat: "Microbiology", q: "Sterilization vs. Disinfection?", guide: "IPC standards.", ans: "Sterilization kills all organisms including spores; Disinfection reduces organisms to a safe level but doesn't kill spores." },
    { id: 73, cat: "Microbiology", q: "Explain 'Normal Flora'.", guide: "Body organisms.", ans: "Organisms that live on the body without causing disease under normal conditions, helping protect against pathogens." },
    { id: 74, cat: "Microbiology", q: "Which organism causes Amoebic Dysentery?", guide: "Parasitology.", ans: "Entamoeba histolytica." },
    { id: 75, cat: "Microbiology", q: "Explain 'Dark-field Microscopy'.", guide: "Advanced imaging.", ans: "Used to visualize organisms difficult to see with normal microscopy, like Treponema pallidum (Syphilis)." },
    { id: 76, cat: "Microbiology", q: "Aerobic vs. Anaerobic bacteria?", guide: "Oxygen requirements.", ans: "Aerobic require oxygen to live; Anaerobic die in the presence of oxygen." },
    { id: 77, cat: "Microbiology", q: "Explain the use of 'Blood Agar'.", guide: "Culture media.", ans: "A nutrient-rich medium used to detect hemolysis (breakdown of red cells) by bacteria." },
    { id: 78, cat: "Virology", q: "Which viruses cause Hepatitis?", guide: "Viral identification.", ans: "Hepatitis A, B, C, D, and E." },
    { id: 79, cat: "Safety", q: "Importance of a 'Biosafety Cabinet'?", guide: "Lab safety.", ans: "Protects the technologist, sample, and environment from infection when working with dangerous pathogens." },
    { id: 80, cat: "Virology", q: "What is 'Viraemia'?", guide: "Viral terminology.", ans: "The presence of viruses in the blood." },

    /* SECTION 5: QUALITY & SYSTEMS (81-100) */
    { id: 81, cat: "Histology", q: "Explain the stages of 'Tissue Processing'.", guide: "Histopathology standards.", ans: "Fixation, Dehydration, Clearing, Infiltration, and Embedding." },
    { id: 82, cat: "Histology", q: "Which chemical is used as a general fixative?", guide: "Tissue preservation.", ans: "10% Neutral Buffered Formalin." },
    { id: 83, cat: "Quality", q: "What is ISO 15189?", guide: "International lab standards.", ans: "The international standard for quality and competence in medical laboratories." },
    { id: 84, cat: "Quality", q: "Quality Assurance vs. Quality Control?", guide: "Lab management.", ans: "QA is process-oriented to prevent errors; QC is product-oriented to detect errors in daily tests." },
    { id: 85, cat: "Systems", q: "What is MTUHA?", guide: "TZ Health systems.", ans: "The Health Management Information System (HMIS) in Tanzania." },
    { id: 86, cat: "Systems", q: "Use of MTUHA Book 10?", guide: "Reporting standards.", ans: "Used to collect data from various departments to generate monthly reports." },
    { id: 87, cat: "Systems", q: "What is 'Turnaround Time' (TAT)?", guide: "Efficiency marker.", ans: "The time from receiving a sample to the delivery of the result." },
    { id: 88, cat: "Safety", q: "Action for a needlestick injury?", guide: "Emergency protocol.", ans: "Wash the area, report to supervisor, perform baseline tests, and start PEP if required." },
    { id: 89, cat: "Histology", q: "Which device is used to cut very thin tissue sections?", guide: "Lab instrumentation.", ans: "Microtome." },
    { id: 90, cat: "Quality", q: "Importance of 'Internal Audit' in the lab?", guide: "Compliance.", ans: "Identifies quality system gaps before external inspections and aids continuous improvement." },
    { id: 91, cat: "Quality", q: "What is a 'Pre-analytical Error'?", guide: "Error types.", ans: "Errors occurring before testing, such as mislabeling or using the wrong collection tube." },
    { id: 92, cat: "Quality", q: "Explain 'Calibration'.", guide: "Instrument accuracy.", ans: "Adjusting an instrument so its results match known international standards." },
    { id: 93, cat: "Safety", q: "Role of the Laboratory Safety Officer?", guide: "Safety supervision.", ans: "Oversees safety policies, provides staff training, and ensures PPE availability." },
    { id: 94, cat: "Quality", q: "Explain the 'Post-analytical Phase'.", guide: "Final report phase.", ans: "The stage after testing involving result verification, recording, and reporting to the physician." },
    { id: 95, cat: "Hematology", q: "What is the first tube in the 'Order of Draw'?", guide: "Sampling standards.", ans: "Blood Culture bottles." },
    { id: 96, cat: "Safety", q: "Importance of the 'Material Safety Data Sheet' (MSDS)?", guide: "Chemical safety.", ans: "Documents chemical properties, hazards, and first-aid instructions in case of accidents." },
    { id: 97, cat: "Quality", q: "What is a 'Critical Value' in the lab?", guide: "Emergency reporting.", ans: "A result indicating a life-threatening risk (e.g., very low Potassium) that must be reported to a doctor immediately." },
    { id: 98, cat: "Equipment", q: "Explain the use of a 'Centrifuge'.", guide: "Sample separation.", ans: "Uses centrifugal force to separate liquid components from cells." },
    { id: 99, cat: "Cytology", q: "Which stain is used for Pap smears?", guide: "Cervical cancer screening.", ans: "Papanicolaou stain." },
    { id: 100, cat: "IT", q: "Why should a lab technologist have computer skills?", guide: "Digital integration.", ans: "To use LIMS systems, record MTUHA data, and communicate officially via electronic means." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Identity': case 'Public Service': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Hematology': case 'Blood Bank': return 'bg-red-50 text-red-600 border-red-100';
      case 'Chemistry': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Microbiology': case 'Parasitology': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'Quality': case 'Systems': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Safety': return 'bg-orange-50 text-orange-600 border-orange-100';
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
            <Microscope size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-deep-blue">
            Laboratory Science
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Strategic Evaluation: 100 Essential Questions for Lab Technologists. <br />
            Based on HLPC standards, MTUHA systems, and clinical laboratory protocols in Tanzania.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <FileCheck2 className="text-blue-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-20</span>
            <h5 className="text-xs font-bold uppercase text-center">Ethics & Laws</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <TestTube2 className="text-red-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">21-40</span>
            <h5 className="text-xs font-bold uppercase text-center">Hematology</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Activity className="text-indigo-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">41-60</span>
            <h5 className="text-xs font-bold uppercase text-center">Chemistry</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ShieldAlert className="text-orange-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">81-100</span>
            <h5 className="text-xs font-bold uppercase text-center">Quality/Safety</h5>
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
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-3 duration-500 space-y-4">
                  <div className="p-6 bg-neo-mint/5 rounded-[24px] border border-neo-mint/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-neo-mint"></div>
                    <small className="font-black text-[10px] text-neo-mint uppercase tracking-widest mb-2 block italic text-xs">Interview Guide (Logic):</small>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                      {m.guide}
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-deep-blue/20"></div>
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block text-xs">Technical Sample Answer:</small>
                    <p className="text-deep-blue text-sm leading-relaxed font-medium">
                      {m.ans}
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