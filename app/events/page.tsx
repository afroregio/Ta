"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  ChevronLeft,
  Heart,
  ArrowRight,
} from "lucide-react";

type Event = {
  id: number;
  artist: string;
  date: string;
  venue: string;
  location: string;
  time: string;
  ticketPrice: { standard: number; vip: number };
  description: string;
  genres: string[];
  availableTickets: number;
};

const Events = () => {
  const [currentView, setCurrentView] = useState<string>("eventsList");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedTicketType, setSelectedTicketType] = useState<
    "standard" | "vip" | null
  >(null);

  const events: Event[] = [
    {
      id: 1,
      artist: "Arctic Monkeys",
      date: "July 15, 2024",
      venue: "Wembley Stadium",
      location: "London, UK",
      time: "8:00 PM",
      ticketPrice: { standard: 85, vip: 250 },
      description:
        "An electrifying night of alternative rock with Arctic Monkeys.",
      genres: ["Rock", "Alternative"],
      availableTickets: 5000,
    },
    {
      id: 2,
      artist: "Taylor Swift",
      date: "August 22, 2024",
      venue: "Rose Bowl",
      location: "Pasadena, CA",
      time: "7:30 PM",
      ticketPrice: { standard: 120, vip: 500 },
      description: "The Eras Tour - A spectacular musical journey.",
      genres: ["Pop", "Indie Pop"],
      availableTickets: 3000,
    },
  ];

  type EventCardProps = {
    event: Event;
    onClick: () => void;
  };

  const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => (
    <div
      className="group relative bg-zinc-800/30 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">{event.artist}</h2>
          <Calendar className="text-zinc-400 opacity-70 group-hover:opacity-100 transition" />
        </div>
        <div className="space-y-2 text-zinc-400">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>
              {event.date} • {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>
              {event.venue}, {event.location}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition">
            <ArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const EventsList: React.FC = () => (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-5xl font-bold mb-12 text-white">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => {
              setSelectedEvent(event);
              setCurrentView("eventDetails");
            }}
          />
        ))}
      </div>
    </div>
  );

  const EventDetails: React.FC = () => {
    if (!selectedEvent) return null;

    return (
      <div className="min-h-screen bg-black p-8">
        <button
          onClick={() => setCurrentView("eventsList")}
          className="flex items-center gap-2 mb-8 text-zinc-400 hover:text-white transition"
        >
          <ChevronLeft /> Back to Events
        </button>

        <div className="max-w-6xl mx-auto bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800">
          <div className="grid md:grid-cols-2">
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-5xl font-bold text-white mb-4">
                    {selectedEvent.artist}
                  </h1>
                  <div className="flex items-center gap-4 text-zinc-400">
                    <Calendar className="h-5 w-5" />
                    {selectedEvent.date}
                    <MapPin className="h-5 w-5 ml-4" />
                    {selectedEvent.venue}
                  </div>
                </div>
                <button className="text-zinc-400 hover:text-white transition">
                  <Heart className="h-6 w-6" />
                </button>
              </div>

              <p className="text-zinc-300">{selectedEvent.description}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Ticket Options
                </h3>
                {["Standard", "VIP"].map((type) => {
                  const isSelected = selectedTicketType === type;
                  return (
                    <div
                      key={type}
                      className={`
                        p-4 rounded-xl cursor-pointer transition
                        ${
                          isSelected
                            ? "bg-white/10 border border-white/20"
                            : "bg-zinc-800/50 hover:bg-zinc-800/70"
                        }
                      `}
                      onClick={() =>
                        setSelectedTicketType(type as "standard" | "vip")
                      }
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-white">
                            {type} Ticket
                          </h4>
                          <p className="text-zinc-400">
                            $
                            {
                              selectedEvent.ticketPrice[
                                type as "standard" | "vip"
                              ]
                            }
                          </p>
                        </div>
                        <Ticket
                          className={`h-6 w-6 ${
                            isSelected ? "text-white" : "text-zinc-400"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

                <button
                  className={`
                    w-full py-4 rounded-xl transition
                    ${
                      selectedTicketType
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    }
                  `}
                  disabled={!selectedTicketType}
                >
                  {selectedTicketType
                    ? `Buy ${selectedTicketType} Tickets`
                    : "Select Ticket Type"}
                </button>
              </div>
            </div>

            <div className="bg-zinc-800/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedEvent.venue}
                </h3>
                <p className="text-zinc-400 mb-6">{selectedEvent.location}</p>
                <div className="bg-white/10 rounded-full p-4 inline-block">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {currentView === "eventsList" && <EventsList />}
      {currentView === "eventDetails" && <EventDetails />}
    </div>
  );
};

export default Events;
