import React from 'react';

export default function Skills() {
  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 }
    ],
    "Backend": [
      { name: "Node.js", level: 55 },
      { name: "Python", level: 45 },
      { name: "MongoDB", level: 25 },
      { name: "PostgreSQL", level: 60 }
    ],
    "Herramientas": [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Mis Habilidades</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6 transition-colors duration-200">{category}</h3>
              {categorySkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 transition-colors duration-200">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-200">
                    <div
                      className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}