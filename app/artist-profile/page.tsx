import React from "react";
import { Play, MoreHorizontal, Heart, Share2, Verified } from "lucide-react";

const ArtistProfile = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <main className="flex-1 bg-gradient-to-b from-purple-900 to-black overflow-auto">
        {/* Artist Header */}
        <div className="relative h-[400px] p-8 flex items-end">
          <img
            src="/api/placeholder/1400/400"
            alt="Artist banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Verified className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-medium">Verified Artist</span>
            </div>
            <h1 className="text-8xl font-bold mb-6">Artist Name</h1>
            <p className="text-lg">10,234,567 monthly listeners</p>
          </div>
        </div>

        <div className="p-8">
          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition">
              <Play className="h-6 w-6 fill-black text-black" />
            </button>
            <button className="text-zinc-400 hover:text-white">
              <Heart className="h-8 w-8" />
            </button>
            <button className="text-zinc-400 hover:text-white">
              <MoreHorizontal className="h-8 w-8" />
            </button>
          </div>

          {/* Popular Tracks */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((track) => (
                <div
                  key={track}
                  className="flex items-center gap-4 p-2 rounded-md hover:bg-white/10"
                >
                  <span className="text-zinc-400 w-8 text-right">{track}</span>
                  <img
                    src="/api/placeholder/48/48"
                    alt="Track artwork"
                    className="w-12 h-12"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Popular Track {track}</h4>
                    <p className="text-sm text-zinc-400">1,234,567 plays</p>
                  </div>
                  <button className="text-zinc-400 hover:text-white">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-zinc-400 hover:text-white">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Albums */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((album) => (
                <div
                  key={album}
                  className="p-4 bg-zinc-900/30 rounded-lg hover:bg-zinc-800 cursor-pointer"
                >
                  <img
                    src="/api/placeholder/200/200"
                    alt="Album cover"
                    className="w-full aspect-square rounded-md mb-4"
                  />
                  <h4 className="font-medium truncate">Album {album}</h4>
                  <p className="text-sm text-zinc-400">2024 • Album</p>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img
                  src="/api/placeholder/600/400"
                  alt="Artist photo"
                  className="w-full rounded-xl mb-4"
                />
                <p className="text-zinc-400">10,234,567 monthly listeners</p>
              </div>
              <div>
                <p className="text-zinc-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
