export default function EventCard({
  date,
  month,
  title,
  time,
  location,
  description,
  status,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex gap-6">

      {/* Date */}
      <div className="bg-indigo-600 text-white rounded-xl w-16 h-16 flex flex-col items-center justify-center">
        <div className="text-lg font-bold">{date}</div>
        <div className="text-xs">{month}</div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="text-gray-500 text-sm mt-1">
          {time} • {location}
        </div>

        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <span className="text-sm bg-gray-100 px-3 py-1 rounded">
          {status}
        </span>

        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
          View Details
        </button>

        <button className="border px-3 py-1 rounded">
          Edit Event
        </button>
      </div>

    </div>
  );
}