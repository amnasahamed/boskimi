import type { ReactNode } from "react"
import Link from "next/link"
import { ConstellationNav } from "@/components/landing/constellation-nav"
import { CosmicFooter } from "@/components/landing/cosmic-footer"
import { siteConfig } from "@/lib/site"

const LAST_UPDATED = "21 November 2026"
const CONTACT_EMAIL = siteConfig.email

const sections = [
  { id: "acceptance", title: "1. Acceptance of these terms" },
  { id: "services", title: "2. Our services" },
  { id: "accounts", title: "3. Accounts and eligibility" },
  { id: "whatsapp", title: "4. WhatsApp Business Platform" },
  { id: "acceptable-use", title: "5. Acceptable use" },
  { id: "client-data", title: "6. Client data and privacy" },
  { id: "ai", title: "7. AI features" },
  { id: "fees", title: "8. Fees and payment" },
  { id: "ip", title: "9. Intellectual property" },
  { id: "third-party", title: "10. Third-party services" },
  { id: "termination", title: "11. Suspension and termination" },
  { id: "disclaimers", title: "12. Disclaimers" },
  { id: "liability", title: "13. Limitation of liability" },
  { id: "indemnity", title: "14. Indemnity" },
  { id: "law", title: "15. Governing law and disputes" },
  { id: "changes", title: "16. Changes to these terms" },
  { id: "contact", title: "17. Contact" },
]

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  )
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
    {children}
  </a>
)

const Mail = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-4">
    {CONTACT_EMAIL}
  </a>
)

const PrivacyLink = () => (
  <Link href="/privacy-policy" className="text-primary underline underline-offset-4">
    Privacy Policy
  </Link>
)

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ConstellationNav />

      <div className="container-wide pt-32 md:pt-40 pb-24">
        <header className="max-w-3xl mb-12">
          <p className="mono-label text-muted-foreground mb-4">Legal</p>
          <h1 className="heading-editorial mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <nav aria-label="Contents" className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-2 text-sm">
              <p className="mono-label text-muted-foreground mb-3">Contents</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </nav>

          <article className="lg:col-span-9 max-w-3xl space-y-12">
            <p className="text-lg text-foreground leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website at{" "}
              {siteConfig.url.replace(/^https?:\/\//, "")} (the &ldquo;Website&rdquo;) and the products and services
              provided by {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;),
              including our WhatsApp Business Platform solutions, AI agents, workflow automation, web and app
              development and consulting (together, the &ldquo;Services&rdquo;).
            </p>

            <Section id="acceptance" title={sections[0].title}>
              <p>
                By accessing the Website or using the Services, you agree to these Terms and to our{" "}
                <PrivacyLink />. If you use the Services on behalf of a business, you confirm that you are
                authorised to bind that business, and &ldquo;you&rdquo; or &ldquo;Client&rdquo; refers to that business. If you
                do not agree, do not use the Services.
              </p>
              <p>
                Where we have signed a separate written agreement, proposal or statement of work with you, that
                agreement will prevail over these Terms to the extent of any conflict.
              </p>
            </Section>

            <Section id="services" title={sections[1].title}>
              <p>
                We provide software and professional services that help businesses automate operations and
                communicate with their customers. The specific scope, deliverables and service levels for each
                Client are set out in the applicable order, proposal or plan. We may improve, change or
                discontinue features from time to time, and will give reasonable notice of material changes
                that negatively affect paid Services.
              </p>
            </Section>

            <Section id="accounts" title={sections[2].title}>
              <List
                items={[
                  "You must be at least 18 years old and able to enter into a binding contract to use the Services.",
                  "You must provide accurate, complete information and keep it up to date.",
                  "You are responsible for keeping your login credentials and access tokens confidential, and for all activity under your account.",
                  "Notify us immediately at the email below if you suspect unauthorised access to your account.",
                ]}
              />
            </Section>

            <Section id="whatsapp" title={sections[3].title}>
              <p>
                As a Tech Provider, we let Clients connect their own WhatsApp Business Accounts to our Services
                through the WhatsApp Business Platform operated by Meta Platforms, Inc. and its affiliates
                (&ldquo;Meta&rdquo;). If you use our WhatsApp Services, you agree that:
              </p>
              <List
                items={[
                  <>
                    You will comply with the{" "}
                    <ExtLink href="https://www.whatsapp.com/legal/business-terms/">WhatsApp Business Terms of Service</ExtLink>,{" "}
                    <ExtLink href="https://www.whatsapp.com/legal/business-policy/">WhatsApp Business Messaging Policy</ExtLink>,{" "}
                    <ExtLink href="https://www.whatsapp.com/legal/commerce-policy/">WhatsApp Commerce Policy</ExtLink> and
                    any other applicable Meta terms and policies, as updated from time to time.
                  </>,
                  "You own and are responsible for your WhatsApp Business Account, phone numbers, display name, business verification and message templates.",
                  "You will only message people who have given you valid opt-in consent to receive WhatsApp messages from your business, and you will promptly honour opt-out requests.",
                  "You are responsible for the content of all messages sent through your account and for the accuracy of information you provide to end users.",
                  "Meta charges for conversations or messages according to its pricing. Unless your plan states otherwise, these Meta fees are billed to you directly by Meta or passed through to you at cost.",
                  "Meta may restrict, suspend or ban a WhatsApp Business Account or phone number at its discretion (for example, due to quality ratings or policy violations). We are not responsible for Meta’s decisions, but will reasonably help you understand and respond to them.",
                  "You may disconnect your WhatsApp Business Account from our Services at any time. On disconnection, we will stop accessing your account and handle your data as described in our Privacy Policy.",
                ]}
              />
            </Section>

            <Section id="acceptable-use" title={sections[4].title}>
              <p>You must not use the Services to:</p>
              <List
                items={[
                  "Send spam, unsolicited bulk messages or messages to people who have not opted in.",
                  "Send content that is unlawful, fraudulent, deceptive, harassing, hateful, sexually explicit, or that infringes anyone’s rights.",
                  "Promote or sell products and services prohibited by the WhatsApp Commerce Policy, such as illegal drugs, weapons, adult content, gambling (where prohibited) or counterfeit goods.",
                  "Collect sensitive data (such as full payment card numbers, government ID numbers or passwords) through messages except as permitted by law and Meta policies.",
                  "Impersonate any person or business, or misrepresent your affiliation.",
                  "Interfere with, reverse engineer, overload or attempt to gain unauthorised access to the Services or any related systems.",
                  "Violate any applicable law, including telecommunications, consumer protection, data protection and anti-spam laws.",
                ]}
              />
              <p>
                We may investigate suspected violations and remove content, suspend messaging or take other
                appropriate action.
              </p>
            </Section>

            <Section id="client-data" title={sections[5].title}>
              <p>
                You retain all rights to the data and content you or your end users submit through the Services
                (&ldquo;Client Data&rdquo;). You grant us a limited licence to host, process, transmit and display Client
                Data only as needed to provide, secure and support the Services and as described in our{" "}
                <PrivacyLink />. We act as your data processor for end-user data, and you are responsible for
                having a lawful basis and appropriate notices to share that data with us. We will not sell Client
                Data or use it for advertising.
              </p>
            </Section>

            <Section id="ai" title={sections[6].title}>
              <p>
                Some Services use artificial intelligence to generate responses, classify messages or automate
                tasks. AI output may be inaccurate or incomplete. You are responsible for configuring, reviewing
                and supervising AI features, for making clear to end users when they are interacting with an
                automated system where required, and for providing a way to reach a human for matters that need
                one. Do not rely on AI output for medical, legal, financial or other high-risk decisions without
                appropriate human review.
              </p>
            </Section>

            <Section id="fees" title={sections[7].title}>
              <List
                items={[
                  "Fees for the Services are set out in your plan, proposal or invoice. Unless stated otherwise, fees are in Indian Rupees (INR) or the currency shown on the invoice, and exclude applicable taxes such as GST.",
                  "Invoices are payable within the period stated on the invoice. We may suspend Services for overdue amounts after giving reasonable notice.",
                  "Subscription fees are billed in advance and are non-refundable except where required by law or stated in your agreement.",
                  "Third-party charges, including Meta messaging fees and AI usage costs, are your responsibility unless included in your plan.",
                ]}
              />
            </Section>

            <Section id="ip" title={sections[8].title}>
              <p>
                We and our licensors own all rights in the Website, the Services, our software, templates, know-how
                and branding. Subject to these Terms and payment of fees, we grant you a limited, non-exclusive,
                non-transferable right to use the Services for your internal business purposes during your
                subscription. Ownership of custom deliverables created specifically for you is set out in your
                proposal or statement of work. If you send us feedback, we may use it without obligation to you.
              </p>
            </Section>

            <Section id="third-party" title={sections[9].title}>
              <p>
                The Services integrate with third-party services such as Meta/WhatsApp, cloud hosting, payment
                gateways, CRMs and AI model providers. Your use of those services is governed by their own terms,
                and we are not responsible for their availability, changes or actions.
              </p>
            </Section>

            <Section id="termination" title={sections[10].title}>
              <List
                items={[
                  "You may stop using the Services at any time, subject to any minimum term in your agreement.",
                  "We may suspend or terminate your access immediately if you materially breach these Terms, violate Meta or WhatsApp policies, fail to pay fees, or if required by law or by Meta.",
                  "On termination, your right to use the Services ends. We will make your Client Data available for export for 30 days on request, after which it will be deleted as described in our Privacy Policy.",
                  "Sections that by their nature should survive termination (including fees owed, intellectual property, disclaimers, limitation of liability, indemnity and governing law) will survive.",
                ]}
              />
            </Section>

            <Section id="disclaimers" title={sections[11].title}>
              <p>
                Except as expressly stated in a written agreement, the Services are provided &ldquo;as is&rdquo; and
                &ldquo;as available&rdquo;. To the fullest extent permitted by law, we disclaim all implied warranties,
                including merchantability, fitness for a particular purpose and non-infringement. We do not
                guarantee that the Services will be uninterrupted or error-free, or that messages will be delivered,
                since delivery depends on Meta, mobile networks and end users&rsquo; devices.
              </p>
            </Section>

            <Section id="liability" title={sections[12].title}>
              <p>
                To the fullest extent permitted by law, {siteConfig.legalName} will not be liable for any indirect,
                incidental, special, consequential or punitive damages, or for loss of profits, revenue, data or
                goodwill. Our total liability arising out of or relating to the Services in any 12-month period is
                limited to the fees you paid us for the Services in the 12 months before the event giving rise to
                the claim. Nothing in these Terms limits liability that cannot be limited under applicable law.
              </p>
            </Section>

            <Section id="indemnity" title={sections[13].title}>
              <p>
                You agree to indemnify and hold harmless {siteConfig.legalName}, its partners and team from any claims, losses
                and expenses (including reasonable legal fees) arising from your Client Data, the messages you send,
                your breach of these Terms, or your violation of any law or third-party rights, including Meta and
                WhatsApp policies.
              </p>
            </Section>

            <Section id="law" title={sections[14].title}>
              <p>
                These Terms are governed by the laws of India. Before starting any formal proceedings, both parties
                will try in good faith to resolve disputes informally within 30 days of written notice. Subject to
                that, the courts at Kozhikode, Kerala, India shall have exclusive jurisdiction over any dispute arising out of these
                Terms.
              </p>
            </Section>

            <Section id="changes" title={sections[15].title}>
              <p>
                We may update these Terms from time to time. We will post the updated version on this page and
                change the &ldquo;Last updated&rdquo; date, and notify Clients by email of material changes. Continued use of
                the Services after changes take effect means you accept the updated Terms.
              </p>
            </Section>

            <Section id="contact" title={sections[16].title}>
              <p>Questions about these Terms can be sent to:</p>
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 space-y-1 text-foreground">
                <p className="font-medium">{siteConfig.legalName}</p>
                {siteConfig.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  Email: <Mail />
                </p>
              </div>
            </Section>
          </article>
        </div>
      </div>

      <CosmicFooter />
    </main>
  )
}
