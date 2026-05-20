import React from 'react';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import styles from './TermsAndConditions.module.css';

function TermsAndConditions() {
  return (
    <>
      <PageNav />
      <main className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <p>Welcome to Selldome Technologies Limited ("Company", "we", "our", "us")!</p>
        <p>
          By accessing or using SellDome's platform, including our web pages and mobile application
          ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). These Terms
          govern your use of our Service, which is operated by SellDome Technology Limited.
        </p>
        <p>
          By using our Service, you acknowledge that you have read, understood, and agreed to be
          bound by both the Terms and the Privacy Policy ("Agreements").
        </p>

        <Section title="2. Communication">
          <p>
            By creating an account on our platform, you consent to receive newsletters, marketing
            updates, promotional content, and other communications from us. However, you can choose
            to opt out of these communications at any time by clicking the unsubscribe link in any
            email or contacting us directly.
          </p>
        </Section>

        <Section title="3. Purchase">
          <p>
            If you wish to make a purchase through our platform, you may be required to provide
            certain information, such as your credit card details, billing address, and shipping
            information. You confirm that you have the legal right to use the provided payment method
            and that all the information you submit is accurate and complete. We may use third-party
            services to process payments, and by submitting your details, you authorize us to share
            this information with them in line with our Privacy Policy.
          </p>
          <p>
            We reserve the right to cancel or refuse any order due to issues such as product
            availability, pricing errors, or concerns of fraud or illegal activity. Please note that
            processing fees are non-refundable, and all sales are final.
          </p>
        </Section>

        <Section title="4. Code of Conduct">
          <p>
            The SellDome platform maintains a strict Code of Conduct, requiring users to follow all
            applicable laws and regulations. Illegal activities, fraud, spamming, and the use of
            malicious software are strictly prohibited. Users are expected to respect others, avoid
            impersonation, and refrain from gathering personal information beyond permitted uses.
            Additionally, data mining and any activities outside the platform's intended purposes are
            not allowed.
          </p>
          <p>
            SellDome reserves the right to take action, including account deletion, for any
            violations, which will be determined at its sole discretion.
          </p>
        </Section>

        <Section title="5. Billings, Credit Points and Subscription">
          <p>
            Certain services are offered through a credit points model, billed per use. Additionally,
            certain parts of the Service are available through a subscription model, billed on a
            recurring basis ("Billing Cycle"), which can be monthly or annually, depending on your
            selected plan.
          </p>
          <p>
            For credit points, users will be billed each time they utilize a service covered by the
            credit model, with the required points being deducted accordingly.
          </p>
          <p>
            Your subscription will automatically renew at the end of each Billing Cycle under the
            same terms, unless you cancel it through your account settings or by contacting SellDome
            Technology Limited. We require a valid payment method (debit/credit card) and accurate
            billing information. By providing this information, you authorize SellDome Technology
            Limited to charge the subscription fees to your selected payment method.
          </p>
          <p>
            If automatic payment fails, an electronic invoice will be sent, and you will need to
            manually complete the payment by the specified due date.
          </p>
          <p>
            If you cancel or discontinue your subscription, you will lose access to paid features,
            and your customers will no longer be able to access subscription-based or credit
            points-based services.
          </p>
        </Section>

        <Section title="6. KYC">
          <p>
            To access certain services, you may be required to verify your identity. This may involve
            providing us with your banking details, a valid ID, and/or proof of address. By agreeing
            to these Terms, you consent to us sharing this information with secure verification
            agencies and databases. You also authorize us to submit these details to regulatory
            authorities when necessary.
          </p>
        </Section>

        <Section title="7. Fee Changes">
          <p>
            Selldome Technology Limited reserves the right to change service fees at its discretion.
            Any fee adjustments will take effect at the end of the current Billing Cycle. We will
            notify you in advance of any fee changes, allowing you to cancel your Subscription before
            the new fees apply. Continued use of the Service after the fee change signifies your
            acceptance of the updated fee.
          </p>
        </Section>

        <Section title="8. Refund Policy">
          <p>
            All Credit point and subscription payments are non-refundable. Once a payment is made,
            it cannot be refunded. We will notify you before your subscription expires to give you
            the opportunity to cancel if you do not wish to renew. Please ensure to take action
            before the expiration date if you decide not to continue your subscription.
          </p>
        </Section>

        <Section title="9. User Content">
          <p>
            Our Service allows users to post, share, and make available various types of content,
            including text, graphics, and videos ("Content"). Users are solely responsible for the
            Content they post, ensuring its legality, reliability, and appropriateness.
          </p>
          <p>By posting Content, you affirm that:</p>
          <ul>
            <li>You own the Content or have the right or license to use it, and</li>
            <li>
              Posting it does not infringe upon any person's or entity's rights, including privacy,
              publicity, or intellectual property rights.
            </li>
          </ul>
          <p>
            You retain ownership of your Content but grant us a license to use, modify, publicly
            perform, display, reproduce, and distribute it on our Service. This license allows other
            users to access and use your Content as permitted by these Terms. While we reserve the
            right to monitor and edit user Content, we are not obligated to do so.
          </p>
        </Section>

        <Section title="10. Analytics">
          <p>
            We may employ third-party service providers to monitor and analyze how our Service is
            used.
          </p>
        </Section>

        <Section title="11. Accounts">
          <p>
            When creating an account, you must provide accurate, complete, and current information.
            Failure to do so may result in immediate account termination. You are responsible for
            keeping your account credentials confidential and securing access to your account. You
            agree to be responsible for all activities under your account, whether your password is
            with our Service or a third party. Notify us immediately of any security breaches or
            unauthorized use of your account. Usernames must not infringe on others' rights or be
            offensive. We reserve the right to refuse service, terminate accounts, or modify content
            at our discretion without liability.
          </p>
        </Section>

        <Section title="12. Intellectual Property">
          <p>
            The intellectual property rights, including but not limited to, patents, trademarks,
            copyrights, and trade secrets, in and to the Service, its original content (excluding
            User-Generated Content), features, and functionality, are owned exclusively by SellDome
            Technology Limited and its licensors. No part of the Service may be reproduced, modified,
            or used without the prior written consent of SellDome Technology Limited.
          </p>
        </Section>

        <Section title="13. Error Reporting and Feedback">
          <p>
            You may provide us directly at{' '}
            <a href="mailto:support@selldome.africa">support@selldome.africa</a> with information and
            feedback concerning errors, suggestions for improvements, ideas, problems, complaints,
            and other matters related to our Service ("Feedback").
          </p>
          <p>You acknowledge and agree that:</p>
          <ol>
            <li>
              You shall not retain, acquire or assert any intellectual property right or other right,
              title or interest in or to the Feedback;
            </li>
            <li>Company may have developed ideas similar to the Feedback;</li>
            <li>
              Feedback does not contain confidential information or proprietary information from you
              or any third party; and
            </li>
            <li>
              Company is not under any obligation of confidentiality with respect to the Feedback.
            </li>
          </ol>
          <p>
            In the event the transfer of ownership to the Feedback is not possible due to applicable
            mandatory laws, you grant Company and its affiliates an exclusive, transferable,
            irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use
            (including copy, modify, create derivative works, publish, distribute and commercialize)
            Feedback in any manner and for any purpose.
          </p>
        </Section>

        <Section title="14. Third-Party Links">
          <p>
            Our services may include links to third-party websites, but we are not responsible for
            their content, privacy policies, or services. We are not liable for any damage or loss
            related to your use of these external sites. Please review their terms and privacy
            policies before use.
          </p>
        </Section>

        <Section title="15. Termination">
          <p>
            We reserve the right to terminate or suspend your account without prior notice at our
            discretion, including for any breach of the Terms. If you wish to terminate your account,
            simply stop using the Service. Certain provisions, like ownership rights and liability
            limitations, will continue to apply after termination. If your account or subscription is
            terminated, you will lose access to paid features.
          </p>
        </Section>

        <Section title="16. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal
            Republic of Nigeria, without regard to its conflict of law principles.
          </p>
        </Section>

        <Section title="17. Changes To Service">
          <p>
            We reserve the right to modify or discontinue our Service, including any features or
            materials provided, at our sole discretion and without prior notice. We are not liable
            for any unavailability of the Service, whether in part or in whole, at any time. Access
            to certain areas of the Service, or the entire platform, may be restricted periodically,
            including for registered users.
          </p>
        </Section>

        <Section title="18. Amendments To Terms">
          <p>
            We may amend Terms at any time by posting the amended terms on this site. It is your
            responsibility to review these Terms periodically. Your continued use of the Platform
            following the posting of revised Terms means that you accept and agree to the changes.
            By continuing to access or use our Service after any revisions become effective, you
            agree to be bound by the revised terms. If you do not agree to the new terms, you are no
            longer authorized to use the Service.
          </p>
        </Section>

        <Section title="19. Acknowledgement">
          <p>
            By accessing or using our Service, you confirm that you have read, understood, and agree
            to be bound by these Terms of Service.
          </p>
        </Section>

        <Section title="20. Contact Us">
          <p>
            For any feedback, inquiries, or requests for technical support, please feel free to
            contact us by email:{' '}
            <a href="mailto:support@selldome.africa">support@selldome.africa</a>
          </p>
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

export default TermsAndConditions;