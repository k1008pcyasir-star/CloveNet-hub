import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe2, ShieldCheck, Activity, Users2, HeartPulse, ChevronDown } from 'lucide-react';
import Header from '../../../components/Header';

export default function PublicHealthFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* I. EPIDEMIOLOGY AND DISEASE CONTROL (1-20) */
    { id: 1, cat: "Epidemiology", q: "Define Epidemiology and its five major components.", guide: "Study of distribution and determinants.", ans: "Epidemiology is the study of the distribution and determinants of health states in populations. Components: Scientific study, distribution (frequency/pattern), determinants (causes), health-related states, and specified populations." },
    { id: 2, cat: "Epidemiology", q: "What are the primary uses of epidemiology in a community?", guide: "Assessment and planning.", ans: "Uses include assessing disease burden, establishing community diagnoses, searching for determinants, estimating individual risks, and planning health services." },
    { id: 3, cat: "Epidemiology", q: "Explain the Epidemiological Triad.", guide: "Agent, Host, Environment.", ans: "It posits that disease is caused by the interaction between an external Agent (pathogen), a susceptible Host (human), and an Environment that brings them together." },
    { id: 4, cat: "Epidemiology", q: "Distinguish between incidence and prevalence.", guide: "New vs. Existing cases.", ans: "Incidence refers to new cases over a specific period; prevalence measures the total number of existing cases (new and old) at a specific point in time." },
    { id: 5, cat: "Research", q: "What is a case-control study?", guide: "Retrospective comparison.", ans: "A retrospective study design that compares individuals with a disease (cases) to those without (controls) to identify exposure differences." },
    { id: 6, cat: "Statistics", q: "Define the concept of an Odds Ratio.", guide: "Measure of association.", ans: "It represents the odds that an outcome will occur given a particular exposure, compared to the odds of the outcome occurring without that exposure." },
    { id: 7, cat: "Epidemiology", q: "Difference between descriptive and analytical epidemiology?", guide: "Who/Where/When vs. How/Why.", ans: "Descriptive epidemiology focuses on 'Who, Where, and When' of disease; Analytical epidemiology tests hypotheses to find 'How and Why'." },
    { id: 8, cat: "Research", q: "Explain the difference between retrospective and prospective studies.", guide: "Backward vs. Forward looking.", ans: "Retrospective studies look backward from outcome to exposure; prospective studies follow a group over time to see who develops the outcome." },
    { id: 9, cat: "IDSR", q: "What is a 'notifiable disease' under the IDSR framework?", guide: "Mandatory reporting.", ans: "A disease legally required to be reported immediately due to rapid spread potential (e.g., Cholera, Ebola, Plague)." },
    { id: 10, cat: "Diagnostics", q: "Define Sensitivity and Specificity in diagnostic testing.", guide: "True Positive vs. True Negative.", ans: "Sensitivity is the ability to correctly identify those with the disease; specificity is the ability to correctly identify those without it." },
    { id: 11, cat: "Statistics", q: "How is a Case Fatality Rate (CFR) calculated?", guide: "Mortality proportion.", ans: "CFR = (Number of deaths from disease / Number of diagnosed cases) x 100." },
    { id: 12, cat: "Epidemiology", q: "Describe the 'Iceberg Phenomenon' of disease.", guide: "Visible vs. Hidden cases.", ans: "The tip (diagnosed cases) represents a small fraction of the total cases in the community, which includes undiagnosed/asymptomatic cases." },
    { id: 13, cat: "IDSR", q: "Role of a line listing form (IDSR 001C) during an outbreak?", guide: "Tracing and summary.", ans: "Provides a summary of all suspected cases, including demographics and outcomes, to help trace the source and spread." },
    { id: 14, cat: "Epidemiology", q: "Explain the concept of Herd Immunity.", guide: "Population resistance.", ans: "Resistance to disease spread within a population when a high proportion of individuals are immune, usually through vaccination." },
    { id: 15, cat: "Epidemiology", q: "What is an endemic disease?", guide: "Constant presence.", ans: "A disease constantly present in a specific area, such as Malaria in many parts of Tanzania." },
    { id: 16, cat: "Epidemiology", q: "What defines a pandemic?", guide: "Global spread.", ans: "An epidemic that has spread across several countries or continents, affecting a large number of people." },
    { id: 17, cat: "IDSR", q: "What are the core functions of IDSR?", guide: "Identification to feedback.", ans: "Identification, reporting, analysis, investigation, response, and feedback regarding priority diseases." },
    { id: 18, cat: "IDSR", q: "Explain 'Event-Based Surveillance' (EBS).", guide: "Organized collection of rumors.", ans: "A component of IDSR focused on collecting information about potential health risks, such as rumors or unusual animal deaths." },
    { id: 19, cat: "IDSR", q: "Significance of the 'Standard Case Definition'?", guide: "Data accuracy.", ans: "Ensures every case is identified and reported identically across all facilities, crucial for data comparability." },
    { id: 20, cat: "IDSR", q: "How does IDSR integrate with Disaster Risk Management?", guide: "Warning and response.", ans: "By providing early warning signs and data-driven response strategies for emergencies triggered by disasters." },

    /* II. BIOSTATISTICS AND DATA MANAGEMENT (21-40) */
    { id: 21, cat: "Statistics", q: "Distinguish between a population and a sample.", guide: "Whole vs. Subset.", ans: "A population is the entire group of interest; a sample is a smaller subset used to make inferences about the whole." },
    { id: 22, cat: "Statistics", q: "What is a p-value in statistical testing?", guide: "Probability of chance.", ans: "The probability that results occurred by chance. Typically, p < 0.05 is considered statistically significant." },
    { id: 23, cat: "Statistics", q: "Define a Confidence Interval (CI).", guide: "Likely range of values.", ans: "A range likely to contain the true population parameter with a certain level of confidence (e.g., 95%)." },
    { id: 24, cat: "Statistics", q: "Explain Type I and Type II errors.", guide: "False Positive vs. False Negative.", ans: "Type I: Rejecting a true null hypothesis. Type II: Failing to reject a false null hypothesis." },
    { id: 25, cat: "Research", q: "What are the types of variables in biomedical research?", guide: "Numerical and Categorical.", ans: "Numerical (discrete/continuous), Categorical (nominal), and Ordinal (ranked)." },
    { id: 26, cat: "Statistics", q: "Compare Mean and Median.", guide: "Average vs. Middle.", ans: "Mean is the average of all values; Median is the middle value in an ordered set and is more robust to outliers." },
    { id: 27, cat: "Statistics", q: "What do Variance and Standard Deviation measure?", guide: "Data dispersion.", ans: "They measure the spread or dispersion of data points around the mean." },
    { id: 28, cat: "Statistics", q: "Difference between Standard Deviation and Standard Error.", guide: "Sample vs. Mean variability.", ans: "SD describes variability in a single sample; SE describes variability of the sample mean relative to the true population mean." },
    { id: 29, cat: "Statistics", q: "What is a 'skewed' distribution?", guide: "Asymmetrical data.", ans: "A distribution where data points are not symmetrical around the mean, often having a 'tail' on one side." },
    { id: 30, cat: "Statistics", q: "Define Correlation.", guide: "Relationship between variables.", ans: "A statistical relationship indicating how two variables move relative to each other, though it does not imply causation." },
    { id: 31, cat: "HMIS", q: "What is the role of MTUHA in the Tanzanian health system?", guide: "National HMIS.", ans: "MTUHA (HMIS) is the national system used for health data collection, planning, and decision-making." },
    { id: 32, cat: "Data", q: "Why is data quality assessment important in public health?", guide: "Resource allocation.", ans: "Inaccurate data leads to poor planning and misallocation of resources like drugs and staff." },
    { id: 33, cat: "Statistics", q: "Define Morbidity.", guide: "State of illness.", ans: "The state of being symptomatic or unhealthy due to a disease within a population." },
    { id: 34, cat: "Statistics", q: "Define Mortality.", guide: "Death count.", ans: "The number of deaths in a particular population during a specific period." },
    { id: 35, cat: "HMIS", q: "Explain the term 'Indicator' in health statistics.", guide: "Measurable monitor.", ans: "A measurable variable used to monitor health status or program performance (e.g., Maternal Mortality Ratio)." },
    { id: 36, cat: "Statistics", q: "What is the purpose of a 2x2 table in epidemiology?", guide: "Data organization.", ans: "To calculate measures of association (Odds Ratio/Relative Risk) and diagnostic accuracy (Sensitivity/Specificity)." },
    { id: 37, cat: "Research", q: "What is Random Sampling?", guide: "Bias minimization.", ans: "A method where every population member has an equal chance of being selected, minimizing selection bias." },
    { id: 38, cat: "Research", q: "Explain the term 'Bias' in research.", guide: "Systematic error.", ans: "Any systematic error resulting in an incorrect estimate of the association between exposure and outcome." },
    { id: 39, cat: "Research", q: "What is a 'Confounding Variable'?", guide: "Outside influence.", ans: "An outside influence that changes the effect of dependent/independent variables, potentially leading to false conclusions." },
    { id: 40, cat: "Process", q: "Significance of 'Implementation' in the health process?", guide: "Action phase.", ans: "Involves carrying out planned interventions, such as administering medications or health education." },

    /* III. ENVIRONMENTAL HEALTH, WASH, AND FOOD SAFETY (41-60) */
    { id: 41, cat: "Law", q: "Primary objectives of the Public Health Act 2009?", guide: "Promote/Maintain health.", ans: "To promote and maintain public health, including disease control, sanitation, and waste management." },
    { id: 42, cat: "Law", q: "Role of an Authorized Officer under the Act?", guide: "Inspection powers.", ans: "Powers include inspecting premises, publishing orders for disease control, and managing port health risks." },
    { id: 43, cat: "WASH", q: "Duties of occupiers regarding drainage systems?", guide: "Maintenance responsibilities.", ans: "Occupiers must protect drainage systems on their premises to prevent blockages or health hazards." },
    { id: 44, cat: "WASH", q: "How does the Act regulate water storage vessels?", guide: "Prevention of breeding.", ans: "Vessels must be fitted with covers to prevent contamination and mosquito breeding." },
    { id: 45, cat: "Food Safety", q: "Legal requirements for food manufacturers in Tanzania?", guide: "Registration and standards.", ans: "Must be registered, maintain hygiene standards, and ensure proper labeling/safety of additives." },
    { id: 46, cat: "WASH", q: "Define WASH.", guide: "Water, San, Hygiene.", ans: "Water, Sanitation, and Hygiene—interventions aimed at providing safe water and clean environments to prevent disease." },
    { id: 47, cat: "Food Safety", q: "What are 'Notifiable' symptoms for a food handler?", guide: "Reporting risk symptoms.", ans: "Symptoms like diarrhea, vomiting, or skin lesions which pose a risk of foodborne illness transmission." },
    { id: 48, cat: "Port Health", q: "Explain the concept of 'Port Health Services'.", guide: "Border surveillance.", ans: "Surveillance and sanitary control at entry points to prevent the importation of diseases." },
    { id: 49, cat: "WASH", q: "Minimum Package for school WASH?", guide: "Essential facilities.", ans: "Includes safe water, separate functional latrines for boys/girls, and handwashing facilities with soap." },
    { id: 50, cat: "EIA", q: "Describe Environmental Impact Assessment (EIA).", guide: "Pre-project study.", ans: "A study required before major projects to predict and mitigate negative health/environmental impacts." },
    { id: 51, cat: "Waste Management", q: "How should hazardous waste be managed in health facilities?", guide: "Segregation and treatment.", ans: "Through segregation at source, proper labeling, safe storage, and treatment (e.g., incineration)." },
    { id: 52, cat: "Environment", q: "What is 'Black Carbon' and why is it a concern?", guide: "Combustion particulate.", ans: "Fine particulate matter from incomplete combustion (charcoal) causing respiratory/cardiovascular diseases." },
    { id: 53, cat: "Environment", q: "Define 'Light Pollution' in public health.", guide: "Artificial light disruption.", ans: "Excessive misdirected artificial light that disrupts circadian rhythms and melatonin production." },
    { id: 54, cat: "Environment", q: "What are the non-auditory effects of noise pollution?", guide: "Stress and cognitive impact.", ans: "Stress, sleep disturbance, hypertension, and reduced cognitive performance." },
    { id: 55, cat: "Environment", q: "Role of Carbon Dioxide as an indicator indoors?", guide: "Ventilation marker.", ans: "High CO2 levels indicate poor ventilation, leading to the buildup of other indoor pollutants." },
    { id: 56, cat: "OSHA", q: "Three stages of worker health screening by OSHA?", guide: "Pre, Period, Exit.", ans: "At recruitment (pre-employment), during employment (periodic), and upon leaving/retirement (exit)." },
    { id: 57, cat: "OSHA", q: "Distinguish between OSHA and WCF.", guide: "Prevention vs. Compensation.", ans: "OSHA focuses on preventing injuries/diseases at work; WCF provides financial compensation after injury/death." },
    { id: 58, cat: "OSHA", q: "Definition of a 'workplace' according to OSHA Act?", guide: "Employee threshold.", ans: "Any premises where at least three workers are employed." },
    { id: 59, cat: "OSHA", q: "List three types of OSHA inspections.", guide: "Safety/Hygiene checks.", ans: "Electrical safety, pressure vessels, lifting appliances, and general hygiene inspections." },
    { id: 60, cat: "One Health", q: "What is the 'One Health' approach?", guide: "Animal-Human-Environment link.", ans: "Recognizes that the health of people is closely connected to the health of animals and our shared environment." },

    /* IV. IMMUNIZATION AND MATERNAL HEALTH (61-75) */
    { id: 61, cat: "Immunization", q: "Diseases children must be immunized against (Public Health Act)?", guide: "Mandatory vaccines.", ans: "Polio, Tuberculosis, Tetanus, and Hepatitis B." },
    { id: 62, cat: "Vaccines", q: "Describe BCG vaccine administration.", guide: "Neonatal TB vaccine.", ans: "Given at birth in the right arm to prevent severe forms of Tuberculosis." },
    { id: 63, cat: "Vaccines", q: "What is the purpose of the OPV 0 dose?", guide: "Early gut immunity.", ans: "Given at birth to provide early intestinal immunity against poliovirus." },
    { id: 64, cat: "Vaccines", q: "What is the Pentavalent vaccine?", guide: "5-in-1 protection.", ans: "Protects against Diphtheria, Tetanus, Pertussis, Hepatitis B, and Hib." },
    { id: 65, cat: "Cold Chain", q: "Explain the 'Cold Chain'.", guide: "Potency maintenance.", ans: "System of storing/transporting vaccines at recommended temperatures from factory to use." },
    { id: 66, cat: "Vaccines", q: "Target Population for HPV vaccine in TZ?", guide: "Adolescent girls.", ans: "Adolescent girls aged 9-14 to prevent cervical cancer." },
    { id: 67, cat: "Statistics", q: "How is the vaccine 'Denominator' established in TZ?", guide: "Projection data.", ans: "Using national census projections and birth registries." },
    { id: 68, cat: "Metrics", q: "Define 'Drop-out Rate' in immunization.", guide: "Series completion rate.", ans: "Percentage of children who start but do not complete all required doses in a series." },
    { id: 69, cat: "Maternal", q: "Danger Signs in pregnancy to teach mothers?", guide: "Red flag symptoms.", ans: "Bleeding, severe headache, blurred vision, swelling of hands/face, and reduced fetal movement." },
    { id: 70, cat: "Maternal", q: "Why is Iron-deficiency anemia common in pregnant women in TZ?", guide: "Demand and intake.", ans: "Increased physiological demand for iron often coupled with inadequate nutrition or malaria." },
    { id: 71, cat: "Vaccines", q: "What is the role of the Rota vaccine?", guide: "Diarrhea protection.", ans: "To protect infants against rotavirus, a leading cause of severe diarrhea and dehydration." },
    { id: 72, cat: "PMTCT", q: "What are the 'Pillars' of PMTCT?", guide: "Prevention strategy.", ans: "Primary prevention, preventing unintended pregnancy in HIV+ women, preventing transmission, and family care." },
    { id: 73, cat: "HIV", q: "When is a baby born to an HIV+ mother first tested?", guide: "Early infant diagnosis.", ans: "At birth or within first few weeks, followed by tests at 10 weeks and after breastfeeding stops." },
    { id: 74, cat: "HIV/TB", q: "What is IPT (Isoniazid Prophylactic Therapy)?", guide: "TB prevention.", ans: "Medication given to prevent Tuberculosis in people at high risk, such as those living with HIV." },
    { id: 75, cat: "NCDs", q: "Define Non-Communicable Diseases (NCDs).", guide: "Chronic conditions.", ans: "Chronic conditions not passed from person to person, such as Diabetes and Hypertension." },

    /* V. PUBLIC SERVICE ETHICS AND LAW (76-85) */
    { id: 76, cat: "Ethics", q: "Primary objective of Ethics Management in Public Service?", guide: "Code oversight.", ans: "To oversee the implementation of the code of conduct and coordinate complaints." },
    { id: 77, cat: "Law", q: "Who authorizes a 'personal salary' permit (Standing Order E.1)?", guide: "Salary permit authority.", ans: "The Permanent Secretary of the President's Office, Public Service Management." },
    { id: 78, cat: "Law", q: "Disciplinary proceedings in TZ Public Service?", guide: "Formal vs. Summary.", ans: "Formal Proceedings (major offenses) and Summary Proceedings (minor offenses)." },
    { id: 79, cat: "Ethics", q: "Explain the 'Integrity Pledge'.", guide: "Accountability commitment.", ans: "A commitment made by public servants to uphold ethical standards, transparency, and accountability." },
    { id: 80, cat: "Service", q: "Purpose of a 'Client Service Charter'?", guide: "Service standards.", ans: "To inform customers about service quality expectations and increase institutional accountability." },
    { id: 81, cat: "Ethics", q: "Define 'Professionalism' in the TZ Code of Ethics.", guide: "Bias-free service.", ans: "Maintaining integrity, providing services without bias, and ensuring patient/client confidentiality." },
    { id: 82, cat: "Law", q: "Rights of a public servant under OSHA?", guide: "Safety rights.", ans: "Right to a safe environment, information about hazards, and health checkups." },
    { id: 83, cat: "Management", q: "Supervisor's handling of newly discovered hazards?", guide: "Interim safety.", ans: "By immediate reporting, taking interim safety measures, and working for permanent solutions." },
    { id: 84, cat: "Law", q: "Role of the Worker’s Compensation Fund (WCF)?", guide: "Social security.", ans: "To provide compensation to employees for injuries sustained or diseases contracted during employment." },
    { id: 85, cat: "Ethics", q: "Why is confidentiality essential in Personnel Health Information?", guide: "Employee trust.", ans: "To protect employee privacy and ensure trust in the occupational health system." },

    /* VI. BEHAVIORAL AND SCENARIO (86-100) */
    { id: 86, cat: "Scenario", q: "Public health issue identification (STAR method)?", guide: "Problem-Action-Result.", ans: "Identify the problem (e.g., high malaria), take action (education), and present result (increased net usage)." },
    { id: 87, cat: "Management", q: "Prioritize efforts with limited resources?", guide: "High-impact focus.", ans: "Focus on evidence-based high-impact interventions and vulnerable populations first." },
    { id: 88, cat: "Scenario", q: "Action during a new infectious outbreak?", guide: "Surveillance/Isolation.", ans: "Activate emergency response, conduct surveillance, isolate suspected cases, and initiate community communication." },
    { id: 89, cat: "Scenario", q: "How to handle a conflict with a coworker?", guide: "Collaborative solution.", ans: "Maintain professionalism, seek private discussion for root cause, and focus on collaboration." },
    { id: 90, cat: "Motivation", q: "Why are you passionate about public health?", guide: "Desire to help.", ans: "Reflect on the desire to improve community well-being through prevention rather than just treatment." },
    { id: 91, cat: "Data", q: "Experience with program evaluation?", guide: "Assessment of objectives.", ans: "Using data to assess whether a health program met its objectives and identifying areas for improvement." },
    { id: 92, cat: "Knowledge", q: "How do you stay current with public health trends?", guide: "Professional growth.", ans: "By reading medical journals, attending conferences, and active professional networking." },
    { id: 93, cat: "Scenario", q: "Describe a time you made a mistake at work.", guide: "Lesson learned.", ans: "Identify the mistake, the immediate correction taken, and what was learned to prevent recurrence." },
    { id: 94, cat: "Communication", q: "Address cultural or language barriers?", guide: "Building trust.", ans: "By using community influencers, translators, and respecting local customs to build trust." },
    { id: 95, cat: "Data", q: "Approach to analyzing data for trends?", guide: "Statistical clean-up.", ans: "Using statistical tools, cleaning data, identifying patterns, and interpreting them within local contexts." },
    { id: 96, cat: "Resilience", q: "How do you handle pressure and stress?", guide: "Maintain organization.", ans: "Maintain organization, prioritize tasks, and remain calm to ensure quality of care." },
    { id: 97, cat: "Vision", q: "Where do you see yourself in five years?", guide: "Professional development.", ans: "Relate growth to specialized professional development within the public health sector." },
    { id: 98, cat: "Career", q: "Why should we hire you?", guide: "Alignment with goals.", ans: "Highlight specific skills, relevant experience, and alignment with the institution’s goals." },
    { id: 99, cat: "Management", q: "Ensure accountability in your team?", guide: "Clear communication.", ans: "Through clear goals, regular performance reviews (OPRAS), and setting a personal example." },
    { id: 100, cat: "Strategy", q: "Most significant challenge in TZ health sector?", guide: "Human resource gaps.", ans: "The dual burden of diseases (Communicable/NCDs) and critical human resource gaps." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Epidemiology': case 'Surveillance': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Statistics': case 'Data': case 'HMIS': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'WASH': case 'Food Safety': case 'Environment': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Vaccines': case 'Immunization': case 'Maternal': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'Law': case 'Ethics': case 'OSHA': return 'bg-red-50 text-red-600 border-red-100';
      case 'Scenario': return 'bg-orange-50 text-orange-600 border-orange-100';
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
            <Globe2 size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-deep-blue">
            Public Health
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            <strong>Strategic Mastery: 100 Essential Questions for Health Officers.</strong> <br />
            Integrating epidemiology, biostatistics, environmental health (WASH), and Tanzanian Public Service Ethics.
          </p>
        </div>

        {/* INFO CARDS SUMMARY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Activity className="text-blue-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-20</span>
            <h5 className="text-xs font-bold uppercase text-center">Epidemiology</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <ShieldCheck className="text-emerald-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">41-60</span>
            <h5 className="text-xs font-bold uppercase text-center">WASH & Safety</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <HeartPulse className="text-rose-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">61-75</span>
            <h5 className="text-xs font-bold uppercase text-center">Maternal care</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
            <Users2 className="text-red-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">76-85</span>
            <h5 className="text-xs font-bold uppercase text-center">Ethics & Law</h5>
          </div>
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
                    <small className="font-black text-[10px] text-neo-mint uppercase tracking-widest mb-2 block italic text-xs">Interviewer Logic:</small>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                      {m.guide}
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-deep-blue/20"></div>
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block text-xs">Technical Response (Expert):</small>
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