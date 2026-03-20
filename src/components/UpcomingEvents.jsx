export default function UpcomingEvents({ events }) {

  
  return (
    <div className="p-6 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>

        <button className="text-indigo-600 text-sm font-medium">
          Back to Dashboard →
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {events.map((event, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-5"
          >

            <div className="flex justify-between items-start">

              {/* Date Badge */}
              <div className={`text-white rounded-lg px-3 py-2 text-center ${event.color}`}>
                <div className="text-lg font-bold">{event.date}</div>
                <div className="text-xs">{event.month}</div>
              </div>

              {/* Status */}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  event.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {event.status}
              </span>

            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {event.title}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {event.location}
            </p>

            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
              ⏱ {event.time}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}