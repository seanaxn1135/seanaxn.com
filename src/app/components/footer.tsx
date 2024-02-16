import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <footer className="bg-gray-200 text-center py-4">
            <div className="flex justify-center space-x-6">
                <Link href="https://github.com/yourGithubProfile" className="text-black hover:text-gray-600">
                    {githubIcon}
                </Link>
                <Link href="https://www.linkedin.com/in/yourLinkedInProfile" className="text-blue-700 hover:text-blue-800">
                    {linkedinIcon}
                </Link>
                <Link href="mailto:yourEmail@example.com" className="text-red-600 hover:text-red-700">
                    {emailIcon}
                </Link>
            </div>

            <div className="mt-2">
                © {currentYear} Sean Ang. All rights reserved.
            </div>
        </footer>
    );
}
