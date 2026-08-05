/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const sections = [
  {
    id: "website-use",
    title: "Website Use",
    body: (
      <>
        <p>You agree to use this website only for lawful purposes.</p>
        <p>You must not:</p>
        <ul>
          <li>Misuse the website</li>
          <li>Attempt unauthorised access</li>
          <li>Upload malicious software</li>
          <li>Interfere with website functionality</li>
          <li>Copy or misuse website content without permission</li>
        </ul>
      </>
    ),
  },
  {
    id: "jewellery-information",
    title: "Jewellery Information",
    body: (
      <>
        <p>We strive to ensure that all information presented on our website is accurate. However:</p>
        <ul>
          <li>Product images are for illustrative purposes.</li>
          <li>Colours may vary depending on screen settings.</li>
          <li>Handmade jewellery may have slight variations.</li>
          <li>Availability of products and services may change without notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: "custom-jewellery",
    title: "Custom Jewellery",
    body: (
      <>
        <p>GR Jewellers specialises in bespoke and personalised jewellery. Please note:</p>
        <ul>
          <li>Custom designs are created according to individual requirements.</li>
          <li>Design discussions and approvals take place before production.</li>
          <li>Production timelines may vary depending on design complexity.</li>
          <li>Certain materials or gemstones may be subject to availability.</li>
        </ul>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    body: (
      <>
        <p>Prices displayed on the website, if any, are subject to change without prior notice. A final quotation will be provided after discussing your jewellery requirements.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>All website content, including:</p>
        <ul>
          <li>Logos</li>
          <li>Images</li>
          <li>Graphics</li>
          <li>Text</li>
          <li>Layout</li>
          <li>Designs</li>
          <li>Branding</li>
        </ul>
        <p>is the intellectual property of GR Jewellers unless otherwise stated. No material may be copied, reproduced, distributed, or modified without written permission.</p>
      </>
    ),
  },
  {
    id: "appointments",
    title: "Appointments",
    body: (
      <>
        <p>Consultations may be booked through our website or by contacting our showroom. Appointment availability may vary. GR Jewellers reserves the right to reschedule appointments when necessary.</p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <>
        <p>This website may contain links to third-party websites. These links are provided for convenience only. GR Jewellers does not control or endorse third-party content.</p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>While every effort is made to maintain accurate information, GR Jewellers shall not be liable for:</p>
        <ul>
          <li>Website interruptions</li>
          <li>Technical errors</li>
          <li>Temporary unavailability</li>
          <li>Typographical mistakes</li>
          <li>Indirect or consequential damages arising from website use</li>
        </ul>
        <p>Use of the website is at your own discretion.</p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    body: (
      <>
        <p>Users agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the website responsibly</li>
          <li>Respect intellectual property rights</li>
          <li>Avoid activities that may harm the website or other users</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes-to-services",
    title: "Changes to Services",
    body: (
      <>
        <p>GR Jewellers reserves the right to:</p>
        <ul>
          <li>Modify website content</li>
          <li>Update services</li>
          <li>Change product information</li>
          <li>Revise pricing</li>
          <li>Improve website functionality</li>
        </ul>
        <p>without prior notice.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <>
        <p>These Terms & Conditions shall be governed by the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of the appropriate courts in Anand, Gujarat.</p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    body: (
      <>
        <p>GR Jewellers may revise these Terms & Conditions at any time. Updated versions will be published on this page with the revised effective date.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions regarding these Terms & Conditions, please contact GR Jewellers using the information available on our Contact page.</p>
      </>
    ),
  },
];

export default function TermsConditions() {
  return (
    <section className="bg-[#FBF8F3]">
      {/* Hero */}
      <div className="relative overflow-hidden pt-6 pb-16 sm:pb-20">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#EADFC9]/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <RevealOnScroll mode="fade-in-up">
            <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#1B4341]/70 mb-10 sm:mb-14">
              <Link href="/" className="hover:text-[#1B4341] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#1B4341] font-semibold">Terms &amp; Conditions</span>
            </nav>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={100}>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#1B4341] bg-[#EADFC9]/60 px-4 py-2 rounded-full inline-block mb-6 shadow-sm">
              Legal
            </span>
          </RevealOnScroll>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#1B4341] leading-[1.1] tracking-tight max-w-3xl">
            <TextSplitReveal text="Terms & Conditions" type="words" delay={200} />
          </h1>

          <RevealOnScroll mode="fade-in-up" delay={500}>
            <p className="mt-6 text-sm sm:text-base text-[#666] font-light max-w-xl leading-relaxed">
              Welcome to the GR Jewellers website. By accessing or using this website, you agree
              to comply with these Terms &amp; Conditions. If you do not agree with these terms,
              please discontinue use of the website.
            </p>
            <span className="block mt-6 text-[11px] uppercase tracking-widest text-[#777]">
              Effective Date: July 31, 2026
            </span>
          </RevealOnScroll>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-[#EADFC9] pt-16">
          {/* Sticky TOC */}
          <div className="lg:col-span-4">
            <RevealOnScroll mode="fade-in-up" className="lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4341] block mb-6">
                On This Page
              </span>
              <ul className="space-y-3 border-l border-[#EADFC9] pl-5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-[#666] hover:text-[#1B4341] font-light transition-colors leading-snug block"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Sections */}
          <div className="lg:col-span-8 space-y-16">
            {sections.map((s, idx) => (
              <RevealOnScroll key={s.id} mode="fade-in-up" delay={Math.min(idx * 60, 300)}>
                <div id={s.id} className="scroll-mt-32 border-l-2 border-[#1B4341] pl-6 py-1">
                  <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1B4341] mb-4">
                    {s.title}
                  </h2>
                  <div className="policy-copy text-sm sm:text-base text-[#666] font-light leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:marker:text-[#1B4341]">
                    {s.body}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

