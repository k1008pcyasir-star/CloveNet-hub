import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Tumeongeza Navigate kwa usalama
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";

// VUTA KURASA ZA FAQ
import ITFaq from "./pages/faq/ITFaq";
import GeneralFaq from "./pages/faq/GeneralFaq";
import EngineeringFaq from "./pages/faq/EngineeringFaq";
import LawFaq from "./pages/faq/LawFaq";
import ProcurementFaq from "./pages/faq/ProcurementFaq";
import HRFaq from "./pages/faq/HRFaq";
import AfyaFaq from "./pages/faq/AfyaFaq";
import AccountantFaq from "./pages/faq/AccountantFaq";
import NetworkingFaq from "./pages/faq/it/NetworkingFaq";
import ProgrammingFaq from "./pages/faq/it/ProgrammingFaq";
import AiMlFaq from "./pages/faq/it/AiMlFaq";
import HardwareFaq from "./pages/faq/it/HardwareFaq";
import SoftwareFaq from "./pages/faq/it/SoftwareFaq";
import ClinicalFaq from "./pages/faq/afya/ClinicalFaq";
import LaboratoryFaq from "./pages/faq/afya/LaboratoryFaq";
import NursingFaq from "./pages/faq/afya/NursingFaq";
import PharmacyFaq from "./pages/faq/afya/PharmacyFaq";
import PublicHealthFaq from "./pages/faq/afya/PublicHealthFaq";
import CvDashboard from './pages/cv-builder/CvDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* NJIA KUU ZA MFUMO */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cv-builder" element={<CvDashboard />} />

        {/* NJIA ZA INTERVIEW FAQ */}
        <Route path="/faq/general" element={<GeneralFaq />} />
        <Route path="/faq/it" element={<ITFaq />} />
        <Route path="/faq/afya" element={<AfyaFaq />} />
        <Route path="/faq/accountant" element={<AccountantFaq />} />
        <Route path="/faq/engineering" element={<EngineeringFaq />} />
        <Route path="/faq/law" element={<LawFaq />} />
        <Route path="/faq/procurement" element={<ProcurementFaq />} />
        <Route path="/faq/hr" element={<HRFaq />} />
        
        {/* Sub-categories za IT */}
        <Route path="/faq/it/networking" element={<NetworkingFaq />} />
        <Route path="/faq/it/programming" element={<ProgrammingFaq />} />
        <Route path="/faq/it/ai-ml" element={<AiMlFaq />} />
        <Route path="/faq/it/hardware" element={<HardwareFaq />} />
        <Route path="/faq/it/software" element={<SoftwareFaq />} />
        
        {/* Sub-categories za Afya */}
        <Route path="/faq/afya/clinical" element={<ClinicalFaq />} />
        <Route path="/faq/afya/laboratory" element={<LaboratoryFaq />} />
        <Route path="/faq/afya/nursing" element={<NursingFaq />} />
        <Route path="/faq/afya/pharmacy" element={<PharmacyFaq />} />
        <Route path="/faq/afya/public-health" element={<PublicHealthFaq />} />

        {/* MABORESHO: Kama mtu ataandika URL mbovu, mrudishe Landing Page badala ya kuona ukurasa mweupe */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;