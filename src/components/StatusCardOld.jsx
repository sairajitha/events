import React from 'react'

const StatusCard = ({ title, value, color }) => {
  return (
    <>
    <div className="bg-white rounded-lg p-6 shadow-xl border-gray-300">
      <p className="text-sm text-gray-500 font-bold">{title}</p>
      <p className={`text-3xl font-bold ${color}`}>
        {value}
      </p>
    </div>
    </>
  )
}

export default StatusCard