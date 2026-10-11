import React, { useState } from 'react';
import { siteConfig } from '../../data/site-config';
import { Mail, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';

interface TrustPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<TrustPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'editorial',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20 pt-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <button onClick={() => onNavigate('/')} className="hover:text-stone-900 cursor-pointer">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-stone-900 font-semibold">Contact Us</span>
      </nav>

      <header className="space-y-3 border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          Editorial & Reader Inquiries
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Contact 77 Review
        </h1>
        <p className="text-stone-600 text-sm leading-relaxed max-w-2xl">
          Get in touch with our editorial desk, scientific fact-checkers, corrections office, or compliance team.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 bg-white border border-stone-200 rounded-2xl shadow-xs">
            <h2 className="text-xl font-serif font-bold text-stone-900 mb-4">
              Send an Inquiry
            </h2>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-xs text-emerald-900">
                <div className="flex items-center gap-2 font-semibold text-sm text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Message Transmitted</span>
                </div>
                <p className="leading-relaxed">
                  Thank you for reaching out to 77 Review. Your inquiry has been routed to our {formData.department} desk. We review inquiries within 24 to 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Turner"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
                  >
                    <option value="editorial">Editorial Desk (Questions & Feedback)</option>
                    <option value="corrections">Corrections & Fact-Checking</option>
                    <option value="medical">Medical Review Board</option>
                    <option value="compliance">Advertising & FTC Compliance</option>
                    <option value="syndication">Press & Syndication</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Inquiry regarding study citation or evaluation"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your inquiry..."
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg outline-none focus:border-stone-900 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-6 text-xs">
          <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl space-y-4">
            <h3 className="font-serif font-bold text-stone-900 text-base">Direct Channels</h3>
            <div className="space-y-3 text-stone-600">
              <div>
                <span className="font-semibold text-stone-900 block">Editorial Desk:</span>
                <p>{siteConfig.contact.editorialEmail}</p>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block">Corrections Office:</span>
                <p>{siteConfig.contact.correctionsEmail}</p>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block">Compliance & FTC:</span>
                <p>{siteConfig.contact.complianceEmail}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200 rounded-2xl space-y-3">
            <h3 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stone-700" />
              Correspondence Address
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {siteConfig.contact.addressPlaceholder}
            </p>
            <p className="text-[11px] text-stone-500 italic">
              Notice: We do not accept unsolicited physical product specimens for endorsement without prior editorial protocol agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
