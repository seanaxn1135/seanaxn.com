import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            href: "https://github.com/yourGithubProfile",
            icon: faGithub,
            label: "GitHub",
            color: "text-black dark:text-white hover:text-gray-500",
        },
        {
            href: "https://www.linkedin.com/in/yourLinkedInProfile",
            icon: faLinkedin,
            label: "LinkedIn",
            color: "text-blue-600 hover:text-blue-700",
        },
        {
            href: "mailto:yourEmail@example.com",
            icon: faEnvelope,
            label: "Email",
            color: "text-red-600 hover:text-red-700",
        },
    ];

    return (
        <footer className="relative text-center py-4 mt-8">
            <div className="absolute top-0 left-0 w-full" style={{ height: '1px', background: 'linear-gradient(to right, transparent, white, transparent)' }}></div>

            <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className={link.color} aria-label={link.label}>
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>

            <div className="mt-2">
                © {currentYear} Sean Ang. All rights reserved.
            </div>
        </footer>
    );
}
