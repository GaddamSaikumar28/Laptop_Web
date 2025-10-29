import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';
import { ArrowRight, AlertTriangle } from 'lucide-react';

// Array of sections from your provided text
const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'uk-warranty', title: 'UK Warranty' },
  { id: 'us-warranty', title: 'US Warranty' },
  { id: 'eu-warranty', title: 'EU Warranty' },
  { id: 'exceptions', title: 'Warranty Exceptions' },
  { id: 'data-backup', title: 'Data Backup Policy' },
  { id: 'support-hours', title: 'Hours of Support' },
];

// --- Sticky Sidebar Navigation ---
const StickyNav = ({ activeSection }) => (
  <nav className="sticky top-32">
    <h3 className="text-xl font-bold text-white mb-4">On this page</h3>
    <ul className="space-y-2">
      {sections.map(section => (
        <li key={section.id}>
          <ScrollLink
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100} // Offset for the sticky header
            className={`cursor-pointer block text-sm transition-all duration-200 ${
              activeSection === section.id
                ? 'text-cyan-400 font-semibold translate-x-2'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {section.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  </nav>
);

// --- Content Section Component ---
const ContentSection = ({ id, title, children }) => (
  <FadeIn>
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b border-gray-800">
        {title}
      </h2>
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        {children}
      </div>
    </section>
  </FadeIn>
);


// --- Main Page Component ---
export const Warranty = () => {
  const [activeSection] = React.useState('intro');

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Warranty&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Warranty Information
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to product reliability and support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            
            {/* --- Sidebar (Left Column) --- */}
            <div className="hidden lg:block lg:col-span-1">
              <StickyNav activeSection={activeSection} />
            </div>
            
            {/* --- Content (Right Column) --- */}
            <div className="lg:col-span-3">
              
              {/* --- Warranty Link Callout --- */}
              <FadeIn>
                <div className="bg-gray-800 border border-cyan-500/50 rounded-lg p-6 mb-12 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-3">Submit a Warranty Claim</h3>
                  <p className="text-gray-300 mb-4">
                    All warranty information and claims are provided and processed through our dedicated portal.
                  </p>
                  <motion.a 
                    href="https://MY-WARRANTY.COM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg font-semibold text-black bg-cyan-400 px-6 py-3 rounded-md group hover:bg-cyan-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Go to MY-WARRANTY.COM
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </FadeIn>

              <ContentSection id="intro" title="Introduction">
                <p>In our “Agreement”, “We” or “Us” are “A2C Services Limited” (Company No: 05557861) of Unit E, Railway Triangle, Walton Road, Portsmouth PO6 1TY, “You” are the person detailed on the order forms contained within this site.</p>
                <p>Warranty information is provided in full at <a href="https://MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MY-WARRANTY.COM</a>.</p>
              </ContentSection>

              <ContentSection id="uk-warranty" title="UK Warranty">
                <h3>To submit a Warranty Claim please follow the procedure below:</h3>
                <ul>
                  <li>Warranty claims need submitting online in the following form at <a href="https://MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MY-WARRANTY.COM</a>, please note that claims submitted via any other process cannot be processed.</li>
                  <li>Please include your full contact name and address, which should be where the unit needs to be collected and swapped from, the laptop asset tag number, serial number, machine type (make and model) and a detailed description of fault when submitting a claim.</li>
                  <li>Where a fault cannot be accurately diagnosed and suitable replacement parts sent out to the customer, we will ‘Advance Replace’ the unit, shipping out a replacement unit and arranging for collection of the faulty one, using the DPD Swap IT service. You will be sent an RMA reference in reply from the <a href="mailto:SUPPORT@MY-WARRANTY.COM" className="text-cyan-400 hover:underline">SUPPORT@MY-WARRANTY.COM</a> operator after completing the following form. Please ensure you check SPAM filters for emails.</li>
                  <li>Please have the faulty item packed and ready to be collected in your reception with the RMA reference clearly labelled for this fault. Our courier will drop off a replacement unit and collect the faulty at the same time.</li>
                </ul>
                <div className="bg-gray-800 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
                  <h4 className="font-bold text-yellow-300 text-xl flex items-center"><AlertTriangle className="w-6 h-6 mr-3" />Important:</h4>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>IT IS ESSENTIAL THAT THE FAULTY ITEM IS PACKAGED AND READY TO COLLECT WHEN THE COURIER ARRIVES – THEY CANNOT SWAP IT OTHERWISE.</li>
                    <li>If the SWAP IT service is rejected or fails more than twice, we will reject the warranty claim.</li>
                  </ul>
                </div>
                <p>Where a product becomes obsolete and is then claimed against, we will replace faulty goods with a product of either equivalent or higher specification of the original product.</p>
                <p>We will also at our discretion issue a tested working used part to replace faulty goods/parts.</p>
              </ContentSection>

              <ContentSection id="us-warranty" title="US Warranty Information">
                <h3>Service level agreement</h3>
                <ul>
                  <li>Emails: <a href="mailto:support@my-warranty.com" className="text-cyan-400 hover:underline">support@my-warranty.com</a> respond to within a maximum of 8 working hours. Your supplier representative will review your claim to determine if the equipment requires returning.</li>
                  <li>Tracking: If submitted for repair, you will be updated regarding your repair or replacement at each stage of progression.</li>
                </ul>
                <h3>Warranty overview</h3>
                <ul>
                  <li>Extended warranty – unlimited claims</li>
                  <li>1 or 3 year cover on your laptop</li>
                  <li>90 days – 1 year cover on your battery</li>
                </ul>
                <h3>What is covered?</h3>
                <ul>
                  <li>Mechanical or electrical breakdown</li>
                  <li>Power surge</li>
                  <li>Not customer or other induced damage</li>
                </ul>
                <h3>Service methods</h3>
                <ul>
                  <li>Repair services on covered products</li>
                  <li>See full terms and conditions outlined with your supplier</li>
                </ul>
              </ContentSection>

              <ContentSection id="eu-warranty" title="EU Warranty">
                <h3>Service level agreement</h3>
                <ul>
                  <li>Emails: <a href="mailto:support@my-warranty.com" className="text-cyan-400 hover:underline">support@my-warranty.com</a> responded to within a maximum of 8 working hours. Your supplier representative will review your claim to determine if the equipment needs returning.</li>
                  <li>Tracking: If submitted for repair, you will be updated regarding your repair or replacement at each stage of progression.</li>
                </ul>
                <h3>Warranty overview</h3>
                <ul>
                  <li>Extended warranty</li>
                  <li>1 year or 3 year cover on laptop</li>
                  <li>90 days – 1 year cover on battery</li>
                </ul>
                <h3>What is covered?</h3>
                <ul>
                  <li>Mechanical or electrical breakdown</li>
                  <li>Not customer or other induced damage</li>
                </ul>
                <h3>Service methods</h3>
                <ul>
                  <li>Repair services on covered products</li>
                  <li>See full terms and conditions outlined with your supplier</li>
                </ul>
                <h3>To submit a Warranty Claim please follow the procedure below.</h3>
                <ul>
                  <li>Warranty claims need submitting direct through the following claim form. Please note that claims submitted via any other process cannot be processed.</li>
                  <li>Please include your full contact name and address, mobile phone number, the address where the unit needs to be collected and potentially swapped from, the laptop asset tag number, serial number, machine type (make and model) and a detailed description of fault when submitting a claim.</li>
                  <li>We expect return of the faulty unit to be arranged by you.</li>
                  <li>We will also, at our discretion, issue a tested working used part to replace faulty goods/parts.</li>
                </ul>
              </ContentSection>

              <ContentSection id="exceptions" title="Warranty Exceptions">
                <p>We will not authorise the return and repair of any system which has been modified from what was originally purchased and specification i.e. addition / removal of components without prior consent from us. This includes changing of parts supplied by us.</p>
                <p>If you wish to alter the system from the original specification you must contact us and provide the part numbers so that we can record the changes on our systems.</p>
                <p>Machines found to have been used in environments not suited to their operation and prove detrimental to their health or performance will not be covered by warranty. This includes but is not limited to; dusty, excessively hot or cold, damp, humid or vibrating environments.</p>
                <p>Where our engineers detect evidence of the above then any remaining warranty will be declared null & void, the item will be returned and a charge will be made to cover the cost.</p>
                <p>External Power Supply Units are not covered by the 1 year warranty. Power Supply Units have a 90 day warranty from the date of delivery.</p>
                <h3>Laptop Batteries</h3>
                <p>Laptop batteries are exempt from the warranties detailed above and are only covered for 90 days from date of delivery.</p>
                <p><strong>NOTE:</strong> The capacity of all rechargeable batteries will decline over time depending on the use and charging/discharging process. This is considered normal and therefore, a reduction in battery capacity is not covered under warranty. The battery is only warranted from defects in material or workmanship resulting in failures. Reduced runtime is not warranted and will vary depending on the power management settings and configurations that are set on the mobile device as well as the number of times the battery has been charged and discharged. Please be advised that rechargeable batteries are considered ‘consumable products’ and warranty coverage is limited to a battery not being able to receive and hold a charge.</p>
                <p>The Advance Replacement Warranty does not cover malicious or accidental damage. Nor does it cover mechanical failure or cosmetic degradation through expected wear & tear.</p>
              </ContentSection>

              <ContentSection id="data-backup" title="Backup your data">
                <div className="bg-gray-800 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
                  <h4 className="font-bold text-red-400 text-xl flex items-center"><AlertTriangle className="w-6 h-6 mr-3" />Data Backup Policy</h4>
                  <p className="text-gray-300">Although we make every reasonable effort not to lose any information from your hard disk, you must ensure that all of your system data is backed up prior to returning hard drives or complete systems.</p>
                  <p className="text-gray-300 mt-2">We cannot be held liable for loss of data or consequential losses arising from the loss of data or program files.</p>
                </div>
              </ContentSection>
              
              <ContentSection id="support-hours" title="Hours of Support">
                <p>Our Warranty Support is available from 9.00am to 5.00pm Monday to Friday (excluding UK Bank Holidays).</p>
                <p>Initial response time for support enquiries is one working day.</p>
                <ul>
                  <li>Web: <a href="https://WWW.MY-WARRANTY.COM" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">WWW.MY-WARRANTY.COM</a></li>
                  <li>E-mail: <a href="mailto:SUPPORT@MY-WARRANTY.COM" className="text-cyan-400 hover:underline">SUPPORT@MY-WARRANTY.COM</a></li>
                </ul>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
