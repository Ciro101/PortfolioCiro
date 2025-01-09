
import { ExternalLink } from 'lucide-react';
import tuImagen from '../img/defihaus2.png';
import tuImagen2 from '../public/saisei.svg';
import tuImagen3 from '../img/altavista.png';
export default function Projects() {
  const projects = [
    {
      title: "defihaus",
      description: "Finanzas descentralizadas para el mercado inmobiliario",
      image: tuImagen,
      tech: ["React", "Tailwind CSS", "Typescript"],
      demo: "https://defihaus.com.ar"
    },
    {
      title: "SAISEI",
      description: "Experimente la música como nunca antes con nuestra revolucionaria tecnología de audio. Adéntrese en el futuro del sonido con mejoras impulsadas por IA y mezcla cuántica.",
      image: tuImagen2,
      tech: ["Typescript", "Javascript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://stirring-figolla-1db2d2.netlify.app/"
    },
    {
      title: "Altavista Estates",
      description: "Sitio web personal con diseño moderno y responsivo",
      image: tuImagen3,
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://euphonious-alpaca-6560f0.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    <ExternalLink className="h-6 w-6 text-gray-900 dark:text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}