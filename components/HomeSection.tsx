"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Heart,
  Share2,
  PlayCircle,
  PauseCircle,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

interface FeaturedContent {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Price {
  standard: number;
  vip: number;
}

interface EventContent {
  id: number;
  type: "event";
  title: string;
  date: string;
  venue: string;
  location: string;
  time: string;
  price: Price;
  image: string;
  likes: number;
  shares: number;
  description: string;
}

interface MusicContent {
  id: number;
  type: "music";
  title: string;
  artist: string;
  album: string;
  price: number;
  image: string;
  likes: number;
  shares: number;
  isPlaying: boolean;
}

interface NewsContent {
  id: number;
  type: "news";
  title: string;
  subtitle: string;
  image: string;
  likes: number;
  shares: number;
  description: string;
}

type TimelineContent = EventContent | MusicContent | NewsContent;

interface SocialButtonsProps {
  likes: number;
  shares: number;
}

interface ContentCardProps {
  content: TimelineContent;
}

const HomeSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredContent: FeaturedContent[] = [
    {
      id: 1,
      image: "/api/placeholder/800/400",
      title: "Summer Music Festival 2024",
      description: "Join us for the biggest music event of the year!",
    },
    {
      id: 2,
      image: "/api/placeholder/800/400",
      title: "New Album Release",
      description: "Check out the latest hits from top artists",
    },
  ];

  const timelineContent: TimelineContent[] = [
    {
      id: 1,
      type: "event",
      title: "Arctic Monkeys Live",
      date: "July 15, 2024",
      venue: "Wembley Stadium",
      location: "London, UK",
      time: "8:00 PM",
      price: { standard: 85, vip: 250 },
      image: "/api/placeholder/800/400",
      likes: 1234,
      shares: 456,
      description:
        "An electrifying night of alternative rock with Arctic Monkeys.",
    },
    {
      id: 2,
      type: "music",
      title: "New Single Release",
      artist: "Taylor Swift",
      album: "1989 (Taylor's Version)",
      price: 1.29,
      image: "/api/placeholder/800/400",
      likes: 2345,
      shares: 789,
      isPlaying: false,
    },
    {
      id: 3,
      type: "news",
      title: "Music Industry Updates",
      subtitle: "Latest trends and developments",
      image: "/api/placeholder/800/400",
      likes: 567,
      shares: 123,
      description: "Stay updated with the latest news from the music industry.",
    },
  ];

  const ImageSlider = () => (
    <div className="relative mb-8 rounded-2xl overflow-hidden">
      <div className="relative h-96">
        <img
          src={featuredContent[activeSlide].image}
          alt={featuredContent[activeSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              {featuredContent[activeSlide].title}
            </h2>
            <p className="text-zinc-200">
              {featuredContent[activeSlide].description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={() =>
            setActiveSlide((prev) =>
              prev === 0 ? featuredContent.length - 1 : prev - 1
            )
          }
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() =>
            setActiveSlide((prev) =>
              prev === featuredContent.length - 1 ? 0 : prev + 1
            )
          }
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeSlide === index ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );

  const SocialButtons: React.FC<SocialButtonsProps> = ({ likes, shares }) => (
    <div className="flex gap-4 mt-4">
      <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
        <Heart className="h-5 w-5" />
        <span>{likes}</span>
      </button>
      <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
        <Share2 className="h-5 w-5" />
        <span>{shares}</span>
      </button>
      <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
        <MessageCircle className="h-5 w-5" />
      </button>
      <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition ml-auto">
        <Bookmark className="h-5 w-5" />
      </button>
    </div>
  );

  const EventCard: React.FC<{ content: EventContent }> = ({ content }) => (
    <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4 border border-zinc-800">
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{content.title}</h3>
        <div className="flex items-center gap-2 text-zinc-400">
          <Calendar className="h-4 w-4" />
          <span>{content.date}</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <MapPin className="h-4 w-4" />
          <span>
            {content.venue}, {content.location}
          </span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Clock className="h-4 w-4" />
          <span>{content.time}</span>
        </div>
      </div>
      <p className="text-zinc-300">{content.description}</p>
      <div className="flex gap-4">
        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Buy Standard (${content.price.standard})
        </button>
        <button className="flex-1 bg-purple-600/20 text-purple-400 py-2 rounded-lg hover:bg-purple-600/30 transition">
          VIP (${content.price.vip})
        </button>
      </div>
      <SocialButtons likes={content.likes} shares={content.shares} />
    </div>
  );

  const MusicCard: React.FC<{ content: MusicContent }> = ({ content }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4 border border-zinc-800">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{content.title}</h3>
            <p className="text-zinc-400">{content.artist}</p>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-purple-400 hover:text-purple-300 transition"
          >
            {isPlaying ? (
              <PauseCircle className="h-12 w-12" />
            ) : (
              <PlayCircle className="h-12 w-12" />
            )}
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          <ShoppingCart className="h-5 w-5" />
          Buy Now (${content.price})
        </button>
        <SocialButtons likes={content.likes} shares={content.shares} />
      </div>
    );
  };

  const NewsCard: React.FC<{ content: NewsContent }> = ({ content }) => (
    <div className="bg-zinc-900/50 rounded-xl p-6 space-y-4 border border-zinc-800">
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div>
        <h3 className="text-2xl font-bold text-white">{content.title}</h3>
        <p className="text-zinc-400">{content.subtitle}</p>
      </div>
      <p className="text-zinc-300">{content.description}</p>
      <button className="w-full bg-purple-600/20 text-purple-400 py-2 rounded-lg hover:bg-purple-600/30 transition">
        Read Full Article
      </button>
      <SocialButtons likes={content.likes} shares={content.shares} />
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Taji Player
        </h1>
        <p className="text-lg text-zinc-400 text-center mb-12">
          Your offline music library, anytime, anywhere.
        </p>

        <ImageSlider />

        <div className="space-y-8">
          {timelineContent.map((content) => {
            switch (content.type) {
              case "event":
                return <EventCard key={content.id} content={content} />;
              case "music":
                return <MusicCard key={content.id} content={content} />;
              case "news":
                return <NewsCard key={content.id} content={content} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
