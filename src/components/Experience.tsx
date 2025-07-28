// ...existing code...
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Stagiaire Développeur Full-stack",
      company: "Nir-'info",
      period: "juin- Aout 2025 ",
      description:
        "Participation au développement d'applications web en React et PHP (backend), avec une approche centrée sur l’optimisation du code et l'expérience utilisateur. Mentor junior developers and architect scalable solutions.",
      achievements: [
        "Contribution au développement d’une application interne en React",
        "Amélioration de certaines fonctionnalités backend avec PHP/MySQL",
        "Participation aux réunions techniques et aux revues de code",
      ],
    },
    // {
    //   title: "Full-Stack Developer",
    //   company: "Digital Solutions LLC",
    //   period: "2020 - 2022",
    //   description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create exceptional user experiences.",
    //   achievements: [
    //     "Built 15+ responsive web applications from scratch",
    //     "Reduced code complexity by 30% through refactoring",
    //     "Mentored 3 junior developers in best practices"
    //   ]
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupCo",
    //   period: "2019 - 2020",
    //   description: "Focused on creating responsive, user-friendly interfaces using React and modern CSS frameworks. Worked closely with UX designers to implement pixel-perfect designs.",
    //   achievements: [
    //     "Developed component library used across 5 products",
    //     "Improved user engagement by 25% through UI improvements",
    //     "Established coding standards and best practices"
    //   ]
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience professionnel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey as a developer and the impact I've made
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:text-left"
                } ${index % 2 === 0 ? "md:mr-1/2" : "md:ml-1/2"}`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
