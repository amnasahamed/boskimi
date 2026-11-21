import type { ReactNode } from "react"
import { ConstellationNav } from "@/components/landing/constellation-nav"
import { CosmicFooter } from "@/components/landing/cosmic-footer"
import { siteConfig } from "@/lib/site"

const LAST_UPDATED = "21 November 2026"
const CONTACT_EMAIL = siteConfig.email

const sections = [
  { id: "who-we-are", title: "1. Who we are" },
  { id: "scope", title: "2. Scope of this policy" },
  { id: "data-we-collect", title: "3. Information we collect" },
  { id: "whatsapp", title: "4. WhatsApp Business Platform data" },
  { id: "how-we-use", title: "5. How we use information" },
  { id: "legal-basis", title: "6. Legal basis for processing" },
  { id: "sharing", title: "7. How we share information" },
  { id: "retention", title: "8. Data retention" },
  { id: "data-deletion", title: "9. Data deletion instructions" },
  { id: "security", title: "10. Security" },
  { id: "transfers", title: "11. International transfers" },
  { id: "your-rights", title: "12. Your rights" },
  { id: "cookies", title: "13. Cookies and analytics" },
  { id: "children", title: "14. Children" },
  { id: "changes", title: "15. Changes to this policy" },
  { id: "contact", title: "16. Contact and grievance officer" },
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

const Mail = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-4">
    {CONTACT_EMAIL}
  </a>
)

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ConstellationNav />

      <div className="container-wide pt-32 md:pt-40 pb-24">
        <header className="max-w-3xl mb-12">
          <p className="mono-label text-muted-foreground mb-4">Legal</p>
          <h1 className="heading-editorial mb-6">Privacy Policy</h1>
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
              This Privacy Policy explains how {siteConfig.legalName} (&ldquo;{siteConfig.name}&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, shares and protects
              personal information when you visit {siteConfig.url.replace(/^https?:\/\//, "")} (the
              &ldquo;Website&rdquo;) or use our services, including our WhatsApp Business Platform
              messaging solutions, AI agents and workflow automation (together, the &ldquo;Services&rdquo;).
            </p>

            <Section id="who-we-are" title={sections[0].title}>
              <p>
                {siteConfig.legalName} is a limited liability partnership incorporated in India, with its
                registered office at {siteConfig.address.join(", ")}. We build AI solutions,
                workflow automation and business messaging solutions. For the WhatsApp Business
                Platform, we act as a Tech Provider: we help businesses (&ldquo;Clients&rdquo;) connect their
                WhatsApp Business Accounts to our software so they can send and receive messages with
                their own customers.
              </p>
              <p>
                You can contact us about anything in this policy at <Mail />.
              </p>
            </Section>

            <Section id="scope" title={sections[1].title}>
              <p>This policy applies to:</p>
              <List
                items={[
                  "Visitors to our Website.",
                  "Clients and their authorised users who sign up for or use our Services.",
                  "End users who exchange WhatsApp messages with a Client through our Services.",
                ]}
              />
              <p>
                When we process end users&rsquo; data on behalf of a Client, the Client is the data
                controller (or &ldquo;data fiduciary&rdquo;) and we act as a data processor. In that case, the
                Client&rsquo;s own privacy policy also applies, and requests about that data should
                ideally be sent to the Client. We will assist the Client in responding.
              </p>
            </Section>

            <Section id="data-we-collect" title={sections[2].title}>
              <p className="text-foreground font-medium">Information you give us</p>
              <List
                items={[
                  "Contact details such as name, email address, phone number, company name and job title, submitted through forms, email or WhatsApp.",
                  "Account and billing information when you become a Client.",
                  "Content of communications you send to us, including support requests.",
                  "Job application details (CV, portfolio links) if you apply for a role.",
                ]}
              />
              <p className="text-foreground font-medium">Information collected automatically</p>
              <List
                items={[
                  "Device and usage data such as IP address, browser type, pages viewed, referring URL and approximate location, collected through server logs and privacy-friendly analytics.",
                ]}
              />
              <p className="text-foreground font-medium">Information from Meta and other third parties</p>
              <List
                items={[
                  "When a Client connects WhatsApp through Meta’s Embedded Signup, we receive business information from Meta, such as the WhatsApp Business Account ID, phone number ID, display name, business verification status and access tokens needed to operate the integration.",
                  "Data received from other integrations a Client chooses to connect (for example, a CRM or e-commerce platform).",
                ]}
              />
            </Section>

            <Section id="whatsapp" title={sections[3].title}>
              <p>
                When a Client uses our Services with the WhatsApp Business Platform (Cloud API) provided
                by Meta Platforms, Inc. and its affiliates (&ldquo;Meta&rdquo;), we may process the following on
                the Client&rsquo;s behalf:
              </p>
              <List
                items={[
                  "End user WhatsApp phone numbers, profile names and WhatsApp IDs.",
                  "Message content (text, images, documents, audio, video, location and interactive replies) sent and received through the Client’s WhatsApp Business Account.",
                  "Message metadata such as timestamps, delivery and read statuses, and template information.",
                  "Opt-in and opt-out records, and conversation labels or notes added by the Client.",
                ]}
              />
              <p>We use this data only to:</p>
              <List
                items={[
                  "Deliver, receive, store and display messages for the Client.",
                  "Run automations, chatbots and AI agents that the Client has configured.",
                  "Provide analytics and reporting to the Client.",
                  "Maintain security, prevent abuse and comply with law and Meta’s policies.",
                ]}
              />
              <p>
                We do <strong className="text-foreground">not</strong> sell WhatsApp data, use it for our own
                advertising, share it with data brokers, or use it to build profiles of end users for any
                purpose other than providing the Services to the Client. We comply with the{" "}
                <a
                  href="https://www.whatsapp.com/legal/business-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  WhatsApp Business Messaging Policy
                </a>
                , the{" "}
                <a
                  href="https://developers.facebook.com/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  Meta Platform Terms
                </a>{" "}
                and the{" "}
                <a
                  href="https://developers.facebook.com/devpolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  Meta Developer Policies
                </a>
                . Clients are responsible for obtaining valid opt-in consent from end users before
                messaging them.
              </p>
              <p>
                Messages sent through WhatsApp are also processed by Meta under its own terms and
                privacy policy. Where a Client enables AI features, message content may be processed by
                our AI model providers solely to generate responses for that Client, under contracts that
                prohibit them from using the data to train their models.
              </p>
            </Section>

            <Section id="how-we-use" title={sections[4].title}>
              <List
                items={[
                  "To provide, operate, maintain and improve the Services.",
                  "To respond to enquiries and provide customer support.",
                  "To manage accounts, billing and contracts.",
                  "To send service-related notices and, where you have agreed, marketing communications (you can opt out at any time).",
                  "To monitor and protect the security and integrity of our systems.",
                  "To comply with legal obligations and enforce our agreements.",
                ]}
              />
            </Section>

            <Section id="legal-basis" title={sections[5].title}>
              <p>
                We process personal data on the basis of your consent, to perform a contract with you or
                a Client, to comply with legal obligations, or for our legitimate interests (such as
                securing our Services), as permitted under the Digital Personal Data Protection Act, 2023
                (India), the Information Technology Act, 2000, and, where applicable, the EU/UK GDPR.
              </p>
            </Section>

            <Section id="sharing" title={sections[6].title}>
              <p>We share personal information only as follows:</p>
              <List
                items={[
                  "With the Client on whose behalf we process the data.",
                  "With Meta, to send and receive messages through the WhatsApp Business Platform.",
                  "With trusted service providers who help us run the Services (for example, cloud hosting, databases, email delivery, AI model providers and payment processors), under contractual confidentiality and data protection obligations.",
                  "When required by law, court order or government request, or to protect the rights, property or safety of us, our Clients or others.",
                  "In connection with a merger, acquisition or sale of assets, subject to this policy.",
                ]}
              />
              <p>We do not sell personal information.</p>
            </Section>

            <Section id="retention" title={sections[7].title}>
              <p>
                We keep personal information only as long as needed for the purposes described above.
                WhatsApp messages and related data processed for a Client are retained for the duration
                of our agreement with that Client, or a shorter period configured by the Client, and are
                deleted or returned within 30 days after the Client disconnects their WhatsApp Business
                Account or terminates the Services, unless a longer period is required by law.
              </p>
            </Section>

            <Section id="data-deletion" title={sections[8].title}>
              <p>You can ask us to delete your personal data at any time:</p>
              <List
                items={[
                  <>
                    Email <Mail /> with the subject &ldquo;Data Deletion Request&rdquo;, including your name and
                    the email address or WhatsApp phone number associated with your data.
                  </>,
                  "Clients can also disconnect their WhatsApp Business Account from our Services, or request deletion of all account data, from their account settings or by email.",
                  "End users of a Client can request deletion directly from that business, or contact us and we will coordinate with the Client.",
                ]}
              />
              <p>
                We will confirm receipt within 7 days and complete deletion within 30 days, except for
                information we must keep to comply with legal obligations, resolve disputes or enforce our
                agreements.
              </p>
            </Section>

            <Section id="security" title={sections[9].title}>
              <p>
                We use reasonable technical and organisational measures to protect personal information,
                including encryption in transit (TLS), encryption of access tokens at rest, access controls
                based on least privilege, and monitoring of our systems. No method of transmission or
                storage is completely secure, but we work to protect your data and will notify affected
                parties and authorities of a personal data breach as required by law.
              </p>
            </Section>

            <Section id="transfers" title={sections[10].title}>
              <p>
                Our service providers, including Meta, may process data in countries outside India. Where
                we transfer personal data internationally, we take steps to ensure it receives an adequate
                level of protection, consistent with applicable law.
              </p>
            </Section>

            <Section id="your-rights" title={sections[11].title}>
              <p>Depending on where you live, you may have the right to:</p>
              <List
                items={[
                  "Access the personal data we hold about you and obtain a summary of how it is processed.",
                  "Correct, complete or update inaccurate personal data.",
                  "Request deletion of your personal data.",
                  "Withdraw consent at any time (this does not affect processing already carried out).",
                  "Object to or restrict certain processing, and request data portability.",
                  "Nominate another person to exercise your rights in the event of death or incapacity.",
                  "Raise a grievance with us, and lodge a complaint with the Data Protection Board of India or your local supervisory authority.",
                ]}
              />
              <p>
                To opt out of WhatsApp messages from a business, reply &ldquo;STOP&rdquo; to that business or block it
                in WhatsApp. To exercise any other right, email <Mail />.
              </p>
            </Section>

            <Section id="cookies" title={sections[12].title}>
              <p>
                Our Website uses essential cookies needed for it to function and privacy-friendly analytics
                (Vercel Analytics) that measure aggregated page views without using advertising cookies. You
                can control cookies through your browser settings.
              </p>
            </Section>

            <Section id="children" title={sections[13].title}>
              <p>
                Our Services are intended for businesses and are not directed to children under 18. We do
                not knowingly collect personal data from children. If you believe a child has provided us
                with personal data, please contact us and we will delete it.
              </p>
            </Section>

            <Section id="changes" title={sections[14].title}>
              <p>
                We may update this policy from time to time. We will post the updated version on this page
                and change the &ldquo;Last updated&rdquo; date. For material changes, we will notify Clients by email.
              </p>
            </Section>

            <Section id="contact" title={sections[15].title}>
              <p>
                If you have questions, requests or complaints about this policy or our handling of personal
                data, please contact our Grievance Officer:
              </p>
              <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 space-y-1 text-foreground">
                <p className="font-medium">{siteConfig.legalName}</p>
                <p>Attn: Grievance Officer</p>
                {siteConfig.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  Email: <Mail />
                </p>
              </div>
              <p>We aim to respond to all requests within 30 days.</p>
            </Section>
          </article>
        </div>
      </div>

      <CosmicFooter />
    </main>
  )
}
