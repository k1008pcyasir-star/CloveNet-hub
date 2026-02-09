import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, HeartPulse, Baby, ShieldCheck, ClipboardList, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function NursingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* CLUSTER 1: PROFESSIONAL IDENTITY & ETHICS (1-15) */
    { id: 1, cat: "Identity", q: "Introduce yourself and summarize your professional background.", guide: "Evaluate communication skills and clinical achievements.", ans: "I am a registered nurse with [X] years of experience. I graduated from [College] and have developed strong skills in patient assessment and maternal care. My goal is to provide quality, evidence-based nursing care to the Tanzanian community." },
    { id: 2, cat: "Motivation", q: "What inspired you to pursue a career in nursing and midwifery?", guide: "Gauges intrinsic motivation and commitment.", ans: "I was inspired by the desire to support mothers and children. Witnessing the impact of compassionate care in my community fueled my passion to become a professional caregiver and contribute to the national health system." },
    { id: 3, cat: "Ethics", q: "What do you understand by 'Professional Ethics' in the Tanzanian health sector?", guide: "Reference confidentiality, autonomy, and non-maleficence.", ans: "Professional ethics involves adhering to a set of moral principles including confidentiality, respecting patient autonomy (uhuru wa mgonjwa), and ensuring non-maleficence (kutodhuru mgonjwa)." },
    { id: 4, cat: "Knowledge", q: "How do you stay informed about the latest advancements in healthcare?", guide: "Reference TNMC, MoH circulars, and STG 2021.", ans: "I regularly review the Standard Treatment Guidelines (STG 2021), attend Continuing Professional Development (CPD) sessions, and follow circulars from the Ministry of Health and the Tanzania Nursing and Midwifery Council (TNMC)." },
    { id: 5, cat: "Advantage", q: "Why should we hire you for this specific role?", guide: "Focus on blend of skills, attitude, and rural service readiness.", ans: "I possess a strong clinical foundation, a positive work ethic, and a deep patriotic commitment to serve in any region, including underserved rural areas, to ensure every Tanzanian receives quality care." },
    { id: 6, cat: "Integrity", q: "Describe a time you witnessed an unethical act. How did you handle it?", guide: "Assesses integrity and knowledge of reporting channels.", ans: "I would approach the situation by prioritizing patient safety first, then I would report the unethical conduct through the established internal hospital channels such as the Nursing In-charge or the ethics committee." },
    { id: 7, cat: "Law", q: "What is the importance of the TNMC registration and license?", guide: "Legal right to practice and public protection.", ans: "Registration with the TNMC is a legal requirement that grants the right to practice as a nurse in Tanzania, ensuring that only qualified individuals provide care to protect the public from malpractice." },
    { id: 8, cat: "Ethics", q: "How to handle a patient refusing life-saving treatment due to religion?", guide: "Balance between autonomy and duty of care.", ans: "I would provide comprehensive health education regarding the risks of refusal. If they still refuse, I must respect their autonomy while ensuring they sign a refusal form as per hospital protocol." },
    { id: 9, cat: "Vision", q: "What are your short-term and long-term career goals?", guide: "Intent to specialize and grow within public service.", ans: "Short-term, I aim to stabilize clinical operations in my ward. Long-term, I plan to specialize in [Field, e.g., Critical Care] to enhance the hospital's capacity to handle complex cases." },
    { id: 10, cat: "Governance", q: "Define 'Clinical Governance' and its relevance.", guide: "Quality assurance and continuous improvement.", ans: "Clinical governance is a framework through which health organizations are accountable for continuously improving the quality of their services and safeguarding high standards of care." },
    { id: 11, cat: "Confidentiality", q: "How do you maintain patient confidentiality in a crowded ward?", guide: "Professional discretion and secure documentation.", ans: "I maintain confidentiality by using lowered tones during handovers, ensuring screens are drawn during procedures, and keeping all medical records in secure, locked areas." },
    { id: 12, cat: "Strength", q: "Describe a strength that makes you an asset to a rural health center.", guide: "Adaptability and resourcefulness.", ans: "My greatest strength is adaptability. In rural settings where resources may be limited, I am resourceful and able to prioritize critical care using the available tools without compromising patient safety." },
    { id: 13, cat: "Weakness", q: "Describe a weakness and the steps taken to address it.", guide: "Show self-awareness and improvement.", ans: "I used to struggle with clinical documentation speed. I have since improved by adopting structured templates and improving my typing skills, ensuring records are completed accurately and on time." },
    { id: 14, cat: "MoH", q: "What do you know about the mission and vision of the Ministry of Health?", guide: "Alignment with national health goals.", ans: "The Ministry's vision is to have a healthy society with improved social well-being, achieved through providing quality health services that are accessible and affordable to all Tanzanians." },
    { id: 15, cat: "Service", q: "Biggest challenge in a remote region and how to overcome it?", guide: "Problem-solving and patriotism.", ans: "The biggest challenge might be limited infrastructure. I would overcome this by fostering strong community relations and working closely with the local government to maximize the reach of mobile outreach services." },

    /* II. FUNDAMENTAL NURSING CONCEPTS (16-30) */
    { id: 16, cat: "Process", q: "What are the five steps of the Nursing Process?", guide: "ADPIE framework.", ans: "The five steps are: 1. Assessment (Tathmini), 2. Diagnosis (Utambuzi), 3. Planning (Mipango), 4. Implementation (Utekelezaji), and 5. Evaluation (Upimaji)." },
    { id: 17, cat: "Assessment", q: "What is the difference between subjective and objective data?", guide: "Patient's words vs Nurse's measurements.", ans: "Subjective data is information provided by the patient (e.g., 'I feel dizzy'). Objective data is measurable information observed by the nurse (e.g., Blood pressure 120/80)." },
    { id: 18, cat: "Theory", q: "Explain Maslow’s Hierarchy of Needs in patient care.", guide: "Prioritizing physiological needs.", ans: "It helps nurses prioritize care by meeting basic physiological needs (breathing, nutrition) before safety or emotional needs, ensuring the most critical issues are addressed first." },
    { id: 19, cat: "Planning", q: "What is the purpose of a SMART goal in nursing?", guide: "Specific, Measurable, Achievable, Relevant, Time-bound.", ans: "SMART goals ensure that the nursing care plan is focused and effective, allowing the nurse to evaluate whether the desired patient outcome has been reached within a set timeframe." },
    { id: 20, cat: "Medication", q: "Describe the 'rights' of medication administration.", guide: "Safety protocols.", ans: "They include Right Patient, Right Drug, Right Dose, Right Route, Right Time, and Right Documentation." },
    { id: 21, cat: "Wound Care", q: "What are the stages of wound healing?", guide: "Physiological phases.", ans: "The stages are: 1. Inflammatory phase, 2. Proliferative phase, and 3. Remodeling phase." },
    { id: 22, cat: "Diagnosis", q: "Nursing Diagnosis vs. Medical Diagnosis?", guide: "Patient response vs Disease identification.", ans: "A medical diagnosis identifies a specific disease (e.g., Diabetes). A nursing diagnosis identifies the patient's response to that disease (e.g., Knowledge deficit or Risk for infection)." },
    { id: 23, cat: "Emergency", q: "Initial assessment in the Emergency Department?", guide: "ABC approach.", ans: "I use the ABC approach: A - Airway (is it clear?), B - Breathing (is it adequate?), and C - Circulation (is there a pulse or bleeding?)." },
    { id: 24, cat: "Vital Signs", q: "Normal range for body temperature?", guide: "Standard Celsius range.", ans: "The normal range is $36.5\text{--}37.5^\circ\text{C}$, measured using a thermometer (kielektroniki au zebaki)." },
    { id: 25, cat: "Vital Signs", q: "Procedure for checking blood pressure.", guide: "Equipment and technique.", ans: "Use a sphygmomanometer and stethoscope. Ensure the patient is relaxed, use the correct cuff size, and measure at the level of the heart." },
    { id: 26, cat: "Labs", q: "Significance of a hematocrit level of 70%?", guide: "Dehydration or polycythemia.", ans: "This is a dangerously high level, indicating severe dehydration or polycythemia, requiring immediate clinical intervention and fluid management." },
    { id: 27, cat: "Skin Care", q: "Managing a patient with dry skin?", guide: "Hydration and emollients.", ans: "Ensure the patient is well-hydrated orally and apply emollients (mafuta/lotion) to maintain skin integrity and prevent breakdown." },
    { id: 28, cat: "Public Health", q: "Four primary levels of prevention?", guide: "Primordial to Tertiary.", ans: "1. Primordial (social conditions), 2. Primary (vaccination), 3. Secondary (screening/early treatment), and 4. Tertiary (rehabilitation)." },
    { id: 29, cat: "Pediatrics", q: "Define 'Stridor' and its clinical significance.", guide: "Upper airway obstruction sign.", ans: "Stridor is a high-pitched sound heard during inhalation. It indicates an upper airway obstruction and is a medical emergency in children." },
    { id: 30, cat: "Biology", q: "Why is the 'Cell' important in nursing?", guide: "Understanding pathology.", ans: "The cell is the basic unit of life. Understanding cellular function is essential for nurses to grasp how diseases and medications affect the human body." },

    /* III. MIDWIFERY & MATERNAL HEALTH (31-45) */
    { id: 31, cat: "Midwifery", q: "What are the three components of AMTSL?", guide: "Active Management of Third Stage of Labor.", ans: "1. Administration of a uterotonic (Oxytocin), 2. Controlled Cord Traction (CCT), and 3. Uterine massage after placenta delivery." },
    { id: 32, cat: "Midwifery", q: "Define Postpartum Hemorrhage (PPH) and its common cause.", guide: "Bleeding >500ml vaginal.", ans: "PPH is blood loss $>500 \text{ ml}$ after vaginal birth. The most common cause is uterine atony (failure of the uterus to contract)." },
    { id: 33, cat: "Medication", q: "Recommended dose of Oxytocin for PPH prevention?", guide: "Dosage and route.", ans: "$10 \text{ IU}$ (International Units) administered Intramuscularly (IM) immediately after the birth of the baby." },
    { id: 34, cat: "Medication", q: "When to use Misoprostol instead of Oxytocin?", guide: "Resource-limited settings.", ans: "Misoprostol is used when Oxytocin is unavailable or when there is no reliable cold chain (e.g., in remote home deliveries)." },
    { id: 35, cat: "Medication", q: "Why is Ergometrine contraindicated in pre-eclampsia?", guide: "Hypertension risk.", ans: "Ergometrine causes vasoconstriction, which can lead to a dangerous spike in blood pressure and potential stroke in a pre-eclamptic mother." },
    { id: 36, cat: "PPH", q: "Explain 'The 4 Ts' of PPH.", guide: "Causes of bleeding.", ans: "Tone (Atony), Tissue (Retained products), Trauma (Lacerations), and Thrombin (Coagulation disorders)." },
    { id: 37, cat: "Midwifery", q: "Definition of hypertension in pregnancy?", guide: "BP thresholds.", ans: "Systolic $\geq 140 \text{ mmHg}$ and/or Diastolic $\geq 90 \text{ mmHg}$ on two separate occasions." },
    { id: 38, cat: "Medication", q: "Management of eclampsia using MgSO4?", guide: "Loading dose and monitoring.", ans: "Administer a loading dose (4g IV and 10g IM), then 5g IM every 4 hours. Monitor for toxicity signs." },
    { id: 39, cat: "Toxicity", q: "Signs of Magnesium Sulfate toxicity?", guide: "Safety monitoring.", ans: "Loss of patellar (knee-jerk) reflex, respiratory rate below 12/min, and urine output below $30 \text{ ml/hour}$." },
    { id: 40, cat: "FANC", q: "Define 'Focused Antenatal Care' (FANC).", guide: "Individualized care model.", ans: "FANC is a goal-oriented model of care that focuses on specific interventions for every pregnant woman to identify and manage risks." },
    { id: 41, cat: "Monitoring", q: "Role of the partograph in monitoring labor?", guide: "Identifying prolonged labor.", ans: "It tracks cervical dilation, fetal heart rate, and maternal vitals to detect deviations from normal labor and prevent obstructed labor." },
    { id: 42, cat: "Placenta", q: "Management of a retained placenta.", guide: "Manual removal and asepsis.", ans: "Attempt manual removal of the placenta under aseptic conditions if it has not been expelled within 30 minutes, ensuring the mother is stabilized." },
    { id: 43, cat: "Emergency", q: "Uterine inversion identification and action?", guide: "Fundal collapse.", ans: "Identified by the absence of the fundus in the abdomen and a mass in the vagina. Action: Immediate manual replacement or emergency surgery." },
    { id: 44, cat: "Postnatal", q: "Clinical significance of 'Skin-to-Skin' contact?", guide: "Oxytocin and thermoregulation.", ans: "It prevents hypothermia in the newborn, stimulates natural oxytocin for the mother to prevent PPH, and promotes early breastfeeding." },
    { id: 45, cat: "Emergency", q: "Define 'Abruptio Placentae' and its presentation.", guide: "Placental separation.", ans: "Premature separation of the placenta from the uterine wall. Presents with painful vaginal bleeding and a rigid, 'board-like' abdomen." },

    /* IV. IMCI - CHILDHOOD ILLNESS (46-60) */
    { id: 46, cat: "IMCI", q: "Name the four general danger signs in a child.", guide: "Essential for triage.", ans: "1. Inability to drink or breastfeed, 2. Vomiting everything, 3. Convulsions, 4. Lethargy or unconsciousness." },
    { id: 47, cat: "IMCI", q: "How to classify a 3-month-old with 60 breaths per minute?", guide: "Pneumonia assessment.", ans: "This is classified as 'Fast Breathing' which leads to a diagnosis of Pneumonia according to the IMCI guidelines." },
    { id: 48, cat: "Dehydration", q: "Describe 'Plan B' for dehydration management.", guide: "ORS protocol.", ans: "Plan B involves administering $75 \text{ ml/kg}$ of Oral Rehydration Solution (ORS) over 4 hours at the health facility." },
    { id: 49, cat: "Dehydration", q: "When to move from Plan B to Plan C?", guide: "Severe dehydration transition.", ans: "If the child's status worsens to 'Severe Dehydration', or if the child develops an inability to drink or becomes lethargic." },
    { id: 50, cat: "Infection", q: "Signs of PSBI in a young infant?", guide: "Possible Serious Bacterial Infection.", ans: "Grunting, bulging fontanelle, fast breathing ($>60/min$), and high fever or abnormally low temperature." },
    { id: 51, cat: "Diarrhea", q: "Management of persistent diarrhea (>14 days)?", guide: "Nutritional support.", ans: "Require nutritional counseling, use of specialized milk (F-75), and immediate referral if the child is also dehydrated." },
    { id: 52, cat: "Pneumonia", q: "First-line antibiotic for Pneumonia in TZ?", guide: "STG 2021 update.", ans: "The first-line drug is typically Amoxicillin (Dispersible Tablets) twice daily for 5 days as per the current guidelines." },
    { id: 53, cat: "Malnutrition", q: "Identifying severe acute malnutrition?", guide: "MUAC and edema.", ans: "Mid-Upper Arm Circumference (MUAC) below $11.5 \text{ cm}$ or the presence of bilateral pitting edema (anasarca)." },
    { id: 54, cat: "Respiratory", q: "Significance of an audible wheeze in a child?", guide: "Asthma or bronchiolitis.", ans: "Indicates narrowed lower airways. It may require bronchodilator therapy (Salbutamol) and further assessment for asthma." },
    { id: 55, cat: "Emergency", q: "Treating 'Very Severe Febrile Disease'?", guide: "First dose and referral.", ans: "Administer the first dose of an injectable antibiotic and an antimalarial (Artesunate), then provide urgent referral to a higher level." },
    { id: 56, cat: "Respiratory", q: "Define 'Stridor' in IMCI classification.", guide: "Severe Pneumonia classification.", ans: "Stridor in a calm child is a red flag indicating upper airway obstruction, classifying the child as having 'Severe Pneumonia'." },
    { id: 57, cat: "Management", q: "Advice for home management of common cold?", guide: "Safe remedies.", ans: "Give safe home remedies (honey/lemon), increase fluid intake, continue breastfeeding, and watch for fast breathing or danger signs." },
    { id: 58, cat: "Diarrhea", q: "Management of a child with dysentery?", guide: "Bloody diarrhea protocol.", ans: "Administer Ciprofloxacin for 3 days and schedule a follow-up in 2 days to ensure the blood in stool has cleared." },
    { id: 59, cat: "Public Health", q: "Importance of Vitamin A in IMCI?", guide: "Immunity and measles.", ans: "Vitamin A reduces the severity and mortality of measles and diarrhea by strengthening the child's immune system." },
    { id: 60, cat: "Anemia", q: "How to assess for anemia in a child?", guide: "Physical exam.", ans: "Assess for anemia by checking for 'Palmar Pallor' (weupe mkononi). Severe pallor indicates the need for urgent referral." },

    /* V. IMMUNIZATION & VACCINATION - EPI (61-75) */
    { id: 61, cat: "EPI", q: "What does the acronym EPI stand for?", guide: "Immunization program.", ans: "Expanded Programme on Immunization (Mpango wa Taifa wa Chanjo)." },
    { id: 62, cat: "Vaccines", q: "Vaccines given at birth in Tanzania?", guide: "Neonatal protection.", ans: "BCG (Tuberculosis) and OPV 0 (Polio)." },
    { id: 63, cat: "Vaccines", q: "Route and site of the BCG vaccine?", guide: "Administration technique.", ans: "Intradermal (kwenye ngozi); Right upper arm (bega la kulia)." },
    { id: 64, cat: "Cold Chain", q: "Describe the 'Cold Chain'.", guide: "Potency maintenance.", ans: "A system of people and equipment that ensures vaccines stay between $+2^\circ\text{C}$ and $+8^\circ\text{C}$ from the factory to the patient." },
    { id: 65, cat: "Storage", q: "Standard storage temperature for vaccines?", guide: "Facility level.", ans: "Most vaccines must be stored between $+2^\circ\text{C}$ and $+8^\circ\text{C}$ at the health facility level." },
    { id: 66, cat: "Measles", q: "Importance of the MR 2 vaccine dose?", guide: "Secondary immunity.", ans: "To provide immunity to children who did not respond to the first dose (MR 1) and ensure long-term protection." },
    { id: 67, cat: "Vaccines", q: "Age for MR 2 vaccine administration?", guide: "Schedule knowledge.", ans: "Administered at 18 months of age." },
    { id: 68, cat: "HPV", q: "Target population for HPV vaccine?", guide: "Cervical cancer prevention.", ans: "Adolescent girls, typically aged 14, to prevent future cervical cancer." },
    { id: 69, cat: "Quality", q: "Action for a discard-point VVM monitor?", guide: "Vaccine Vial Monitor.", ans: "The vaccine has lost its potency due to heat exposure; it must not be used and should be disposed of immediately." },
    { id: 70, cat: "Safety", q: "Define 'AEFI' and give an example.", guide: "Adverse Event Following Immunization.", ans: "Any medical event following vaccination. Example: High fever or an abscess at the injection site." },
    { id: 71, cat: "Metrics", q: "How to calculate the DTP dropout rate?", guide: "Program performance.", ans: "$((\text{DTP1} - \text{DTP3}) / \text{DTP1}) \times 100$. A high rate indicates poor follow-up." },
    { id: 72, cat: "Vaccines", q: "Route and dose of Pentavalent vaccine?", guide: "DTP-HepB-Hib.", ans: "Intramuscular (IM); $0.5 \text{ ml}$ dose." },
    { id: 73, cat: "Immunology", q: "Oral vs. Injected vaccines?", guide: "Immune response site.", ans: "Oral (e.g., OPV/Rotavirus) targets gut immunity; Injected (e.g., PCV/MR) targets systemic immunity in the blood." },
    { id: 74, cat: "Logistics", q: "Organizing an outreach immunization session?", guide: "Remote service delivery.", ans: "Notify the community, prepare vaccine carriers (cold chain), and ensure all logistics (needles, cards) are available for the field." },
    { id: 75, cat: "Safety", q: "Contraindications for the BCG vaccine?", guide: "Immune status.", ans: "Symptomatic HIV/AIDS (e.g., weight loss, severe infections) or known hypersensitivity to any vaccine component." },

    /* VI. INFECTION PREVENTION & CONTROL (76-85) */
    { id: 76, cat: "Hygiene", q: "What are the 'Five Moments of Hand Hygiene'?", guide: "WHO standards.", ans: "Before touching patient, Before procedure, After fluid exposure, After touching patient, After touching surroundings." },
    { id: 77, cat: "TB", q: "Managing suspected TB in a ward?", guide: "Isolation protocol.", ans: "Isolate in a well-ventilated area, provide the patient with a surgical mask, and ensure staff use N95 respirators." },
    { id: 78, cat: "PPE", q: "PPE for highly infectious disease?", guide: "Maximum protection.", ans: "Gloves, fluid-resistant gown, N95 mask, face shield, and boots/boot covers." },
    { id: 79, cat: "Waste", q: "Disposing of a used needle?", guide: "Sharps safety.", ans: "Place immediately in a puncture-proof 'Sharps Container' without recapping the needle to prevent needle-stick injuries." },
    { id: 80, cat: "Sterilization", q: "Steps for decontaminating medical instruments?", guide: "0.5% Chlorine.", ans: "1. Decontaminate (0.5% Chlorine for 10 min), 2. Wash/Clean, 3. Sterilize or High-Level Disinfection (HLD)." },
    { id: 81, cat: "Standards", q: "Define 'Standard Precautions'.", guide: "Universal IPC.", ans: "A set of infection control practices used for all patients regardless of their diagnosis, to prevent healthcare-associated infections." },
    { id: 82, cat: "Waste", q: "Color of the bag for infectious waste?", guide: "Color coding.", ans: "Yellow bag/bin (Nuru ya Njano) is used for infectious medical waste." },
    { id: 83, cat: "Safety", q: "Handling a blood spill on the floor?", guide: "Spill kit protocol.", ans: "Cover with absorbent material, apply 0.5% Chlorine, wait 10 minutes, then clean while wearing PPE." },
    { id: 84, cat: "IPC", q: "Role of the IPC focal person in a dispensary?", guide: "Monitoring and training.", ans: "They monitor compliance with hand hygiene, train staff on waste segregation, and ensure PPE availability." },
    { id: 85, cat: "Hygiene", q: "How long should you wash hands with soap?", guide: "Effective washing time.", ans: "Proper hand washing with soap and water should take between 40 to 60 seconds." },

    /* VII. ADMINISTRATIVE GOVERNANCE (86-100) */
    { id: 86, cat: "Law", q: "Official working hours for a public servant?", guide: "Civil service code.", ans: "07:30 AM to 15:30 PM (Muda wa kazi wa serikali)." },
    { id: 87, cat: "Ethics", q: "What is a 'Disciplinary Offence'?", guide: "Misconduct definition.", ans: "Any act or omission that violates the public service code of ethics or the hospital's standard operating procedures." },
    { id: 88, cat: "Law", q: "Annual leave entitlement for a public servant?", guide: "Leave days.", ans: "28 working days per year." },
    { id: 90, cat: "Study", q: "Procedure for pursuing further studies?", guide: "Formal permission.", ans: "Apply through the employer (DED/MD) to the Permanent Secretary for permission and sponsorship/bond." },
    { id: 91, cat: "Admin", q: "What is 'Demi-Official Correspondence'?", guide: "Semi-formal letters.", ans: "Informal communication between senior officials, often on personal or confidential matters affecting the service." },
    { id: 92, cat: "Admin", q: "Addressing official government letters?", guide: "Protocol.", ans: "Always address to the Head of the Organization (e.g., The Director, The Permanent Secretary)." },
    { id: 93, cat: "Jobs", q: "What is the 'Ajira Portal'?", guide: "Recruitment system.", ans: "The official online portal used by the PSRS (Utumishi) for job applications in the Tanzanian public sector." },
    { id: 94, cat: "Ethics", q: "Negligence in nursing practice?", guide: "Definition.", ans: "Failure to provide the standard of care that a reasonable nurse would provide, resulting in patient harm." },
    { id: 95, cat: "Service", q: "Importance of the Client Service Charter?", guide: "Patient rights.", ans: "It outlines the services provided and the standards (e.g., waiting time) patients should expect from the hospital." },
    { id: 96, cat: "Law", q: "Rights during a disciplinary process?", guide: "Fair hearing.", ans: "The right to be informed of the charges in writing and the right to present a defense (haki ya kusikilizwa)." },
    { id: 97, cat: "HR", q: "Probation Period for a new employee?", guide: "Suitability assessment.", ans: "A period of 6 to 12 months used to assess the performance and suitability of a new employee before permanent confirmation." },
    { id: 98, cat: "Ethics", q: "Reporting a conflict of interest?", guide: "Disclosure.", ans: "Immediately disclose the conflict to your supervisor or the institutional ethics committee." },
    { id: 99, cat: "PSRS", q: "Role of the PSRS (Utumishi)?", guide: "Recruitment oversight.", ans: "To facilitate fair, transparent, and merit-based recruitment for all public service positions in Tanzania." },
    { id: 100, cat: "Strategy", q: "Do you have any questions for the panel?", guide: "Show interest in growth.", ans: "I would like to know the facility's specific goals for reducing maternal mortality and how I can best contribute to achieving them." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Identity': case 'Motivation': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Ethics': case 'Law': return 'bg-red-50 text-red-600 border-red-100';
      case 'Process': case 'Assessment': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Midwifery': case 'PPH': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'IMCI': case 'Pediatrics': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'EPI': case 'Vaccines': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Hygiene': case 'IPC': return 'bg-teal-50 text-teal-600 border-teal-100';
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
            <Users size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-deep-blue">
            Nursing & Midwifery
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            <strong>Synthesized Excellence: 100 Essential Questions.</strong> <br />
            Based on PSRS data, TNMC licensure, and Ministry of Health clinical assessments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ShieldCheck className="text-red-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-15</span>
            <h5 className="text-xs font-bold uppercase text-center">Ethics & Law</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Baby className="text-rose-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">31-45</span>
            <h5 className="text-xs font-bold uppercase text-center">Midwifery</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <HeartPulse className="text-emerald-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">46-60</span>
            <h5 className="text-xs font-bold uppercase text-center">IMCI Care</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ClipboardList className="text-orange-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">86-100</span>
            <h5 className="text-xs font-bold uppercase text-center">Governance</h5>
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