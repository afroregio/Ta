import React from "react";
import {
  Home,
  Search as SearchIcon,
  Library,
  Plus,
  History,
  MusicIcon,
  Mic2,
  Radio,
  Video,
  Podcast,
  Gamepad2,
} from "lucide-react";

const covers = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
];

const Search = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-zinc-800 to-black overflow-auto">
          <div className="p-8">
            {/* Search Input Section */}
            <div className="max-w-[1200px] mb-8">
              <div className="relative">
                {/* Search Icon */}
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="What do you want to listen to?"
                  className="w-full h-12 pl-12 bg-white rounded-full text-black focus:outline-none"
                />
                {/* Mic Icon for Voice Search */}
                <Mic2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 cursor-pointer" />
              </div>
            </div>

            {/* Browse All Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Browse All</h2>
              <div className="grid grid-cols-5 gap-6">
                {/* Browse Categories (Music, Podcasts, etc.) */}
                {[
                  {
                    name: "Music",
                    icon: MusicIcon,
                    color: "from-purple-600 to-blue-600",
                  },
                  {
                    name: "Podcasts",
                    icon: Podcast,
                    color: "from-green-600 to-emerald-600",
                  },
                  {
                    name: "Live Events",
                    icon: Radio,
                    color: "from-orange-600 to-red-600",
                  },
                  {
                    name: "Made For You",
                    icon: History,
                    color: "from-pink-600 to-rose-600",
                  },
                  {
                    name: "New Releases",
                    icon: MusicIcon,
                    color: "from-yellow-600 to-orange-600",
                  },
                  {
                    name: "Gaming",
                    icon: Gamepad2,
                    color: "from-blue-600 to-cyan-600",
                  },
                  {
                    name: "Video",
                    icon: Video,
                    color: "from-red-600 to-pink-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg bg-gradient-to-br ${item.color} p-4 cursor-pointer hover:scale-105 transition-transform`}
                  >
                    <item.icon className="h-8 w-8 text-white mb-4" />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Searches Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Recent searches</h2>
              <div className="grid grid-cols-6 gap-4">
                {/* Map through the covers array to render recent search items */}
                {covers.map((cover, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 cursor-pointer"
                  >
                    <img
                      src={cover}
                      alt={`Recent search ${index + 1}`}
                      className="w-full aspect-square rounded-md mb-4"
                    />
                    <h4 className="font-medium truncate">Artist Name</h4>
                    <p className="text-sm text-zinc-400">Artist</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Search;
