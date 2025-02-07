import React, { useState } from "react";
import {
  Plus,
  Music,
  Album,
  MoreVertical,
  Edit,
  Trash,
  Share2,
  Image,
} from "lucide-react";

const MyMusic = () => {
  const [activeTab, setActiveTab] = useState("albums");

  return (
    <div className="h-screen bg-black text-white flex-1 overflow-auto">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Music</h1>
          <button className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600 transition flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {activeTab === "albums" ? "Create Album" : "Upload Track"}
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "albums" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("albums")}
          >
            Albums
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "singles" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab("singles")}
          >
            Singles
          </button>
        </div>

        {activeTab === "albums" ? (
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((album) => (
              <div
                key={album}
                className="bg-zinc-800/50 rounded-lg p-4 hover:bg-zinc-800/70 transition"
              >
                <img
                  src="/api/placeholder/250/250"
                  alt={`Album ${album}`}
                  className="w-full aspect-square rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg mb-1">Album Title {album}</h3>
                <p className="text-zinc-400 text-sm mb-2">
                  12 tracks · 48 minutes
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">
                    Released: Jan 2024
                  </span>
                  <button className="p-2 hover:bg-zinc-700 rounded-full">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((track) => (
              <div
                key={track}
                className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70"
              >
                <img
                  src="/api/placeholder/80/80"
                  alt={`Track ${track}`}
                  className="w-20 h-20 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Single Title {track}</h3>
                  <p className="text-zinc-400 text-sm">3:45 · Hip Hop</p>
                </div>
                <div className="text-right mr-4">
                  <p className="font-medium">$4.99</p>
                  <p className="text-sm text-zinc-400">89 sales</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMusic;
