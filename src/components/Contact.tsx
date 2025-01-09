import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setIsSubmitting(true);
      emailjs.sendForm('service_z9ehitb', 'template_v03vypx', form.current, 'iNLBPnhMXp-Zfd6CE')
        .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          if (form.current) form.current.reset();
        }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Contacto</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">¡Hablemos!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
              Estoy interesado en oportunidades freelance y proyectos desafiantes. 
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">codifyy24@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">261-309-7061</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Mendoza, Argentina</span>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400">¡Mensaje enviado con éxito!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

