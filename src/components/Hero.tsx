import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 opacity-70 transition-colors duration-200"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
            Hola, soy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              [Ciro]
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10 transition-colors duration-200">
            Desarrollador Web apasionado por crear experiencias 
            excepcionales y soluciones innovadoras.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 rounded-lg transition-colors duration-200"
            >
              Contáctame
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex justify-center gap-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
