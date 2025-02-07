import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, TrendingUp, Download } from "lucide-react";

const Earnings = () => {
  const earningsData = [
    { name: "Jan", earnings: 1200 },
    { name: "Feb", earnings: 1800 },
    { name: "Mar", earnings: 1600 },
    { name: "Apr", earnings: 2100 },
    { name: "May", earnings: 1900 },
    { name: "Jun", earnings: 2400 },
  ];

  return (
    <div className="h-screen bg-black text-white flex-1 overflow-auto">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Earnings</h1>
          <button className="px-4 py-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Report
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-800/50 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-zinc-400">Total Revenue</h3>
                <p className="text-3xl font-bold mt-2">$12,458.32</p>
              </div>
              <div className="bg-green-500/20 p-2 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">+12.5% from last month</span>
            </div>
          </div>

          <div className="bg-zinc-800/50 p-6 rounded-xl">
            <h3 className="text-zinc-400 mb-2">Best Selling Track</h3>
            <div className="flex items-center gap-4">
              <img
                src="/api/placeholder/64/64"
                alt="Track artwork"
                className="w-16 h-16 rounded"
              />
              <div>
                <p className="font-bold">Summer Nights</p>
                <p className="text-zinc-400 text-sm">894 sales</p>
                <p className="text-green-500 text-sm">$4,470.00</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/50 p-6 rounded-xl">
            <h3 className="text-zinc-400 mb-2">Best Selling Album</h3>
            <div className="flex items-center gap-4">
              <img
                src="/api/placeholder/64/64"
                alt="Album artwork"
                className="w-16 h-16 rounded"
              />
              <div>
                <p className="font-bold">Midnight Dreams</p>
                <p className="text-zinc-400 text-sm">342 sales</p>
                <p className="text-green-500 text-sm">$3,420.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800/30 p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold mb-6">Monthly Earnings</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{ background: "#333", border: "none" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="bg-zinc-800/30 rounded-xl">
            <div className="divide-y divide-zinc-700">
              {[1, 2, 3, 4, 5].map((transaction) => (
                <div
                  key={transaction}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="/api/placeholder/48/48"
                      alt="Track artwork"
                      className="w-12 h-12 rounded"
                    />
                    <div>
                      <p className="font-medium">Track Sale - Summer Vibes</p>
                      <p className="text-sm text-zinc-400">2 hours ago</p>
                    </div>
                  </div>
                  <p className="font-medium text-green-500">+$4.99</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
