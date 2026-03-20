import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h4 className="font-bold mb-4">Assistant Dashboard</h4>
            <p className="text-sm text-gray-400">
              Manage the President's calendar and coordinate events efficiently.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Actions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Post New Event</li>
              <li>View All Events</li>
              <li>Pending Responses</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <p className="text-sm text-gray-400">
              assistant@president.gov
            </p>
          </div>

        </div>
      </footer>
  )
}

export default Footer