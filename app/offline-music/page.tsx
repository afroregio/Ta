import React from "react";
import { Download, Trash2, Play } from "lucide-react";

// Static list of cover images
const covers = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
];

const OfflineMusic = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-purple-900 to-black overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Downloaded Music</h1>
            <div className="flex items-center gap-4">
              <span className="text-zinc-400 flex items-center gap-2">
                <Download className="h-5 w-5" />
                2.4 GB used
              </span>
              <button className="px-4 py-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition">
                Manage Downloads
              </button>
            </div>
          </div>

          {/* Downloaded Albums */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-5 gap-6">
              {covers.slice(0, 5).map((cover, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50"
                >
                  <img
                    src={cover}
                    alt={`Album cover ${index + 1}`}
                    className="w-full aspect-square rounded-md mb-4"
                  />
                  <h4 className="font-medium truncate">
                    Album Title {index + 1}
                  </h4>
                  <p className="text-sm text-zinc-400 mb-2">Artist Name</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">12 tracks</span>
                    <button className="text-zinc-400 hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Downloaded Tracks */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Songs</h2>
            <div className="space-y-2">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50"
                >
                  <img
                    src={covers[index % covers.length]}
                    alt={`Track artwork ${index + 1}`}
                    className="w-12 h-12 rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Track Title {index + 1}</h4>
                    <p className="text-sm text-zinc-400">Artist Name</p>
                  </div>
                  <span className="text-sm text-zinc-400 mr-4">3:45</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-zinc-400 hover:text-white">
                      <Play className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-white">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfflineMusic;
