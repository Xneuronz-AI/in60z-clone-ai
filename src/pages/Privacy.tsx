import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 10, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. General</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  1.1 In60z ("In60z", "We", "Our", "Us") is committed to the protection of user ("You", "Your", "User") provided information which personally identifies You ("Personal Information") to In60z. You agree that Your use of In60z's mobile application ("App") implies Your consent to collecting, receiving, possessing, storing, dealing or handling of Your Personal Information in accordance with the terms of this Privacy Policy ("Privacy Policy").
                </p>
                <p>
                  1.2 This Privacy Policy applies to all Users who access the App and are therefore required to read and understand the Privacy Policy before submitting any Personal Information.
                </p>
                <p>
                  1.3 We take the privacy of our Users seriously. We are committed to safeguarding the privacy of Our Users while providing a personalized and valuable service.
                </p>
                <p>
                  1.4 Access to the contents available through the App is conditional upon Your approval of this Privacy Policy which is in addition to the terms and conditions of use ("Terms"). Any term used but not defined in this Privacy Policy will have the same meaning as provided in the Terms. You acknowledge that this Privacy Policy, together with our Terms, forms Our agreement with You in relation to Your use of the App.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.1 Traffic Data Collected</h3>
                  <p>In order to provide the App, We automatically track and collect the following categories of information when You use the App.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.2 Personal Information Collected</h3>
                  <p>In order to provide the App, We may require You to provide Us with Personal Information. Personal Information includes the following categories of information:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Contact data (such as Your email address, phone number and any details of Your contacts)</li>
                    <li>Device data</li>
                    <li>Demographic data (such as Your time zone, Your postal address and location details)</li>
                  </ul>
                  <p className="mt-4">
                    If You communicate with Us, by, for example, email or letter, any information provided in such communication may be collected and stored by In60z. Our App may transmit your Personal Information to our internal servers which may be situated outside India. This Personal Information is deleted from our servers 180 days after You delete the App or cancel/terminate your user account on the App, except to the extent storage of such data, including Your Personal Information, is necessary for Our purposes and/or required under applicable laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.3 Third Party Links</h3>
                  <p>
                    Our App may contain links to third party websites or applications. The inclusion or exclusion of the link does not imply any endorsement by In60z of the website, the website's provider, or the information on the website. You agree and understand that privacy policies of these websites are not under Our control. In60z does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does In60z guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">
                If In60z is sold, goes through a merger, or has an asset sale, we may transfer all your personal information to the new company. This could result in your data being moved outside of India.
              </p>
              <p className="text-muted-foreground mb-4">
                We will keep your personal information private and will not share it with any third parties unless we believe it is necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Comply with a court order or legal process</li>
                <li>Protect our rights, property, or safety, or that of another party</li>
                <li>Enforce our Privacy Policy and Terms</li>
                <li>Respond to claims that any content violates a third party's rights</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                By agreeing to this Privacy Policy, you give us permission to share your information, including your personal information, with third parties, including those outside India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="text-muted-foreground mb-4">
                The security of your personal information is very important to us. We use a combination of physical, managerial, and technical security measures to protect your data from unauthorized access, alteration, disclosure, loss, or misuse. The specific measures we use depend on the type and sensitivity of the data.
              </p>
              <p className="text-muted-foreground mb-4">
                While we do our best to store your information in a secure environment, no system is completely secure. We cannot guarantee that there will be no unintended disclosures of your personal information. If we become aware of an unauthorized disclosure, we will make reasonable efforts to notify you as soon as possible, as permitted by law.
              </p>
              <p className="text-muted-foreground">
                You should not share your password with anyone. If you think your password or account has been compromised, you should change it immediately and contact us at legal@in60z.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Updates to Our Privacy Policy</h2>
              <p className="text-muted-foreground">
                We can change, update, or modify this Privacy Policy at any time. If we do, we will post the changes on this page and inform you of them. By continuing to use our services after we post these changes, you are consenting to and accepting the updated policy. The information we collect will always be subject to the Privacy Policy that is in effect at the time we collect it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to review your Personal Information and correct any errors. To do so, please write to us at legal@in60z.com.
              </p>
              <p className="text-muted-foreground">
                You can also request that we stop using or delete your existing Personal Information by contacting us at the same email address. However, if you refuse to share information or withdraw your consent, we may have to limit or deny our services to you if that information is necessary to provide them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                In60z does not make any claims, promises, or guarantees about the accuracy or completeness of the App's content. We expressly disclaim any liability for errors or omissions.
              </p>
              <p className="text-muted-foreground mb-4">
                We provide no warranties of any kind—implied or expressed—regarding the App's content or any links to other websites. This includes warranties of non-infringement, title, merchantability, or fitness for a particular purpose.
              </p>
              <p className="text-muted-foreground">
                Any mention of specific commercial products, services, or company names on the App is for your information only. It does not mean that In60z endorses or recommends them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns, please feel free to email our Grievance Officer, Nitin Revankar, at legal@in60z.com, and we will do our best to address them.
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: legal@in60z.com</p>
                <p>Address: WJ88+69V BMTC Complex, Outer Ring Rd, Old Madiwala, Kuvempu Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;