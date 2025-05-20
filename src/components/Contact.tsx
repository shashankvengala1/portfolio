import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_56b25wa',     // your EmailJS service ID
      'template_fnc0aj5',    // your EmailJS template ID
      formData,
      'tVnV7tqHL5XxmAHpt'    // your EmailJS public key
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch(() => {
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-teal-400 mx-auto rounded mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[{
                  icon: <Mail className="w-6 h-6 text-teal-400 dark:text-teal-300" />,
                  label: 'Email',
                  value: (
                    <a href="mailto:shashaank.shashank@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-300 transition-colors">
                      shashaank.shashank@gmail.com
                    </a>
                  )
                },{
                  icon: <Phone className="w-6 h-6 text-teal-400 dark:text-teal-300" />,
                  label: 'Phone',
                  value: (
                    <a href="tel:+918499883581" className="text-gray-700 dark:text-gray-300 hover:text-teal-400 dark:hover:text-teal-300 transition-colors">
                      +91-8499883581
                    </a>
                  )
                },{
                  icon: <MapPin className="w-6 h-6 text-teal-400 dark:text-teal-300" />,
                  label: 'Location',
                  value: <span className="text-gray-700 dark:text-gray-300">Hyderabad, INDIA</span>
                }].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{item.label}</h4>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="space-y-4">
                  <a
                    href="mailto:shashaank.shashank@gmail.com?subject=Hello%20Shashank"
                    className="inline-flex items-center px-6 py-3 bg-teal-400 hover:bg-teal-500 dark:bg-teal-300 dark:hover:bg-teal-400 text-white font-medium rounded-md transition-shadow shadow-sm"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shashankvengala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-teal-400 hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {['name', 'email'].map((field, i) => (
                    <div key={i}>
                      <label htmlFor={field} className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                        {field === 'name' ? 'Your Name' : 'Your Email'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-300 transition text-gray-900 dark:text-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-300 transition text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:focus:ring-teal-300 transition text-gray-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-3 bg-teal-400 hover:bg-teal-500 dark:bg-teal-300 dark:hover:bg-teal-400 text-white font-medium rounded-md transition ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'shadow-sm'
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
