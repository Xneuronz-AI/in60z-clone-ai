import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 16, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using In60z's research platform and services, you agree to be bound by these Terms of Service 
                and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                In60z provides a research platform that offers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>60-word summaries of research papers and academic publications</li>
                <li>Research discovery and recommendation services</li>
                <li>Academic event and conference information</li>
                <li>Research networking and community features</li>
                <li>Related research paper connections and insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To access certain features, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and current information</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Interfere with or disrupt the services or servers</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Violate intellectual property rights</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use automated systems to access our services without permission</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The In60z platform, including all content, features, and functionality, is owned by In60z and protected 
                  by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Our research summaries are created through our proprietary algorithms and processes. While the underlying 
                  research papers may be subject to various licenses, our summaries are our original work.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Content and Data</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to provide accurate and reliable research summaries, however:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information is provided "as is" without warranties of any kind</li>
                  <li>We do not guarantee the accuracy, completeness, or reliability of summaries</li>
                  <li>Users should verify important information with original sources</li>
                  <li>We are not responsible for decisions made based on our summaries</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Subscription and Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Some features may require a paid subscription:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Refunds may be provided at our discretion</li>
                  <li>We reserve the right to change pricing with notice</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                Our services are provided "as is" and "as available" without warranties of any kind, either express 
                or implied, including but not limited to implied warranties of merchantability, fitness for a particular 
                purpose, or non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall In60z be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, or use, arising out of or relating to 
                your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to our services at our sole discretion, without 
                notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of material changes 
                by posting the updated Terms on our platform. Your continued use constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard 
                to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: contact@in60z.com</p>
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

export default Terms;