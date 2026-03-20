import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import UpcomingEvents from "../components/UpcomingEvents";

export default function EventCalendar() {

  const calendarRef = useRef(null);

  const events = [
    { title: "Budget Meeting", date: "2026-03-05", color: "#c7d2fe" },
    { title: "Policy Review", date: "2026-03-07", color: "#e9d5ff" },
    { title: "Town Hall", date: "2026-03-12", color: "#bbf7d0" },

    { title: "State of Union Prep", date: "2026-03-15", color: "#6366f1" },
    { title: "Economic Briefing", date: "2026-03-15", color: "#d946ef" },
    { title: "Press Conference", date: "2026-03-15", color: "#10b981" },

    { title: "Cabinet Meeting", date: "2026-03-19", color: "#c7d2fe" },
    { title: "Foreign Affairs", date: "2026-03-21", color: "#e9d5ff" },
    { title: "Community Event", date: "2026-03-26", color: "#bbf7d0" },
    { title: "Strategy Session", date: "2026-03-28", color: "#c7d2fe" }
  ];


  const upcomingEvents = [
    {
      date: "15",
      month: "MAR",
      title: "State of the Union Address Prep",
      location: "Presidential Conference Room",
      time: "10:00 AM - 11:30 AM",
      status: "Confirmed",
      color: "bg-indigo-600"
    },
    {
      date: "15",
      month: "MAR",
      title: "Economic Policy Briefing",
      location: "Oval Office",
      time: "2:00 PM - 3:00 PM",
      status: "Confirmed",
      color: "bg-purple-600"
    },
    {
      date: "15",
      month: "MAR",
      title: "Press Conference",
      location: "White House Press Room",
      time: "5:00 PM - 6:00 PM",
      status: "Pending",
      color: "bg-emerald-600"
    },
    {
      date: "19",
      month: "MAR",
      title: "Cabinet Meeting",
      location: "Cabinet Room",
      time: "9:00 AM - 11:00 AM",
      status: "Confirmed",
      color: "bg-indigo-600"
    },
    {
      date: "21",
      month: "MAR",
      title: "Foreign Affairs Briefing",
      location: "Situation Room",
      time: "3:00 PM - 4:30 PM",
      status: "Pending",
      color: "bg-purple-600"
    },
    {
      date: "26",
      month: "MAR",
      title: "Community Outreach Event",
      location: "Local Community Center",
      time: "1:00 PM - 3:00 PM",
      status: "Confirmed",
      color: "bg-emerald-600"
    }
  ];


  const changeView = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Event Calendar</h1>
          <p className="text-gray-500 text-sm">
            View all scheduled events and manage your attendance
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg text-sm">
            Filter
          </button>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            + Add Event
          </button>
        </div>
      </div>

      {/* View Buttons */}
      <div className="flex justify-between items-center mb-4">

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => changeView("dayGridMonth")}
            className="px-4 py-1 text-sm bg-indigo-600 text-white rounded-md"
          >
            Month
          </button>

          <button
            onClick={() => changeView("dayGridWeek")}
            className="px-4 py-1 text-sm"
          >
            Week
          </button>

          <button
            onClick={() => changeView("dayGridDay")}
            className="px-4 py-1 text-sm"
          >
            Day
          </button>
        </div>

        <button
          onClick={() => calendarRef.current.getApi().today()}
          className="border px-4 py-1 rounded-lg text-sm"
        >
          Today
        </button>

      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl shadow border p-4">

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={events}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: ""
          }}

          eventContent={(info) => (
            <div
              className="text-xs px-2 py-1 rounded"
              style={{
                backgroundColor: info.event.backgroundColor,
                color: "#111"
              }}
            >
              {info.event.title}
            </div>
          )}
        />

      </div>

          <UpcomingEvents events={upcomingEvents} />

    </div>
  );
}