import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By downloading, installing, or using the SnapLock mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SnapLock is an app blocking service that helps users limit access to distracting applications on their iOS devices. The App uses:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Apple&apos;s Screen Time API for app blocking functionality</li>
              <li>• Barcode scanning for physical anchor-based unlocking</li>
              <li>• Local and cloud storage for user preferences and data</li>
              <li>• Subscription services for premium features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">User Accounts and Subscriptions</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Free Version</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The free version of SnapLock includes limited functionality (3 locks per week) and basic app blocking features.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">Pro Subscription</h3>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Monthly subscription: $7.00 per month</li>
              <li>• Annual subscription: $30.00 per year</li>
              <li>• Subscriptions automatically renew unless cancelled</li>
              <li>• You can cancel anytime through your Apple ID settings</li>
              <li>• Refunds are subject to Apple&apos;s App Store refund policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to use SnapLock only for lawful purposes and in accordance with these Terms. You may not:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Attempt to bypass or disable the app blocking functionality</li>
              <li>• Reverse engineer, decompile, or disassemble the App</li>
              <li>• Use the App to harm minors or violate any laws</li>
              <li>• Share your subscription account with others</li>
              <li>• Use the App for any commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Privacy and Data</h2>
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the App, to understand our practices regarding your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The App and its original content, features, and functionality are owned by SnapLock and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Service Availability</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              While we strive for reliable service, we cannot guarantee uninterrupted access to the App. The service may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">Effectiveness</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              While SnapLock is designed to effectively block access to selected apps, we cannot guarantee 100% effectiveness in all situations. The App depends on Apple&apos;s Screen Time API and device functionality.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-200">Limitation of Liability</h3>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, SnapLock shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the App immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the App will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">App Store Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are in addition to and do not replace the Apple App Store Terms of Service. In case of conflict between these Terms and Apple&apos;s terms, Apple&apos;s terms shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the App after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where SnapLock is incorporated, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-300">
                <strong>Email:</strong> legal@snaplock.app<br />
                <strong>Support:</strong> support@snaplock.app<br />
                <strong>Website:</strong> https://snaplock.app
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 