"use client"; // Add this line
import React, { useState } from "react";
import {
  Camera,
  Heart,
  Share,
  MessageCircle,
  Users,
  Radio as RadioIcon,
  CalendarDays,
  Mic,
  Clock,
  ThumbsUp,
  MoreHorizontal,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  X,
  Calendar,
  Play,
  BookOpen,
} from "lucide-react";

interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  [key: string]: any; // Allow additional props
}

const TabButton = ({ active, children, ...props }: TabButtonProps) => (
  <button
    className={`px-4 py-2 font-medium rounded-lg transition-colors
      ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
      }`}
    {...props}
  >
    {children}
  </button>
);

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "live" | "success"; // Type variant
}

const Badge = ({ children, variant = "default" }: BadgeProps) => {
  const variants = {
    default: "bg-zinc-800 text-zinc-400",
    live: "bg-red-500/10 text-red-500 animate-pulse",
    success: "bg-green-500/10 text-green-500",
  };

  return (
    <span className={`${variants[variant]} text-xs px-2 py-1 rounded-full`}>
      {children}
    </span>
  );
};

const RadioPage = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState("Main Station");

  // Mock data
  const stations = [
    { id: 1, name: "Main Station", listeners: 1234, isLive: true },
    { id: 2, name: "Jazz Radio", listeners: 567, isLive: true },
    { id: 3, name: "Classical", listeners: 890, isLive: false },
  ];

  const schedule = [
    {
      id: 1,
      time: "08:00",
      show: "Morning Mix",
      host: "Alex Smith",
      isLive: true,
    },
    {
      id: 2,
      time: "10:00",
      show: "Jazz Hour",
      host: "Sarah Johnson",
      isNext: true,
    },
    { id: 3, time: "12:00", show: "Classical Corner", host: "Michael Brown" },
  ];

  const chatMessages = [
    {
      id: 1,
      user: "RadioFan",
      message: "Loving the show!",
      time: "2m ago",
      likes: 5,
    },
    {
      id: 2,
      user: "MusicLover",
      message: "Great mix today!",
      time: "5m ago",
      likes: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      {/* Header with Tabs */}
      <div className="flex gap-2 mb-6">
        <TabButton
          active={activeTab === "live"}
          onClick={() => setActiveTab("live")}
        >
          Live
        </TabButton>
        <TabButton
          active={activeTab === "schedule"}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule
        </TabButton>
        <TabButton
          active={activeTab === "shows"}
          onClick={() => setActiveTab("shows")}
        >
          Shows
        </TabButton>
        <TabButton
          active={activeTab === "podcasts"}
          onClick={() => setActiveTab("podcasts")}
        >
          Podcasts
        </TabButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Now Playing */}
          <div className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-xl mb-6">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <img
                  src="/api/placeholder/120/120"
                  alt="Show thumbnail"
                  className="rounded-lg"
                />
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                >
                  {isPlaying ? (
                    <PauseCircle className="w-12 h-12 text-white" />
                  ) : (
                    <PlayCircle className="w-12 h-12 text-white" />
                  )}
                </button>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="live">LIVE</Badge>
                  <Badge>{currentStation}</Badge>
                </div>
                <h1 className="text-2xl font-bold mb-1">Morning Mix</h1>
                <p className="text-zinc-400 mb-4">with Alex Smith</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Users className="w-4 h-4" />
                    <span>1,234 listening</span>
                  </div>
                  <button className="text-zinc-400 hover:text-white">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="text-zinc-400 hover:text-white">
                    <Share className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-zinc-800/30 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Today's Schedule</h2>
              <button className="text-zinc-400 hover:text-white text-sm">
                View Full Schedule
              </button>
            </div>
            <div className="space-y-4">
              {schedule.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="w-20 text-sm text-zinc-400">{slot.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{slot.show}</h3>
                      {slot.isLive && <Badge variant="live">Live</Badge>}
                      {slot.isNext && <Badge variant="success">Next</Badge>}
                    </div>
                    <p className="text-sm text-zinc-400">with {slot.host}</p>
                  </div>
                  <button className="text-zinc-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stations */}
          <div className="bg-zinc-800/30 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Stations</h2>
            <div className="space-y-3">
              {stations.map((station) => (
                <button
                  key={station.id}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  onClick={() => setCurrentStation(station.name)}
                >
                  <div className="flex items-center gap-3">
                    <RadioIcon className="w-4 h-4 text-zinc-400" />
                    <div className="text-left">
                      <h3 className="font-medium">{station.name}</h3>
                      <p className="text-xs text-zinc-400">
                        {station.listeners} listeners
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div className="bg-zinc-800/30 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Chat</h2>
            <div className="space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-zinc-400 rounded-full flex items-center justify-center text-white">
                    {msg.user[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{msg.user}</p>
                    <p className="text-sm text-zinc-400">{msg.message}</p>
                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      <span>{msg.time}</span>
                      <button className="text-zinc-400 hover:text-white">
                        <ThumbsUp className="w-4 h-4" />
                        {msg.likes}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPage;
