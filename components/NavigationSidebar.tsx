"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Radio,
  Tv,
  Download,
  User,
  Music,
  ShoppingBag,
  CalendarCheck,
  Menu, // Hamburger icon
} from "lucide-react";

const NavigationSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // To toggle the sidebar visibility

  const navItems = [
    { href: "/home-section", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/taji-radio", icon: Radio, label: "Taji Radio" },
    { href: "/taji-tv", icon: Tv, label: "Taji TV" },
    { href: "/offline-music", icon: Download, label: "Offline Music" },
    { href: "/artist-dashboard", icon: User, label: "Artist Dashboard" },
    { href: "/now-playing", icon: Music, label: "Now Playing" },
    { href: "/store", icon: ShoppingBag, label: "Store" },
    { href: "/events", icon: CalendarCheck, label: "Events" },
  ];

  return (
    <div
      className={`h-screen flex-shrink-0 flex flex-col justify-between p-5 text-white animate-gradient transition-all duration-300 ${
        isSidebarOpen ? "block" : "hidden"
      } md:block`} // Sidebar should be visible on desktop and toggle on mobile
    >
      <style jsx global>{`
        .animate-gradient {
          background: linear-gradient(
            135deg,
            #7c2d3c,
            #8b4513,
            #6b5b15,
            #2d5a27,
            #1a5f55,
            #1e4d6b,
            #2b4073,
            #3c275e,
            #5d2a4c,
            #6b2b4d,
            #7c2d3c
          );
          background-size: 1200% 1200%;
          animation: gradientShift 45s linear infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        .nav-item {
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          transform: translateX(10px);
        }

        .icon-hover {
          transition: all 0.3s ease;
        }

        .icon-hover:hover {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
        }
      `}</style>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="space-y-2 mt-5">
        {navItems.map((item, index) => (
          <Link href={item.href} key={item.label} className="nav-item block">
            <div
              className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                hoveredIndex === index
                  ? "bg-white/10 backdrop-blur-sm transform scale-105"
                  : "hover:bg-black/10"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <item.icon
                className={`icon-hover mr-3 ${
                  hoveredIndex === index
                    ? "text-white scale-110"
                    : "text-white/90"
                }`}
                size={20}
              />
              <span
                className={`font-medium ${
                  hoveredIndex === index ? "text-white" : "text-white/90"
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavigationSidebar;
