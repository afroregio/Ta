import Link from "next/link"; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            href="/about"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Terms
          </Link>
        </div>
        <div className="text-zinc-400">
          © {new Date().getFullYear()} Taji Player. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Default export
