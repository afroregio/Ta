"use client";

import React, { useState } from "react";
import {
  BarChart,
  Music,
  DollarSign,
  Users,
  Settings,
  Upload,
} from "lucide-react";
import Dashboard from "./dashboard/page";
import MyMusic from "./my-music/page";
import Earnings from "./earnings/page";
import FanBase from "./fans/page";
import MusicUpload from "./music-upload/page";
import SettingsPage from "./settings-page/page";

const ArtistDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: BarChart,
      component: Dashboard,
    },
    {
      name: "my-music",
      label: "My Music",
      icon: Music,
      component: MyMusic,
    },
    {
      name: "earnings",
      label: "Earnings",
      icon: DollarSign,
      component: Earnings,
    },
    {
      name: "fans",
      label: "Fans",
      icon: Users,
      component: FanBase,
    },
    {
      name: "music-upload",
      label: "Music Upload",
      icon: Upload,
      component: MusicUpload,
    },
    {
      name: "settings",
      label: "Settings",
      icon: Settings,
      component: SettingsPage,
    },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.name === activeTab)?.component || Dashboard;

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                  flex items-center space-x-2 
                  px-4 py-2 rounded 
                  ${
                    activeTab === tab.name
                      ? "bg-gray-600 text-white" // Changed to grey for active tab
                      : "hover:bg-gray-700" // Changed hover color to grey
                  }
                `}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/api/placeholder/40/40"
              alt="Artist Profile"
              className="rounded-full w-10 h-10"
            />
            <span>Artist Name</span>
          </div>
        </div>
      </nav>

      <main className="flex-grow text-white p-8 overflow-auto">
        <ActiveComponent />
      </main>
    </div>
  );
};

export default ArtistDashboard;
