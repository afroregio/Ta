"use client";

import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Mic2,
  LayoutList,
  MonitorSpeaker,
  Volume1,
  Maximize2,
} from "lucide-react";

const covers = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
];

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

  const handleNext = () => {
    setCurrentCoverIndex((prevIndex) => (prevIndex + 1) % covers.length);
  };

  const handlePrev = () => {
    setCurrentCoverIndex((prevIndex) =>
      prevIndex === 0 ? covers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Now Playing Main Content */}
      <main className="flex-1 bg-gradient-to-b from-zinc-800 to-black overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <img
                src={covers[currentCoverIndex]}
                alt="Album cover"
                className="w-64 h-64 rounded-lg shadow-2xl object-cover"
              />
              <div className="space-y-2">
                <span className="text-xs text-zinc-400">Now Playing</span>
                <h1 className="text-5xl font-bold">Song Title</h1>
                <p className="text-xl text-zinc-400">Artist Name</p>
                <p className="text-sm text-zinc-400">Album Name • 2024</p>
              </div>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">2:14</span>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100" />
                </div>
              </div>
              <span className="text-xs text-zinc-400">3:45</span>
            </div>

            {/* Main Controls */}
            <div className="flex items-center justify-center gap-8">
              <button className="text-zinc-400 hover:text-white">
                <Shuffle className="h-5 w-5" />
              </button>
              <button
                className="text-zinc-400 hover:text-white"
                onClick={handlePrev}
              >
                <SkipBack className="h-8 w-8" />
              </button>
              <button
                className="bg-white text-black rounded-full p-4 hover:scale-105 transition"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8" fill="currentColor" />
                )}
              </button>
              <button
                className="text-zinc-400 hover:text-white"
                onClick={handleNext}
              >
                <SkipForward className="h-8 w-8" />
              </button>
              <button className="text-zinc-400 hover:text-white">
                <Repeat className="h-5 w-5" />
              </button>
            </div>

            {/* Additional Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-zinc-400 hover:text-white">
                  <Mic2 className="h-5 w-5" />
                </button>
                <button className="text-zinc-400 hover:text-white">
                  <LayoutList className="h-5 w-5" />
                </button>
                <button className="text-zinc-400 hover:text-white">
                  <MonitorSpeaker className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Volume1 className="h-5 w-5 text-zinc-400" />
                <div className="w-24 h-1 bg-zinc-800 rounded-full">
                  <div className="w-2/3 h-full bg-white rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100" />
                  </div>
                </div>
                <button className="text-zinc-400 hover:text-white">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Up Next Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Up Next</h2>
            <div className="space-y-2">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-2 rounded-md hover:bg-zinc-800/50"
                >
                  <img
                    src={covers[item % covers.length]}
                    alt="Track artwork"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Next Song {item + 1}</h4>
                    <p className="text-sm text-zinc-400">Artist Name</p>
                  </div>
                  <span className="text-sm text-zinc-400">3:45</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NowPlaying;
