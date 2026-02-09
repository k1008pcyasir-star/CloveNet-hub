import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stethoscope, ShieldCheck, BookOpen, Activity, Baby, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function ClinicalFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* I. PERSONALITY, MOTIVATION & PROFESSIONAL IDENTITY (1-20) */
    { id: 1, cat: "Personality", q: "Tell us about yourself (Jieleze kwa kifupi).", guide: "Focus on education, clinical experience, and passion for patient care. Avoid irrelevant family details.", ans: "I am a dedicated medical professional with [Number] years of experience. I graduated from [College Name] and have developed a strong passion for clinical excellence and patient advocacy. My goal is to provide evidence-based care to improve community health outcomes." },
    { id: 2, cat: "Motivation", q: "Why did you choose to be a Clinical Officer or Doctor?", guide: "Measure the sense of 'calling'. Mention a specific event that sparked your interest.", ans: "I was inspired by the desire to alleviate human suffering. Witnessing healthcare challenges in my community motivated me to pursue this career so I could be part of the solution in providing quality primary healthcare." },
    { id: 3, cat: "Ethics", q: "What are three essential qualities of a good clinician?", guide: "Empathy, Integrity, and Decision-making under pressure.", ans: "The three most important qualities are Empathy to understand patient needs, Integrity to maintain trust, and the ability to make Sound Decisions under high-pressure clinical environments." },
    { id: 4, cat: "Experience", q: "Describe a major challenge you faced during your studies or internship.", guide: "Show resilience and problem-solving skills.", ans: "During my internship, I managed a high volume of patients with limited resources. I learned to prioritize cases using triage systems, which improved my efficiency and ensured critical patients received immediate care." },
    { id: 5, cat: "Competitive Advantage", q: "Why should we hire you over other candidates?", guide: "Align your skills with the facility's needs (e.g., rural experience).", ans: "I bring a combination of strong clinical skills and adaptability. My experience working in underserved areas has prepared me to deliver high-quality care even in resource-limited settings, making me an asset to your facility." },
    { id: 6, cat: "Self-Awareness", q: "What is your greatest weakness and how do you handle it?", guide: "Show maturity. Mfano: Being too detail-oriented and using tech to stay efficient.", ans: "I sometimes spend too much time on documentation to ensure accuracy. To manage this, I have adopted digital tools and templates to streamline my workflow without compromising the quality of medical records." },
    { id: 7, cat: "Resilience", q: "How do you handle stress in the workplace?", guide: "Looking for healthy coping mechanisms and teamwork.", ans: "I manage stress by maintaining a structured routine, practicing effective communication with my team, and ensuring a healthy work-life balance through regular exercise and rest." },
    { id: 8, cat: "Vision", q: "Where do you see yourself in 5 years professionally?", guide: "Measures ambition for CPD (Continuing Professional Development).", ans: "In five years, I aim to have specialized in [Specialization] and contribute to healthcare leadership. I am committed to lifelong learning to stay updated with the latest medical advancements." },
    { id: 9, cat: "Cultural Competence", q: "Describe your experience working with people from different cultures.", guide: "Respect for diversity in Tanzania (tribes and religions).", ans: "Tanzania is a diverse nation. I treat every patient with equal respect, regardless of their tribe or religion, ensuring that cultural beliefs are respected while providing life-saving medical advice." },
    { id: 10, cat: "Ministry Knowledge", q: "What do you know about the duties of the Ministry of Health in Tanzania?", guide: "Policy making, referral hospital supervision, and disease outbreak coordination.", ans: "The Ministry is responsible for formulating health policies, supervising national and referral hospitals, and coordinating responses to epidemics to ensure the well-being of all Tanzanians." },
    { id: 11, cat: "Achievement", q: "Professional achievement you are proud of?", guide: "Saving a life in emergency or system improvement.", ans: "Successfully managing a critical obstetric emergency with limited staff, ensuring both mother and baby survived." },
    { id: 12, cat: "Service", q: "Ready to work in a rural health center?", guide: "Strategic for TZ. Show patriotism.", ans: "Yes, I am fully committed to serving the community where the need is greatest, including rural areas." },
    { id: 13, cat: "Honesty", q: "Medical error you made and steps taken?", guide: "Honesty is key. Report to in-charge and rectify.", ans: "I once miscalculated a dosage. I immediately informed my supervisor, corrected the dose, and monitored the patient closely for adverse effects." },
    { id: 14, cat: "Teamwork", q: "How to collaborate with nurses and lab techs?", guide: "Mutual respect and clear communication.", ans: "By recognizing that every cadre plays a vital role. I foster a culture of respect and open communication to ensure holistic patient care." },
    { id: 15, cat: "Communication", q: "Handling a patient who doesn't understand instructions?", guide: "Use simple language, diagrams, or translators.", ans: "I use non-medical terms, visual aids, or seek a translator (e.g., for local languages like Maasai) to ensure the patient understands their treatment plan." },
    { id: 16, cat: "Law", q: "Importance of CPD for a doctor?", guide: "Legal requirement by MCT for license renewal.", ans: "CPD is a mandatory requirement by the Medical Council of Tanganyika (MCT) to ensure clinicians stay updated with evolving medical practices." },
    { id: 17, cat: "Emergency", q: "Controlling anger during emergencies with low resources?", guide: "Maintain calm, use triage, follow STG.", ans: "I remain calm, prioritize patients through triage, and follow the Standard Treatment Guidelines (STG) to make the best use of available resources." },
    { id: 18, cat: "Technology", q: "Experience with electronic systems (GoT-HOMIS)?", guide: "Familiarity with hospital management systems.", ans: "I am proficient in using hospital management systems like GoT-HOMIS for patient registration, billing, and clinical documentation." },
    { id: 19, cat: "Motivation", q: "What motivates you every day?", guide: "Sense of helping, nation-building through health.", ans: "The ability to restore health and bring smiles back to patients' faces is my greatest daily motivation." },
    { id: 20, cat: "Inquiry", q: "Any questions for the interview panel?", guide: "Ask about growth, culture, or hospital plans.", ans: "Could you tell me more about the opportunities for professional development and how the hospital supports young clinicians?" },

    /* II. MEDICAL ETHICS & LAW (21-40) */
    { id: 21, cat: "Ethics", q: "Explain the four cardinal principles of medical ethics.", guide: "Beneficence, Non-maleficence, Autonomy, and Justice.", ans: "Beneficence (Acting in the patient's best interest), Non-maleficence (Doing no harm), Autonomy (Respecting patient choice), and Justice (Fairness in care)." },
    { id: 22, cat: "Ethics", q: "What if a patient refuses life-saving treatment?", guide: "Respect autonomy after full explanation and signing refusal form.", ans: "I must respect their Autonomy. After explaining the risks, I ensure the patient signs a 'Refusal of Treatment' form to document their informed decision." },
    { id: 23, cat: "Ethics", q: "Explain 'Informed Consent'.", guide: "Process of explaining disease, treatment, risks, and benefits.", ans: "It is the process of providing a patient with all necessary information about their condition and treatment options so they can make a voluntary decision." },
    { id: 24, cat: "Law", q: "When can patient confidentiality be breached?", guide: "Public interest (outbreaks), court order, or preventing self-harm.", ans: "Confidentiality can be breached in cases of communicable diseases (e.g., Cholera), by a court order, or to prevent the patient from harming themselves or others." },
    { id: 25, cat: "Ethics", q: "Action if a colleague is using drugs or alcohol at work?", guide: "Report to Medical In-charge to protect the patient.", ans: "I would report the matter to the Medical Officer in-charge immediately to ensure patient safety and follow civil service regulations." },
    { id: 26, cat: "Audit", q: "Importance of 'Medical Audit' in hospitals?", guide: "Evaluating care against standards for clinical improvement.", ans: "Medical audits help in assessing the quality of care provided against set standards to identify gaps and improve clinical outcomes." },
    { id: 27, cat: "Ethics", q: "Is it okay to accept gifts from pharmaceutical companies?", guide: "Conflict of Interest. Not recommended.", ans: "Professionally, it is discouraged as it can create a Conflict of Interest, potentially influencing unbiased prescription practices." },
    { id: 28, cat: "Ethics", q: "What if relatives ask you not to tell the patient they have cancer?", guide: "Encourage honesty while considering patient psychology.", ans: "I would explain to the relatives the importance of the patient knowing their status for life planning, while handling the disclosure with sensitivity." },
    { id: 29, cat: "Law", q: "Role of the Medical Council of Tanganyika (MCT)?", guide: "Investigate malpractice, issue warnings, suspend or revoke licenses.", ans: "The MCT regulates medical practice, ensuring practitioners adhere to ethical standards and taking disciplinary action against malpractice." },
    { id: 30, cat: "Law", q: "Define 'Medical Negligence'.", guide: "Failure to meet expected standards of care causing harm.", ans: "Negligence is the failure to provide the standard of care that a reasonably competent professional would have provided, resulting in injury to the patient." },
    { id: 31, cat: "Law", q: "Legal position on Abortion in Tanzania?", guide: "Criminal offense unless mother's life is at risk (needs 2 doctors).", ans: "Abortion is illegal in Tanzania unless it is performed to save the mother's life, as certified by two medical practitioners." },
    { id: 32, cat: "Law", q: "What to do if a patient dies due to a technical error you made?", guide: "Be transparent, write incidence report, follow legal procedures.", ans: "I would be transparent with the management, document the event in an incidence report, and follow the established protocol for informing the next of kin." },
    { id: 33, cat: "Ethics", q: "Explain 'Veracity' and 'Fidelity'.", guide: "Veracity (Truth-telling); Fidelity (Faithfulness to duty).", ans: "Veracity is the duty to tell the truth to patients. Fidelity is being faithful to one's professional obligations and the Hippocratic oath." },
    { id: 34, cat: "Ethics", q: "Significance of 'DNR' (Do Not Resuscitate)?", guide: "Agreement not to perform CPR for hopeless cases for a dignified death.", ans: "DNR is a medical order to withhold CPR in cases where it would not benefit the patient, ensuring a dignified death without unnecessary suffering." },
    { id: 35, cat: "Law", q: "Patient comes with a Gunshot wound?", guide: "Emergency care first, then report to police immediately.", ans: "Provide immediate life-saving care first, then fulfill the legal requirement of reporting the incident to the police." },
    { id: 36, cat: "Ethics", q: "Concept of 'Justice' in resource allocation?", guide: "Clinical criteria and need, not favoritism.", ans: "Justice ensures that limited resources, like ICU beds, are allocated based on clinical priority and medical need rather than social or financial status." },
    { id: 37, cat: "Ethics", q: "Difference between Euthanasia and Palliative Care?", guide: "Euthanasia (Intentional killing - Illegal); Palliative (Pain relief - Recommended).", ans: "Euthanasia is the intentional ending of life to relieve pain (illegal in TZ). Palliative care focuses on improving the quality of life for terminally ill patients." },
    { id: 38, cat: "Ethics", q: "Senior doctor giving wrong treatment?", guide: "Use professional language to advise or question based on STG.", ans: "I would respectfully use clinical evidence and Standard Treatment Guidelines (STG) to discuss the treatment rationale with the senior clinician." },
    { id: 39, cat: "Law", q: "Importance of accurate Medical Records.", guide: "Legal protection for doctor and continuity of care.", ans: "Medical records serve as a legal defense for the clinician and are essential for ensuring the continuity and quality of patient care." },
    { id: 40, cat: "Law", q: "Can a doctor go on strike?", guide: "Ethically must not abandon emergency services even during disputes.", ans: "According to medical ethics and civil service laws, clinicians should not abandon emergency and essential services, even during labor disputes." },

    /* III. STG & NEMLIT 2021 (41-60) */
    { id: 41, cat: "Guidelines", q: "Main goals of STG and NEMLIT 2021?", guide: "Promote rational drug use and guide MSD/NHIF procurement.", ans: "They aim to promote the rational use of medicines, improve availability of essential drugs, and guide MSD procurement and NHIF reimbursements." },
    { id: 42, cat: "Guidelines", q: "Amlodipine change in NEMLIT 2021?", guide: "Moved from Level C (Hospital) to Level B (Health Center).", ans: "Amlodipine was moved to Level B to bring NCD services closer to the community in health centers." },
    { id: 43, cat: "Clinical", q: "First-line treatment for uncomplicated Malaria in TZ?", guide: "Artemether-Lumefantrine (ALU).", ans: "The recommended first-line treatment is Artemether-Lumefantrine (ALU) as per national guidelines." },
    { id: 44, cat: "Clinical", q: "Management of Hypertension according to STG.", guide: "Lifestyle changes, then Thiazides, ACEIs, or CCBs.", ans: "Initial management involves lifestyle modifications, followed by pharmacotherapy using Thiazide diuretics, ACE inhibitors, or Calcium Channel Blockers." },
    { id: 45, cat: "Obstetrics", q: "Drug for Eclampsia prophylaxis?", guide: "Magnesium Sulphate (MgSO4).", ans: "Magnesium Sulphate (MgSO4) is the drug of choice, administered using either the Pritchard or Zuspan regimen." },
    { id: 46, cat: "Clinical", q: "Four drugs for TB Phase 1 treatment?", guide: "Rifampicin, Isoniazid, Pyrazinamide, Ethambutol (RHZE).", ans: "The intensive phase combination is Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol (RHZE)." },
    { id: 47, cat: "Guidelines", q: "Importance of Generic prescribing?", guide: "Reduce costs and avoid brand name confusion.", ans: "Generic prescribing reduces healthcare costs for patients and minimizes confusion associated with multiple brand names." },
    { id: 48, cat: "Pharmacovigilance", q: "Action if a patient has an Adverse Drug Reaction (ADR)?", guide: "Stop drug, supportive care, report to TMDA.", ans: "Immediately discontinue the drug, provide supportive treatment, and fill out an ADR report for the Tanzania Medicines and Medical Devices Authority (TMDA)." },
    { id: 49, cat: "Clinical", q: "PEP for HIV exposure?", guide: "Tenofovir + Lamivudine + Dolutegravir (TLD) for 28 days.", ans: "The recommended Post-Exposure Prophylaxis is a 28-day course of Tenofovir, Lamivudine, and Dolutegravir (TLD)." },
    { id: 50, cat: "Obstetrics", q: "Management of Gestational Diabetes.", guide: "Diet, exercise, then Insulin (Metformin is 2nd choice in TZ).", ans: "Managed primarily through diet and exercise; if uncontrolled, Insulin is the preferred pharmacotherapy in Tanzania." },
    { id: 51, cat: "HIV", q: "Criteria for starting ARVs?", guide: "Test and Treat - start immediately regardless of CD4 count.", ans: "Under the current 'Test and Treat' policy, all HIV-positive individuals should start ARV therapy immediately regardless of their CD4 count." },
    { id: 52, cat: "Obstetrics", q: "First-line UTI drug for pregnant women?", guide: "Nitrofurantoin or Amoxicillin/Clavulanate.", ans: "Nitrofurantoin or Amoxicillin/Clavulanate are preferred. Avoid Ciprofloxacin in the first and third trimesters." },
    { id: 53, cat: "Pediatrics", q: "Treatment for Severe Pneumonia in children?", guide: "Ceftriaxone or Ampicillin + Gentamicin + Oxygen.", ans: "Injectable Ceftriaxone or a combination of Ampicillin and Gentamicin, along with oxygen therapy if needed." },
    { id: 54, cat: "Pediatrics", q: "Zinc and ORS for diarrhea?", guide: "ORS for rehydration; Zinc to reduce duration and recurrence.", ans: "ORS prevents dehydration, while Zinc reduces the duration of the current episode and prevents recurrence for up to three months." },
    { id: 55, cat: "Clinical", q: "Treatment for Syphilis in adults?", guide: "Benzathine Penicillin G 2.4 MU IM, single dose.", ans: "A single intramuscular dose of 2.4 million units of Benzathine Penicillin G." },
    { id: 56, cat: "Pharmacology", q: "Importance of a 'Loading dose'?", guide: "Reach therapeutic level quickly.", ans: "A loading dose is a higher initial dose given to rapidly achieve the therapeutic concentration of a drug in the bloodstream." },
    { id: 57, cat: "Clinical", q: "Choice for Post-herpetic neuralgia?", guide: "Amitriptyline or Carbamazepine.", ans: "Low-dose Amitriptyline or Carbamazepine are effective in managing nerve pain following shingles." },
    { id: 58, cat: "Clinical", q: "Amoebiasis treatment in STG?", guide: "Metronidazole 400-800mg TID for 5-10 days.", ans: "The standard treatment is Metronidazole administered three times a daily for five to ten days." },
    { id: 59, cat: "Obstetrics", q: "Dexamethasone in Preterm Labour?", guide: "Promote fetal lung maturity.", ans: "It is administered to accelerate fetal lung maturity and reduce the risk of respiratory distress syndrome in preterm infants." },
    { id: 60, cat: "Management", q: "Cold Chain Management for vaccines?", guide: "Maintain +2°C to +8°C.", ans: "Ensuring vaccines are stored and transported between +2°C and +8°C to maintain their potency from manufacture to administration." },

    /* IV. INTERNAL MEDICINE & SURGERY (61-80) */
    { id: 61, cat: "Emergency", q: "Steps for trauma patient (Primary Survey)?", guide: "ABCDE: Airway, Breathing, Circulation, Disability, Exposure.", ans: "Follow the ABCDE approach: Airway (with C-spine protection), Breathing, Circulation, Disability (neurological), and Exposure." },
    { id: 62, cat: "Clinical", q: "Criteria for 'SIRS'?", guide: "Temp, HR, RR, and WBC count.", ans: "Temperature >38°C or <36°C, Heart Rate >90 bpm, Respiratory Rate >20 bpm, and WBC >12,000 or <4,000." },
    { id: 63, cat: "Surgery", q: "Management of Acute Appendicitis?", guide: "NPO, IV fluids, analgesia, Appendectomy.", ans: "The patient should be kept NPO (Nothing by mouth), started on IV fluids and analgesia, followed by surgical appendectomy." },
    { id: 64, cat: "Clinical", q: "Glasgow Coma Scale (GCS) components?", guide: "Eye (4), Verbal (5), Motor (6). Total 15.", ans: "Evaluates Eye opening (max 4), Verbal response (max 5), and Motor response (max 6). A score below 8 indicates coma." },
    { id: 65, cat: "Emergency", q: "Cholera severe dehydration management?", guide: "IV Ringer's Lactate (Plan C) + Antibiotics.", ans: "Rapid rehydration with IV Ringer's Lactate according to 'Plan C', followed by antibiotics such as Doxycycline." },
    { id: 66, cat: "Clinical", q: "Left Heart Failure signs on X-ray?", guide: "Cardiomegaly, Edema (Bat's wing), Kerley B lines.", ans: "Radiographic features include cardiomegaly, pulmonary edema (bat's wing appearance), and Kerley B lines." },
    { id: 67, cat: "Surgery", q: "Diagnosing Perforated Peptic Ulcer?", guide: "Sudden pain, board-like rigidity, air under diaphragm.", ans: "Presentation includes sudden severe pain, board-like abdominal rigidity, and free gas under the diaphragm on an erect chest X-ray." },
    { id: 68, cat: "Emergency", q: "Four types of 'Shock'?", guide: "Hypovolemic, Cardiogenic, Septic, Anaphylactic.", ans: "The four main types are Hypovolemic, Cardiogenic, Septic, and Anaphylactic shock." },
    { id: 69, cat: "Surgery", q: "Burn management?", guide: "Fluid resuscitation (Parkland Formula), pain control.", ans: "Prioritize fluid resuscitation using the Parkland Formula, infection prevention, and effective pain management." },
    { id: 70, cat: "Surgery", q: "Incarcerated vs. Strangulated Hernia?", guide: "Incarcerated (not reducible); Strangulated (ischemic/dangerous).", ans: "Incarcerated hernia cannot be reduced; a strangulated hernia is a surgical emergency where blood supply to the tissue is cut off." },
    { id: 71, cat: "Emergency", q: "Status Epilepticus management?", guide: "Diazepam (IV/Rectal), recovery position, clear airway.", ans: "Administer Diazepam (IV or rectal), place in the recovery position, and ensure the airway is clear." },
    { id: 72, cat: "Medicine", q: "Causes of Massive Splenomegaly in TZ?", guide: "CML, Schisto, Kala-azar, Chronic Malaria.", ans: "Common causes include Chronic Myeloid Leukemia, Schistosomiasis, Kala-azar, and Chronic Malaria." },
    { id: 73, cat: "Medicine", q: "Significance of PSA?", guide: "Marker for Prostate Cancer or BPH.", ans: "Prostate-Specific Antigen (PSA) is a blood marker used to screen for and monitor prostate cancer or benign prostatic hyperplasia." },
    { id: 74, cat: "Surgery", q: "Acute Retention of Urine management?", guide: "Catheterization or Suprapubic cystostomy.", ans: "Relief is achieved through urethral catheterization or suprapubic cystostomy if the urethral route is obstructed." },
    { id: 75, cat: "Medicine", q: "Symptoms of Thyrotoxicosis?", guide: "Weight loss, tremors, heat intolerance, exophthalmos.", ans: "Key features include weight loss despite increased appetite, fine tremors, heat intolerance, and bulging eyes (exophthalmos)." },
    { id: 76, cat: "Emergency", q: "Hypoglycemia criteria and treatment?", guide: "Glucose <3.9 mmol/L; Treat with 10% or 50% Dextrose.", ans: "Defined as blood glucose <3.9 mmol/L; treat with IV 10% or 50% Dextrose depending on the severity and patient age." },
    { id: 77, cat: "Pharmacology", q: "Why avoid Pethidine in renal patients?", guide: "Nor-pethidine metabolite is neurotoxic.", ans: "Pethidine produces a metabolite called nor-pethidine which can accumulate in renal failure, causing neurotoxicity and seizures." },
    { id: 78, cat: "Medicine", q: "Criteria for Nephrotic Syndrome?", guide: "Proteinuria, hypoalbuminemia, and anasarca.", ans: "Characterized by heavy proteinuria, low serum albumin (hypoalbuminemia), and generalized swelling (anasarca)." },
    { id: 79, cat: "Emergency", q: "Tension Pneumothorax management?", guide: "Needle decompression, then chest tube.", ans: "Immediate needle decompression in the 2nd intercostal space, followed by the insertion of an underwater seal chest tube." },
    { id: 80, cat: "Medicine", q: "Red Flags for Gastric Cancer?", guide: "Weight loss, anemia, melena, abdominal mass.", ans: "Warning signs include unexplained weight loss, iron-deficiency anemia, black stools (melena), and a palpable abdominal mass." },

    /* V. REPRODUCTIVE, CHILD HEALTH & SYSTEMS (81-100) */
    { id: 81, cat: "Obstetrics", q: "Four stages of Labour?", guide: "1. Dilation, 2. Expulsion, 3. Placental, 4. Immediate postpartum.", ans: "Stage 1 (Cervical dilation), Stage 2 (Delivery of the baby), Stage 3 (Delivery of the placenta), Stage 4 (First 2 hours post-delivery)." },
    { id: 82, cat: "Obstetrics", q: "Management of PPH?", guide: "C-O-N-D-O-M protocol.", ans: "Management follows the CONDOM protocol: Compression, Oxytocin, Nasogastric tube/fluids, Drugs (Misoprostol), Operative management, and Monitoring." },
    { id: 83, cat: "Obstetrics", q: "Preeclampsia vs Eclampsia?", guide: "BP >140/90 + proteinuria; Eclampsia adds seizures.", ans: "Preeclampsia is high BP and proteinuria after 20 weeks; Eclampsia is the occurrence of seizures in a preeclamptic patient." },
    { id: 84, cat: "Obstetrics", q: "Importance of the Partograph?", guide: "Monitor labour and detect obstruction early.", ans: "It is a vital tool for monitoring the progress of labor to detect obstructed labor early and prevent maternal and neonatal complications." },
    { id: 85, cat: "Pediatrics", q: "Plan C for child dehydration?", guide: "IV fluids for severe dehydration.", ans: "Plan C is the rapid intravenous fluid resuscitation protocol for children presenting with severe dehydration." },
    { id: 86, cat: "Pediatrics", q: "Five vaccines for a child under one year?", guide: "BCG, OPV, Rotavirus, Pentavalent, PCV.", ans: "Essential vaccines include BCG (TB), OPV (Polio), Rotavirus, Pentavalent (DTP-HepB-Hib), and PCV (Pneumonia)." },
    { id: 87, cat: "Systems", q: "Referral System in Tanzania?", guide: "Dispensary to Health Center to Referral Hospital.", ans: "It is the structured movement of patients from lower-level facilities (Dispensaries) to higher-level specialized care (Referral Hospitals)." },
    { id: 88, cat: "Systems", q: "Role of NHIF in the health system?", guide: "Social health insurance to reduce out-of-pocket costs.", ans: "The National Health Insurance Fund (NHIF) collects contributions to cover medical costs for members, reducing the financial burden of healthcare." },
    { id: 89, cat: "Technology", q: "Challenges of systems like GoT-HOMIS?", guide: "Power supply, training, data backup.", ans: "Key challenges include the need for stable electricity, staff training, and ensuring reliable data backup systems." },
    { id: 90, cat: "HR", q: "What is OPRAS in civil service?", guide: "Open Performance Review and Appraisal System.", ans: "OPRAS is the open system used in the Tanzanian public service to evaluate and manage employee performance annually." },
    { id: 91, cat: "Management", q: "Preventing corruption in health facilities?", guide: "Electronic payments, patient education, disciplinary action.", ans: "Through electronic payment systems, transparency in service delivery, and strict disciplinary measures against unethical conduct." },
    { id: 92, cat: "Obstetrics", q: "Danger Signs in pregnancy?", guide: "Bleeding, swelling, severe pain, reduced fetal movements.", ans: "Warning signs include vaginal bleeding, swelling of hands/face, severe headache/abdominal pain, and reduced fetal movements." },
    { id: 93, cat: "Pediatrics", q: "IMCI protocol for sick children?", guide: "Integrated Management of Childhood Illness.", ans: "IMCI is an integrated approach that assesses and treats the child as a whole, focusing on the most common causes of childhood mortality." },
    { id: 94, cat: "Management", q: "Role of Health Facility Governing Committee (HFGC)?", guide: "Community representation and plan approval.", ans: "The HFGC represents the community in facility management, approves financial plans, and ensures accountability in service delivery." },
    { id: 95, cat: "Public Health", q: "HPV vaccine importance in TZ?", guide: "Prevent Cervical Cancer in girls (9-14 years).", ans: "The HPV vaccine is crucial for preventing cervical cancer, targeted at girls aged 9 to 14 years to ensure early protection." },
    { id: 96, cat: "HR", q: "Medical Officer vs Clinical Officer?", guide: "MD (Degree) vs CO (Diploma).", ans: "An MD holds a degree and has a broader scope of practice; a CO holds a diploma but both are trained to diagnose and treat common conditions." },
    { id: 97, cat: "Obstetrics", q: "Misoprostol use in PPH?", guide: "Uterine contraction to stop bleeding.", ans: "Misoprostol is used to stimulate uterine contractions and stop bleeding, especially where oxytocin is unavailable or ineffective." },
    { id: 98, cat: "Pediatrics", q: "Importance of Vitamin A supplementation?", guide: "Prevent night blindness and boost immunity.", ans: "Vitamin A is essential for preventing night blindness, boosting the immune system, and reducing mortality from infections like Measles." },
    { id: 99, cat: "Insurance", q: "Patient with invalid insurance card?", guide: "First aid first, then assist with insurance or waiver.", ans: "Provide emergency first aid first, then assist the patient in contacting their insurance or guide them through the social waiver process if they are indigent." },
    { id: 100, cat: "Strategy", q: "Priority of TZ health sector now?", guide: "Prevention, NCDs, and Universal Health Coverage (Bima ya Afya kwa Wote).", ans: "The current priorities are strengthening preventive services, managing Non-Communicable Diseases (NCDs), and achieving Universal Health Coverage." }
  ];

  // Logic ya rangi kwa kategoria za Afya (v2 style)
  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Personality': case 'Motivation': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Ethics': case 'Law': return 'bg-red-50 text-red-600 border-red-100';
      case 'Guidelines': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Obstetrics': case 'Reproductive': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Pediatrics': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Emergency': case 'Surgery': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON */}
        <Link 
          to="/faq/afya" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Stethoscope size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-deep-blue">
            Clinical Medicine
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Strategic Evaluation: 100 Essential Questions for Clinical Practice. <br />
            Mkusanyiko huu unajumuisha miongozo ya STG/NEMLIT 2021, maadili ya kitabibu (MCT), na taratibu za kliniki nchini Tanzania.
          </p>
        </div>

        {/* INFO CARDS SUMMARY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ShieldCheck className="text-red-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-40</span>
            <h5 className="text-xs font-bold uppercase">Ethics & Law</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <BookOpen className="text-indigo-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">41-60</span>
            <h5 className="text-xs font-bold uppercase">Guidelines</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Activity className="text-orange-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">61-80</span>
            <h5 className="text-xs font-bold uppercase">Medicine/Surg</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Baby className="text-rose-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">81-100</span>
            <h5 className="text-xs font-bold uppercase">RCH & Systems</h5>
          </div>
        </div>

        {/* ACCORDION LIST - MASWALI YOTE 100 YAMO HAPA */}
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