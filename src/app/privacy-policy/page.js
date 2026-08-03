/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul>
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Enquiry details</li>
          <li>Appointment requests</li>
          <li>Any additional information you choose to share</li>
        </ul>
        <p>We may also collect limited technical information such as:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Website usage data</li>
          <li>Cookies and analytics information</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>The information we collect helps us to:</p>
        <ul>
          <li>Respond to your enquiries</li>
          <li>Schedule consultations and appointments</li>
          <li>Provide information about our jewellery and services</li>
          <li>Improve our website and customer experience</li>
          <li>Maintain customer records</li>
          <li>Communicate important updates when necessary</li>
          <li>Comply with applicable legal requirements</li>
        </ul>
        <p>We never collect more information than necessary for these purposes.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>Our website may use cookies to improve your browsing experience.</p>
        <p>Cookies help us:</p>
        <ul>
          <li>Understand website traffic</li>
          <li>Improve website performance</li>
          <li>Remember visitor preferences</li>
          <li>Enhance user experience</li>
        </ul>
        <p>You may disable cookies through your browser settings at any time.</p>
      </>
    ),
  },
  {
    id: "information-security",
    title: "Information Security",
    body: (
      <>
        <p>Protecting your information is important to us.</p>
        <p>We use appropriate technical and organisational measures to safeguard personal information from:</p>
        <ul>
          <li>Unauthorised access</li>
          <li>Misuse</li>
          <li>Loss</li>
          <li>Disclosure</li>
          <li>Alteration</li>
        </ul>
        <p>While we take reasonable precautions, no internet transmission or electronic storage method can be guaranteed to be completely secure.</p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: (
      <>
        <p>Our website may use trusted third-party services including:</p>
        <ul>
          <li>Google Analytics</li>
          <li>Google Maps</li>
          <li>Social media platforms</li>
          <li>Contact form providers</li>
        </ul>
        <p>These services may collect information according to their own privacy policies. We encourage you to review their policies separately.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    body: (
      <>
        <p>GR Jewellers does not sell, rent, or trade your personal information.</p>
        <p>We may share information only when:</p>
        <ul>
          <li>Required by law</li>
          <li>Necessary to protect legal rights</li>
          <li>Required to provide requested services through trusted partners</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: (
      <>
        <p>We retain personal information only for as long as necessary to:</p>
        <ul>
          <li>Respond to enquiries</li>
          <li>Maintain customer relationships</li>
          <li>Meet legal obligations</li>
          <li>Improve our services</li>
        </ul>
        <p>Information that is no longer required is securely deleted.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Depending on applicable laws, you may have the right to:</p>
        <ul>
          <li>Request access to your information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent where applicable</li>
          <li>Ask questions regarding your personal data</li>
        </ul>
        <p>To exercise these rights, please contact us using the details provided on our Contact page.</p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "External Links",
    body: (
      <>
        <p>Our website may contain links to external websites. GR Jewellers is not responsible for the privacy practices or content of third-party websites.</p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: (
      <>
        <p>Our website is intended for general audiences. We do not knowingly collect personal information from children without appropriate consent.</p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to this Privacy Policy",
    body: (
      <>
        <p>We may update this Privacy Policy from time to time. Changes will be published on this page with the updated effective date.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions regarding this Privacy Policy or how your information is handled, please contact GR Jewellers through the contact details available on our Contact page.</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
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
              <span className="text-[#1B4341] font-semibold">Privacy Policy</span>
            </nav>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={100}>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#1B4341] bg-[#EADFC9]/60 px-4 py-2 rounded-full inline-block mb-6 shadow-sm">
              Legal
            </span>
          </RevealOnScroll>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#1B4341] leading-[1.1] tracking-tight max-w-3xl">
            <TextSplitReveal text="Privacy Policy" type="words" delay={200} />
          </h1>

          <RevealOnScroll mode="fade-in-up" delay={500}>
            <p className="mt-6 text-sm sm:text-base text-[#666] font-light max-w-xl leading-relaxed">
              At GR Jewellers, we value your privacy and are committed to protecting the
              personal information you share with us. This Privacy Policy explains how we
              collect, use, store, and protect your information when you visit our website or
              contact our team. By using our website, you agree to the practices described
              below.
            </p>
            <span className="block mt-6 text-[11px] uppercase tracking-widest text-[#777]">
              Effective Date: August 01, 2026
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
                  <div className="policy-copy text-sm sm:text-base text-[#666] font-light leading-relaxed space-y-3">
                    {s.body}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .policy-copy ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0;
        }
        .policy-copy li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.4rem;
        }
        .policy-copy li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background-color: #1b4341;
        }
      `}</style>
    </section>
  );
}