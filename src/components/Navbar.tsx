import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Proyectos
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors">Sobre Mí</a>
              <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors">Habilidades</a>
              <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors">Proyectos</a>
              <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Sobre Mí</a>
            <a href="#skills" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Habilidades</a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Proyectos</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}