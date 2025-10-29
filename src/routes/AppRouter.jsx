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
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="laptops" element={<Laptop />} /> */}
          <Route path="laptops" element={<Laptop />} />
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
        </Route>
        
        {/* Full-screen routes (no Header/Footer) */}
        {/* <Route path="auth" element={<Auth />} /> */}

        {/* Not Found Route */}
        <Route path="*" element={<Placeholder title="404: Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
};
