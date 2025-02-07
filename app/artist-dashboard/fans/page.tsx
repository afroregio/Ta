import React, { useState } from "react";
import {
  Users,
  MessageCircle,
  Mail,
  Star,
  Share2,
  BarChart,
  ChevronDown,
  Search,
  MapPin,
  Music,
  DollarSign,
} from "lucide-react";

const Fans = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="h-screen bg-black text-white flex-1 overflow-auto">
      <div className="p-8">
        {/* Previous code remains the same until fan list */}

        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((fan) => (
            <div
              key={fan}
              className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Fan profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium">Fan Name {fan}</h4>
                  <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      New York, USA
                    </span>
                    <span className="flex items-center gap-1">
                      <Music className="h-4 w-4" />
                      15 purchases
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      $124.50 spent
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {fan % 2 === 0 && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">
                    Super Fan
                  </span>
                )}
                <button className="px-4 py-2 bg-zinc-700 rounded-full hover:bg-zinc-600">
                  Message
                </button>
                <button className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-600">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fan Analytics */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="bg-zinc-800/30 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Fan Growth</h3>
            <div className="h-64">
              {/* Add chart component here */}
              <div className="w-full h-full bg-zinc-800/50 rounded-lg flex items-center justify-center">
                Fan Growth Chart Placeholder
              </div>
            </div>
          </div>
          <div className="bg-zinc-800/30 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Fan Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <span>Comments</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <span>Shares</span>
                <span className="font-medium">856</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <span>Direct Messages</span>
                <span className="font-medium">423</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                <span>Playlist Adds</span>
                <span className="font-medium">2,145</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fans;
