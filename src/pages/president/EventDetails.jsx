import { FaArrowLeft, FaRegClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">

      {/* Container */}
      <div className="w-full max-w-md md:max-w-2xl bg-white shadow">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-b-2xl">

          <div className="flex items-center gap-3">
            <Link to="/president/schedule">
              <FaArrowLeft className="cursor-pointer" />
            </Link> 
            <div>
              <h2 className="text-lg font-semibold">Event Details</h2>
              <p className="text-sm opacity-90">
                Wednesday, 18 June 2025
              </p>
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="p-5 space-y-5">

          {/* Title + Status */}
          <div className="flex justify-between items-start">
            <h1 className="text-lg sm:text-xl font-semibold">
              Cabinet Meeting
            </h1>

            <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
              Declined
            </span>
          </div>

          {/* Alert */}
          <div className="bg-red-50 border border-red-100 text-red-500 text-sm p-4 rounded-xl">
            You changed your response from <b>Going</b> to <b>Declined</b>. <br />
            Sarah Mitchell will be notified.
          </div>

          {/* Info Section */}
          <div className="space-y-4">

            {/* Date & Time */}
            <div className="flex gap-3 items-start">
              <FaRegClock className="text-indigo-500 mt-1" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  Wednesday, 18 June 2025
                </p>
                <p className="text-gray-500 text-sm">
                  9:00 AM - 10:00 AM
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-indigo-500 mt-1" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  Conference Room A
                </p>
                <p className="text-gray-500 text-sm">
                  West Wing, Floor 2
                </p>
              </div>
            </div>

            {/* Organizer */}
            <div className="flex gap-3 items-start">
              <FaUser className="text-indigo-500 mt-1" />
              <div>
                <p className="font-medium text-sm sm:text-base">
                  Scheduled by Sarah Mitchell
                </p>
                <p className="text-gray-500 text-sm">
                  Executive Assistant
                </p>
              </div>
            </div>

          </div>

          {/* Notes */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 mb-2">
              NOTES
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Monthly cabinet review covering budget allocations,
              infrastructure updates, and upcoming legislative agenda.
              All department heads required to attend.
            </p>
          </div>

          {/* Actions */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 mb-3">
              CHANGE RESPONSE
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">

              <button className="flex-1 border border-gray-300 rounded-full py-2 text-sm font-medium">
                Going
              </button>

              <button className="flex-1 border border-gray-300 rounded-full py-2 text-sm font-medium">
                Maybe
              </button>

              <button className="flex-1 bg-red-600 text-white rounded-full py-2 text-sm font-medium">
                Decline
              </button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}