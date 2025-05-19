
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#2CA6A4] dark:bg-[#3DB9B7] mx-auto mb-6"></div>
          <p className="text-[#333333] dark:text-[#E0E0E0] max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-[#0A2342] dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#F0F7F7] dark:bg-[#1A2A2A] p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-1">Email</h4>
                    <a href="mailto:shashaank.shashank@gmail.com" className="text-[#333333] dark:text-[#E0E0E0] hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors">
                      shashaank.shashank@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F0F7F7] dark:bg-[#1A2A2A] p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-1">Phone</h4>
                    <a href="tel:+918499883581" className="text-[#333333] dark:text-[#E0E0E0] hover:text-[#2CA6A4] dark:hover:text-[#3DB9B7] transition-colors">
                      +91-8499883581
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F0F7F7] dark:bg-[#1A2A2A] p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-[#2CA6A4] dark:text-[#3DB9B7]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-1">Location</h4>
                    <p className="text-[#333333] dark:text-[#E0E0E0]">
                      Hyderabad, INDIA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[#0A2342] dark:text-white mb-4">Connect With Me</h4>
                <div className="space-y-6 max-w-md mx-auto text-center">
                <a
                  href="mailto:shashaank.shashank@gmail.com?subject=Hello%20Shashank"
                  className="inline-block px-6 py-3 bg-[#2CA6A4] hover:bg-[#249a98] dark:bg-[#3DB9B7] text-white font-medium rounded-md transition-all duration-300"
                >
                  <Mail className="inline w-5 h-5 mr-2 align-middle" />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/shashankvengala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>

              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-[#121212] rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#0A2342] dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] dark:focus:ring-[#3DB9B7] focus:border-transparent bg-white dark:bg-[#1E1E1E] text-[#333333] dark:text-[#E0E0E0]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] dark:focus:ring-[#3DB9B7] focus:border-transparent bg-white dark:bg-[#1E1E1E] text-[#333333] dark:text-[#E0E0E0]"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] dark:focus:ring-[#3DB9B7] focus:border-transparent bg-white dark:bg-[#1E1E1E] text-[#333333] dark:text-[#E0E0E0]"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[#666666] dark:text-[#A0A0A0] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CA6A4] dark:focus:ring-[#3DB9B7] focus:border-transparent bg-white dark:bg-[#1E1E1E] text-[#333333] dark:text-[#E0E0E0]"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-[#2CA6A4] hover:bg-[#249a98] dark:bg-[#3DB9B7] dark:hover:bg-[#35a3a1] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md">
                      Your message has been sent successfully!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
