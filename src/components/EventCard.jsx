import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaCheckCircle,
  FaQuestionCircle
} from "react-icons/fa";

export default function EventCard({ event }) {

  const statusStyles = {
    Confirmed: {
      border: "border-green-500",
      badge: "bg-green-100 text-green-600",
      icon: <FaCheckCircle className="text-green-500 text-xs" />
    },

    "Pending Response": {
      border: "border-purple-500",
      badge: "bg-purple-100 text-purple-600",
      icon: <FaQuestionCircle className="text-purple-500 text-xs" />
    },

    Reschedule: {
      border: "border-yellow-400",
      badge: "bg-yellow-100 text-yellow-700"
    },

    Declined: {
      border: "border-red-500",
      badge: "bg-red-100 text-red-600"
    }
  };

  const style = statusStyles[event.status] || statusStyles["Pending Response"];

  return (
    <div className={`bg-white rounded-xl shadow-sm p-4 md:p-5 border-l-4 ${style.border}`}>

      <div className="flex flex-col md:flex-row gap-4">

        {/* Date Badge */}
        <div className="w-16 h-16 mx-auto md:mx-0 rounded-xl bg-gradient-to-b from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{event.date}</span>
          <span className="text-xs">{event.month}</span>
        </div>

        {/* Content */}
        <div className="flex-1">

          <h3 className="font-semibold text-lg text-gray-800 text-center md:text-left">
            {event.title}
          </h3>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-sm text-gray-500 mt-2">

            <span className="flex items-center gap-1">
              <FaClock className="text-xs text-purple-500"/>
              {event.time}
            </span>

            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-xs text-purple-500"/>
              {event.location}
            </span>

            <span className="flex items-center gap-1">
              <FaUser className="text-xs text-purple-500"/>
              Posted by you
            </span>

          </div>

          <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
            {event.description}
          </p>

          {/* Question */}
          {event.question && (
            <div className="bg-gray-100 rounded-lg p-4 mt-4 border-l-4 border-indigo-500">

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FaQuestionCircle className="text-purple-500"/>
                President's Question:
              </div>

              <p className="text-sm text-gray-600 mt-2">
                "{event.question}"
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Asked 2 hours ago
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mt-3">

                <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">
                  Reply
                </button>

                <button className="text-gray-600 text-sm">
                  Update Event
                </button>

              </div>

            </div>
          )}

        </div>

        {/* Right Actions */}
        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 mt-4 md:mt-0">

          {/* Status */}
          <span className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium ${style.badge}`}>
            {style.icon}
            {event.status}
          </span>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
              View
            </button>

            <button className="bg-gray-100 px-3 py-1 rounded-md text-sm">
              Edit
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}