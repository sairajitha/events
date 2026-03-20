import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaRedo,
  FaTimesCircle,
  FaSearch,
} from "react-icons/fa";

import EventCard from "../components/EventCard";
import StatCard from "../components/StatCard";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    date: "15",
    month: "MAR",
    title: "State of the Union Address Preparation",
    time: "10:00 AM - 11:30 AM",
    location: "Presidential Conference Room",
    status: "Confirmed",
    description:
      "Final review and preparation for the upcoming State of the Union address.",
  },
  {
    id: 2,
    date: "18",
    month: "MAR",
    title: "National Security Briefing",
    time: "2:00 PM - 3:30 PM",
    location: "Situation Room",
    status: "Pending Response",
    description:
      "Classified briefing on current international security threats.",
  },
];

export default function Events() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Top Section */}
      <div className="bg-purple-100 p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">
            Event Management
          </h1>

          <Link
            to="/event/create"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow w-full sm:w-auto text-center"
          >
            + Post New Event
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <StatCard title="Total Events" number="24" icon={<FaCalendarAlt />} />
          <StatCard title="Confirmed" number="16" icon={<FaCheckCircle />} />
          <StatCard title="Pending" number="5" icon={<FaClock />} />
          <StatCard title="Reschedule" number="2" icon={<FaRedo />} />
          <StatCard title="Declined" number="1" icon={<FaTimesCircle />} />
        </div>

      </div>

      {/* Search + Filters */}
      <div className="p-4 sm:p-6">

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">

          {/* Search */}
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-full lg:max-w-md shadow-sm">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search events..."
              className="outline-none w-full text-sm sm:text-base"
            />
          </div>

          {/* Filters (Scrollable on mobile) */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg whitespace-nowrap">
              All Events
            </button>

            <button className="bg-white px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
              Confirmed
            </button>

            <button className="bg-white px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
              Pending
            </button>

            <button className="bg-white px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
              Needs Action
            </button>

            <button className="bg-white px-4 py-2 border border-gray-300 rounded-lg whitespace-nowrap">
              Self Posted
            </button>

          </div>

        </div>

        {/* Event List */}
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>

    </div>
  );
}