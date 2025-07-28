// ...existing code...
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code propre",
      description:
        "Écriture d'un code maintenable et évolutif qui respecte les bonnes pratiques",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Résolution de problèmes",
      description: "Solutions créatives aux défis techniques complexes",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Esprit d'équipe",
      description:
        "Approche collaborative du développement et de la gestion de projet",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Apprentissage continu",
      description:
        "Toujours à la recherche de nouvelles technologies et amélioration des compétences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Développeur passionné avec une envie de créer des expériences
            numériques exceptionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
              {/* <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                YN
              </div> */}
              <div>
                <img
                  className="rounded-full flex items-center"
                  src="/img/IMG20250712123842[1].jpg"
                  alt="photo de tsiky"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Construire le futur, une ligne à la fois
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Je suis un développeur full-stack junior passionné dans la
              création d’applications web alliant design soigné et
              fonctionnalités robustes. Je me spécialise en React, TypeScript et
              technologies web modernes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Quand je ne code pas, tu me trouveras à explorer de nouvelles
              technologies, contribuer à des projets open-source ou partager mes
              connaissances avec la communauté des développeurs. Je crois en
              l’écriture d’un code propre et maintenable, ainsi qu’en la
              création d’expériences utilisateurs qui ont vraiment de l’impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
