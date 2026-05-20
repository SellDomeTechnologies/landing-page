import React from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import styles from './TermsAndConditions.module.css';

function PrivacyPolicy() {
  return (
    <>
      <PageNav />
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p>
          Last updated: January 1, 2025
        </p>
        <p>
          Selldome Technologies Limited ("Company", "we", "our", "us") is committed to protecting
          your personal information and your right to privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use our platform,
          including our website and mobile application ("Service").
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue
          use of our Service.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information in the following ways:</p>
          <p><strong>Information you provide directly:</strong></p>
          <ul>
            <li>Full name, email address, phone number, and password when you register</li>
            <li>Identity verification documents (ID card, proof of address) for KYC purposes</li>
            <li>Profile information such as profile photo, bio, and store details</li>
            <li>Communications you send us, including support requests and feedback</li>
          </ul>
          <p><strong>Information collected automatically:</strong></p>
          <ul>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Log data (IP address, browser type, pages visited, time and date of visits)</li>
            <li>Location data (if you grant permission)</li>
            <li>Usage data (features used, items viewed, search queries, transaction history)</li>
            <li>Cookies</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Process transactions and send related information (receipts, confirmations)</li>
            <li>Facilitate communication between buyers and vendors</li>
            <li>Verify your identity and comply with KYC/AML regulations</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>Monitor and analyze usage patterns to improve our Service</li>
            <li>Detect, prevent, and address fraud, security issues, and abuse</li>
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms and Conditions</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
          <p>We may share your information with:</p>
          <p><strong>Vendors and Buyers:</strong> When you make or receive a purchase, relevant
          transaction details are shared between the buyer and vendor to fulfil the order.</p>
          <p><strong>Service Providers:</strong> We share information with trusted third-party
          providers who assist us in operating our platform, including payment processors, cloud
          hosting providers, analytics services, and customer support tools. These providers are
          contractually obligated to keep your information confidential.</p>
          <p><strong>Regulatory Authorities:</strong> We may disclose your information to government
          bodies, law enforcement, or regulatory agencies when required by law or to protect our
          legal rights.</p>
          <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
          assets, your information may be transferred as part of that transaction.</p>
          <p>We do not sell your personal data to third parties for their own marketing purposes.</p>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our
            platform. Cookies are small data files stored on your device that help us remember your
            preferences, keep you logged in, and understand how you use our Service.
          </p>
          <p>Types of cookies we use:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the platform to function properly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how users interact with our Service</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p>
            You can control cookie settings through your browser. However, disabling certain cookies
            may affect the functionality of our Service.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal information for as long as your account is active or as needed
            to provide our services. We may also retain certain information for legitimate business
            purposes such as legal compliance, dispute resolution, and fraud prevention, even after
            account closure.
          </p>
          <p>
            When your data is no longer needed, we will securely delete or anonymize it in
            accordance with applicable laws.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We implement industry-standard security measures to protect your personal information,
            including encryption in transit (TLS/HTTPS), secure storage, and access controls
            limiting who can view your data within our organization.
          </p>
          <p>
            However, no method of transmission over the internet or electronic storage is 100%
            secure. While we strive to protect your information, we cannot guarantee absolute
            security. You are responsible for keeping your account credentials confidential.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you may have the following rights regarding your data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Objection:</strong> Object to certain types of data processing</li>
            <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:support@selldome.africa">support@selldome.africa</a>. We will respond
            within 30 days.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            Our Service is not directed to individuals under the age of 18. We do not knowingly
            collect personal information from minors. If you believe we have inadvertently collected
            information from a minor, please contact us immediately and we will take steps to delete
            such information.
          </p>
        </Section>

        <Section title="9. Third-Party Links">
          <p>
            Our Service may contain links to third-party websites or services. We are not
            responsible for the privacy practices of those third parties. We encourage you to review
            the privacy policies of any external sites you visit.
          </p>
        </Section>

        <Section title="10. International Data Transfers">
          <p>
            Your information may be transferred to and processed in countries other than Nigeria,
            where data protection laws may differ. Where such transfers occur, we ensure appropriate
            safeguards are in place to protect your data in accordance with this Privacy Policy.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            "Last updated" date at the top of this page and, where appropriate, notify you by email
            or through a notice on our platform. Your continued use of our Service after any changes
            constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how
            we handle your data, please contact us:
          </p>
          <ul>
            <li>Support: <a href="mailto:support@selldome.africa">support@selldome.africa</a></li>
            <li>Company: Selldome Technologies Limited, Lagos, Nigeria</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default PrivacyPolicy;