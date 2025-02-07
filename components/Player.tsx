"use client";

import React, { useState, forwardRef, ButtonHTMLAttributes } from "react";
import {
  X,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  Maximize2,
  Heart,
} from "lucide-react";

// Define button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "sm" | "icon";
}

// Custom Button component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-zinc-900 text-white hover:bg-zinc-800",
      ghost: "hover:bg-zinc-800/50 text-zinc-400 hover:text-white",
    };

    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      icon: "h-8 w-8",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

const Player: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-50 h-6 w-6 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Progress bar */}
      <div className="w-full h-1 bg-zinc-800 cursor-pointer group">
        <div className="relative w-1/3 h-full bg-green-500 group-hover:bg-green-400 transition-colors">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Main player */}
      <div className="bg-gradient-to-b from-zinc-900/95 to-black border-t border-zinc-800/50 backdrop-blur-xl h-20">
        <div className="flex h-full items-center px-4 gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-4 w-80 min-w-80">
            <img
              src="/api/placeholder/48/48"
              alt="Current track"
              className="h-12 w-12 rounded shadow-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-white truncate">
                Midnight Soul
              </h4>
              <p className="text-xs text-zinc-400 truncate">Luna Ray</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`text-${
                isLiked ? "green-500" : "zinc-400"
              } hover:text-green-500`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                className={`h-5 w-5 transition-all ${
                  isLiked ? "scale-110" : "scale-100"
                }`}
                fill={isLiked ? "currentColor" : "none"}
              />
            </Button>
          </div>

          {/* Playback Controls */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                className="h-8 w-8 bg-white hover:scale-105 transition-all rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 text-black" />
                ) : (
                  <Play className="h-4 w-4 text-black" />
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Volume Controls */}
          <div className="w-80 min-w-80 flex items-center justify-end gap-4">
            <Button variant="ghost" size="icon">
              <Volume2 className="h-5 w-5" />
            </Button>
            <div className="w-24 h-1 bg-zinc-800 rounded-full cursor-pointer group">
              <div className="relative w-2/3 h-full bg-zinc-400 rounded-full group-hover:bg-green-500 transition-colors" />
            </div>
            <Button variant="ghost" size="icon">
              <Maximize2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
