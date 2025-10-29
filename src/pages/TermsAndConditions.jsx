import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FadeIn } from '../components/common/FadeIn';

// Array of sections from your provided text.
const sections = [
  { id: 'definitions', title: 'Definitions' },
  { id: 'general', title: 'General' },
  { id: 'prices', title: 'Prices, Payment & Dispatch' },
  { id: 'credit', title: 'Credit Policy' },
  { id: 'retention', title: 'Retention of Title' },
  { id: 'risk', title: 'Risk' },
  { id: 'loss', title: 'Loss or Damage' },
  { id: 'late_delivery', title: 'Late Delivery' },
  { id: 'warranty', title: 'Warranty' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'force_majeure', title: 'Force Majeure' },
  { id: 'compliance', title: 'Compliance' },
  { id: 'cancellation', title: 'Cancellation' },
  { id: 'law', title: 'Law & Jurisdiction' },
  { id: 'data', title: 'Data Sanitization' },
  { id: 'appendix1', title: 'Appendix 1: Credit Terms' },
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
const ContentSection = ({ id, title, children, onVisible }) => (
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
export const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('definitions');

  // We can't use react-scroll's onSetActive because our FadeIn component
  // wraps the section. A simpler way for this layout is to just
  // update active state, but react-scroll's spy prop will still
  // highlight the correct link visually based on scroll position.

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/1a1a1a?text=Legal+Background&font=inter" 
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                Terms & Conditions
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Please review the terms and conditions of sale for A2C Services Ltd.
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
              
              <ContentSection id="definitions" title="Definitions">
                <p><strong>“EXW”</strong> means that the goods are priced and packed and made available for pickup at the Seller’s warehouse (“delivery” is accomplished when the goods are released by the Seller or its agent and the Buyer is responsible for making arrangements for insurance, export clearance and paper work.</p>
                <p><strong>“CIF”</strong> means Cost, Insurance Freight. Stocks priced including shipping, insurance and freight.</p>
                <p><strong>“CNF”</strong> means Cost and Freight. Stocks are price including shipping and freight – NO insurance included.</p>
                <p><strong>“Price”</strong> means cost quoted for the Stock.</p>
                <p><strong>“Order”</strong> means any order or request for goods given by the Buyer.</p>
                <p><strong>“Goods”</strong> means products that the Seller is able to supply.</p>
                <p><strong>“RMA”</strong> means a Returned Material Authorization which may only be provided by the Seller.</p>
                <p><strong>“The Seller”</strong> means A2C Services Ltd whose address is Unit E Railway Triangle, Walton Road, Portsmouth, Hampshire, England, PO6 1TY</p>
                <p><strong>“The Buyer”</strong> means the person, firm or Seller ordering or buying goods from the Seller.</p>
                <p><strong>“VAT”</strong> means Value added Tax</p>
              </ContentSection>

              <ContentSection id="general" title="General">
                <p>In these conditions of sale:</p>
                <ul>
                  <li>No contract in respect of the goods between the Seller and the Buyer shall exist until the Buyers Order has been expressly accepted by the Seller.</li>
                  <li>In placing an Order with the Seller the Buyer agrees to be bound by these conditions.</li>
                  <li>No conditions or terms stipulated in any other communication or document shall vary or annul any of those conditions except insofar as the same are expressly consented to in writing by the Seller.</li>
                  <li>These terms are correct as of 31 January 2019.</li>
                  <li>The Seller reserves the right to alter or amend these Conditions at any time in respect of Orders already accepted.</li>
                </ul>
              </ContentSection>

              <ContentSection id="prices" title="Prices, Payment and Dispatch">
                <ul>
                  <li>Unless otherwise specified the price quoted is EXW if the Buyer is arranging their own shipping.</li>
                  <li>All sales where the Seller arranges shipping will be charged at CIF and it is up to the buyer to advise if they do not wish to have insurance included.</li>
                  <li>If the Buyer opts out of insurance (CNF terms) then the liability rests solely with the Buyer for any losses or damage that occurs during shipping and transit.</li>
                  <li>All prices quoted unless stated are exclusive of VAT.</li>
                  <li>The Buyer must make all payments requested by the Seller before orders will be dispatched.</li>
                  <li>An extra charge will be levied to cover delivery and insurance costs if the Buyer requests this and the Seller agrees.</li>
                  <li>A charge may be made to cover any extra costs for delivery to a different address.</li>
                  <li>Should expedited delivery be agreed an extra cost may be charged to cover any overtime or any other additional costs involved.</li>
                  <li>Should work be suspended at the request of or delayed through any fault of the Buyer for a period of 30 days the Seller shall then be entitled to payment by the Buyer for work already carried out, materials specially ordered and other additional costs including storage or depreciation of stock value due to the Sellers opinion.</li>
                  <li>The Seller is entitled to request a non-refundable deposit in respect of any Order placed by the Buyer with the Seller. Any deposit paid by the Buyer is security for the total Price and the proper performance of the contract by the Buyer. It may be withheld by the Seller, used to off-set its losses and costs and may not be refunded or repaid or credited to any account if the Buyer does not complete the deal on the terms agreed.</li>
                  <li>The Buyer will acknowledge all receipt of Goods by providing a fully signed proof of export referencing the Sellers invoice number from their elected transport agents who are instructed to arrange collection of the goods.</li>
                </ul>
              </ContentSection>

              <ContentSection id="credit" title="Credit policy and Payment Information">
                <ul>
                  <li>The Seller’s standard terms for payment are cleared funds only.</li>
                  <li>The Seller does not operate any terms of credit. This means that no goods will be shipped and all support and/or warranty services withdrawn until payment is made in full.</li>
                  <li>Any change to this term of this agreement can only be altered with the written agreement of the Seller’s management. See Appendix 1</li>
                  <li>All Orders will be subject to our in-house security procedures and only upon satisfactory checks will these Orders be dispatched. This will apply to all new customers and existing customers should A2C feel it necessary.</li>
                </ul>
              </ContentSection>

              <ContentSection id="retention" title="Retention of title">
                <p>The Seller and the Buyer expressly agree that until the Seller has been paid in full for the goods comprised on this or any other sales contract between them and all outstanding amounts due to the Seller from the Buyer (or any associated or subsidiary or holding company of either of them) or from any director or shareholder of the Buyer:</p>
                <ul>
                  <li>The goods shall remain the property of the Seller; and</li>
                  <li>The Buyer, as bailee for the Seller, will store the same for the Seller in a proper manner without charge and in such a way that the goods are clearly identified as being the property of the Seller and not mixed with other property.</li>
                  <li>At any time, the Seller may recover from the Buyer the goods remaining in the Buyer’s possession and for the purposes thereof may enter upon any premises of or occupied by the Buyer or any third party (with the consent of that third party), notwithstanding that the risk has passed to the Buyer under the following clause.</li>
                </ul>
              </ContentSection>

              <ContentSection id="risk" title="Risk">
                <p>Not withstanding the preceding condition all risk in respect of the goods shall be assumed by the Buyer upon delivery of the same to him.</p>
              </ContentSection>

              <ContentSection id="loss" title="Loss or Damage in Transit or Non Delivery">
                <ul>
                  <li>The Buyer shall examine the goods immediately that the goods are delivered to him.</li>
                  <li>The Seller reserves the right to reject claims in respect of shortages or damage in transit or non-delivery if such has not been noted on the proof of delivery note.</li>
                  <li>The Buyer must notify the Seller within 24hrs of the date of delivery by email directly to the sales representative of the Seller and to office@a2c.co.uk of any claims relating to a specific Order.</li>
                </ul>
              </ContentSection>

              <ContentSection id="late_delivery" title="Late Delivery">
                <ul>
                  <li>Whilst the Seller will use its reasonable endeavours to deliver the goods in accordance with the Buyer’s Order requirements, the Seller will not be liable for any consequence of late delivery however caused.</li>
                  <li>Time of delivery will not be of the essence.</li>
                </ul>
              </ContentSection>

              <ContentSection id="warranty" title="Warranty and Defective Products">
                <ul>
                  <li>Warranty information is provide in full at MY-WARRANTY.COM.</li>
                  <li>You warrant that the information entered onto the Order Form is true.</li>
                  <li>Where we sell to you under a consumer transaction (as defined by the Consumer Transactions (Restrictions on Statements) Order 1976) your statutory rights are not affected by this Agreement.</li>
                  <li>For business bulk order purchases, warranties are upon the agreement with your sales representative.</li>
                </ul>
              </ContentSection>

              <ContentSection id="liability" title="Limitation of Supplier’s Liability">
                <p>The limitations in this Clause shall apply to the extent permitted by law.</p>
                <p>If the Seller is held legally liable to the buyer, the liability (whether in contract, tort including negligence, equity, and statute or otherwise) is limited to:- Without prejudice to the effect or operation of any other clause herein contained, the aggregate liability of the Seller to the Buyer or its’ client for any loss or damage of whatsoever nature arising out of any breaches of this contract shall be limited to and shall not exceed a sum equal to the total price of the goods in question.</p>
                <p>and notwithstanding Clause a) above, to the extent permitted by law, in no event will the Seller or its affiliates, subcontractors or suppliers be liable for any of the following: –</p>
                <ul>
                  <li>damages for loss of data, or software restoration;</li>
                  <li>damages relating to buyers’ procurement of substitute products and/or services (i.e., “cost of cover”); or</li>
                  <li>downtime costs or lost profits, or any incidental, special or consequential damages.</li>
                </ul>
                <p>Insofar as it may appear to any court, arbitrator or tribunal that any term of these conditions which seeks to impose any restriction or limitation of liability of the part of the Seller to any specified sum or multiple of the price of the goods and to which the Unfair Contract Term Act 1977 applies does not satisfy the requirement of reasonableness, such restriction or limitation shall not be disregarded or treated as null and void or as having no application but shall be construed as if there were substituted therein such greater minimum specified sum or multiple of the price of the goods as would in the opinion of the court, arbitrator or tribunal be reasonable and shall be given effect accordingly.</p>
              </ContentSection>

              <ContentSection id="force_majeure" title="Force Majeure">
                <p>The Seller reserves the right to cancel, vary or suspend the operation of contract of sales if events occur which are in the nature of force majeure including but not limited to (and without prejudice to the generality of the foregoing) fire, floods, storm, plant breakdown, strikes, lock-outs, riots, hostilities, non-availability of materials or supplies or any other event outside the control of the Seller.</p>
                <p>The Seller shall not be held liable for any breach of contract resulting from such event.</p>
              </ContentSection>

              <ContentSection id="compliance" title="Compliance">
                <ul>
                  <li>By placing and order you accept these terms and conditions you agree that any products purchased from the Seller will be used as originally intended.</li>
                  <li>Your order is confirming that you are compliant and that your business conforms with all relevant local, national and international laws.</li>
                  <li>The Seller is governed by the policies and procedures of International law in relation to the movement and export of computer goods. It is therefore the Buyer’s responsibility to be aware of, obtain and comply with all relevant export controls and restrictions.</li>
                </ul>
              </ContentSection>

              <ContentSection id="cancellation" title="Cancellation">
                <p>The Seller may withhold or cancel further or any deliveries under the contract of sale and may recover all losses resulting therefrom if the Buyer:</p>
                <ul>
                  <li>Fails to make any payment on the due date under the contract with the Seller, or</li>
                  <li>Is in the reasonable view of the Seller insolvent, enters into a composition with its creditors or has a receiver appointed or passes a resolution for winding up or if a court shall order it to be wound up, or if it commits any act of bankruptcy or insolvency in any jurisdiction, or</li>
                  <li>Is in breach of any of the items and conditions contained herein not withstanding that on a former occasion it has waived its rights.</li>
                </ul>
                <p>The exercise of rights under this condition shall be without prejudice to the Seller’s other rights of remedies.</p>
              </ContentSection>

              <ContentSection id="law" title="Law and Jurisdiction">
                <p>These conditions of sale shall be construed and governed accordance with English Law and the parties agree to submit to the exclusive jurisdiction of the Courts of England.</p>
              </ContentSection>

              <ContentSection id="data" title="Data Sanitization Processes">
                <p>At our company, as part of our remanufacturing processes, we adhere to Data sanitisation standards as those required for International standards and applicable regulations. The emphasis is on secure and environmentally responsible handling of electronic devices, with a strong focus on data sanitization to protect sensitive information and prevent data breaches. All data-bearing media are properly cleared, purged, or physically destroyed in line with standards like NIST SP 800-88. Our data sanitization process is designed to meet rigorous standards, providing peace of mind for businesses and individuals disposing of IT assets.</p>
              </ContentSection>

              <ContentSection id="appendix1" title="Appendix 1. Credit Terms">
                <p>(by specified sales agreement between seller and buyer)</p>
                <h3>Title and Delivery</h3>
                <ul>
                  <li>Title of the goods will not pass to the buyer until payment has been completed. See Retention of Title (above)</li>
                  <li>Seller reserves the right to reclaim the goods after delivery payment is not made.</li>
                  <li>Delivery shipping terms for buyers with credit agreement will be Cost, Insurance and Freight (CIF).</li>
                </ul>
                <h3>Payment</h3>
                <ul>
                  <li>Payment is due with 30 (thirty) days of the invoice date.</li>
                  <li>Payment is to be made via direct bank transfer and funds will only be deemed to be received upon clearance into the Sellers bank account.</li>
                </ul>
                <h3>General</h3>
                <ul>
                  <li>The Buyer agrees that the Seller has the right to set Credit Limits on the Buyers account as they see fit and to without further credit at the Sellers discretion.</li>
                  <li>The Seller has the right at all times to terminate the Credit Terms with the buyer and allow no further purchases.</li>
                  <li>All Credit Terms should be read in conjunction with the Terms and Conditions of Sale.</li>
                </ul>
              </ContentSection>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
