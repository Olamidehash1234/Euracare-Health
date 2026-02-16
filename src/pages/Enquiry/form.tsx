import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../../components/Toast';

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'loading'>('loading');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    natureOfEnquiry: '',
    message: '',
    contactPreference: ''
  });

  const [isNatureOpen, setIsNatureOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const natureOptions = [
    'Book Appointment',
    'General Inquiry',
    'Feedback',
    'Careers',
    'Press Inquiry',
  ];

  const contactOptions = [
    'Email',
    'Phone',
    'Text Message',
    'No Preference'
  ];

  const natureDropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (natureDropdownRef.current && !natureDropdownRef.current.contains(event.target as Node)) {
        setIsNatureOpen(false);
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectOption = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'natureOfEnquiry') {
      setIsNatureOpen(false);
    } else if (field === 'contactPreference') {
      setIsContactOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setToastType('loading');
    setToastMessage('Sending your message...');
    setShowToast(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          enquiry: formData.natureOfEnquiry,
          contact: formData.contactPreference,
          message: formData.message,
          submitted_at: new Date().toISOString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setToastType('success');
      setToastMessage('Your message has been sent successfully, We will get back to you shortly!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        natureOfEnquiry: '',
        message: '',
        contactPreference: ''
      });
    } catch (error) {
      setToastType('error');
      setToastMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-[16px] py-[60px] lg:px-0 lg:py-20">
      <Toast 
        show={showToast}
        message={toastMessage}
        type={toastType}
        onHide={() => setShowToast(false)}
      />
      <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-[14px]">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
          <div>
            <label htmlFor="firstName" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px] lg:leading-[27px]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px]">
          <div>
            <label htmlFor="email" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required={true}
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Nature of Enquiry Dropdown */}
        <div>
          <label htmlFor="natureOfEnquiry" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
            Nature of Enquiry
          </label>
          <div className="relative" ref={natureDropdownRef}>
            <button
              type="button"
              onClick={() => setIsNatureOpen(!isNatureOpen)}
              className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200 bg-white text-left flex items-center justify-between"
            >
              <span className={formData.natureOfEnquiry ? 'text-gray-900' : 'text-gray-400'}>
                {formData.natureOfEnquiry || ''}
              </span>
              <img src='/down.svg' className={`w-5 h-5 lg:w-auto lg:h-auto text-gray-400 transition-transform duration-200 ${isNatureOpen ? 'rotate-180' : ''}`} />
            </button>
            {isNatureOpen && (
              <div className="absolute top-full left-0 right-0 mt-[10px] bg-white border border-[#010101] text-[14px] lg:text-[16px] rounded-2xl lg:rounded-[48px] shadow-lg z-10 overflow-hidden">
                {natureOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectOption('natureOfEnquiry', option)}
                    className="w-full py-[16px] px-[20px] lg:py-[16px] text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={7}
            className="w-full py-[16px] px-[20px] lg:py-[20px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[16px] lg:rounded-[48px] outline-none transition-all duration-200 resize-none"
          />
        </div>

        {/* Contact Preference */}
        <div>
          <label htmlFor="contactPreference" className="block text-[14px] lg:text-[16px] text-[#010101] mb-2 lg:mb-[16px] lg:leading-[27px]">
            How would you like us to contact you?
          </label>
          <div className="relative" ref={contactDropdownRef}>
            <button
              type="button"
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-full py-[16px] px-[20px] lg:py-[20px] lg:mb-[36px] border border-[#010101] text-[14px] lg:text-[16px] rounded-[48px] outline-none transition-all duration-200 bg-white text-left flex items-center justify-between"
            >
              <span className={formData.contactPreference ? 'text-gray-900' : 'text-gray-400'}>
                {formData.contactPreference || ''}
              </span>
              <img src='/down.svg' className={`w-5 h-5 lg:w-auto lg:h-auto text-gray-400 transition-transform duration-200 ${isNatureOpen ? 'rotate-180' : ''}`} />
            </button>
            {isContactOpen && (
              <div className="absolute top-full left-0 right-0 mt-[10px] bg-white border border-[#010101] text-[14px] lg:text-[16px] rounded-2xl lg:rounded-[48px] shadow-lg z-10 overflow-hidden">
                {contactOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectOption('contactPreference', option)}
                    className="w-full py-[16px] px-[20px] lg:py-[20px] text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-[14px] lg:text-[16px] text-[#010101]">
          <p>
            We won't share your contact information with anyone outside of the Euracare Group
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0C2141] lg:mt-[60px] hover:bg-slate-900 text-white py-[14px] lg:leading-[27px] w-[227px] rounded-[48px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}