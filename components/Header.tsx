import Link from "next/link";
import { Search, Bell, Settings, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left section - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Taji</span>
            <span className="text-zinc-400">Player</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/discover"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Discover
            </Link>
            <Link
              href="/library"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Library
            </Link>
            <Link
              href="/playlists"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Playlists
            </Link>
          </nav>
        </div>

        {/* Right section - Search and User Controls */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center bg-zinc-800 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none text-white ml-2 w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors">
              <Settings className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors">
              <UserCircle className="h-6 w-6" />
              <span className="hidden md:inline">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
