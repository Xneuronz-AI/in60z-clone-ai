import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 16, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit our website or use our mobile 
                applications. They help us provide you with a better experience by remembering your preferences, analyzing 
                how you use our services, and personalizing content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies are necessary for our website to function properly. They enable basic features like 
                    page navigation and access to secure areas.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Google Analytics</li>
                    <li>Usage statistics</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies allow us to remember your preferences and provide enhanced, personalized features.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Language preferences</li>
                    <li>Theme settings (dark/light mode)</li>
                    <li>Research area preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies track your online activity to help advertisers deliver more relevant advertisements.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Targeted advertising</li>
                    <li>Social media integration</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We also use cookies from trusted third-party services to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Google Fonts:</strong> To display custom fonts on our website</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                <li><strong>Content Delivery Networks:</strong> To improve website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground mb-2">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>View cookies stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies (not recommended as it may break website functionality)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Cookie Preference Center</h3>
                  <p className="text-muted-foreground">
                    We provide a cookie preference center where you can manage your consent for different types of 
                    cookies. You can access this through the cookie banner that appears when you first visit our website 
                    or by contacting us directly.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Mobile Applications</h2>
              <p className="text-muted-foreground mb-4">
                Our mobile applications may use similar technologies to cookies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Local storage</li>
                <li>Device identifiers</li>
                <li>App analytics tools</li>
                <li>Push notification tokens</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can manage these preferences through your device settings or within our application settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookie Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Different types of cookies are stored for different periods:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Stored for a predetermined period (typically 30 days to 2 years)</li>
                  <li><strong>Essential Cookies:</strong> Kept as long as necessary for website functionality</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our business practices. We will notify you of any material changes by posting the updated policy 
                on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Be informed about the cookies we use</li>
                <li>Give or withdraw consent for non-essential cookies</li>
                <li>Access information about cookies stored on your device</li>
                <li>Request deletion of your cookie data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: contact@in60z.com</p>
                <p>Subject: Cookie Policy Inquiry</p>
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

export default Cookies;