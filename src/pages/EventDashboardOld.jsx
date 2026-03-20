import React from "react";
import StatusCard from "../components/StatusCardOld";

export default function EventDashboardOld() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-neutral-50 text-neutral-900">

      
      {/* DASHBOARD HERO */}
      <section className="px-6 py-8 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Event Management
              </h1>

              <p className="text-gray-600">
                Manage President's calendar and track event responses
              </p>
            </div>

            <button className="mt-4 md:mt-0 bg-purple-600 text-white px-6 py-3 rounded font-semibold hover:bg-purple-700">
              Post New Event
            </button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            <StatusCard title="Total Events" value="24" color="text-blue-600" />
            <StatusCard title="Confirmed" value="16" color="text-green-600" />
            <StatusCard title="Pending" value="5" color="text-purple-600" />
            <StatusCard title="Reschedule" value="2" color="text-yellow-600" />
            <StatusCard title="Declined" value="1" color="text-red-600" />

          </div>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="px-6 py-6 border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">

          <input
            placeholder="Search events..."
            className="flex-1 border rounded px-4 py-3"
          />

          <div className="flex gap-2 flex-wrap">
            <Filter text="All Events" active />
            <Filter text="Confirmed" />
            <Filter text="Pending" />
            <Filter text="Needs Action" />
            <Filter text="Self-Posted" />
          </div>

        </div>
      </section>

      {/* EVENT LIST */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-4">

          <EventCard
            title="State of the Union Address Preparation"
            date="15"
            month="Mar"
            time="10:00 AM - 11:30 AM"
            location="Presidential Conference Room"
            status="Confirmed"
            description="Final review and preparation for the upcoming State of the Union address."
          />

          <EventCard
            title="National Security Briefing"
            date="18"
            month="Mar"
            time="2:00 PM - 3:30 PM"
            location="Situation Room"
            status="Pending"
            description="Classified briefing on international security threats."
          />

          <EventCard
            title="Economic Policy Meeting"
            date="20"
            month="Mar"
            time="9:00 AM - 10:30 AM"
            location="Cabinet Room"
            status="Reschedule"
            description="Quarterly review of economic indicators."
          />

          <EventCard
            title="Personal Time - Family Dinner"
            date="22"
            month="Mar"
            time="7:00 PM - 9:00 PM"
            location="Private Residence"
            status="Self-Posted"
            description="Private family time."
          />

        </div>
      </section>

      

    </div>
  );
}


/* FILTER BUTTON */

function Filter({ text, active }) {
  return (
    <button
      className={`px-4 py-2 rounded text-sm font-medium border
      ${active
        ? "bg-purple-600 text-white border-purple-600"
        : "bg-white hover:bg-gray-100"
      }`}
    >
      {text}
    </button>
  );
}

/* EVENT CARD */

function EventCard({ title, date, month, time, location, status, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-purple-500">

      <div className="flex gap-4">

        <div className="w-16 h-16 bg-purple-600 text-white flex flex-col items-center justify-center rounded">
          <span className="text-xl font-bold">{date}</span>
          <span className="text-xs">{month}</span>
        </div>

        <div className="flex-1">

          <div className="flex justify-between items-center mb-1">
            <h3 className="font-bold text-lg">{title}</h3>

            <span className="text-xs bg-gray-100 px-3 py-1 rounded">
              {status}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-1">{time}</p>
          <p className="text-sm text-gray-600 mb-2">{location}</p>

          <p className="text-sm text-gray-700">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}