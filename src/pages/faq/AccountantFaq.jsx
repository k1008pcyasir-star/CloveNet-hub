import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Landmark, FileBarChart, PieChart, Briefcase, ChevronDown } from 'lucide-react';
import Header from '../../components/Header';

function AccountingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const maswali = [
    /* SECTION 1: TECHNICAL ACCOUNTING FOUNDATIONS (1-25) */
    { id: 1, cat: "Foundations", q: "What is the difference between AP and AR?", a: "Accounts Payable (AP) is money owed by a company to its suppliers. Accounts Receivable (AR) is money owed to a company by its customers." },
    { id: 2, cat: "Foundations", q: "Explain the Accounting Equation.", a: "Assets = Liabilities + Owners' Equity." },
    { id: 3, cat: "Foundations", q: "What are the three main financial statements?", a: "Balance Sheet, Income Statement, and Cash Flow Statement." },
    { id: 4, cat: "Foundations", q: "What is 'Double-Entry' bookkeeping?", a: "A system where every transaction affects at least two accounts (Debit and Credit)." },
    { id: 5, cat: "Foundations", q: "Define 'Depreciation'.", a: "The systematic allocation of the cost of a tangible asset over its useful life." },
    { id: 6, cat: "Foundations", q: "What is 'Accrual Accounting'?", a: "Recording income/expenses when they occur, not necessarily when cash moves." },
    { id: 7, cat: "Foundations", q: "Explain 'Deferred Revenue'.", a: "Money received for goods/services not yet delivered." },
    { id: 8, cat: "Foundations", q: "What is a 'General Ledger'?", a: "A complete record of all financial transactions of a company." },
    { id: 9, cat: "Foundations", q: "Difference between 'Trial Balance' and 'Balance Sheet'?", a: "Trial Balance is an internal check for debits/credits; Balance Sheet is a formal financial position statement." },
    { id: 10, cat: "Foundations", q: "What is 'Amortization'?", a: "Depreciation for intangible assets (like software/patents)." },
    { id: 11, cat: "Foundations", q: "How do you handle bank reconciliation discrepancies?", a: "By identifying unrecorded checks, deposits in transit, or bank errors." },
    { id: 12, cat: "Foundations", q: "Define 'Working Capital'.", a: "Current Assets minus Current Liabilities." },
    { id: 13, cat: "Foundations", q: "What is 'Bad Debt Expense'?", a: "A loss recorded when a customer cannot pay their debt." },
    { id: 14, cat: "Foundations", q: "Explain 'Inventory Valuation' methods.", a: "FIFO (First-In-First-Out) and Weighted Average (IFRS preferred)." },
    { id: 15, cat: "Foundations", q: "What is 'Capital Expenditure' (CapEx)?", a: "Funds used to acquire/upgrade physical assets." },
    { id: 16, cat: "Foundations", q: "What is 'Operating Expenditure' (OpEx)?", a: "Day-to-day expenses to keep a business running." },
    { id: 17, cat: "Foundations", q: "Define 'Net Profit'.", a: "Total revenue minus all expenses, taxes, and interest." },
    { id: 18, cat: "Foundations", q: "What is 'Gross Profit'?", a: "Revenue minus Cost of Goods Sold (COGS)." },
    { id: 19, cat: "Foundations", q: "Explain 'Revenue Recognition' principle.", a: "Revenue is recognized when it is earned, not when cash is received." },
    { id: 20, cat: "Foundations", q: "What is 'Matching Principle'?", a: "Matching expenses with the revenue they helped generate in the same period." },
    { id: 21, cat: "Foundations", q: "Define 'Fixed Assets'.", a: "Long-term assets used in operations (land, buildings, equipment)." },
    { id: 22, cat: "Foundations", q: "What are 'Current Assets'?", a: "Assets expected to be converted to cash within one year." },
    { id: 23, cat: "Foundations", q: "Define 'Liabilities'.", a: "Obligations or debts the company owes to external parties." },
    { id: 24, cat: "Foundations", q: "What is 'Retained Earnings'?", a: "Profits kept by the company rather than paid out as dividends." },
    { id: 25, cat: "Foundations", q: "Explain 'Materiality' in accounting.", a: "An item is material if its omission could influence economic decisions of users." },

    /* SECTION 2: TANZANIA TAXATION & COMPLIANCE (26-50) */
    { id: 26, cat: "Taxation", q: "What is the current standard VAT rate in Tanzania?", a: "18%." },
    { id: 27, cat: "Taxation", q: "What is the 'Skills Development Levy' (SDL) rate?", a: "3.5% (for employers with 10+ employees)." },
    { id: 28, cat: "Taxation", q: "Explain 'Withholding Tax' (WHT).", a: "Tax deducted at the source of payment and remitted to TRA." },
    { id: 29, cat: "Taxation", q: "What is 'PAYE'?", a: "Pay As You Earn; income tax deducted from employees' salaries." },
    { id: 30, cat: "Taxation", q: "What is the NSSF contribution rate?", a: "20% total (usually 10% employer, 10% employee)." },
    { id: 31, cat: "Taxation", q: "Define 'EFD' machine.", a: "Electronic Fiscal Device used for issuing tax receipts." },
    { id: 32, cat: "Taxation", q: "What is a 'TIN'?", a: "Tax Identification Number; a unique ID for taxpayers." },
    { id: 33, cat: "Taxation", q: "Difference between Tax Evasion and Tax Avoidance?", a: "Evasion is illegal; Avoidance is legal tax planning." },
    { id: 34, cat: "Taxation", q: "What is 'Input VAT'?", a: "VAT paid on business purchases." },
    { id: 35, cat: "Taxation", q: "What is 'Output VAT'?", a: "VAT charged to customers on sales." },
    { id: 36, cat: "Taxation", q: "When is the deadline for monthly VAT filing in Tanzania?", a: "The 20th day of the following month." },
    { id: 37, cat: "Taxation", q: "Explain 'Provisional Tax'.", a: "Estimated tax paid in four quarterly installments." },
    { id: 38, cat: "Taxation", q: "What is 'Corporate Income Tax' rate for resident companies?", a: "Generally 30%." },
    { id: 39, cat: "Taxation", q: "Define 'Stamp Duty'.", a: "Tax on legal documents/instruments." },
    { id: 40, cat: "Taxation", q: "What is 'Adjusted Taxable Profit'?", a: "Accounting profit adjusted for tax-allowed/disallowed items." },
    { id: 41, cat: "Taxation", q: "What is 'Capital Allowances'?", a: "Tax-deductible expenses for the wear and tear of assets." },
    { id: 42, cat: "Taxation", q: "Define 'Thin Capitalization'.", a: "When a company has too much debt relative to equity (Ratio 7:3)." },
    { id: 43, cat: "Taxation", q: "What is 'Transfer Pricing'?", a: "Pricing of transactions between related/connected parties." },
    { id: 44, cat: "Taxation", q: "Explain 'WHT on Rent' for commercial property.", a: "Currently 10%." },
    { id: 45, cat: "Taxation", q: "What is 'NHIF' deduction?", a: "Health insurance deduction (usually 3% employer, 3% employee)." },
    { id: 46, cat: "Taxation", q: "What is 'WHT on Professional Services'?", a: "5% for residents." },
    { id: 47, cat: "Taxation", q: "Define 'Tax Residency'?", a: "Status determining if an entity is liable for tax in Tanzania." },
    { id: 48, cat: "Taxation", q: "What is 'Gaming Tax'?", a: "Tax levied on gambling and lottery activities." },
    { id: 49, cat: "Taxation", q: "Explain 'Excise Duty'.", a: "Tax on specific goods like alcohol, cigarettes, and fuel." },
    { id: 50, cat: "Taxation", q: "What is 'City Service Levy'?", a: "A local government tax (usually 0.3% of turnover)." },

    /* SECTION 3: FINANCIAL REPORTING & AUDITING (51-75) */
    { id: 51, cat: "Reporting", q: "What is IFRS?", a: "International Financial Reporting Standards." },
    { id: 52, cat: "Reporting", q: "Explain 'Going Concern' assumption.", a: "The belief that a business will continue for the foreseeable future." },
    { id: 53, cat: "Auditing", q: "What is an 'Audit Trail'?", a: "A step-by-step record allowing a transaction to be traced to its source." },
    { id: 54, cat: "Reporting", q: "Define 'Liquidity'.", a: "Ability to meet short-term debts." },
    { id: 55, cat: "Reporting", q: "Define 'Solvency'.", a: "Ability to meet long-term debts." },
    { id: 56, cat: "Reporting", q: "What is the 'Current Ratio'?", a: "Current Assets / Current Liabilities." },
    { id: 57, cat: "Reporting", q: "What is the 'Quick Ratio' (Acid Test)?", a: "(Current Assets - Inventory) / Current Liabilities." },
    { id: 58, cat: "Auditing", q: "Explain 'Unqualified Audit Opinion'.", a: "A clean report stating financial statements are fair." },
    { id: 59, cat: "Auditing", q: "What is 'Internal Control'?", a: "Policies and procedures to protect assets and ensure accuracy." },
    { id: 60, cat: "Auditing", q: "Define 'Material Misstatement'.", a: "An error significant enough to change a user's decision." },
    { id: 61, cat: "Reporting", q: "What is 'Consolidation'?", a: "Combining parent and subsidiary financial statements." },
    { id: 62, cat: "Reporting", q: "Explain 'EBITDA'.", a: "Earnings Before Interest, Taxes, Depreciation, and Amortization." },
    { id: 63, cat: "Reporting", q: "What is 'Return on Investment' (ROI)?", a: "(Net Profit / Investment Cost) x 100." },
    { id: 64, cat: "Reporting", q: "Define 'Equity Multiplier'.", a: "A ratio measuring financial leverage." },
    { id: 65, cat: "Ethics", q: "What is 'Window Dressing'?", a: "Making financial statements look better than they are (unethical)." },
    { id: 66, cat: "Reporting", q: "Explain 'Fair Value'.", a: "The price received to sell an asset in an orderly transaction." },
    { id: 67, cat: "Reporting", q: "What are 'Contingent Liabilities'?", a: "Potential liabilities depending on future events (e.g., lawsuits)." },
    { id: 68, cat: "Reporting", q: "Define 'Impairment'.", a: "A permanent reduction in the value of an asset." },
    { id: 69, cat: "Foundations", q: "What is 'Bank Overdraft'?", a: "A short-term liability where bank balance goes below zero." },
    { id: 70, cat: "Reporting", q: "Explain 'Financial Leverage'.", a: "Using debt to increase potential returns." },
    { id: 71, cat: "Reporting", q: "What is 'Operating Margin'?", a: "Operating Income / Revenue." },
    { id: 72, cat: "Reporting", q: "Define 'Dividend'.", a: "Portion of profit distributed to shareholders." },
    { id: 73, cat: "Auditing", q: "What is 'Auditor Independence'?", a: "Auditors being free from influence by the client." },
    { id: 74, cat: "Auditing", q: "Explain 'Subsequent Events'?", a: "Events occurring hagati ya balance sheet date na ripoti issuance." },
    { id: 75, cat: "Standards", q: "What is 'IAS 1'?", a: "The standard for the presentation of financial statements." },

    /* SECTION 4: COST ACCOUNTING & BUDGETING (76-90) */
    { id: 76, cat: "Costing", q: "What is 'Zero-Based Budgeting'?", a: "Starting every budget from zero, justifying every expense." },
    { id: 77, cat: "Costing", q: "Define 'Variance Analysis'.", a: "Comparing actual results against budgeted figures." },
    { id: 78, cat: "Costing", q: "What is 'Break-Even Point'?", a: "Level where total revenue equals total costs (Zero profit)." },
    { id: 79, cat: "Costing", q: "Difference between Fixed and Variable costs?", a: "Fixed stays the same (rent); Variable changes with production (raw materials)." },
    { id: 80, cat: "Costing", q: "What is 'Marginal Cost'?", a: "The cost of producing one additional unit." },
    { id: 81, cat: "Costing", q: "Define 'Overheads'.", a: "Indirect costs not directly tied to production (electricity, admin)." },
    { id: 82, cat: "Costing", q: "What is 'Standard Costing'?", a: "Using estimated costs for budget and control." },
    { id: 83, cat: "Costing", q: "Explain 'Absorption Costing'?", a: "Including all manufacturing costs in the product cost." },
    { id: 84, cat: "Costing", q: "What is 'Opportunity Cost'?", a: "Benefit lost by choosing one alternative over another." },
    { id: 85, cat: "Costing", q: "Define 'Sunk Cost'?", a: "A past cost that cannot be recovered." },
    { id: 86, cat: "Costing", q: "What is 'Contribution Margin'?", a: "Sales minus Variable Costs." },
    { id: 87, cat: "Costing", q: "Explain 'Direct Labor'.", a: "Labor costs directly involved in making a product." },
    { id: 88, cat: "Costing", q: "What is 'Activity-Based Costing' (ABC)?", a: "Assigning overheads based on activities that cause them." },
    { id: 89, cat: "Costing", q: "Define 'Budgetary Control'?", a: "Managing a business by comparing actual vs budget." },
    { id: 90, cat: "Costing", q: "What is 'Master Budget'?", a: "The aggregate of all lower-level budgets." },

    /* SECTION 5: BEHAVIORAL & SOFTWARE SKILLS (91-100) */
    { id: 91, cat: "Skills", q: "Which accounting software are you familiar with?", a: "Example: TallyPrime, QuickBooks, and Advanced Excel." },
    { id: 92, cat: "Ethics", q: "How do you ensure accuracy in your work?", a: "Regular reconciliations and double-checking entries." },
    { id: 93, cat: "Ethics", q: "How do you handle ethical dilemmas (e.g., fraud)?", a: "By following IFRS ethics and reporting to authorities." },
    { id: 94, cat: "Skills", q: "Why are Excel skills important for accountants?", a: "For data analysis, modeling, and quick reporting." },
    { id: 95, cat: "Compliance", q: "How do you stay updated with TRA laws?", a: "Visiting the TRA website and NBAA seminars." },
    { id: 96, cat: "Skills", q: "What would you do if you found a missing transaction?", a: "Trace source documents and record it immediately." },
    { id: 97, cat: "Skills", q: "How do you handle tight deadlines?", a: "Prioritizing tasks and using automated tools." },
    { id: 98, cat: "Skills", q: "Describe your experience with Payroll.", a: "Expertise in PAYE, NSSF deductions and local compliance." },
    { id: 99, cat: "Career", q: "Where do you see yourself in 5 years?", a: "As a CPA-T holder leading an audit team or financial department." },
    { id: 100, cat: "Career", q: "Why should we hire you?", a: "Combination of technical skills, TRA knowledge, and high integrity." }
  ];

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Foundations': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Taxation': return 'bg-red-50 text-red-600 border-red-100';
      case 'Reporting': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Costing': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Ethics': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        <Link 
          to="/#interview-faq" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Calculator size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Accounting & Finance
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Strategic Evaluation: 100 Essential Accounting Questions. <br />
            Mkusanyiko huu unajumuisha misingi ya kitalamu, kodi za TRA, na viwango vya IFRS kwa ajili ya ushindani wa soko la ajira.
          </p>
        </div>

        {/* INFO GRID CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center group hover:border-neo-mint transition-colors">
            <Landmark className="text-blue-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">1-50</span>
            <h5 className="text-xs font-bold uppercase">Tax & Basis</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center group hover:border-neo-mint transition-colors">
            <FileBarChart className="text-indigo-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">51-75</span>
            <h5 className="text-xs font-bold uppercase">Reporting</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center group hover:border-neo-mint transition-colors">
            <PieChart className="text-amber-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">76-90</span>
            <h5 className="text-xs font-bold uppercase">Costing</h5>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center group hover:border-neo-mint transition-colors">
            <Briefcase className="text-emerald-500 mb-2" size={20} />
            <span className="text-[10px] font-black uppercase text-slate-400">91-100</span>
            <h5 className="text-xs font-bold uppercase">Skills</h5>
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

export default AccountingFaq;