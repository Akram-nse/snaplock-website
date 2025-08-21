import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              SnapLock (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application SnapLock (the &quot;App&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-200">Information You Provide</h3>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• App selection preferences for blocking</li>
              <li>• Custom names for barcode anchors</li>
              <li>• Usage statistics and time tracking data</li>
              <li>• Account information if you create an account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-200 mt-6">Automatically Collected Information</h3>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Device information (iOS version, device model)</li>
              <li>• App usage analytics</li>
              <li>• Crash reports and performance data</li>
              <li>• Anonymous usage statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• To provide and maintain the app blocking functionality</li>
              <li>• To personalize your experience with custom settings</li>
              <li>• To analyze app usage and improve our services</li>
              <li>• To provide customer support</li>
              <li>• To process subscription payments</li>
              <li>• To send important updates about the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your data is stored securely using industry-standard encryption methods. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              App blocking data and preferences are stored locally on your device using Apple&apos;s secure keychain and UserDefaults systems. This data is synchronized across your devices using iCloud if enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• <strong>RevenueCat:</strong> For subscription management and payments</li>
              <li>• <strong>Apple App Store:</strong> For app distribution and payments</li>
              <li>• <strong>Apple Screen Time API:</strong> For app blocking functionality</li>
              <li>• <strong>Apple Analytics:</strong> For anonymous usage statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Delete your data</li>
              <li>• Export your data</li>
              <li>• Opt out of marketing communications</li>
              <li>• Cancel your subscription at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              SnapLock is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Changes become effective immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-300">
                <strong>Email:</strong> privacy@snaplock.app<br />
                <strong>Website:</strong> https://snaplock.app<br />
                <strong>App Store:</strong> SnapLock - App Blocker
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 