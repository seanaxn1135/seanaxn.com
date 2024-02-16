import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative text-center py-4 mt-8">
            <div className="absolute top-0 left-0 w-full" style={{ height: '1px', background: 'linear-gradient(to right, transparent, white, transparent)' }}></div>

            <div className="flex justify-center space-x-6">
                <Link href="https://github.com/yourGithubProfile" className="text-black dark:text-white hover:text-gray-500">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link href="https://www.linkedin.com/in/yourLinkedInProfile" className="text-blue-600 hover:text-blue-700">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href="mailto:yourEmail@example.com" className="text-red-600 hover:text-red-700">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>

            <div className="mt-2">
                © {currentYear} Sean Ang. All rights reserved.
            </div>
        </footer>
    );
}
