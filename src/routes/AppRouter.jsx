import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
// import { Auth } from '../pages/Auth';
import { Placeholder } from '../pages/Placeholder';
import { MainLayout } from '../layout/MainLayout';
// import { Laptop } from '../pages/Laptop';
import Laptop from '../pages/Laptop';
import { Sustainability } from '../pages/Sustainability';
import { Education } from '../pages/Education';
import { Contact } from '../pages/Contact';
import { Auth } from '../pages/Auth';
import { TermsAndConditions } from '../pages/TermsAndConditions';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { ModernSlavery } from '../pages/ModernSlavery';
import { WEEE } from '../pages/WEEE';
import { Certifications } from '../pages/Certifications';
import { QualityPolicy } from '../pages/QualityPolicy';
import { Warranty } from '../pages/Warranty';
import { Services } from '../pages/Services';
import { ElectronicsRecycling } from '../pages/ElectronicsRecycling';
import { ElectronicsRecyclingDropOffBox } from '../pages/ElectronicsRecyclingDropOffBox';
import { EquipmentBuyback } from '../pages/EquipmentBuyback';
import { EquipmentDecommission } from '../pages/EquipmentDecommission';
import { ITAssetDisposition } from '../pages/ITAssetDisposition';
import { ITAssetManagement } from '../pages/ITAssetManagement';
import { RecyclingConsultation } from '../pages/RecyclingConsultation';
import { HardDriveShredding } from '../pages/HardDriveShredding';
import { AcceptedItems } from '../pages/AcceptedItems';
import { JunkRemoval } from '../pages/JunkRemoval';
import { AuthProvider } from '../context/AuthContext';
export const AppRouter = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="laptops" element={<Laptop />} /> */}
          <Route path="laptops" element={<Laptop />} />
          <Route path="accepted-items" element={<AcceptedItems />}/>
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="education" element={<Education/>} />
          <Route path="contact" element={<Contact />} />
           <Route path="auth" element={<Auth />} />
           <Route path="terms-and-conditions" element={<TermsAndConditions />} />
           <Route path="privacy-policy" element={<PrivacyPolicy />} />
           <Route path="modern-slavery" element={<ModernSlavery />} />
           
           <Route path="certifications" element={<Certifications />} />
           
           <Route path="warranty" element={<Warranty />} />
           <Route path="quality-policy" element={<QualityPolicy />} />
           <Route path="regulations" element={<WEEE />} />
           <Route path="services" element={<Services/>}/>
           <Route path="/services/recycling" element={<ElectronicsRecycling />}/>
           <Route path="/services/drop-off-box" element={<ElectronicsRecyclingDropOffBox />} />
           <Route path="/services/equipment-buyback" element={<EquipmentBuyback />}/>
           <Route path="/services/equipment-decommission" element={<EquipmentDecommission />} />
           <Route path="/services/itad" element={<ITAssetDisposition />} />
           <Route path="/services/it-asset-management" element={<ITAssetManagement />} />
           <Route path="/services/recycling-consultation" element={<RecyclingConsultation />} />
           <Route path="/services/data-destruction" element={<HardDriveShredding />}/>
           <Route path="/services/junk-removal" element={<JunkRemoval />}/>
        </Route>
        
        {/* Full-screen routes (no Header/Footer) */}
        {/* <Route path="auth" element={<Auth />} /> */}

        {/* Not Found Route */}
        <Route path="*" element={<Placeholder title="404: Page Not Found" />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};
