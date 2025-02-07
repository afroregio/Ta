"use client";

import React from "react";
import { ShoppingCart, Phone } from "lucide-react";

// Static list of cover images
const covers = [
  "/cover1.jpg",
  "/cover2.jpg",
  "/cover3.jpg",
  "/cover4.jpg",
  "/cover5.jpg",
];

const MusicStore = () => {
  const [paymentModal, setPaymentModal] = React.useState(false);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-emerald-900 to-black overflow-auto">
        <div className="p-8">
          {/* Featured Releases */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">New Releases</h2>
            <div className="grid grid-cols-5 gap-6">
              {covers.slice(0, 5).map((cover, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 p-4 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
                >
                  <img
                    src={cover}
                    alt={`Album artwork ${index + 1}`}
                    className="w-full aspect-square rounded-lg mb-4"
                  />
                  <h3 className="font-semibold">Track Title {index + 1}</h3>
                  <p className="text-sm text-zinc-400">Artist Name</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-green-400">50 KSH</span>
                    <button
                      onClick={() => setPaymentModal(true)}
                      className="px-3 py-1 bg-green-500 rounded-full text-sm hover:bg-green-600"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Charts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Charts</h2>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((track) => (
                <div
                  key={track}
                  className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50"
                >
                  <span className="text-2xl font-bold text-zinc-500 w-8">
                    {track}
                  </span>
                  <img
                    src={covers[track % covers.length]} // Using covers array
                    alt={`Track artwork ${track}`}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Popular Track {track}</h4>
                    <p className="text-sm text-zinc-400">Artist Name</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-bold text-green-400">30 KSH</p>
                    <p className="text-sm text-zinc-400">1.2K sales</p>
                  </div>
                  <button
                    onClick={() => setPaymentModal(true)}
                    className="px-4 py-2 bg-green-500 rounded-full text-sm hover:bg-green-600"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Modal */}
          {paymentModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
              <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">
                <h3 className="text-xl font-bold mb-4">Purchase Track</h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-zinc-800 rounded-lg">
                    <p className="text-sm text-zinc-400">Track Price</p>
                    <p className="text-2xl font-bold">50 KSH</p>
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full bg-zinc-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-3 bg-green-500 rounded-lg hover:bg-green-600 font-medium flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Pay with Airtime
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setPaymentModal(false)}
                  className="w-full px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MusicStore;
