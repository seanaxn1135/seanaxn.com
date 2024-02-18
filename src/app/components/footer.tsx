import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            href: "https://github.com/seanaxn1135",
            icon: faGithub,
            label: "GitHub",
            color: "text-black dark:text-white hover:text-gray-500",
        },
        {
            href: "https://www.linkedin.com/in/seanaxn",
            icon: faLinkedin,
            label: "LinkedIn",
            color: "text-blue-600 hover:text-blue-700",
        },
        {
            href: "mailto:seanaxn1135@gmail.com",
            icon: faEnvelope,
            label: "Email",
            color: "text-red-600 hover:text-red-700",
        },
    ];

    return (
        <footer className="relative text-center py-4 mt-8">
            <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
            <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                    <Link key={link.label} href={link.href} className={link.color} aria-label={link.label} target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={link.icon} />

                    </Link>
                ))}
            </div>

            <div className="mt-2">
                © {currentYear} Sean Ang. All rights reserved.
            </div>
        </footer>
    );
}
