import React from "react";
import { Music, DollarSign, Users, BarChart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      {" "}
      {/* Reduced the space between sections */}
      <div className="grid grid-cols-4 gap-6">
        {[
          {
            icon: BarChart,
            title: "Total Streams",
            value: "124,456",
            change: "+15.2%",
          },
          {
            icon: DollarSign,
            title: "Total Earnings",
            value: "$1,234",
            change: "+12.3%",
          },
          {
            icon: Music,
            title: "Tracks",
            value: "24",
            change: "2 new",
          },
          {
            icon: Users,
            title: "Followers",
            value: "12.5K",
            change: "+8.7%",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition"
          >
            <div className="flex justify-between items-center">
              <stat.icon className="text-green-500 h-8 w-8" />
              <div className="text-right">
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-green-500 text-xs">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Tracks</h2>
          {[1, 2, 3].map((track) => (
            <div
              key={track}
              className="flex items-center space-x-4 mb-3 hover:bg-gray-700 p-2 rounded"
            >
              <img
                src="/api/placeholder/64/64"
                alt="Track"
                className="w-16 h-16 rounded"
              />
              <div className="flex-grow">
                <p className="font-semibold">Track Title {track}</p>
                <p className="text-gray-400 text-sm">Streams: 4,567</p>
              </div>
              <p className="text-green-500">R9.99</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <div className="space-y-3">
            {[
              { label: "Top Genre", value: "Hip Hop" },
              { label: "Listener Location", value: "United States" },
              { label: "Avg. Listener Duration", value: "3:42 min" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-gray-700 pb-2 last:border-b-0"
              >
                <span className="text-gray-400">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
