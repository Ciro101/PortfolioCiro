import { Code2, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Sobre Mí</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Soy un desarrollador apasionado por crear experiencias web excepcionales. 
              Con experiencia en desarrollo full-stack, disfruto construyendo aplicaciones 
              que no solo son funcionales sino también hermosas y fáciles de usar.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Mi objetivo es combinar mi conocimiento técnico con principios de diseño 
              para crear soluciones que impacten positivamente en los usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50 dark:bg-purple-900/50 rounded-lg transition-colors duration-200">
              <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Desarrollo</h3>
              <p className="text-gray-600 dark:text-gray-300">Creación de aplicaciones web modernas y escalables</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/50 rounded-lg transition-colors duration-200">
              <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Diseño UI/UX</h3>
              <p className="text-gray-600 dark:text-gray-300">Interfaces intuitivas y experiencias memorables</p>
            </div>
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg md:col-span-2 transition-colors duration-200">
              <Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimización y mejora del rendimiento web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}