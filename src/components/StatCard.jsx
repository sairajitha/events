import React from "react";

export default function StatCard({ title, number, icon }) {
  return (
    <div className="bg-white p-4 py-8 rounded-lg shadow flex justify-between items-center">

      <div>
        <p className="text-gray-500 font-semibold">{title}</p>
        <h2 className="text-2xl font-bold">{number}</h2>
      </div>

      <div className="text-purple-600 text-2xl">
        {icon}
      </div>

    </div>
  );
}