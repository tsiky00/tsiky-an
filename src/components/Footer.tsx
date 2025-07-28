// ...existing code...
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tsiky ANJARASOA</h3>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              Développeur full-stack dédié à la création d’expériences
              numériques de qualité et à la résolution efficace de problèmes
              complexes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Lien rapide</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tsiky00"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsiky00/"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:anjaratsiky2@mail.com"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://wa.me/261349958342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-300 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> tsiky
            &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
