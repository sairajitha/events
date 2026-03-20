import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function ScheduleTabs() {
  const [activeTab, setActiveTab] = useState("today");
  const [open, setOpen] = useState(false);

  const tabs = [
    { key: "today", label: "Today" },
    { key: "tomorrow", label: "Tomorrow" },
    { key: "week", label: "Next 7 Days" },
    { key: "month", label: "Month" },
  ];

  const events = [
    {
      day: "Wed",
      date: "18",
      time: "9:00 AM",
      title: "Cabinet Meeting",
      location: "Conference Room A",
      status: "Going",
      highlight: true,
    },
    {
      day: "Wed",
      date: "18",
      time: "9:30 AM",
      title: "Press Briefing",
      location: "East Wing",
      status: "Pending",
    },
    {
      day: "Wed",
      date: "18",
      time: "7:30 PM",
      title: "State Dinner",
      location: "Grand Hall",
      status: "Pending",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Going":
        return "bg-green-100 text-green-700";
      case "Declined":
        return "bg-red-100 text-red-600";
      case "Maybe":
        return "bg-indigo-100 text-indigo-600";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">

      <div className="w-full max-w-md md:max-w-2xl bg-white relative">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-b-2xl">

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">My Schedule</h2>
              <p className="text-sm opacity-90">
                Wednesday, 18 June 2025
              </p>
            </div>

            <span className="text-sm">
              2 pending <span className="text-yellow-300">●</span>
            </span>
          </div>

          {/* Tabs */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex bg-indigo-700/40 rounded-full p-1 min-w-max">

              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-1 text-sm rounded-full whitespace-nowrap
                  ${
                    activeTab === tab.key
                      ? "bg-indigo-500 text-white"
                      : "text-white/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}

            </div>
          </div>

        </div>

        {/* Section Title */}
        <div className="px-4 pt-4 text-xs text-gray-400 font-semibold">
          3 EVENTS · WED, 18 JUN
        </div>

        {/* Conflict Alert */}
        <div className="mx-4 mt-2 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
          ⚠️ Time conflict: Cabinet Meeting overlaps with Press Briefing
        </div>

        {/* Events */}
        <div className="p-4 space-y-3 pb-24">

          {events.map((event, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-4 rounded-xl border
              ${event.highlight ? "border-red-300 bg-red-50" : "bg-gray-50"}`}
            >

              {/* Left */}
              <div className="flex gap-3">
                <div className="text-center text-sm text-gray-500">
                  <p className="font-semibold text-indigo-600">
                    {event.time.split(" ")[0]}
                  </p>
                  <p className="text-xs">{event.time.split(" ")[1]}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">
                    <Link to="/president/event-details">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-500">
                    {event.location}
                  </p>
                </div>
              </div>

              {/* Status */}
              <span
                className={`text-xs px-3 py-1 rounded-full ${statusStyle(
                  event.status
                )}`}
              >
                {event.status}
              </span>

            </div>
          ))}

        </div>

        {/* Floating Button */}
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl"
        >
          <FaPlus />
        </button>

        {/* Bottom Sheet */}
        {open && (
          <div className="fixed inset-0 bg-black/30 flex items-end z-50">

            <div className="bg-white w-full rounded-t-2xl p-5 animate-slideUp">

              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Add My Event</h3>
                <FaTimes
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Form */}
              <div className="space-y-3">

                <input
                  placeholder="Event Title"
                  className="w-full border rounded-lg px-3 py-2"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input type="date" className="border rounded-lg px-3 py-2" />
                  <input type="time" className="border rounded-lg px-3 py-2" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input type="time" className="border rounded-lg px-3 py-2" />
                  <input
                    placeholder="Location"
                    className="border rounded-lg px-3 py-2"
                  />
                </div>

                <textarea
                  placeholder="Notes"
                  className="w-full border rounded-lg px-3 py-2"
                />

                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
                  Add to My Schedule
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}