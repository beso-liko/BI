import React, { useState, useRef } from 'react';
import { Mail, AlertCircle } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { useInView } from '../hooks/useInView';

const CONTACT_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&auto=format&fit=crop';

const subjects = [
  'Business Partnership',
  'Investment Opportunity',
  'Strategic Alliance',
  'Sector Collaboration',
  'General Enquiry',
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  firstName: '',
  lastName:  '',
  email:     '',
  company:   '',
  subject:   '',
  message:   '',
};

const Contact: React.FC = () => {
  const [form, setForm]       = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]   = useState<Partial<FormState>>({});

  const formRef = useRef<HTMLElement>(null);
  const inView  = useInView(formRef, { threshold: 0.1 });

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim())  e.lastName  = 'Last name is required.';
    if (!form.email.trim())     e.email     = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim())   e.message   = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // NOTE: No backend is configured. This is a UI-only form.
      // To enable email delivery, connect a service such as Formspree, EmailJS, or a custom API.
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const inputBase =
    'w-full bg-bi-dark border border-bi-border text-bi-white text-sm px-4 py-3 font-body focus:outline-none focus:border-bi-red transition-colors duration-200 placeholder-bi-muted';
  const errorBase = 'mt-1 text-[12px] text-bi-red';

  return (
    <main id="main-content">
      {/* Page hero */}
      <section
        className="relative min-h-[40vh] flex items-end bg-bi-black overflow-hidden"
        aria-label="Contact page header"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={CONTACT_IMAGE}
            alt="BI Holding Group office"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0B0B0B 0%, transparent 60%)' }} aria-hidden="true" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-bi-red z-10" style={{ left: '5.5%' }} aria-hidden="true" />
        <div className="relative z-10 container-bi pb-16 pt-40">
          <SectionLabel label="Get in Touch" className="mb-6" />
          <h1
            className="font-display font-extrabold uppercase text-bi-white leading-[0.92]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            Let's Start a
            <br />
            <span className="text-bi-red">Conversation.</span>
          </h1>
        </div>
      </section>

      {/* Form section */}
      <section
        ref={formRef}
        className="bg-bi-black py-20 lg:py-32"
        aria-labelledby="contact-form-heading"
      >
        <div className="container-bi">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left info panel */}
            <div
              className={`lg:col-span-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2
                id="contact-form-heading"
                className="font-display font-bold uppercase text-bi-white text-3xl mb-6 leading-tight"
              >
                Business Enquiries
              </h2>
              <div className="flex items-center gap-4 mb-8" aria-hidden="true">
                <span className="block w-10 h-px bg-bi-red" />
                <span className="block flex-1 h-px bg-bi-border" />
              </div>
              <p className="text-bi-muted text-[14px] leading-relaxed mb-8">
                Whether you are a potential business partner, investor, or sector client,
                we welcome the opportunity to explore how we can work together.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-bi-red" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-1">Email</p>
                    <a
                      href="mailto:enquiries@biholdinggroup.com"
                      className="text-bi-muted-lt text-sm hover:text-bi-white transition-colors duration-200"
                    >
                      enquiries@biholdinggroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Backend note */}
              <div className="mt-10 p-5 border border-bi-border bg-bi-dark/50 flex items-start gap-3">
                <AlertCircle size={16} className="text-bi-muted flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-bi-muted text-[12px] leading-relaxed">
                  <strong className="text-bi-muted-lt">Note:</strong> This form does not yet have
                  a configured backend. To enable email delivery, connect a service such as
                  Formspree, EmailJS, or a custom API endpoint.
                </p>
              </div>

              {/* Areas */}
              <div className="mt-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-bi-muted mb-4">Areas of Interest</p>
                <ul className="space-y-3" role="list">
                  {subjects.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-[13px] text-bi-muted-lt">
                      <span className="block w-4 h-px bg-bi-red flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div
              className={`lg:col-span-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '150ms' }}
            >
              {submitted ? (
                <div className="flex flex-col items-start justify-start h-full py-12">
                  <span className="block w-10 h-0.5 bg-bi-red mb-6" aria-hidden="true" />
                  <h3 className="font-display font-bold uppercase text-bi-white text-4xl mb-4">
                    Message Received
                  </h3>
                  <p className="text-bi-muted text-[15px] leading-relaxed max-w-md mb-8">
                    Thank you for reaching out. We will review your message and get back
                    to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* First name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                      >
                        First Name <span className="text-bi-red" aria-label="required">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className={inputBase}
                        value={form.firstName}
                        onChange={handleChange}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className={errorBase} role="alert">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                      >
                        Last Name <span className="text-bi-red" aria-label="required">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className={inputBase}
                        value={form.lastName}
                        onChange={handleChange}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className={errorBase} role="alert">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                      >
                        Email Address <span className="text-bi-red" aria-label="required">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputBase}
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className={errorBase} role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                      >
                        Company / Organisation
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputBase}
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                    >
                      Subject / Area of Interest
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={`${inputBase} appearance-none cursor-pointer`}
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-[11px] tracking-[0.18em] uppercase text-bi-muted mb-2"
                    >
                      Message <span className="text-bi-red" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`${inputBase} resize-none`}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className={errorBase} role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Send Enquiry
                    <Mail size={15} aria-hidden="true" />
                  </button>

                  <p className="mt-4 text-bi-muted text-[12px]">
                    Fields marked <span className="text-bi-red" aria-hidden="true">*</span> are required.
                    Your details will not be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
