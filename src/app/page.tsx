"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24">
              <img src="/snaplock-logo.png" alt="SnapLock" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            SnapLock
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            An app blocker that actually works
          </p>

          {/* Key Stats */}
          <div className="mb-12 space-y-4">
            <p className="text-lg text-gray-400">
              The average person spends <span className="text-red-400 font-bold">5+ hours</span> daily on their phone
            </p>
            <p className="text-lg text-gray-400">
              That&apos;s <span className="text-red-400 font-bold">20+ years</span> of your life
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center mb-16">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download for iOS
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How SnapLock Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, effective, and impossible to bypass
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">1. Choose Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Select the distracting apps you want to block during focus sessions
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6.5 9.5v3h-3v-3h3M13 13h6v6h-6v-6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">2. Scan Barcode</h3>
              <p className="text-gray-400 leading-relaxed">
                Scan any barcode to create your physical &quot;key&quot; for unlocking apps
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">3. Stay Focused</h3>
              <p className="text-gray-400 leading-relaxed">
                Apps are blocked until you physically return to scan the same barcode
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SnapLock Works Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why SnapLock Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Unlike other solutions, SnapLock uses your phone&apos;s built-in Screen Time API
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">No Bypassing</h3>
              <p className="text-gray-400 text-sm">
                System-level blocking prevents workarounds
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Physical Anchor</h3>
              <p className="text-gray-400 text-sm">
                Real-world object prevents mindless unlocking
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Apple Integration</h3>
              <p className="text-gray-400 text-sm">
                Built on iOS Screen Time for reliability
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-400 text-sm">
                Ready to use in under 30 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose SnapLock?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compare SnapLock to expensive hardware solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardware Solutions */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-3xl p-8 border border-red-500/30">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Hardware App Blockers</h3>
                <div className="text-4xl font-bold mb-6 text-red-400">$60+</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-400">Bulky physical device</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-400">Easy to lose or forget</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-400">Limited app blocking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    <span className="text-gray-400">One-time purchase, no updates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SnapLock */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-3xl p-8 border-2 border-green-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">SMART CHOICE</span>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto">
                    <img src="/snaplock-logo.png" alt="SnapLock" className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">SnapLock</h3>
                <div className="text-4xl font-bold mb-2 text-green-400">$7<span className="text-lg text-gray-400">/month</span></div>
                <div className="text-gray-400 mb-6">or $30/year</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Uses any existing barcode</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>System-level app blocking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Unlimited app locks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Regular updates &amp; improvements</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-2xl font-semibold transition-all transform hover:scale-105"
                >
                  Download SnapLock
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold mb-2">SnapLock</div>
              <p className="text-gray-400">An app blocker that actually works</p>
            </div>
            
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024 SnapLock. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Custom Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* App Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <img src="/snaplock-logo.png" alt="SnapLock" className="w-full h-full object-contain" />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-center mb-4 text-white">
              Coming Soon!
            </h3>
            
            {/* Message */}
            <p className="text-center text-gray-300 mb-8 leading-relaxed">
              SnapLock is coming soon to the App Store! 
              <br />
              <span className="text-green-400 font-semibold">Stay tuned for the launch.</span>
            </p>
            
            {/* Close Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
