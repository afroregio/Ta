import React from "react";
import { ListMusic, Grid, Clock } from "lucide-react";

const YourLibrary = () => {
  const [viewType, setViewType] = React.useState("grid");

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <main className="flex-1 bg-gradient-to-b from-zinc-800 to-black overflow-auto">
        <div className="p-8">
          {/* Library Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
                Playlists
              </button>
              <button className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
                Artists
              </button>
              <button className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
                Albums
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewType("grid")}
                className={`p-2 ${
                  viewType === "grid" ? "text-white" : "text-zinc-400"
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewType("list")}
                className={`p-2 ${
                  viewType === "list" ? "text-white" : "text-zinc-400"
                }`}
              >
                <ListMusic className="h-5 w-5" />
              </button>
            </div>
          </div>

          {viewType === "grid" ? (
            <div className="grid grid-cols-5 gap-6">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="p-4 bg-zinc-900/30 rounded-lg hover:bg-zinc-800 cursor-pointer"
                >
                  <img
                    src="/api/placeholder/200/200"
                    alt="Playlist cover"
                    className="w-full aspect-square rounded-md mb-4 shadow-lg"
                  />
                  <h4 className="font-medium truncate">My Playlist #{i + 1}</h4>
                  <p className="text-sm text-zinc-400">Playlist • You</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-2 hover:bg-zinc-800/50 rounded-md"
                >
                  <img
                    src="/api/placeholder/48/48"
                    alt="Playlist cover"
                    className="w-12 h-12 rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">My Playlist #{i + 1}</h4>
                    <p className="text-sm text-zinc-400">Playlist • You</p>
                  </div>
                  <span className="text-sm text-zinc-400">12 tracks</span>
                  <Clock className="h-5 w-5 text-zinc-400" />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default YourLibrary;
