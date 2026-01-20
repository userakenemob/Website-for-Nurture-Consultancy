import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'Solutions@nurture.co.ke',
      link: 'mailto:Solutions@nurture.co.ke',
      color: '#22c55e',
    },
    {
      icon: Phone,
      title: 'Telephone',
      content: '+254-725-588-475',
      link: 'tel:+254725588475',
      color: '#3490dc',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Westlands, General Mathenge Road, The Promenade',
      color: '#6574cd',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">GET IN TOUCH</span>
            </div>
            <h1 className="text-slate-900 mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Work Together
              </span>
            </h1>
            <p className="text-slate-600 text-xl">
              Ready to transform your business with data-driven solutions? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg"
                  style={{ backgroundColor: info.color }}
                >
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-slate-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-slate-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-3xl p-10 border border-slate-200">
                <h2 className="text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-slate-700 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-slate-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="+254-XXX-XXX-XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-slate-700 mb-2 font-medium">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-3.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Business Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-white">Business Hours</h3>
                </div>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span>Monday - Friday:</span>
                    <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700">
                    <span>Saturday:</span>
                    <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday:</span>
                    <span className="text-emerald-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
                <h3 className="text-slate-900 mb-4">Quick Response</h3>
                <p className="text-slate-700 mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center gap-2 text-emerald-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Usually replies in a few hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-slate-900 mb-2">Visit Our Office</h3>
            <p className="text-slate-600 max-w-sm">
              Westlands, General Mathenge Road<br />
              The Promenade, Nairobi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}