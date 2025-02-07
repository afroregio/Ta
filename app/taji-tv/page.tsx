import React from "react";
import { Calendar, Bell, Tv } from "lucide-react";

const TajiTV = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
          {/* Featured Stream */}
          <div className="relative aspect-video bg-zinc-900">
            <img
              src="/api/placeholder/1280/720"
              alt="Live stream"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 rounded-full text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black p-8">
              <h1 className="text-3xl font-bold mb-2">Live Music Festival</h1>
              <p className="text-zinc-400">120K watching</p>
            </div>
          </div>

          <div className="p-8">
            {/* Upcoming Shows */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Shows</h2>
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((show) => (
                  <div
                    key={show}
                    className="bg-zinc-800/30 rounded-lg overflow-hidden"
                  >
                    <img
                      src="/api/placeholder/300/200"
                      alt="Show thumbnail"
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>Tomorrow, 8:00 PM</span>
                      </div>
                      <h3 className="font-semibold mb-2">
                        Music Show Title {show}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Artist Performance
                      </p>
                      <button className="w-full px-4 py-2 bg-zinc-700 rounded-full hover:bg-zinc-600 flex items-center justify-center gap-2">
                        <Bell className="h-4 w-4" />
                        Set Reminder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Shows */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Popular Shows</h2>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((show) => (
                  <div
                    key={show}
                    className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50"
                  >
                    <img
                      src="/api/placeholder/400/225"
                      alt="Show thumbnail"
                      className="w-full aspect-video rounded-lg mb-4"
                    />
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src="/api/placeholder/32/32"
                        alt="Channel avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Show Title {show}</h3>
                        <p className="text-sm text-zinc-400">Channel Name</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>23K views</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar - Chat */}
        <div className="w-[300px] bg-zinc-900 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Live Chat</h3>
            <button className="text-zinc-400 hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4 flex-1 overflow-auto mb-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <img
                  src="/api/placeholder/32/32"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-zinc-400">
                      User {i + 1}
                    </span>
                    <span className="text-zinc-300">
                      {" "}
                      Great performance! 🎵
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Send a message..."
              className="w-full bg-zinc-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TajiTV;
